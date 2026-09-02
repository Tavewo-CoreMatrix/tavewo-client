import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls smoothly to the element whose id matches the current URL hash.
 *
 * React Router doesn't auto-scroll to an anchor the way a full page load does,
 * for either of these cases:
 *  - navigating here from another route with a hash (e.g. /products#respondrng)
 *  - clicking a hash link while already on this route (hash-only change)
 *
 * Call this once inside any page component that has anchor targets on it.
 */
export default function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    // Small delay lets the page's own content/entrance animations mount first
    const timeout = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [hash]);
}
