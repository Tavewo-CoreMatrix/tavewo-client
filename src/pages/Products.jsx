import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import HeroBanner from "../components/HeroBanner";
import Reveal from "../components/Reveal";
import { MotionButton, MotionDiv, buttonHover, cardHover, cardHover2 } from "../lib/motion";
import { motion } from "framer-motion";
import useScrollToHash from "../hooks/useScrollToHash";

const gallery = [
  { src: "/images/productpage-image-gallery1.jpg", alt: "Vescar mobility fleet" },
  { src: "/images/productpage-image-gallery2.jpg", alt: "RespondR emergency operations" },
  { src: "/images/productpage-image-gallery3.jpg", alt: "TAVEWO Capital real estate" },
];

const products = [
  {
    id: "respondrng",
    category: "Emergency Operations Platform",
    title: "RespondR",
    tagline: "Silent when danger is watching. Unstoppable when help is needed.",
    desc: "RespondR is an innovative emergency response and personal safety mobile application designed to provide individuals with immediate access to help during emergencies. The platform leverages [...]
    featuresHeading: "Key Features",
    features: [
      "Location-Based Emergency Service Finder",
      "SOS Emergency Alert System",
      "Live Location Sharing",
      "Audio Streaming Capability",
      "Offline Emergency Support",
      "Emergency Contact Management",
      "Real-Time Notifications and Updates",
      "User-Friendly Mobile Interface",
      "Secure Data Handling",
      "Physical Gesture Trigger",
      "Safety Timer (Dead-Man Switch)",
      "Covert Mode (Fake Screen)",
      "Tamper-Proof Cloud Evidence Vault",
      "Duress PIN (Bad Actor / Extortion Protocol)",
    ],
    purposeIntro: "RespondR is built to address the challenges individuals face in accessing timely emergency support. The application empowers users to:",
    purpose: [
      "Quickly identify and contact the nearest emergency service providers, including Police Stations, Fire Service units, Road Safety agencies, and other relevant responders.",
      "Alert pre-selected emergency contacts during distress situations, ensuring that loved ones are informed and able to provide support.",
      "Improve emergency response coordination through accurate location sharing and real-time updates.",
      "Provide alternative response mechanisms through offline support, particularly in areas with poor or limited internet access.",
      "Activate help discreetly and silently in situations where openly reaching for a phone or speaking aloud could escalate danger.",
      "Preserve a tamper-proof record of an incident — video, audio, and location — for legal protection, even if the device is seized, damaged, or destroyed.",
    ],
    targetMarkets: [
      { name: "Government Institutions", detail: "Extends public agency response coverage into low-connectivity areas and provides tamper-proof evidence for prosecutions and accountability." },
      { name: "Corporate Entities", detail: "Duty-of-care monitoring for field staff, drivers, and executives, with duress protection for cash-handling roles." },
      { name: "NGOs & Development Organizations", detail: "Field-worker safety and incident documentation in remote, insecure, or low-connectivity operating areas." },
      { name: "Small-Scale Businesses", detail: "Low-cost, discreet protection for solo traders and POS/agent-banking operators against robbery and forced-transfer scenarios." },
      { name: "Large-Scale Businesses", detail: "Fleet and driver safety for logistics operators, and estate-wide security integration for real estate developers and community associations." },
    ],
    coreFunctionalityIntro: "The platform is intended to:",
    coreFunctionality: [
      "Detect and utilize a user's live location to identify nearby emergency services.",
      "Enable one-touch emergency alerts to trusted contacts.",
      "Share real-time location updates during emergencies.",
      "Transmit live audio feeds to designated contacts when activated.",
      "Facilitate direct communication between users and emergency responders.",
      "Support offline emergency notifications through local vigilante groups or community security structures.",
      "Maintain a repository of emergency contacts and response information for quick access.",
      "Deliver continuous updates to users and their contacts throughout an emergency event.",
      "Recognize discreet physical or timed triggers — such as a button sequence, a shake, or an unattended countdown — and respond without requiring the user to visibly interact with the app.[...[...]
      "Continuously encrypt and back up video, audio, and GPS logs to a secure cloud vault throughout an active incident.",
    ],
    closingStatement: "By combining accessibility, discreet activation, intelligent emergency response features, tamper-proof evidence preservation, and both online and offline support mechanisms, Res[...]
    cta: "Request Demo",
  },
  {
    id: "coreprep",
    category: "Conversational Training-as-a-Service",
    title: "CorePrep",
    desc: "WhatsApp-native training and assessment engine. Exam prep for students, multi-tenant training tracks for schools, academies and businesses — no app download required.",
    features: [
      "Exam Prep",
      "Multi-Tenant Training",
      "WhatsApp-Native",
      "Spreadsheet-to-Course",
    ],
    cta: "Try CorePrep",
  },
  {
    id: "verscar",
    category: "Mobility Marketplace",
    comingSoon: true,
    title: "VERSCAR",
    desc: "The work-and-own mobility marketplace, launching soon. VERSCAR will connect vehicle owners, drivers and operators  through verified onboarding, escrow-backed transactions and asset prot[...[...]
    features: [
      "Work-and-Own Marketplace",
      "Vehicle Rentals",
      "Escrow Backed-Payment",
      "Driver Verifications",
      "Asset Protection",
    ],
    cta: "Coming Soon",
  },
  {
    id: "tavelink",
    category: "Professional Network",
    comingSoon: true,
    title: "TaveLink",
    desc: "TAVEWO's upcoming professional network  and job-matching platform — connecting enterprise talents across Nigeria and beyond.",
    features: [
      "Verified Professional Profiles",
      "Proximity-Based Matching",
      "Talent Matching",
      "Side-Hustle Gig Hub",
    ],
    cta: "Coming Soon",
  },
];

export default function Products() {
  useScrollToHash();
  return (
    <div>
      <HeroBanner
        eyebrow="Product Ecosystem"
        title="Flagship Products Powering The Group."
        subtitle="Every TAVEWO product is built on shared infrastructure with same engineering rigor, same trust standards, and same enterprise-grade delivery."
      />

      {/* Image gallery */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-10 md:pt-14 overflow-hidden">
        <motion.div
          className="flex gap-1 sm:gap-1.5 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* First set */}
          {gallery.map((g) => (
            <div key={`first-${g.src}`} className="w-[80vw] sm:w-[32vw] md:w-[30vw] flex-shrink-0">
              <motion.img
                src={g.src}
                alt={g.alt}
                whileHover={{ scale: 0.95 }}
                whileTap={{scale:0.95}}
                transition={{ duration: 0.3 }}
                className="h-56 sm:h-72 w-full object-cover"
              />
            </div>
          ))}

          {/* Duplicate set for seamless looping */}
          {gallery.map((g) => (
            <div key={`second-${g.src}`} className="w-[80vw] sm:w-[32vw] md:w-[30vw] flex-shrink-0">
              <motion.img
                src={g.src}
                alt={g.alt}
                whileHover={{ scale: 0.95 }}
                whileTap={{scale:0.95}}
                transition={{ duration: 0.3 }}
                className="h-56 sm:h-72 w-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </section>

      {/* CoreMatrix intro band */}
      <section className="bg-navy text-white mt-14 md:mt-20">
        <Reveal className="max-w-3xl mx-auto text-center px-5 md:px-8 py-16 md:py-20">
          <p className="text-eyebrow font-medium mb-4 tracking-wide">CoreMatrix</p>
          <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-6">
            The product house behind every platform
          </h2>
          <p className="text-slate-300 leading-relaxed">
            CoreMatrix is the group's enterprise technology arm. It holds commercial ownership of the proprietary platforms 
            below, and each one is assigned a named product lead accountable for its roadmap, adoption and commercial 
            performance. CoreMatrix decides what gets built and why — our engineering team builds, hardens and maintains 
            it in production.
          </p>
        </Reveal>
      </section>

      {/* Product cards */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20 space-y-8">
        {products.map((p) => (
          <ProductCard key={p.title} p={p} />
        ))}
      </section>
    </div>
  );
}

function ProductCard({ p }) {
  const navigate = useNavigate();
  const slug = p.title.toLowerCase().replace(/\s+/g, "-");
  const hasRichContent = Boolean(
    p.purpose || p.targetMarkets || p.coreFunctionality || p.closingStatement
  );
  const [expanded, setExpanded] = useState(false);

  const handleCTA = () => {
    // For "Request Demo" buttons, navigate to contact page
    if (p.cta === "Request Demo") {
      navigate("/contact");
    }
    // Add other CTA handlers as needed
  };

  return (
    <div id={slug} className="scroll-mt-24">
      <MotionDiv
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        {...cardHover2}
        className={`border rounded-2xl p-6 md:p-10 grid md:grid-cols-[1fr_1.4fr] gap-8 items-start hover:border-brand/70 bg-white ${
          p.comingSoon ? "border-dashed border-slate-300" : "border-slate-200"
        }`}
      >
      <div>
        <p className="text-brand font-semibold mb-2">
          CoreMatrix · {p.category}
          {p.comingSoon && " · Coming Soon"}
        </p>
        <h2 className="text-3xl font-extrabold mb-2">{p.title}</h2>
        {p.tagline ? (
          <p className="text-slate-500 italic mb-6">{p.tagline}</p>
        ) : (
          <div className="mb-4" />
        )}
        <MotionButton
          {...buttonHover}
          onClick={handleCTA}
          className={`inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-colors ${
            p.comingSoon
              ? "border-2 border-brand text-brand hover:bg-brand-light active:bg-brand-light"
              : "bg-brand text-white hover:bg-brand-dark active:bg-brand-dark"
          }`}
        >
          {p.cta} <ArrowRight size={18} />
        </MotionButton>
      </div>
      <div>
        <p className="text-slate-600 leading-relaxed mb-0">{p.desc}</p>

        {!hasRichContent && p.features?.length > 0 && (
          <div className="mt-6">
            {p.featuresHeading && (
              <h3 className="text-lg font-bold mb-4">{p.featuresHeading}</h3>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {p.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Check size={16} className="text-brand shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        )}

        {hasRichContent && expanded && (
          <div className="mt-6 space-y-10">
            {p.features?.length > 0 && (
              <div>
                {p.featuresHeading && (
                  <h3 className="text-lg font-bold mb-4">{p.featuresHeading}</h3>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <Check size={16} className="text-brand shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {p.purpose && (
              <div>
                <h3 className="text-lg font-bold mb-4">Purpose</h3>
                {p.purposeIntro && (
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{p.purposeIntro}</p>
                )}
                <ul className="space-y-3">
                  {p.purpose.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                      <Check size={16} className="text-brand shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {p.targetMarkets && (
              <div>
                <h3 className="text-lg font-bold mb-4">Target Markets</h3>
                <ul className="space-y-4">
                  {p.targetMarkets.map((m) => (
                    <li key={m.name} className="text-sm text-slate-600 leading-relaxed">
                      <span className="font-semibold text-slate-800">{m.name}: </span>
                      {m.detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {p.coreFunctionality && (
              <div>
                <h3 className="text-lg font-bold mb-4">Core Functionality</h3>
                {p.coreFunctionalityIntro && (
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{p.coreFunctionalityIntro}</p>
                )}
                <ul className="space-y-3">
                  {p.coreFunctionality.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                      <Check size={16} className="text-brand shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {p.closingStatement && (
              <p className="text-sm text-slate-500 leading-relaxed italic">
                {p.closingStatement}
              </p>
            )}
          </div>
        )}

        {hasRichContent && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
            aria-expanded={expanded}
          >
            {expanded ? "See Less" : "See More"}
            <ChevronDown
              size={16}
              className={`transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        )}
        </div>
      </MotionDiv>
    </div>
  );
}
