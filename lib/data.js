// ------------------------------------------------------------------
//  All site content lives here. Edit text, links, and projects below.
// ------------------------------------------------------------------

export const profile = {
  name: "Falak Amin",
  role: "Frontend Engineer",
  tagline:
    "I build fast, scalable, and SEO-friendly web applications with React & Next.js.",
  intro:
    "Frontend Engineer with 2.5+ years building production web apps for international clients across e-commerce, SaaS, and marketplace domains — turning Figma designs into responsive, high-performance interfaces.",
  email: "falakamin2000@gmail.com",
  phone: "+92 305 5831579",
  location: "Lahore, Pakistan · Available worldwide (Remote)",
  socials: {
    github: "https://github.com/falakamin31",
    linkedin: "https://linkedin.com/in/falakamin",
  },
};

export const stats = [
  { target: 2.5, decimals: 1, suffix: "+", label: "Years experience" },
  { target: 20, decimals: 0, suffix: "+", label: "Projects delivered" },
  { target: 5, decimals: 1, suffix: "★", label: "Client rating" },
  { target: 24, decimals: 0, suffix: "h", label: "Avg. response time" },
];

export const services = [
  {
    title: "Web App Development",
    description:
      "Production-ready SPAs and full web apps built with React.js and Next.js using a clean, component-driven architecture.",
    icon: "Code2",
  },
  {
    title: "Figma → Responsive Code",
    description:
      "Pixel-accurate conversion of Figma and Adobe XD designs into fully responsive, accessible interfaces.",
    icon: "Figma",
  },
  {
    title: "Performance & SEO",
    description:
      "Faster load times, API request optimization & caching, and SEO best practices that help your product get found and convert.",
    icon: "Gauge",
  },
];

export const projects = [
  {
    title: "AI Poultry Health Detection",
    subtitle: "AI · IoT · Full-Stack Dashboard",
    description:
      "Embedded IoT system with a full-stack monitoring dashboard using a foot-ring sensor to detect dead or sick chickens in real time. Achieved a 68% reduction in mortality and 90% productivity increase across a 3-month trial.",
    stack: ["React", "Node.js", "Express", "Firebase", "Python", "Tailwind"],
    image: "/projects/placeholder-1.svg",
    live: "#",
    repo: "#",
  },
  {
    title: "Obsession — Cosmetics E-Commerce",
    subtitle: "MERN · E-Commerce",
    description:
      "Fully responsive online store with product catalogs, cart management, and checkout. Built an automated order-notification system delivering real-time confirmations to admins.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    image: "/projects/obsession.jpg",
    live: "https://www.obsessioncosmetics.com.pk/",
    repo: "#",
  },
  {
    title: "Ordinals Gateway",
    subtitle: "Next.js · Web3 · Bitcoin NFT Platform",
    description:
      "A no-code platform to create, customize, and deploy your own Bitcoin Ordinals minting pages — with built-in buy/sell/store commerce, auctions, and an ordinals wallet. Built a fast, SEO-friendly Next.js frontend with templated drop pages and optimized media delivery.",
    stack: ["Next.js", "React", "Tailwind CSS", "Web3", "Vercel"],
    image: "/projects/ordinals.png",
    live: "https://ordinals-gznd.vercel.app/",
    repo: "#",
  },
  {
    title: "XCS Labs",
    subtitle: "Next.js · Web3 · Corporate Site",
    description:
      "Marketing site for a Dubai-based blockchain consultancy, showcasing Web3 services across dApps, NFT solutions, blockchain games, and chain-agnostic infrastructure. Built a polished, animated Next.js frontend with responsive layouts and optimized media.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: "/projects/xcs-labs.png",
    live: "https://xcs-labs-website-five.vercel.app/",
    repo: "#",
  },
  {
    title: "XCS Holdings",
    subtitle: "Next.js · Web3 · Corporate Site",
    description:
      "Corporate site for a Singapore-based blockchain software firm, presenting their Web3 offering across NFT solutions, dApps, chain-agnostic infrastructure, and blockchain games. Built a responsive, animated Next.js frontend with a clean content hierarchy.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: "/projects/xcs-holdings.png",
    live: "https://xcs-labs-delta.vercel.app/",
    repo: "#",
  },
  {
    title: "BookNest",
    subtitle: "MERN · Book Marketplace",
    description:
      "A community book-sharing marketplace where readers list, browse, and manage books for sale. Built JWT auth with signup/login, a personal \"My Books\" shelf with full create/edit/delete ownership controls, and Cloudinary-backed cover uploads, on a React + Vite SPA talking to an Express/MongoDB REST API.",
    stack: [
      "React",
      "Vite",
      "React Router",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Tailwind CSS",
    ],
    image: "/projects/booknest.png",
    live: "https://book-nest-beryl.vercel.app/",
    repo: "#",
  },
];

export const skills = [
  {
    group: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "SASS",
      "Three.js / WebGL",
    ],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "GraphQL", "MVC"],
  },
  {
    group: "Databases",
    items: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    group: "Tools & Platforms",
    items: ["Git & GitHub", "Figma", "Adobe XD", "Vercel", "Netlify"],
  },
];

export const experience = [
  {
    company: "NAVTTC",
    role: "Mobile App Development — Instructor",
    period: "Feb 2026 – May 2026",
    points: [
      "Delivered hands-on training in mobile app development covering core programming, UI/UX, and end-to-end projects.",
      "Mentored students in building production-ready apps from scratch, improving their industry-employability outcomes.",
    ],
  },
  {
    company: "XCS Holdings Pte. Ltd. — Singapore",
    role: "Software Engineer (Remote)",
    period: "Jun 2023 – Feb 2025",
    points: [
      "Built SEO-optimized e-commerce platforms and NFT marketplaces with React & Next.js, deployed via Vercel.",
      "Integrated Google Maps and third-party APIs with caching, cutting API calls ~35% and improving response time ~25%.",
      "Collaborated with cross-functional teams in an agile environment delivering scalable SPAs.",
    ],
  },
  {
    company: "Freelance — International Clients",
    role: "Frontend Engineer",
    period: "Jul 2022 – Present",
    points: [
      "Delivered 20+ web app projects, transforming Figma wireframes into functional, responsive apps.",
      "Maintained 5-star client ratings through consistent quality and on-time delivery.",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Falak delivered exactly what we needed, on time and beyond expectations. Communication was clear throughout the project.",
    name: "Client Name",
    title: "Founder · Placeholder Co.",
  },
  {
    quote:
      "Great eye for detail and turned our Figma designs into a flawless responsive site. Would absolutely hire again.",
    name: "Client Name",
    title: "Product Manager · Placeholder Inc.",
  },
  {
    quote:
      "Reliable, skilled, and proactive. Our app's performance improved noticeably after Falak's work.",
    name: "Client Name",
    title: "CTO · Placeholder Ltd.",
  },
];

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
