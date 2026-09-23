import { Mail, ShieldCheck } from "lucide-react";
import HeroBanner from "../components/HeroBanner";
import Reveal from "../components/Reveal";

const retentionItems = [
  {
    title: "Audio Recordings",
    text: "Retained for 30 days from the recording date, after which they are permanently deleted, unless flagged by the user for evidentiary preservation or subject to a legal order.",
  },
  {
    title: "Real-Time Location & SOS Logs",
    text: "Retained for up to 90 days for operational safety tracking and auditing before automatic purging.",
  },
  {
    title: "Account & Emergency Profile Data",
    text: "Retained for as long as your account remains active. Upon account deletion, personal data is completely erased within 30 days.",
  },
];

const rights = [
  "Access, correct, port, or delete your personal information;",
  "Object to or restrict certain processing activities;",
  "Withdraw consent at any time, without affecting the lawfulness of processing carried out before withdrawal; and",
  "Lodge a complaint with the Nigeria Data Protection Commission (NDPC) if you believe your rights under the NDPA have been violated.",
];

export default function RespondrPrivacy() {
  return (
    <div>
      <HeroBanner
        eyebrow="TAVEWO Ventures Ltd."
        title="RespondR Privacy & Recording Policy"
        subtitle="Last Updated: September 2026"
      />

      <main className="max-w-4xl mx-auto px-5 md:px-8 py-12 md:py-20">
        <Reveal>
          <div className="border-l-4 border-brand bg-brand-light rounded-r-xl px-5 py-4 md:px-6 md:py-5 mb-12">
            <p className="text-slate-700 leading-relaxed">
              Please read these terms before using RespondR. By creating an account or continuing to use the app, you acknowledge and agree to the terms outlined in this policy.
            </p>
          </div>
        </Reveal>

        <div className="space-y-12 md:space-y-16">
          <Reveal>
            <section>
              <SectionHeading number="1" title="Overview & Privacy Principles" />
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  RespondR is operated by TAVEWO Ventures Ltd. We respect your privacy and protect your personal information in accordance with applicable Nigerian laws, including the Nigeria Data Protection Act (NDPA), 2023.
                </p>
                <p>
                  Depending on the features you use, we may collect your name, contact details, emergency contacts, medical information, real-time location data, SOS trigger history, and audio recordings. We use this information solely to provide, operate, and improve RespondR&apos;s personal safety and emergency services. We do not sell your personal information to third parties.
                </p>
                <p>
                  Section 37 of the Constitution of the Federal Republic of Nigeria, 1999 (as amended), guarantees and protects the privacy of citizens, and we are committed to upholding these constitutional protections.
                </p>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <SectionHeading number="2" title="Audio Recording" />
              <Subheading>2.1 Recording Public Officials</Subheading>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  RespondR allows users to record audio for personal safety, emergency documentation, evidence preservation, and mutual accountability. This includes recording during police stops, searches, traffic stops, or other public-safety incidents, where legally permitted.
                </p>
                <blockquote className="border-l-4 border-brand bg-slate-50 rounded-r-xl px-5 py-4 text-slate-700 italic">
                  Section 39(1) of the Constitution provides that: &quot;Every person shall be entitled to freedom of expression, including freedom to hold opinions and to receive and impart ideas and information without interference.&quot;
                </blockquote>
                <p>
                  Nigerian judicial authority explicitly recognizes the right of citizens to record public officers — including law enforcement personnel — performing their official duties in public, provided the act of recording does not physically obstruct, resist, or interfere with the officers.
                </p>
                <p>
                  Recording does not grant users the right to obstruct police operations, resist a lawful arrest or search, threaten, harass, or physically interfere with officers performing their duties.
                </p>
              </div>

              <Subheading>2.2 Recording Other Individuals</Subheading>
              <p className="text-slate-600 leading-relaxed">
                Where a recording captures a bystander or another private individual rather than a public official, that person may separately hold privacy, defamation, or other legal rights under Nigerian law. You are solely responsible for how you use, store, publish, or share any recording involving other people, and for ensuring that use complies with applicable law. TAVEWO is not responsible for your decisions regarding recordings of third parties.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <SectionHeading number="3" title="Data Protection, Storage & Retention" />
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Medical details, precise location coordinates, emergency contacts, and recordings constitute sensitive data. We apply appropriate technical and organizational safeguards — including encryption in transit and at rest — to secure your personal information.
                </p>
                <p>We maintain strict retention schedules to ensure data is not stored longer than necessary:</p>
              </div>
              <ul className="grid gap-4 mt-6">
                {retentionItems.map((item) => (
                  <li key={item.title} className="border border-slate-200 rounded-xl p-5 bg-white shadow-sm">
                    <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.text}</p>
                  </li>
                ))}
              </ul>

              <Subheading>3.1 Data Breach Notification</Subheading>
              <p className="text-slate-600 leading-relaxed">
                If a data breach occurs that is likely to result in a risk to your rights and freedoms, we will notify the Nigeria Data Protection Commission (NDPC) and affected users without undue delay, in accordance with the NDPA.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <SectionHeading number="4" title="Cross-Border Data Transfers" />
              <p className="text-slate-600 leading-relaxed">
                Some of our infrastructure and service providers may process or store data on servers located outside Nigeria. Where this occurs, we require contractual and technical safeguards from those providers designed to ensure a level of protection consistent with the NDPA, regardless of where the data is processed.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <SectionHeading number="5" title="Automated Decision-Making" />
              <p className="text-slate-600 leading-relaxed">
                Certain RespondR features may use automated processing — for example, to help classify the severity of an incident or route an alert to the nearest available responder. Where automated processing produces a decision with significant effects on you, you have the right to request human review of that decision, subject to applicable law.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <SectionHeading number="6" title="Age Eligibility & Minor Privacy" />
              <p className="text-slate-600 leading-relaxed">
                RespondR is intended for users who are at least 18 years of age. Individuals between the ages of 13 and 17 may use RespondR only with the explicit consent and supervision of a parent or legal guardian. We do not knowingly collect personal data from children under 13 years of age without verifiable parental consent, in compliance with the Nigeria Data Protection Act, 2023.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <SectionHeading number="7" title="Third-Party Sharing & Service Providers" />
              <p className="text-slate-600 leading-relaxed mb-5">
                To deliver essential emergency functionality, RespondR may share limited data with verified third-party infrastructure providers under strict confidentiality obligations:
              </p>
              <InfoList items={[
                ["Cloud Infrastructure & Storage Providers", "For encrypted hosting of recordings and telemetry (see Section 4 on cross-border transfers)."],
                ["Email & Push Notification Gateways", "To dispatch instant alert notifications to your designated emergency contacts."],
                ["Emergency Responders & Law Enforcement", "Disclosed only where explicitly requested by you during an active SOS event, or where required by law, subpoena, or valid court order."],
              ]} />
            </section>
          </Reveal>

          <Reveal>
            <section>
              <SectionHeading number="8" title="User Responsibilities" />
              <p className="text-slate-600 leading-relaxed mb-5">As a user of RespondR, you must:</p>
              <BulletList items={[
                "Provide accurate and up-to-date personal and emergency contact information;",
                "Maintain the confidentiality and security of your account credentials;",
                "Use RespondR lawfully, responsibly, and ethically;",
                "Obtain prior consent from individuals you list as designated emergency contacts;",
                "Avoid obstructing or interfering with emergency responders or law-enforcement officers;",
                "Respect the fundamental privacy and safety rights of others; and",
                "Take responsibility for any recording involving other individuals, including how it is stored, published, or shared (see Section 2.2).",
              ]} />
            </section>
          </Reveal>

          <Reveal>
            <section>
              <SectionHeading number="9" title="Service Limitations" />
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  RespondR is a personal safety enablement tool and does not constitute a replacement for official state emergency services, a medical device, or a guarantee of personal physical safety.
                </p>
                <p>
                  App features rely on third-party dependencies, including your mobile device hardware, battery level, cellular network coverage, GPS accuracy, and third-party API availability. In an immediate life-threatening emergency, always attempt to contact official local emergency services directly wherever possible.
                </p>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <SectionHeading number="10" title="Your Rights & Contact Information" />
              <p className="text-slate-600 leading-relaxed mb-5">Under the Nigeria Data Protection Act (NDPA), 2023, you have the right to:</p>
              <BulletList items={rights} />
              <p className="text-slate-600 leading-relaxed mt-6">
                You can access, correct, or delete most of your information directly within the RespondR app (Settings → Delete Account for full account and data deletion). We respond to all other verified data subject requests within 30 calendar days.
              </p>

              <div className="mt-8 rounded-2xl bg-navy text-white p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="text-eyebrow" size={22} />
                  <h3 className="text-xl font-bold">Data Protection Officer / Privacy Enquiries</h3>
                </div>
                <div className="space-y-2 text-slate-200">
                  <p>Email: <a href="mailto:privacy@tavewo.com" className="text-white underline underline-offset-4 hover:text-eyebrow">privacy@tavewo.com</a></p>
                  <p>Official Website: <a href="https://www.tavewo.com" className="text-white underline underline-offset-4 hover:text-eyebrow">https://www.tavewo.com</a></p>
                  <p>Company: TAVEWO Ventures Ltd.</p>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <SectionHeading number="11" title="Governing Law & Disputes" />
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>This policy is governed by the laws of the Federal Republic of Nigeria. Any disputes arising from this policy are subject to the exclusive jurisdiction of the courts of Oyo State, Nigeria.</p>
                <p>We may update this policy periodically. Continued use of RespondR following any notice of update constitutes acceptance of the revised terms to the fullest extent permitted by law.</p>
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

function Subheading({ children }) {
  return <h3 className="text-lg font-bold text-navy mt-8 mb-3">{children}</h3>;
}

function BulletList({ items }) {
  return (
    <ul className="space-y-3 text-slate-600 leading-relaxed list-disc pl-5 marker:text-brand">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function InfoList({ items }) {
  return (
    <ul className="grid gap-4">
      {items.map(([title, text]) => (
        <li key={title} className="flex gap-3 rounded-xl bg-brand-light p-4">
          <span className="mt-2 w-2 h-2 rounded-full bg-brand shrink-0" />
          <p className="text-slate-600 leading-relaxed"><strong className="text-navy">{title}:</strong> {text}</p>
        </li>
      ))}
    </ul>
  );
}
