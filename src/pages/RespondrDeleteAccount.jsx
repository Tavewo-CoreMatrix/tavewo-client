import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import HeroBanner from "../components/HeroBanner";
import Reveal from "../components/Reveal";

const linkClass = "text-brand font-medium underline underline-offset-4 hover:text-brand-dark";

const inAppSteps = [
  "Open respondRalert and sign in.",
  <>
    Go to <strong className="text-navy">Profile → Delete Account</strong>.
  </>,
  "Enter your password to confirm.",
];

const deletedItems = [
  "Your profile (name, email, phone, address, medical information)",
  "Your trusted contacts",
  "Your alert and Safety Timer history, including location records",
  "Your evidence audio recordings",
];

export default function RespondrDeleteAccount() {
  return (
    <div>
      <HeroBanner
        eyebrow="respondRalert"
        title="Delete your respondRalert account"
        subtitle="respondRalert, provided by TAVEWO Ventures Ltd (CoreMatrix)"
      />

      <main className="max-w-4xl mx-auto px-5 md:px-8 py-12 md:py-20">
        <div className="space-y-12 md:space-y-16">
          <Reveal>
            <section>
              <SectionHeading title="Delete it in the app (fastest)" />
              <ol className="space-y-4">
                {inAppSteps.map((step, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm"
                  >
                    <span className="w-8 h-8 shrink-0 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </span>
                    <p className="text-slate-700 leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ol>
              <div className="border-l-4 border-brand bg-brand-light rounded-r-xl px-5 py-4 mt-6">
                <p className="text-slate-700 leading-relaxed">Your account is deleted straight away.</p>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <SectionHeading title="Can't sign in?" />
              <p className="text-slate-600 leading-relaxed">
                Email{" "}
                <a
                  href="mailto:businessops@tavewo.com?subject=respondRalert%20account%20deletion"
                  className={linkClass}
                >
                  businessops@tavewo.com
                </a>{" "}
                from the email address registered to your account, with the subject{" "}
                <strong className="text-navy">&quot;respondRalert account deletion&quot;</strong>. We may ask you to
                confirm it&apos;s you. We will delete your account within 30 days and confirm by email.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <SectionHeading title="What is deleted" />
              <ul className="space-y-3 text-slate-600 leading-relaxed list-disc pl-5 marker:text-brand">
                {deletedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <SectionHeading title="What may be kept" />
              <p className="text-slate-600 leading-relaxed">
                Copies may remain in secure backups for a short period before they are overwritten. Payment records may
                be kept for as long as the law requires. Referral programme totals that contain no personal information
                are not affected.
              </p>
              <p className="text-slate-600 leading-relaxed mt-6">
                See our{" "}
                <Link to="/respondr/privacy" className={linkClass}>
                  privacy policy
                </Link>{" "}
                for more information.
              </p>
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

function SectionHeading({ title }) {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-5">{title}</h2>
      <div className="h-1 w-12 bg-brand rounded-full mb-6" />
    </>
  );
}
