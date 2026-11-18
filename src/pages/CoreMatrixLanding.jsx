import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe,
  Mail,
  MessagesSquare,
  Plug,
  ShieldCheck,
  Smartphone,
  FileText,
  CreditCard,
} from "lucide-react";
import Reveal, { StaggerGroup, staggerItem } from "../components/Reveal";
import { submitContactForm, wakeApi } from "../lib/api";
import { captureCampaign, loadMetaPixel, trackLead } from "../lib/campaign";

// CoreMatrix ad landing page (Facebook/Instagram campaign, Nov 2026).
// Every enquiry is saved to the leads sheet (/admin/contacts) and emailed
// to businessops@tavewo.com by tavewo-server.

const NEEDS = [
  "Website or online store",
  "Mobile app",
  "Connecting my systems (ERP, payments)",
  "Dashboard or reports",
  "Not sure yet",
];

const PROMISES = [
  { icon: MessagesSquare, text: "A free first conversation about your business" },
  { icon: FileText, text: "A written proposal and quote before any work starts" },
  { icon: ShieldCheck, text: "Every release tested by our QA team" },
  { icon: CreditCard, text: "Paystack, bank transfer and USSD payments built in" },
];

const SERVICES = [
  {
    icon: Globe,
    title: "Websites and online stores",
    text: "Fast, mobile-first sites that take orders and payments, and that your staff can update.",
  },
  {
    icon: Smartphone,
    title: "Mobile apps",
    text: "Android and iPhone apps for your customers or your team, from first idea to the app stores.",
  },
  {
    icon: Plug,
    title: "Systems that talk to each other",
    text: "Connect your ERP, inventory, payments and website so prices and stock are never typed twice.",
  },
  {
    icon: BarChart3,
    title: "Dashboards and reports",
    text: "See sales, stock and performance in one place, with daily summaries sent to your inbox.",
  },
];

const STEPS = [
  { title: "Tell us what you need", text: "Fill in the short form. Our team calls or emails you within one working day." },
  { title: "Free conversation", text: "We learn how your business works and what would help most." },
  { title: "Proposal and quote", text: "You get a written plan, timeline and price. No surprises." },
  { title: "Build, test and launch", text: "We build in stages, you review each one, and QA tests before anything goes live." },
];

const BUILT = [
  { name: "respondRalert", text: "A personal safety app that sends an SOS with your location to trusted contacts, with plans paid through Paystack." },
  { name: "TaveLink", text: "A professional network and job-matching platform connecting talent across Nigeria. Launching December 2026." },
];

const EMPTY = {
  fullName: "",
  companyName: "",
  phoneNumber: "",
  workEmail: "",
  projectType: "",
  message: "",
  consent: false,
  website: "", // hidden; bots fill it in
};

const PHONE_OK = (p) => {
  const d = p.replace(/[^\d]/g, "");
  return /^0[789][01]\d{8}$/.test(d) || /^234[789][01]\d{8}$/.test(d) || (p.trim().startsWith("+") && d.length >= 7 && d.length <= 15);
};

const field =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand";

export default function CoreMatrixLanding() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");
  const campaign = useRef({ utm: {}, clickId: undefined });
  const formRef = useRef(null);

  useEffect(() => {
    const previous = document.title;
    document.title = "CoreMatrix | Software for Nigerian businesses";
    campaign.current = captureCampaign();
    wakeApi();
    loadMetaPixel();
    return () => {
      document.title = previous;
    };
  }, []);

  const set = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const goToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => formRef.current?.querySelector("input")?.focus({ preventScroll: true }), 600);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!PHONE_OK(form.phoneNumber)) {
      setError("Please enter a valid phone number, for example 0803 123 4567.");
      return;
    }
    if (!form.projectType) {
      setError("Please choose what you need help with.");
      return;
    }
    if (!form.consent) {
      setError("Please tick the box so we can contact you about your enquiry.");
      return;
    }
    setStatus("submitting");
    try {
      await submitContactForm({
        ...form,
        source: "corematrix-landing",
        utm: campaign.current.utm,
        clickId: campaign.current.clickId,
        pageUrl: window.location.href.split("?")[0],
      });
      trackLead(form.projectType);
      setStatus("success");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again or email businessops@tavewo.com.");
      setStatus("error");
    }
  }

  return (
    <div className="bg-white">
      {/* Hero + form */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.3, 1, 0.44, 1] }}
            className="lg:pt-6"
          >
            <p className="text-eyebrow font-medium tracking-wide mb-4">CoreMatrix, a division of TAVEWO Ventures Ltd</p>
            <h1 className="text-[2rem] leading-[1.15] md:text-5xl md:leading-tight font-extrabold mb-5">
              Software for Nigerian businesses
            </h1>
            <p className="text-slate-200 text-base md:text-lg leading-relaxed max-w-xl">
              We build the apps, websites and online stores your business runs on, and connect them to the
              systems you already use.
            </p>

            <ul className="mt-8 space-y-3.5">
              {PROMISES.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Icon size={17} className="text-eyebrow" />
                  </span>
                  <span className="pt-1 text-[15px] text-slate-100">{text}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={goToForm}
              className="lg:hidden mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-navy hover:bg-brand-light"
            >
              Book a free conversation <ArrowRight size={18} />
            </button>
          </motion.div>

          {/* Enquiry form */}
          <motion.div
            ref={formRef}
            id="enquire"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.3, 1, 0.44, 1] }}
            className="scroll-mt-24 rounded-2xl bg-white text-ink p-6 md:p-8 shadow-2xl shadow-black/30"
          >
            {status === "success" ? (
              <div className="py-8 text-center" role="status">
                <CheckCircle2 size={52} className="mx-auto text-brand" />
                <h2 className="mt-4 text-2xl font-bold">Thank you, {form.fullName.split(" ")[0]}</h2>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  We have your enquiry. A member of our team will contact you within one working day.
                </p>
                <p className="mt-6 text-sm text-slate-500">
                  Anything to add? Email{" "}
                  <a className="font-semibold text-brand underline" href="mailto:businessops@tavewo.com">
                    businessops@tavewo.com
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate={false} className="space-y-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold">Book a free conversation</h2>
                  <p className="mt-1 text-sm text-slate-600">Takes one minute. We reply within one working day.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block text-sm font-semibold">
                    Full name
                    <input name="fullName" value={form.fullName} onChange={set} required autoComplete="name" className={`${field} mt-1.5 font-normal`} />
                  </label>
                  <label className="block text-sm font-semibold">
                    Company or business
                    <input name="companyName" value={form.companyName} onChange={set} required autoComplete="organization" className={`${field} mt-1.5 font-normal`} />
                  </label>
                  <label className="block text-sm font-semibold">
                    Phone number
                    <input
                      name="phoneNumber"
                      type="tel"
                      inputMode="tel"
                      value={form.phoneNumber}
                      onChange={set}
                      required
                      autoComplete="tel"
                      placeholder="0803 123 4567"
                      className={`${field} mt-1.5 font-normal`}
                    />
                  </label>
                  <label className="block text-sm font-semibold">
                    Email
                    <input name="workEmail" type="email" value={form.workEmail} onChange={set} required autoComplete="email" className={`${field} mt-1.5 font-normal`} />
                  </label>
                </div>

                <label className="block text-sm font-semibold">
                  What do you need help with?
                  <select name="projectType" value={form.projectType} onChange={set} required className={`${field} mt-1.5 font-normal`}>
                    <option value="" disabled>
                      Choose one
                    </option>
                    {NEEDS.map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm font-semibold">
                  Tell us a little more <span className="font-normal text-slate-500">(optional)</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={set}
                    rows={3}
                    maxLength={4000}
                    placeholder="For example: we sell on WhatsApp and want an online store with Paystack."
                    className={`${field} mt-1.5 font-normal resize-none`}
                  />
                </label>

                {/* Honeypot: hidden from people and screen readers */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label>
                    Website
                    <input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set} />
                  </label>
                </div>

                <label className="flex items-start gap-3 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={set}
                    required
                    className="mt-0.5 h-4 w-4 shrink-0 accent-[#1B4D8C]"
                  />
                  <span>
                    I agree that TAVEWO Ventures Ltd may contact me by phone or email about this enquiry. We use
                    your details only to reply and never sell them.
                  </span>
                </label>

                {error && (
                  <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 font-semibold text-white hover:bg-brand-dark disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending, please wait..." : "Send my enquiry"}
                  {status !== "submitting" && <ArrowRight size={18} />}
                </button>

                <p className="text-center text-sm text-slate-500">
                  Prefer email?{" "}
                  <a className="font-semibold text-brand underline" href="mailto:businessops@tavewo.com">
                    businessops@tavewo.com
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <Reveal className="max-w-2xl">
          <p className="font-semibold text-brand tracking-wide">What we build</p>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold">Technology that does real work for your business</h2>
        </Reveal>
        <StaggerGroup className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <motion.div key={title} variants={staggerItem} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light">
                <Icon size={22} className="text-brand" />
              </span>
              <h3 className="mt-4 font-bold text-lg">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </section>

      {/* How we work */}
      <section className="bg-brand-light/60">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <Reveal className="max-w-2xl">
            <p className="font-semibold text-brand tracking-wide">How we work</p>
            <h2 className="mt-2 text-2xl md:text-4xl font-extrabold">Four clear steps, no surprises</h2>
          </Reveal>
          <StaggerGroup className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map(({ title, text }, i) => (
              <motion.div key={title} variants={staggerItem} className="rounded-2xl bg-white p-6 shadow-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">{i + 1}</span>
                <h3 className="mt-4 font-bold text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Built by us */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <Reveal className="max-w-2xl">
          <p className="font-semibold text-brand tracking-wide">Built by our team</p>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold">We run our own products on the same technology</h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {BUILT.map(({ name, text }) => (
            <Reveal key={name} className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-lg">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing call to action */}
      <section className="bg-navy text-white">
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold">Tell us what your business needs</h2>
          <p className="mt-3 text-slate-200">The first conversation is free. We reply within one working day.</p>
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={goToForm}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-navy hover:bg-brand-light"
            >
              Book a free conversation <ArrowRight size={18} />
            </button>
            <a href="mailto:businessops@tavewo.com" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold hover:bg-white/10">
              <Mail size={18} /> businessops@tavewo.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
