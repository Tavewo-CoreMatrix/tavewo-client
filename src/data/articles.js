// Static news content. Previously backed by MongoDB — now hardcoded here so the
// News pages don't depend on the backend. To add a new article, add an object
// to this array; both the listing page and the detail page read from it.

const articles = [
  {
    slug: "strategic-partnership-fleet-security",
    title: "Tavewo Ventures Announces Strategic Partnership To Enhance Fleet Security Across Nigeria",
    category: "Company news",
    image: "/images/news1.jpg",
    publishedAt: "2025-03-06",
    featured: true,
    excerpt: "This partnership will strengthen our operational capacity and deliver greater value to our clients across the globe.",
    content: [
      "TAVEWO Ventures Ltd today announced a strategic partnership aimed at enhancing fleet security operations across Nigeria, marking another step in the group's mission to build enterprise-grade infrastructure for African businesses.",
      "The partnership will integrate advanced tracking, verification and asset protection capabilities into TAVEWO's existing fleet network, strengthening operational capacity across the Verscar and RespondrNG platforms.",
      "\"This is about giving our clients confidence that their assets are protected end-to-end,\" said a TAVEWO spokesperson. \"Fleet security isn't an add-on for us — it's core infrastructure.\"",
      "The rollout begins in Lagos and will expand to other major logistics corridors over the coming quarters, with the group's engineering teams building the integration on top of CoreMatrix's existing automation platform.",
    ],
  },
  {
    slug: "integrated-ecosystem-strategy",
    title: "TAVEWO Ventures Unveils Integrated Ecosystem Strategy.",
    category: "Company news",
    image: "/images/news2.jpg",
    publishedAt: "2025-03-06",
    excerpt: "Our new operating model unifies three business divisions under a shared engineering platform.",
    content: [
      "TAVEWO Ventures has unveiled a new integrated ecosystem strategy that unifies its three business divisions — CoreMatrix, Global Assets & Capital, Fleet Telematics, and its product portfolio — under a single shared engineering platform.",
      "The move is designed to reduce duplication across divisions, allowing each operating company to draw on the same core infrastructure while maintaining its own P&L, team and sector expertise.",
      "Leadership described the strategy as the natural next step after several years of building out individual divisions independently. \"We were already sharing capital and reach — now we're formalising the shared engineering layer that makes the whole group compound faster,\" the Group CEO noted.",
    ],
  },
  {
    slug: "corematrix-ai-dispatch-engine",
    title: "CoreMatrix Launches AI-Powered Dispatch Engine.",
    category: "Technology news",
    image: "/images/news3.jpg",
    publishedAt: "2025-04-06",
    excerpt: "Machine-learning routing that reduces response times across partner fleets.",
    content: [
      "CoreMatrix, TAVEWO's enterprise technology arm, has launched a new AI-powered dispatch engine designed to reduce response times across partner fleets nationwide.",
      "The engine uses machine-learning routing models trained on historical dispatch data to predict the fastest, most reliable paths in real time — accounting for traffic patterns, vehicle availability and incident type.",
      "Early testing across RespondrNG's emergency response network showed measurable improvements in average response time, with the system continuing to learn and improve as more dispatch data flows through the platform.",
      "The dispatch engine is now being integrated into CoreMatrix's broader automation suite, which also powers CRM systems and chatbots used across the group's operating companies.",
    ],
  },
  {
    slug: "nationwide-fleet-milestone",
    title: "TAVEWO Begins Fleet Pilot Preparations",
    category: "Logistics news",
    image: "/images/news4.jpg",
    publishedAt: "2025-06-08",
    excerpt: "3 vehicles secured for the group's proprietary fleet pilot, ahead of the VERSCAR marketplace's upcoming launch.",
    content: [
      "VERSCAR, TAVEWO Ventures' work-and-own mobility platform, has successfully secured three vehicles for its proprietary fleet pilot, marking an important operational milestone ahead of the official launch of the VERSCAR marketplace.",
      "The fleet pilot is designed to validate VERSCAR's end-to-end mobility operations, including vehicle onboarding, driver verification, asset management, and escrow-backed payment workflows before the platform opens to the public. It represents the first phase of TAVEWO's vision to build a trusted, technology-enabled work-and-own ecosystem for Nigeria's mobility sector.",
      " \"Securing the first three vehicles is more than a fleet milestone—it's the beginning of building an operational model that prioritizes trust, accountability, and structured vehicle ownership opportunities,\" a VERSCAR operations lead said.",
      "As preparations continue for the marketplace launch, VERSCAR is focused on refining its verification processes and operational standards to ensure a seamless experience for both vehicle owners and drivers. The upcoming marketplace will connect verified vehicle owners with vetted drivers and operators through secure, escrow-backed agreements designed to reduce the risks commonly associated with informal work-and-own arrangements.",
      "The proprietary fleet pilot provides the operational foundation for the broader VERSCAR marketplace, which will launch with a commitment to transparency, security, and scalable mobility solutions across Nigeria.",
    ],
  },
  {
    slug: "capital-closes-land-acquisition",
    title: "Global Assets & Procurement Expands Commercial Land Holdings",
    category: "Real Estate news",
    image: "/images/news5.jpg",
    publishedAt: "2025-07-03",
    excerpt: "Expanding the group's real estate portfolio in high-growth corridors.",
    content: [
      "TAVEWO Holdings has closed a new commercial land acquisition, expanding the group's real estate portfolio in one of Nigeria's high-growth development corridors.",
      "The acquisition forms part of TAVEWO Capital's broader land banking strategy, which pairs long-term asset appreciation with near-term infrastructure development opportunities for enterprise clients.",
      "The site is expected to support future commercial real estate and infrastructure projects, with planning already underway in coordination with the group's asset procurement and structured investments teams.",
    ],
  },
  {
    slug: "state-of-enterprise-mobility",
    title: "State Of Enterprise Mobility In West Africa.",
    category: "Logistics news",
    image: "/images/news6.jpg",
    publishedAt: "2025-08-09",
    excerpt: "Our annual report on connected vehicles, telematics and asset protection.",
    content: [
      "TAVEWO's annual State of Enterprise Mobility report examines the growing role of connected vehicles, telematics and asset protection technology across West Africa's logistics and fleet sectors.",
      "Drawing on data from Verscar and RespondrNG's combined fleet network, the report highlights rising adoption of GPS-based tracking, automated dispatch and escrow-backed transactions as enterprise fleets look to reduce risk and improve utilisation.",
      "The report also flags nationwide reach and asset protection as the two areas enterprise clients care most about when evaluating mobility partners — a trend the group expects to shape its product roadmap through the next year.",
    ],
  },
  {
    slug: "respondrng-partners-emergency",
    title: "RespondrNG Partners With Emergency Response Agencies.",
    category: "Technology news",
    image: "/images/news7.jpg",
    publishedAt: "2025-12-02",
    excerpt: "New APIs enable real-time incident coordination across jurisdictions.",
    content: [
      "RespondrNG, TAVEWO's emergency operations platform, has partnered with several emergency response agencies to enable real-time incident coordination across jurisdictions.",
      "The partnership introduces new open APIs that let agencies plug directly into RespondrNG's dispatch console, GPS tracking and incident management tools — reducing the friction of coordinating a response across multiple teams and geographies.",
      "\"Emergency response shouldn't be slowed down by systems that don't talk to each other,\" said a RespondrNG product lead. \"These APIs mean an incident reported in one jurisdiction can be routed to the nearest available unit, regardless of which agency owns that unit.\"",
    ],
  },
  {
    slug: "respondrng-app-launching-soon",
    title: "RespondrNG App Launching Soon on Google Play Store.",
    category: "Technology news",
    image: "/images/RESPONDRNG.jpg",
    publishedAt: "2026-08-25",
    excerpt:"RespondrNG, TAVEWO Ventures' emergency response and public safety platform, will officially launch on the Google Play Store on September 30, 2026.",
    content: [
      "TAVEWO Ventures has announced the official launch date for RespondrNG, its technology-driven emergency response and public safety application, which will be available for download on the Google Play Store starting September 30, 2026.",
      "RespondrNG is designed to help individuals and communities respond faster during emergencies by connecting users with nearby emergency services, trusted contacts, and real-time location-based assistance through a secure and intuitive mobile experience.",
      "The launch marks a major milestone in TAVEWO Ventures' mission to build technology solutions that improve safety, mobility, and everyday life across Nigeria. The initial Android release will make RespondrNG accessible to users nationwide, with additional platform enhancements and future releases already in the product roadmap.",
      "As the countdown to launch begins, TAVEWO Ventures encourages users to stay connected through its official channels for launch updates, feature announcements, and early onboarding information ahead of September 30, 2026."
    ],
  },
  {
    slug: "tavewo-ventures-internship-program-2026",
    title: "Tavewo Ventures Internship Program 2026 Now Open Across Nigeria.",
    category: "Company news",
    image: "/images/Internship-news.jpg",
    publishedAt: "2026-08-26",
    excerpt:"Tavewo Ventures Ltd is expanding its team and inviting passionate young professionals across Nigeria to apply for its nationwide internship program.",
    content: [
      "Tavewo Ventures Ltd has officially opened applications for its 2026 Internship Program, welcoming talented and ambitious individuals from across Nigeria to join its growing team and gain hands-on industry experience.",
      "The internship program is designed to equip participants with practical, real-world skills by working on live projects across technology, design, and digital communications within the Tavewo ecosystem.",
      "Applications are currently open for the following internship roles: Graphic Designer, Social Media Manager, Frontend Developer, Backend Developer, and Full-Stack Engineer.",
      "Successful interns will receive hands-on, on-the-job training, access to professional learning resources and courses, an official internship completion certificate, and opportunities to showcase their projects publicly across Tavewo Ventures' social media platforms and digital channels.",
      "This program is ideal for students, recent graduates, and early-career professionals looking to build their portfolios, gain mentorship, and kickstart their careers in a fast-growing technology and innovation company.",
      "Interested applicants should send their CV and cover letter to tavewo@tavewo.com, using the internship role they are applying for as the subject line of the email."
    ],
  }
];

export default articles;

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category) {
  if (!category || category === "All") return articles;
  return articles.filter((a) => a.category === category);
}
