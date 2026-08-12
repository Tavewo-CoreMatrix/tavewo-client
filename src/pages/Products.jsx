import { ArrowRight, Check } from "lucide-react";
import HeroBanner from "../components/HeroBanner";
import Reveal from "../components/Reveal";
import { MotionButton, MotionDiv, buttonHover, cardHover, cardHover2 } from "../lib/motion";
import { motion } from "framer-motion";

const gallery = [
  { src: "/images/productpage-image-gallery1.jpg", alt: "Vescar mobility fleet" },
  { src: "/images/productpage-image-gallery2.jpg", alt: "RespondrNG emergency operations" },
  { src: "/images/productpage-image-gallery3.jpg", alt: "TAVEWO Capital real estate" },
];

const products = [
  {
    category: "Mobility Marketplace",
    title: "VERSCAR",
    desc: "The work-and-own mobility marketplace. Vescar connects vehicle owners, drivers and operators through verified onboarding, escrow-backed transactions and asset protection.",
    features: [
      "Work-and-Own Marketplace",
      "Vehicle Rentals",
      "Escrow Backed-Payment",
      "Driver Verifications",
      "Asset Protection",
    ],
    cta: "Talk to this Division",
  },
  {
    category: "Emergency Operations Platform",
    title: "RespondrNG",
    desc: "A dispatch and incident management platform for emergency and response teams with GPS tracking, intelligent routing and open APIs for integration.",
    features: [
      "Dispatch Console",
      "Real-time GPS Tracking",
      "Intelligent Routing",
      "Incident Management",
    ],
    cta: "Request Demo",
  },
  {
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

      {/* Core Labs intro band */}
      <section className="bg-navy text-white mt-14 md:mt-20">
        <Reveal className="max-w-3xl mx-auto text-center px-5 md:px-8 py-16 md:py-20">
          <p className="text-eyebrow font-medium mb-4 tracking-wide">Core Labs</p>
          <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-6">
            The product house behind every platform
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Core Labs is CoreMatrix's dedicated product house. It holds commercial
            ownership of the group's proprietary platforms below, and each one is
            assigned a named product lead accountable for its roadmap, adoption and
            commercial performance. Core Labs decides what gets built and why — Core
            Engineering, our shared build team, builds, hardens and maintains it in
            production.
          </p>
        </Reveal>
      </section>

      {/* Product cards */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20 space-y-8">
        {products.map((p) => (
          <MotionDiv
            key={p.title}
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
                Core Labs · {p.category}
                {p.comingSoon && " · Coming Soon"}
              </p>
              <h2 className="text-3xl font-extrabold mb-6">{p.title}</h2>
              <MotionButton
                {...buttonHover}
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
              <p className="text-slate-600 leading-relaxed mb-6">{p.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {p.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Check size={16} className="text-brand shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </MotionDiv>
        ))}
      </section>
    </div>
  );
}
