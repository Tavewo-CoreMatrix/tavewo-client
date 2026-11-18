// Keeps the ad details (utm_* and the Facebook/Google click ID) from the
// link a visitor arrived on, so each enquiry shows which campaign it came
// from. Kept for this browser tab only.

const KEY = "tavewo_campaign";

export function captureCampaign() {
  const params = new URLSearchParams(window.location.search);
  const utm = {
    source: params.get("utm_source") || undefined,
    medium: params.get("utm_medium") || undefined,
    campaign: params.get("utm_campaign") || undefined,
    content: params.get("utm_content") || undefined,
    term: params.get("utm_term") || undefined,
  };
  const clickId = params.get("fbclid") || params.get("gclid") || undefined;
  const fresh = Object.values(utm).some(Boolean) || clickId;
  if (fresh) {
    try {
      sessionStorage.setItem(KEY, JSON.stringify({ utm, clickId }));
    } catch {
      // storage blocked; we still have it for this page view
    }
    return { utm, clickId };
  }
  try {
    return JSON.parse(sessionStorage.getItem(KEY)) || { utm: {}, clickId: undefined };
  } catch {
    return { utm: {}, clickId: undefined };
  }
}

// Optional Meta (Facebook/Instagram) Pixel, so the ad account can count
// enquiries. Only loads when VITE_META_PIXEL_ID is set in Vercel.
const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

export function loadMetaPixel() {
  if (!PIXEL_ID || window.fbq) return;
  /* eslint-disable */
  !(function (f, b, e, v, n, t, s) {
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  /* eslint-enable */
  window.fbq("init", PIXEL_ID);
  window.fbq("track", "PageView");
}

export function trackLead(service) {
  if (PIXEL_ID && window.fbq) window.fbq("track", "Lead", { content_category: service });
}
