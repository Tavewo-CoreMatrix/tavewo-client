import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AlarmClock, Archive, BellRing, EyeOff, HeartPulse, MapPin, Phone, ShieldCheck, Smartphone, Users } from "lucide-react";
import HeroBanner from "../components/HeroBanner";
import Reveal from "../components/Reveal";

// Google Play link. Leave empty until the app is published: the button
// then says "Coming soon to Google Play".
const PLAY_URL = "";

const FEATURES = [
  { icon: BellRing, title: "SOS in one tap", text: "Alerts your trusted contacts with your live location, by email and app notification." },
  { icon: AlarmClock, title: "Safety Timer", text: "For an okada or taxi ride, a late walk home or a first meeting. If you don't check in with your PIN in time, the alert goes out by itself." },
  { icon: EyeOff, title: "Silent and duress alerts", text: "Trigger an alert without anyone noticing, or unlock with a duress PIN that looks normal but quietly calls for help." },
  { icon: Archive, title: "Evidence Vault", text: "Records audio during an alert and keeps it privately in your account, with the time and place." },
  { icon: MapPin, title: "Help nearby", text: "Find the nearest police station, hospital and fire service from where you are." },
  { icon: HeartPulse, title: "Medical ID", text: "Blood type, allergies and conditions shown to your contacts during an alert, if you choose to add them." },
];

const STEPS = [
  { title: "Add your trusted contacts", text: "Family or friends who should hear from you in an emergency." },
  { title: "Set your PIN", text: "Only your PIN cancels an alert, so nobody else can switch it off." },
  { title: "Press SOS or start a timer", text: "Your contacts get your location straight away, and updates while the alert is active." },
];

const PLANS = [
  { name: "Free", price: "₦0", points: ["SOS and Safety Timer", "2 trusted contacts", "Recordings kept 14 days"] },
  { name: "Personal", price: "₦2,500 a month", sub: "or ₦25,000 a year · 7-day free trial", points: ["More trusted contacts", "Recordings kept 6 months", "Everything in Free"] },
  { name: "Family", price: "₦5,000 a month", sub: "or ₦50,000 a year", points: ["Cover your household", "Recordings kept 6 months", "Everything in Personal"] },
  { name: "NYSC corps members", price: "From ₦1,250 a month", sub: "or ₦10,000 once for 12 months", points: ["For your service year", "Everything in Personal"] },
];

function PlayButton({ className = "" }) {
  return PLAY_URL ? (
    <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-ink hover:bg-brand-light ${className}`}>
      <Smartphone size={20} /> Get it on Google Play
    </a>
  ) : (
    <span className={`inline-flex items-center gap-2 rounded-xl bg-white/15 px-6 py-3.5 font-semibold text-white ring-1 ring-white/30 ${className}`}>
      <Smartphone size={20} /> Coming soon to Google Play
    </span>
  );
}

export default function RespondrLanding() {
  useEffect(() => {
    const previous = document.title;
    document.title = "respondRalert | Personal safety app for Nigeria";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main>
      <HeroBanner
        logo={
          <span className="inline-flex rounded-2xl bg-white px-6 py-4 shadow-lg">
            <img src="/images/respondralert-logo.webp" alt="respondRalert: Because emergencies can't wait" width="180" height="128" className="h-auto w-[150px] md:w-[180px]" />
          </span>
        }
        eyebrow="by CoreMatrix, a division of TAVEWO Ventures Ltd"
        title="Help from the people who matter, fast" subtitle="A personal safety app for Nigeria. One tap sends your location to your trusted contacts, records what is happening, and keeps watch on risky trips.">
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <PlayButton />
          <Link to="/respondralert/faq" className="inline-flex items-center rounded-xl px-6 py-3.5 font-semibold text-white ring-1 ring-white/40 hover:bg-white/10">
            Questions and answers
          </Link>
        </div>
      </HeroBanner>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center text-2xl font-extrabold text-ink md:text-4xl">What respondRalert does</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <Reveal key={title}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-slate-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-extrabold text-ink md:text-4xl">Ready in three steps</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.title} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
                <span className="text-4xl font-extrabold text-brand/25">{i + 1}</span>
                <h3 className="mt-2 text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-slate-600">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-center text-slate-700">
            <Users size={18} className="mr-1 inline" /> Your contacts don&apos;t need the app: they get the alert by email.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-extrabold text-ink md:text-4xl">Plans</h2>
          <p className="mt-3 text-center text-slate-600">Paid securely through Paystack.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((p) => (
              <div key={p.name} className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-slate-200">
                <h3 className="text-lg font-bold text-ink">{p.name}</h3>
                <p className="mt-2 text-2xl font-extrabold text-brand">{p.price}</p>
                {p.sub && <p className="text-sm text-slate-500">{p.sub}</p>}
                <ul className="mt-4 space-y-2 text-slate-700">
                  {p.points.map((t) => (
                    <li key={t} className="flex gap-2"><ShieldCheck size={18} className="mt-0.5 shrink-0 text-brand" /> {t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-20">
        <div className="mx-auto max-w-3xl rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-200">
          <h2 className="flex items-center gap-2 text-lg font-bold text-amber-900"><Phone size={20} /> In immediate danger? Call 112 first.</h2>
          <p className="mt-2 text-amber-900">
            respondRalert helps your trusted contacts reach you fast. It does not send the police, fire service or an ambulance, and it cannot guarantee help will arrive. It works alongside emergency services, not instead of them.
          </p>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-slate-600">
          <Link to="/respondralert/faq" className="font-semibold text-brand underline underline-offset-4">Questions and answers</Link>
          {" · "}
          <Link to="/respondr/privacy" className="font-semibold text-brand underline underline-offset-4">Privacy Policy</Link>
          {" · "}
          <Link to="/respondr/delete-account" className="font-semibold text-brand underline underline-offset-4">Delete your account</Link>
          {" · "}
          <Link to="/contact" className="font-semibold text-brand underline underline-offset-4">Contact us</Link>
        </p>
      </section>
    </main>
  );
}
