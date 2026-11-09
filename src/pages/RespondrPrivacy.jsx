import { Link } from "react-router-dom";
import { Mail, ShieldCheck } from "lucide-react";
import HeroBanner from "../components/HeroBanner";
import Reveal from "../components/Reveal";

const linkClass = "text-brand font-medium underline underline-offset-4 hover:text-brand-dark";

// Section 1 table: [information, why we use it, required?]
const collectedInfo = [
  [
    "Name, email address, phone number, password",
    "To create and secure your account, sign you in, and tell your trusted contacts who needs help",
    "Required",
  ],
  [
    "Home address and state",
    "Shown to your trusted contacts during an alert, to help them find you",
    "Optional",
  ],
  [
    "Medical information (for example blood type, allergies, conditions)",
    "Shown to your trusted contacts during an alert, so anyone helping you knows",
    "Optional",
  ],
  [
    "Trusted contacts' details (name, phone number, email, relationship, optional photo)",
    "To alert the people you have chosen when you raise an alert",
    "Required to send alerts",
  ],
  [
    "Precise location",
    "Shared with your trusted contacts during an active SOS or Safety Timer alert; used to show nearby services when you search for them",
    "Required for alerts",
  ],
  [
    "Audio recordings",
    "Recorded only during an active alert, as evidence, and stored privately in your account's Evidence Vault",
    "Optional",
  ],
  [
    "Alert and Safety Timer history",
    "To run your alerts and timers, and show you your history",
    "Required",
  ],
  [
    "Subscription status",
    "To provide paid features. Card details are entered directly with our payment provider, Paystack; we never see or store them",
    "Only if you subscribe",
  ],
  [
    "Device push notification token",
    "To deliver alert notifications",
    "Optional",
  ],
  [
    "Referral code",
    "If you enter a referral code when you sign up, we record it to measure our referral programme and pay the referring partner",
    "Optional",
  ],
];

export default function RespondrPrivacy() {
  return (
    <div>
      <HeroBanner
        eyebrow="TAVEWO Ventures Ltd."
        title="respondRalert Privacy Policy"
        subtitle="Last updated: 8 November 2026"
      />

      <main className="max-w-4xl mx-auto px-5 md:px-8 py-12 md:py-20">
        <Reveal>
          <p className="text-slate-600 leading-relaxed mb-6">
            This policy explains what personal information the respondRalert app collects, why, how it is used and
            protected, and the choices and rights you have. respondRalert is provided by{" "}
            <strong className="text-navy">TAVEWO Ventures Ltd</strong> (through its CoreMatrix division), Nigeria
            (&quot;TAVEWO&quot;, &quot;we&quot;, &quot;us&quot;). We are the data controller for the information described
            here, and we process it in line with the Nigeria Data Protection Act 2023 (NDPA).
          </p>
          <div className="border-l-4 border-brand bg-brand-light rounded-r-xl px-5 py-4 md:px-6 md:py-5 mb-12">
            <p className="text-slate-700 leading-relaxed">
              <strong className="text-navy">Important:</strong> respondRalert helps you alert people you trust. It is
              not an emergency service, does not contact the police or ambulance for you, and cannot guarantee that
              anyone will respond. In an emergency, call <strong className="text-navy">112</strong> or your local
              emergency number.
            </p>
          </div>
        </Reveal>

        <div className="space-y-12 md:space-y-16">
          <Reveal>
            <section>
              <SectionHeading number="1" title="Information we collect" />
              <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full text-sm text-left">
                  <thead className="bg-brand-light text-navy">
                    <tr>
                      <th className="px-4 py-3 font-bold">Information</th>
                      <th className="px-4 py-3 font-bold">Why we use it</th>
                      <th className="px-4 py-3 font-bold">Required?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {collectedInfo.map(([info, why, required]) => (
                      <tr key={info} className="align-top">
                        <td className="px-4 py-3 font-medium text-navy min-w-[200px]">{info}</td>
                        <td className="px-4 py-3 text-slate-600 min-w-[260px]">{why}</td>
                        <td className="px-4 py-3 text-slate-600 min-w-[120px]">{required}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 leading-relaxed mt-6">
                We do not use advertising, we do not sell your information, and the app contains no analytics or
                advertising tracking tools.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <SectionHeading number="2" title="When your location is used" />
              <p className="text-slate-600 leading-relaxed">
                respondRalert uses your location <strong className="text-navy">only</strong> while you have an active
                SOS or Safety Timer alert, or when you search for nearby services. During an active alert it may
                continue in the background, even if your screen is locked, so your trusted contacts keep seeing where
                you are. It stops as soon as the alert or timer ends.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <SectionHeading number="3" title="Audio recording" />
              <p className="text-slate-600 leading-relaxed">
                Audio is recorded only during an active alert that you (or your Safety Timer, shake gesture or duress
                PIN) have started. Recordings are stored privately in your account. You can delete them, and they are
                deleted when you delete your account.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <SectionHeading number="4" title="Who receives your information" />
              <BulletList
                items={[
                  <>
                    <strong className="text-navy">Your trusted contacts</strong> receive your name, location and the
                    details you choose to share, but only when an alert is raised.
                  </>,
                  <>
                    <strong className="text-navy">Service providers</strong> who process information for us, on our
                    instructions and under contract: Supabase (secure database, sign-in and file storage), Resend
                    (alert and account emails), Google (maps and nearby-places search), Expo, Apple and Google (push
                    notifications), and Paystack (payments). Some of these providers store or process data outside
                    Nigeria; where they do, we rely on the safeguards required by the NDPA, such as contractual
                    protections.
                  </>,
                  <>
                    <strong className="text-navy">Referral partners</strong> only ever receive total numbers (for
                    example, how many people signed up with their code in a week). They never receive your name,
                    contact details, location or any other personal information.
                  </>,
                  <>
                    <strong className="text-navy">Authorities</strong>, only where the law requires us to disclose
                    information.
                  </>,
                ]}
              />
            </section>
          </Reveal>

          <Reveal>
            <section>
              <SectionHeading number="5" title="How we protect your information" />
              <p className="text-slate-600 leading-relaxed">
                Information is encrypted in transit. Access is restricted so that each user can see only their own
                data, and evidence recordings cannot be altered after they are saved. Only authorised TAVEWO staff can
                access our systems, for support and security purposes.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <SectionHeading number="6" title="How long we keep your information" />
              <p className="text-slate-600 leading-relaxed">
                We keep your account information for as long as your account is open. When you delete your account, we
                delete your profile, trusted contacts, alert history and evidence recordings. Copies may remain in
                secure backups for a short period before they are overwritten. We may keep limited records where the
                law requires it (for example, payment records).
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <SectionHeading number="7" title="Your rights and choices" />
              <p className="text-slate-600 leading-relaxed mb-5">
                Under the NDPA you have the right to access, correct and delete your personal information, to object to
                or restrict certain processing, to withdraw consent at any time, and to complain to the Nigeria Data
                Protection Commission. You can:
              </p>
              <BulletList
                items={[
                  "edit your details and trusted contacts in the app;",
                  "turn off location, microphone or notification permissions in your phone settings (alerts may then not work fully);",
                  <>
                    delete your account in the app at <strong className="text-navy">Profile → Delete Account</strong>,
                    or follow the steps at{" "}
                    <Link to="/respondr/delete-account" className={linkClass}>
                      tavewo.com/respondr/delete-account
                    </Link>
                    ;
                  </>,
                  <>
                    email us at{" "}
                    <a href="mailto:businessops@tavewo.com" className={linkClass}>
                      businessops@tavewo.com
                    </a>{" "}
                    for any other request.
                  </>,
                ]}
              />
            </section>
          </Reveal>

          <Reveal>
            <section>
              <SectionHeading number="8" title="Children" />
              <p className="text-slate-600 leading-relaxed">
                respondRalert is intended for adults aged 18 and over. It is not directed at children, and we do not
                knowingly collect information from children. If you believe a child has created an account, contact us
                and we will delete it.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <SectionHeading number="9" title="Changes to this policy" />
              <p className="text-slate-600 leading-relaxed">
                We may update this policy. We will change the date at the top, and tell you in the app if the changes
                are significant.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <SectionHeading number="10" title="Contact us" />
              <div className="rounded-2xl bg-navy text-white p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="text-eyebrow" size={22} />
                  <h3 className="text-xl font-bold">Privacy Enquiries</h3>
                </div>
                <div className="space-y-2 text-slate-200">
                  <p>TAVEWO Ventures Ltd (CoreMatrix)</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:businessops@tavewo.com"
                      className="text-white underline underline-offset-4 hover:text-eyebrow"
                    >
                      businessops@tavewo.com
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </Reveal>
        </div>

        <Reveal>
          <footer className="mt-16 pt-6 border-t border-slate-200 flex items-center gap-2 text-sm text-slate-500">
            <ShieldCheck size={18} className="text-brand" />
            <span>&copy; 2026 TAVEWO Ventures Ltd. All rights reserved.</span>
          </footer>
        </Reveal>
      </main>
    </div>
  );
}

function SectionHeading({ number, title }) {
  return (
    <>
      <p className="text-brand font-semibold text-sm tracking-wide uppercase mb-2">Section {number}</p>
      <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-5">{title}</h2>
      <div className="h-1 w-12 bg-brand rounded-full mb-6" />
    </>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-3 text-slate-600 leading-relaxed list-disc pl-5 marker:text-brand">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
