import { useEffect } from "react";
import { Link } from "react-router-dom";
import HeroBanner from "../components/HeroBanner";

const link = "font-semibold text-brand underline underline-offset-4";

const GROUPS = [
  {
    id: "start",
    title: "Getting started",
    items: [
      ["What is respondRalert?", "A personal safety app. It alerts your trusted contacts with your location, records audio as evidence during an alert, keeps watch on risky trips with the Safety Timer, and helps you find nearby emergency services."],
      ["Who gets my alert?", "The trusted contacts you add in the app. They get an email with your location (and a notification if they also use respondRalert), then updates while the alert is active, and a \"they're safe\" message when you cancel it. They do not need the app."],
      ["What is the PIN for?", "Only your PIN can cancel an alert or a Safety Timer, so nobody can switch it off by taking your phone. Choose one you will remember under stress."],
      ["What is the duress PIN?", "A second PIN. If someone forces you to unlock the app, enter the duress PIN: the app looks normal, but your contacts are quietly alerted."],
      ["What is the Safety Timer?", "Start it before an okada or taxi ride, a late walk home or a first meeting. If it runs out before you check in with your PIN, the alert goes out by itself."],
    ],
  },
  {
    id: "phone",
    title: "Setting up your phone (important)",
    items: [
      ["Which permissions does respondRalert need?", <>
        <p>Go to your phone&apos;s <strong>Settings → Apps → respondRalert → Permissions</strong> and set:</p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li><strong>Microphone: Allow while using the app</strong>. Not &quot;Only this time&quot; or &quot;Don&apos;t allow&quot;, or no audio can be recorded.</li>
          <li><strong>Location: Allow all the time</strong>, so your location still updates when the app is in the background.</li>
          <li><strong>Notifications: on</strong>, so you see the alert is running.</li>
        </ul>
        <p className="mt-2">When you start a Safety Timer, the app checks the microphone and tells you if it is off.</p>
      </>],
      ["How do I stop my phone from closing respondRalert in the background?", <>
        <p>Battery savers can stop the app when the screen is off. Names differ by phone, but look for these:</p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li><strong>Tecno, Infinix, itel:</strong> Phone Master or Settings → Battery → App launch / Auto-start: allow respondRalert to run in the background.</li>
          <li><strong>Xiaomi, Redmi, Poco:</strong> Settings → Apps → respondRalert → Battery saver → No restrictions, and turn on Autostart.</li>
          <li><strong>Samsung:</strong> Settings → Apps → respondRalert → Battery → Unrestricted, and make sure it is not in &quot;Sleeping apps&quot;.</li>
          <li><strong>Other Android phones:</strong> Settings → Apps → respondRalert → Battery → Unrestricted or Don&apos;t optimise.</li>
        </ul>
        <p className="mt-2">The app shows the same steps under Profile → Keep alerts running in the background.</p>
      </>],
      ["Why should the app be open when a Safety Timer runs out?", "Newer Android phones do not let an app start the microphone from the background. If the timer runs out while respondRalert is closed or in the background, your contacts are still alerted with your location, but audio may not be recorded. Keep the app open on screen during a timed trip if you want a recording."],
    ],
  },
  {
    id: "offline",
    title: "No network",
    items: [
      ["Does respondRalert work without internet or data?", "If you press SOS with no connection, the alert is saved on your phone and sent the moment your connection returns. A Safety Timer that runs out while you are offline is also raised by our server, so your contacts are still told. Audio recorded offline uploads once you are back online. Nothing can reach your contacts while neither your phone nor our server can reach them, so keep some data or Wi-Fi where you can."],
      ["I cancelled an alert while offline. What happens?", "Once you are back online, the app finishes it properly: your contacts are told you are safe, and any recording is kept."],
    ],
  },
  {
    id: "vault",
    title: "Evidence Vault",
    items: [
      ["Who can hear my recordings?", "Only you, in your account. Recordings are not sent to your contacts."],
      ["How long are recordings kept?", "14 days on the Free plan. 6 months on a paid plan, and 30 days after a paid plan ends."],
      ["What do the labels in the vault mean?", <ul className="list-disc space-y-1 pl-6">
        <li><strong>SAVED:</strong> the recording is stored and you can play it.</li>
        <li><strong>UPLOADING:</strong> the alert is still running or the recording is still being sent.</li>
        <li><strong>PENDING:</strong> waiting to upload, usually because you are offline. Open the app when you have a connection.</li>
        <li><strong>PARTIAL:</strong> some of the recording was saved, but not all of it.</li>
        <li><strong>NO AUDIO:</strong> no recording was possible, for example because the microphone permission was off or the phone blocked it in the background.</li>
        <li><strong>FAILED:</strong> the recording could not be uploaded. Tap it to try again.</li>
      </ul>],
    ],
  },
  {
    id: "plans",
    title: "Plans and payment",
    items: [
      ["What does it cost?", "Free: SOS, Safety Timer and 2 trusted contacts. Personal: ₦2,500 a month or ₦25,000 a year, with a 7-day free trial. Family: ₦5,000 a month or ₦50,000 a year. NYSC corps members: from ₦1,250 a month, or ₦10,000 once for 12 months."],
      ["How do I pay?", "In the app, under Upgrade, through Paystack (card, bank transfer or USSD)."],
    ],
  },
  {
    id: "privacy",
    title: "Privacy and your account",
    items: [
      ["Is my information safe?", <p>Your data is encrypted in transit and at rest, and only you can see your account. Read the <Link to="/respondr/privacy" className={link}>respondRalert Privacy Policy</Link>.</p>],
      ["How do I delete my account?", <p>In the app, go to Profile → Delete account, or follow the steps on <Link to="/respondr/delete-account" className={link}>Delete your account</Link>.</p>],
      ["Does respondRalert call the police or an ambulance?", "No. It alerts your trusted contacts and helps you find nearby services. It does not dispatch emergency services and cannot guarantee help will arrive. In immediate danger, call 112."],
    ],
  },
];

export default function RespondrFaq() {
  useEffect(() => {
    const previous = document.title;
    document.title = "respondRalert | Questions and answers";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main>
      <HeroBanner eyebrow="respondRalert" title="Questions and answers" subtitle="How the app works, how to set up your phone, and what happens when there is no network." />
      <section className="px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Sections" className="mb-10 flex flex-wrap gap-2">
            {GROUPS.map((g) => (
              <a key={g.id} href={`#${g.id}`} className="rounded-full bg-brand-light px-4 py-2 text-sm font-semibold text-brand-dark hover:bg-brand hover:text-white">
                {g.title}
              </a>
            ))}
          </nav>
          <div className="grid gap-10">
            {GROUPS.map((g) => (
              <section key={g.id} id={g.id} className="scroll-mt-28">
                <h2 className="mb-3 text-xl font-bold text-ink">{g.title}</h2>
                <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
                  {g.items.map(([q, a]) => (
                    <details key={q} className="group px-5 py-4">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-ink">
                        {q}
                        <span aria-hidden="true" className="text-brand transition group-open:rotate-45">+</span>
                      </summary>
                      <div className="mt-3 text-slate-700">{typeof a === "string" ? <p>{a}</p> : a}</div>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <p className="mt-10 text-slate-700">
            Still need help? In the app use Profile → Contact us, or <Link to="/contact" className={link}>contact us here</Link>. Back to <Link to="/respondralert" className={link}>respondRalert</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
