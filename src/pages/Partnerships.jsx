import { ArrowRight, Zap, PiggyBank, Box, Landmark, Share2, TrendingUp, CheckCircle2 } from "lucide-react";
import Reveal, { StaggerGroup, staggerItem } from "../components/Reveal";
import { MotionLink, MotionDiv, buttonHover, cardHover2 } from "../lib/motion";
import { motion } from "framer-motion";

const pillars = [
  { icon: Zap, title: "Growth Strategy", desc: "Vertical integration across technology, logistics and real estate." },
  { icon: Share2, title: "Strategic Partnerships", desc: "Long-term relationships with enterprise clients, government agencies and fleet operators." },
  { icon: Box, title: "Corporate Governance", desc: "Defined leadership structure, board oversight and transparent reporting." },
  { icon: TrendingUp, title: "Shared Infrastructure", desc: "Shared engineering and shared reach across every operating company." },
];

const whyInvest = [
  { title: "Strong Market", desc: "Operating across high-demand industries with strong growth potential." },
  { title: "Proven Execution", desc: "A track record of delivering impactful solutions and measurable results." },
  { title: "Future Focused", desc: "Innovation and technology are at the heart of everything we build." },
];

export default function Partnerships() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white text-center px-5 md:px-8 py-16 md:py-20">
        <MotionDiv
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-eyebrow font-medium mb-4">Partnerships</p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            Building With Trusted Partners Across Africa.
          </h1>
          <p className="text-slate-200 text-base md:text-lg leading-relaxed mb-10">
            TAVEWO works with enterprise clients, government agencies, fleet 
            operators and strategic partners to build the infrastructure African 
            enterprise depends on.
          </p>
          <MotionLink
            to="/contact"
            {...buttonHover}
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-7 py-3.5 font-semibold hover:bg-brand-dark active:bg-brand-dark transition-colors"
          >
            Partner With Us <ArrowRight size={18} />
          </MotionLink>
        </MotionDiv>
      </section>

      {/* Pillars */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <StaggerGroup className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <MotionDiv
              key={p.title}
              variants={staggerItem}
              {...cardHover2}
              className="border border-slate-200 rounded-2xl p-7 bg-white shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-brand flex items-center justify-center mb-5">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  whileTap={{rotate:360}}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="inline-flex"
                >
                  <p.icon size={18} className="text-white" />
                </motion.div>
              </div>
              <h3 className="font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-slate-600">{p.desc}</p>
            </MotionDiv>
          ))}
        </StaggerGroup>
      </section>

      {/* Why Partner */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Reveal>
            <p className="text-brand font-semibold text-2xlmb-3">Why partner With TAVEWO</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              Real Assets. Real Technology. Real Delivery.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              TAVEWO operates across mobility, real estate and enterprise software — 
              each division with its own team, focus and expertise, sharing the 
              group's engineering and operational infrastructure.
            </p>
          </Reveal>
          <StaggerGroup className="divide-y divide-slate-200 ">
            {whyInvest.map((item) => (
              <MotionDiv key={item.title} variants={staggerItem} className="flex gap-4 py-5 first:pt-0">
                <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={22} />
                <div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </MotionDiv>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Explore partnerships CTA */}
      <section className="px-5 md:px-8 pb-16 md:pb-20">
        <Reveal className="max-w-6xl mx-auto">
          <div className="bg-brand rounded-2xl text-center text-white px-6 md:px-16 py-12 md:py-16">
            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-5">
              Explore A Partnership
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
              For enterprise clients, government agencies and strategic partners 
              interested in working with TAVEWO, reach out to our team directly.
            </p>
            <MotionLink
              to="/contact"
              {...buttonHover}
              className="inline-flex rounded-lg bg-white text-navy px-6 py-3 font-semibold hover:bg-slate-100 active:bg-slate-100 transition-colors"
            >
              Contact Us
            </MotionLink>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
