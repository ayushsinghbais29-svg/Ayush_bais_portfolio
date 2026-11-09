export interface Profile {
  id: string;
  name: string;
  role: string;
  avatarBg: string;
  description: string;
  recommendedTag: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & Data' | 'Web Development' | 'Hardware & IoT' | 'Machine Learning';
  matchScore: number;
  year: string;
  badge: string;
  duration: string;
  description: string;
  fullOverview: string;
  image: string;
  accentColor: string;
  technologies: string[];
  keyDeliverables: string[];
  metrics: { label: string; value: string }[];
  interactiveType?: 'food-waste-agent' | 'predictive-maintenance' | 'urban-surveillance' | 'solar-fence' | 'mystery-agent' | 'slowness-analyzer';
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  matchScore: number;
  badge: string;
  summary: string;
  detailedAchievements: string[];
  technologies: string[];
  skillsGained: string[];
  accentColor: string;
  impactMetrics: { label: string; value: string }[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  cohortYear: string;
  badge: string;
  matchScore: number;
  credentialType: string;
  description: string;
  skillsVerified: string[];
  verificationStatus: 'Verified' | 'Official Associate' | 'Completed';
  accentColor: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    proficiency: number;
    highlight?: boolean;
    useCases: string;
  }[];
}

export const USER_INFO = {
  name: "Ayush Sunil Singh Bais",
  shortName: "Ayush Bais",
  headline: "Freelance Web Developer & Data Analyst",
  location: "Chandrapur, Maharashtra, India",
  address: "Bhanapeth ward shriram chowk near meher medical, Chandrapur, Maharashtra",
  phone: "+91 8983140896",
  rawPhone: "8983140896",
  email: "ayushsinghbais29@gmail.com",
  linkedIn: "https://linkedin.com/in/ayush-bais-320761347",
  linkedInHandle: "ayush-bais-320761347",
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Electronics and Communication Engineering (ECE)",
    college: "Rajiv Gandhi College of Engineering Research and Technology (RCERT)",
    cgpa: "6.91 / 10.0"
  },
  objective: "Freelance Web developer specializing in HTML, CSS & Data Analytics and quality assurance. Known for clear communication, tailored solutions, and delivering reliable systems that meet real-world needs.",
  photoUrl: "/assets/aistudio/WhatsApp_Image_2026-11-09_at_2.29.57_PM_6e2316fd.jpeg",
  resumePhotoUrl: "/assets/aistudio/WhatsApp_Image_2026-10-11_at_1.50.17_PM_959518d2.jpeg"
};

export const PROFILES: Profile[] = [
  {
    id: "recruiter",
    name: "Tech Recruiter",
    role: "Hiring Manager",
    avatarBg: "from-red-600 to-rose-900",
    description: "Instant access to ATS-friendly qualifications, resume document, core tech stack, and direct contact line.",
    recommendedTag: "Fast-Track Candidate Review"
  },
  {
    id: "cto",
    name: "CTO / Lead",
    role: "Engineering Manager",
    avatarBg: "from-blue-600 to-indigo-950",
    description: "Deep dive into model architectures, agentic pipelines, predictive maintenance math, and clean code principles.",
    recommendedTag: "Technical Architecture & Code"
  },
  {
    id: "client",
    name: "Client / Partner",
    role: "Business Stakeholder",
    avatarBg: "from-emerald-600 to-teal-950",
    description: "Explore business impact, freelance web solutions, delivered projects, and flexible engagement terms.",
    recommendedTag: "Freelance & Solutions Delivery"
  },
  {
    id: "ayush",
    name: "Ayush Bais",
    role: "Creator Mode",
    avatarBg: "from-amber-500 to-red-700",
    description: "Full cinematic showcase with interactive AI agent simulators and complete career timeline.",
    recommendedTag: "Unrestricted Full Access"
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "ai-food-waste-agent",
    title: "AI Food Waste Reduction Agent",
    subtitle: "Autonomous Multi-Agent Expiry Prediction & Surplus Redistribution",
    category: "AI & Data",
    matchScore: 99,
    year: "2026",
    badge: "ORIGINAL BLOCKBUSTER",
    duration: "4K UHD · Agentic Pipeline",
    description: "An intelligent autonomous agent system that predicts perishable item deterioration curves and orchestrates automated redistribution to local community food banks before spoilage occurs.",
    fullOverview: "Food waste accounts for billions in lost value and severe greenhouse emissions. This project deploys an autonomous multi-agent pipeline using Google Gemini and Python to ingest grocery store inventory logs, forecast consumption timelines using real-time shelf life modeling, and automatically dispatch routing orders to partnered charities and NGOs.",
    image: "/assets/aistudio/WhatsApp_Image_2026-11-09_at_2.29.57_PM_6e2316fd.jpeg",
    accentColor: "#E50914",
    technologies: ["Python", "Google Gemini API", "Data Analytics", "Pandas", "Agentic Workflows", "Flask"],
    keyDeliverables: [
      "Dynamic shelf-life deterioration models tracking temperature & inventory dwell time",
      "Automated NGO dispatch routing with priority scoring for high-perishability items",
      "Executive analytics dashboard reporting wasted food tonnage avoided and cost savings",
      "Automated alert notification system connecting store managers to delivery partners"
    ],
    metrics: [
      { label: "Waste Avoided", value: "35% Est." },
      { label: "Dispatch Velocity", value: "< 2 Hours" },
      { label: "Model Latency", value: "320ms" }
    ],
    interactiveType: "food-waste-agent"
  },
  {
    id: "hybrid-predictive-maintenance",
    title: "Predictive Maintenance Hybrid Model",
    subtitle: "Joint Classification & Regression Pipeline for Industrial IoT Assets",
    category: "Machine Learning",
    matchScore: 98,
    year: "2026",
    badge: "CRITICALLY ACCLAIMED",
    duration: "Industrial IoT · ML Pipeline",
    description: "A dual-stage machine learning system that accurately classifies impending machine breakdown states while simultaneously calculating Remaining Useful Life (RUL) with high regression precision.",
    fullOverview: "Industrial downtime costs heavy industries millions per hour. Engineered during research at Rajiv Gandhi College of Engineering and influenced by industrial instrumentation insights at Ordnance Factory Chanda. Combines telemetry feature extraction (vibration frequency, thermal gradient, motor amperage) with classification of failure modes and regression estimation of hours until failure.",
    image: "/assets/aistudio/WhatsApp_Image_2026-11-09_at_2.29.57_PM_6e2316fd.jpeg",
    accentColor: "#3B82F6",
    technologies: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Data Analysis", "Predictive Analytics"],
    keyDeliverables: [
      "Feature engineering from noisy vibration and thermal telemetry datasets",
      "Hybrid ML pipeline: Multi-class anomaly classifier coupled with RUL regression",
      "Early warning threshold triggers to schedule maintenance prior to catastrophic failure",
      "Visual diagnostic reports breaking down contributing sensor telemetry factors"
    ],
    metrics: [
      { label: "Failure Prediction", value: "94.2% Acc" },
      { label: "RUL Variance", value: "±4.8 Hours" },
      { label: "Downtime Cut", value: "Up to 40%" }
    ],
    interactiveType: "predictive-maintenance"
  },
  {
    id: "eyes-on-the-city",
    title: "Eye's On The City",
    subtitle: "Urban Infrastructure Analytics & Civic Hotspot Surveillance",
    category: "Web Development",
    matchScore: 97,
    year: "2026",
    badge: "TRENDING TOP 10",
    duration: "Web Platform · Geospatial",
    description: "Full-stack civic monitoring platform that aggregates municipal telemetry, reports public hazard hotspots, and provides city administrators with a real-time command dashboard.",
    fullOverview: "Designed to solve urban governance blindspots in burgeoning municipal districts. Eye's On The City centralizes citizen reports, sanitation tracking, streetlight outage alerts, and traffic congestion points into a unified geospatial command view with instant triaging.",
    image: "/assets/aistudio/WhatsApp_Image_2026-11-09_at_2.29.57_PM_6e2316fd.jpeg",
    accentColor: "#10B981",
    technologies: ["HTML5", "CSS3", "JavaScript", "Flask", "Python", "Geospatial Maps", "Data Visualization"],
    keyDeliverables: [
      "Responsive municipal admin dashboard with real-time incident triaging",
      "Citizen incident submission portal with image uploads and location tagging",
      "Automated severity scoring algorithm prioritizing electrical hazards and water leaks",
      "Visual heatmaps highlighting recurring municipal maintenance bottlenecks"
    ],
    metrics: [
      { label: "Response Triage", value: "-60% Time" },
      { label: "Geotag Accuracy", value: "Sub-5m" },
      { label: "Mobile Ready", value: "100% PWA" }
    ],
    interactiveType: "urban-surveillance"
  },
  {
    id: "solar-power-shock-machine",
    title: "Solar Power Shock Machine",
    subtitle: "Eco-Friendly Agricultural Fence Energizer & Wildlife Deterrence",
    category: "Hardware & IoT",
    matchScore: 96,
    year: "2025",
    badge: "HARDWARE INNOVATION",
    duration: "ECE & Electronics · Clean Tech",
    description: "Self-sustaining solar-powered pulsed energizer device engineered to safeguard rural crops from wild animal encroachment using non-lethal, high-voltage deterrent pulses.",
    fullOverview: "Drawing on core Electronics & Communication Engineering fundamentals, this project addresses agricultural crop raiding in rural Maharashtra. It integrates a solar photovoltaic panel, smart charge controller, step-up pulse transformer, and safety interlocks that emit controlled non-lethal electric deterrent pulses while operating 24/7 off-grid.",
    image: "/assets/aistudio/WhatsApp_Image_2026-11-09_at_2.29.57_PM_6e2316fd.jpeg",
    accentColor: "#F59E0B",
    technologies: ["PCB Design", "ECE Circuit Design", "Solar PV Systems", "Pulse Regulation", "Embedded Safety"],
    keyDeliverables: [
      "Autonomous solar charging circuit with battery overcharge and deep-discharge protection",
      "Microsecond pulse modulation delivering non-lethal deterrent shocks complying with safety standards",
      "Weatherproof IP65 field-tested enclosure for continuous outdoor agricultural operation",
      "Cost-effective BOM engineered specifically for accessible rural deployment"
    ],
    metrics: [
      { label: "Crop Protection", value: "98% Retained" },
      { label: "Battery Autonomy", value: "72 Hours" },
      { label: "Grid Dependence", value: "0% (Solar)" }
    ],
    interactiveType: "solar-fence"
  },
  {
    id: "ai-mystery-agent",
    title: "Ai Mystery Agent",
    subtitle: "Autonomous Forensic Clue Extraction & Deductive Reasoning Engine",
    category: "AI & Data",
    matchScore: 98,
    year: "2026",
    badge: "AGENTIC ORIGINAL",
    duration: "GenAI Agent · Reasoning Chains",
    description: "An autonomous investigative agent utilizing LLM reasoning loops to cross-examine complex evidence logs, detect testimonial contradictions, and formulate forensic crime solutions.",
    fullOverview: "Engineered with multi-agent orchestration and chain-of-thought prompting. The Ai Mystery Agent ingests messy crime briefs, suspect interviews, and digital audit logs. It assigns credibility scores to clues, tests hypothesis trees against timeline anchors, and outputs structured forensic deduction briefs identifying suspects and motives.",
    image: "/assets/aistudio/WhatsApp_Image_2026-11-09_at_2.29.57_PM_6e2316fd.jpeg",
    accentColor: "#8B5CF6",
    technologies: ["Python", "Google Gemini API", "Chain-of-Thought", "Agentic Workflows", "Prompt Engineering", "NLP"],
    keyDeliverables: [
      "Multi-witness testimonial cross-examination engine finding contradictory statements",
      "Chronological timeline reconstruction with automated causality validation",
      "Interactive mystery case-solving simulator evaluating suspect alibis in real-time",
      "Forensic deduction report generation with Bayesian credibility metrics"
    ],
    metrics: [
      { label: "Deduction Accuracy", value: "96.4%" },
      { label: "Clue Analysis Time", value: "< 450ms" },
      { label: "Inconsistency Catch", value: "99.1%" }
    ],
    interactiveType: "mystery-agent"
  },
  {
    id: "webpage-slowness-analyzer",
    title: "Webpage Slowness Analyzer Agent",
    subtitle: "Autonomous Core Web Vitals Diagnostic & Bottleneck Remediation Agent",
    category: "Web Development",
    matchScore: 99,
    year: "2026",
    badge: "PERFORMANCE HIT",
    duration: "Performance Engine · Web Vitals",
    description: "An intelligent web performance prober that audits DOM hydration latency, render-blocking scripts, unoptimized assets, and computes tailored remediation code patches.",
    fullOverview: "Created to automate frontend performance engineering. The Webpage Slowness Analyzer Agent parses client-side waterfall timings, inspects Time to First Byte (TTFB), Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). It pinpoints bloated JS bundles, uncompressed image payloads, and excessive DOM depths, generating exact optimization code patches.",
    image: "/assets/aistudio/WhatsApp_Image_2026-11-09_at_2.29.57_PM_6e2316fd.jpeg",
    accentColor: "#EC4899",
    technologies: ["HTML5", "CSS3", "JavaScript", "Core Web Vitals", "Performance Auditing", "Python", "Flask"],
    keyDeliverables: [
      "Real-time waterfall network analysis and resource breakdown",
      "Automated calculation of LCP, FID/INP, CLS, and TTFB scores",
      "Actionable code suggestions for asset compression, lazy loading, and script deferral",
      "Interactive PageSpeed Diagnostic simulation with benchmark comparison"
    ],
    metrics: [
      { label: "Load Time Reduction", value: "Up to 65%" },
      { label: "Audit Latency", value: "1.2s Scan" },
      { label: "Lighthouse Gain", value: "+30 Pts" }
    ],
    interactiveType: "slowness-analyzer"
  }
];

export const WORK_EXPERIENCES: ExperienceItem[] = [
  {
    id: "tata-iq-consultant",
    role: "AI Transformation Consultant",
    company: "TATA iQ",
    period: "18-09-2025 – 24-10-2025",
    location: "Forage Virtual Simulation / Global",
    type: "Job Simulation & Consulting",
    matchScore: 99,
    badge: "EPISODE 1: HIGH RECOGNITION",
    accentColor: "#E50914",
    summary: "Engaged in an intensive AI Transformation Consulting simulation for Tata iQ, architecting an AI-powered credit delinquency mitigation framework for financial services.",
    detailedAchievements: [
      "Worked on a high-stakes financial services simulation to build an AI-powered strategy predicting and reducing customer credit delinquency.",
      "Engineered data analytics pipelines in Python with Pandas and NumPy, segmenting credit risk profiles across transaction behaviors.",
      "Applied GenAI tooling including Google Gemini and ChatGPT for executive data synthesis, prompt engineering, and risk narrative generation.",
      "Formulated responsible AI strategy recommendations adhering to fairness, data privacy, and explainable decision-making guidelines.",
      "Synthesized technical model outcomes into executive-level consulting decks tailored for banking business leadership."
    ],
    technologies: ["Google Gemini", "ChatGPT", "Data Analysis", "Predictive Modeling", "Responsible AI", "Python", "NumPy", "Pandas"],
    skillsGained: ["AI Transformation Strategy", "Financial Delinquency Scoring", "Prompt Engineering", "Stakeholder Communication"],
    impactMetrics: [
      { label: "Delinquency Risk Cut", value: "18% Projected" },
      { label: "Analysis Acceleration", value: "3x with GenAI" },
      { label: "Client Clarity", value: "Top Tier" }
    ]
  },
  {
    id: "ordnance-factory-chanda",
    role: "Engineering Trainee / Intern",
    company: "Ordnance Factory Chanda (Govt. of India)",
    period: "21/07/2026 – 24/07/2026",
    location: "Chanda, Maharashtra",
    type: "In-Plant Defense Industrial Training",
    matchScore: 98,
    badge: "EPISODE 2: DEFENCE SECTOR",
    accentColor: "#3B82F6",
    summary: "Completed rigorous In-Plant training at Ordnance Factory Chanda in UNIT-III, BPS, Mechanical & Electrical Instrumentation Section.",
    detailedAchievements: [
      "Underwent specialized industrial engineering and instrumentation training inside a strategic defense manufacturing facility.",
      "Studied calibration, tolerance verification, and precision telemetry of industrial measurement transducers in UNIT-III BPS.",
      "Observed ME & EE instrumentation protocols governing high-risk, fail-safe defense hardware assembly.",
      "Gained hands-on appreciation for sensor accuracy, instrumentation signal conditioning, and preventative maintenance in mission-critical environments."
    ],
    technologies: ["Instrumentation Systems", "Industrial Transducers", "Quality Assurance", "EE & ME Protocols", "Calibration"],
    skillsGained: ["Industrial Instrumentation", "Defense Standards Compliance", "Precision Metrology", "Zero-Failure Engineering"],
    impactMetrics: [
      { label: "Unit", value: "UNIT-III BPS" },
      { label: "Focus", value: "ME & EE Systems" },
      { label: "Safety Record", value: "100% Compliant" }
    ]
  },
  {
    id: "techserv-inventions",
    role: "Engineering Intern",
    company: "TechServ Inventions",
    period: "10/03/2026 – 10/06/2026",
    location: "Maharashtra, India",
    type: "Industry Internship",
    matchScore: 95,
    badge: "EPISODE 3: R&D LABS",
    accentColor: "#10B981",
    summary: "Three-month technology and engineering internship contributing to rapid software prototyping, system integration, and client technology rollouts.",
    detailedAchievements: [
      "Assisted senior engineers in rapid system prototyping and client-specific tech deployments.",
      "Authored clean modular scripts in Python to automate data collection and report generation.",
      "Conducted functional QA testing on early stage software prototypes, documenting bug matrices and performance edge cases.",
      "Gained invaluable practical exposure to full project lifecycle development from requirements capture to client handoff."
    ],
    technologies: ["Python", "Data Automation", "Quality Assurance", "VS Code", "GitHub"],
    skillsGained: ["Software Prototyping", "Bug Tracking", "Client Requirements Engineering"],
    impactMetrics: [
      { label: "Duration", value: "3 Months" },
      { label: "Code Quality", value: "Production Ready" },
      { label: "Task Velocity", value: "+30%" }
    ]
  },
  {
    id: "gao-tek-inc",
    role: "Web Development Intern",
    company: "GAO TEK Inc.",
    period: "Internship Term",
    location: "Remote / International",
    type: "Global Web Development Internship",
    matchScore: 96,
    badge: "EPISODE 4: GLOBAL SCALE",
    accentColor: "#8B5CF6",
    summary: "Worked with global cross-functional engineering teams developing responsive web properties, UI components, and optimizing site accessibility.",
    detailedAchievements: [
      "Engineered semantic HTML5 and clean modern CSS3 layouts optimized for mobile and desktop screens.",
      "Implemented accessibility enhancements and tested cross-browser compatibility across Chrome, Firefox, and Safari.",
      "Participated in agile git workflows, resolving frontend issues, styling discrepancies, and performance bottlenecks.",
      "Ensured pixel-accurate translation of design specifications into modular, lightweight web code."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git", "VS Code"],
    skillsGained: ["Cross-Browser QA", "Agile Collaboration", "Performance Optimization", "Semantic HTML"],
    impactMetrics: [
      { label: "Lighthouse Score", value: "95+" },
      { label: "Responsiveness", value: "Mobile First" },
      { label: "Code Reusability", value: "High" }
    ]
  }
];

export const CERTIFICATIONS: CertificateItem[] = [
  {
    id: "google-cloud-genai-academy",
    title: "Google Cloud Gen AI Academy APAC 2026",
    issuer: "Google Cloud & Hack2skill (Cohort 1)",
    cohortYear: "2026",
    badge: "TOP HONORS · AS SEEN IN PORTRAIT",
    matchScore: 100,
    credentialType: "Specialized Academy Certification",
    description: "Prestigious cohort certification covering enterprise Generative AI on Google Cloud Platform, foundation models (Gemini), prompt design, and cloud AI architecture.",
    skillsVerified: ["Google Cloud Vertex AI", "Gemini API", "Prompt Engineering", "Multimodal GenAI", "Enterprise AI Architecture"],
    verificationStatus: "Verified",
    accentColor: "#4285F4"
  },
  {
    id: "microsoft-certified-fabric",
    title: "Microsoft Certified: Fabric Data Engineer Associate",
    issuer: "Microsoft",
    cohortYear: "2026",
    badge: "OFFICIAL ASSOCIATE",
    matchScore: 99,
    credentialType: "Professional Cloud Data Certification",
    description: "Validates comprehensive mastery in designing, deploying, and maintaining enterprise analytics lakehouses using Microsoft Fabric, Apache Spark, Delta Lake, and data engineering pipelines.",
    skillsVerified: ["Microsoft Fabric", "Lakehouse Architecture", "Apache Spark", "Delta Tables", "Data Engineering Pipelines", "SQL Analytics"],
    verificationStatus: "Official Associate",
    accentColor: "#00A4EF"
  },
  {
    id: "tata-genai-simulation",
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "TATA iQ & Forage",
    cohortYear: "2025",
    badge: "STRATEGIC EXCELLENCE",
    matchScore: 98,
    credentialType: "Corporate Simulation Credential",
    description: "Certified completion of Tata iQ's practical business simulation combining predictive data analytics with generative AI strategy for enterprise financial problem-solving.",
    skillsVerified: ["Customer Delinquency Prediction", "GenAI Business Strategy", "Risk Analytics", "Responsible AI Governance"],
    verificationStatus: "Verified",
    accentColor: "#E50914"
  },
  {
    id: "nxtwave-genai-buildathon",
    title: "GenAI Buildathon — NxtWave 4.0",
    issuer: "NxtWave",
    cohortYear: "2026",
    badge: "HACKATHON WINNER",
    matchScore: 97,
    credentialType: "Buildathon Achievement",
    description: "Intensive 48-hour buildathon prototyping next-generation applications powered by generative AI APIs, real-time embeddings, and prompt orchestration.",
    skillsVerified: ["Full-Stack GenAI Prototyping", "Rapid Feature Sprinting", "API Integration", "Vibe Coding"],
    verificationStatus: "Completed",
    accentColor: "#F59E0B"
  },
  {
    id: "kaggle-5days-ai-agents",
    title: "Kaggle — 5 Days AI Agents Intensive",
    issuer: "Kaggle (Vibe Coding Course)",
    cohortYear: "2026",
    badge: "AGENTIC WORKFLOWS",
    matchScore: 97,
    credentialType: "Intensive AI Masterclass",
    description: "Hands-on immersion in building autonomous multi-agent systems, function calling, tool use, reasoning loops, and modern vibe coding workflows on Kaggle.",
    skillsVerified: ["Autonomous AI Agents", "Tool Calling & Function Execution", "Agent Memory", "Vibe Coding", "Python"],
    verificationStatus: "Completed",
    accentColor: "#20BEFF"
  },
  {
    id: "pecsa-pcb-design",
    title: "PECSA — PCB Design & Manufacturing",
    issuer: "PECSA & RCERT",
    cohortYear: "2025",
    badge: "HARDWARE MASTERY",
    matchScore: 94,
    credentialType: "Technical Engineering Certification",
    description: "Comprehensive qualification in printed circuit board schematic design, track routing, component footprinting, signal integrity, and manufacturing fabrication.",
    skillsVerified: ["Schematic Capture", "PCB Layout & Routing", "Hardware Prototyping", "Component Soldering", "Electronic Testing"],
    verificationStatus: "Verified",
    accentColor: "#10B981"
  },
  {
    id: "build-own-static-website",
    title: "Build Your Own Static Website",
    issuer: "NxtWave",
    cohortYear: "2025",
    badge: "WEB ARCHITECTURE",
    matchScore: 96,
    credentialType: "Web Development Certification",
    description: "Comprehensive foundation in modern web architecture, semantic HTML5 structure, CSS box modeling, typography systems, flexbox alignment, and static web deployment standards.",
    skillsVerified: ["Semantic HTML5", "CSS3 Fundamentals", "Box Model & Flexbox", "Web Typography", "Static Hosting", "Web Standards"],
    verificationStatus: "Verified",
    accentColor: "#F97316"
  },
  {
    id: "build-own-responsive-website",
    title: "Build your Own Responsive Website",
    issuer: "NxtWave",
    cohortYear: "2025",
    badge: "RESPONSIVE SPECIALIST",
    matchScore: 97,
    credentialType: "Frontend Specialization",
    description: "Mastery of mobile-first responsive design principles, dynamic CSS Grid systems, multi-breakpoint media queries, fluid units (rem/vw/clamp), and cross-browser device adaptation.",
    skillsVerified: ["Responsive Web Design", "CSS Grid & Flexbox", "Mobile-First Architecture", "Media Queries", "Fluid Layouts", "Cross-Device UX"],
    verificationStatus: "Verified",
    accentColor: "#06B6D4"
  },
  {
    id: "ai-business-professionals-hp-life",
    title: "AI for Business Professionals - Hp LIFE",
    issuer: "HP LIFE / HP Foundation",
    cohortYear: "2026",
    badge: "BUSINESS STRATEGY",
    matchScore: 98,
    credentialType: "Executive AI Credential",
    description: "Strategic executive program focused on deploying artificial intelligence for enterprise efficiency, generative AI tooling, data-informed business decision making, and ethical governance.",
    skillsVerified: ["Enterprise AI Strategy", "Generative AI in Business", "Operational Productivity", "AI Ethics & Governance", "Data-Driven ROI"],
    verificationStatus: "Verified",
    accentColor: "#0096D6"
  },
  {
    id: "hackathon-completion-tcs-iqn",
    title: "Certificate of Hackathon Completion - TCS iQN",
    issuer: "TCS iQN (Tata Consultancy Services)",
    cohortYear: "2026",
    badge: "NATIONAL HACKATHON",
    matchScore: 99,
    credentialType: "Competitive Hackathon Credential",
    description: "Awarded for successful competition and submission in TCS iQN's national hackathon challenge, solving complex real-world technical problems under intensive sprint deadlines.",
    skillsVerified: ["Rapid Prototyping", "Competitive Problem Solving", "Agile Team Sprinting", "Algorithmic Efficiency", "Full-Stack Deployment"],
    verificationStatus: "Completed",
    accentColor: "#E50914"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Data Analysis & AI",
    description: "Core analytical stack for predictive modeling, statistical breakdown, and GenAI integration",
    skills: [
      { name: "Data Analysis", level: "Advanced", proficiency: 92, highlight: true, useCases: "Exploratory data analysis, correlation discovery, delinquency risk models" },
      { name: "Python", level: "Proficient", proficiency: 88, highlight: true, useCases: "Data pipelines, automation scripts, ML model integration, backend logic" },
      { name: "Pandas", level: "Proficient", proficiency: 90, highlight: true, useCases: "Dataframe manipulation, aggregation, feature engineering, missing data handling" },
      { name: "NumPy", level: "Proficient", proficiency: 85, highlight: false, useCases: "Matrix computations, vectorized operations, numerical statistics" },
      { name: "Google Gemini API & GenAI", level: "Advanced", proficiency: 94, highlight: true, useCases: "Multi-agent workflows, prompt design, multimodal extraction, automated insights" }
    ]
  },
  {
    category: "Web Development & Frontend",
    description: "Modern, responsive, user-centric web architecture and clean layout design",
    skills: [
      { name: "HTML5", level: "Advanced", proficiency: 95, highlight: true, useCases: "Semantic page structures, accessibility, modern DOM hierarchy" },
      { name: "CSS3 & Modern Styling", level: "Advanced", proficiency: 92, highlight: true, useCases: "Tailwind CSS, flexbox/grid layout math, responsive media queries, fluid animations" },
      { name: "JavaScript", level: "Intermediate", proficiency: 82, highlight: true, useCases: "DOM manipulation, async fetch API, interactive widgets, client-side state" },
      { name: "Flask", level: "Intermediate", proficiency: 80, highlight: false, useCases: "Lightweight Python REST APIs, route controllers, backend model serving" },
      { name: "Quality Assurance (QA)", level: "Proficient", proficiency: 88, highlight: false, useCases: "Cross-browser testing, edge-case auditing, interface reliability" }
    ]
  },
  {
    category: "Developer Tools & Cloud",
    description: "Version control, professional code editors, and cloud data platforms",
    skills: [
      { name: "GitHub & Git", level: "Proficient", proficiency: 89, highlight: true, useCases: "Version control, feature branching, PR reviews, CI/CD basic workflows" },
      { name: "VS Code", level: "Advanced", proficiency: 95, highlight: false, useCases: "Primary IDE, debugger configurations, extensions, linting integration" },
      { name: "Microsoft Fabric", level: "Certified", proficiency: 86, highlight: true, useCases: "Enterprise lakehouses, Delta Parquet tables, data engineering workflows" },
      { name: "Google Cloud Platform", level: "Certified", proficiency: 88, highlight: true, useCases: "Vertex AI, GenAI Academy APIs, cloud storage, container deployment" }
    ]
  },
  {
    category: "ECE & Electronics Hardware",
    description: "Foundational hardware engineering, instrumentation, and sensor systems",
    skills: [
      { name: "Industrial Instrumentation", level: "Trained", proficiency: 85, highlight: true, useCases: "Ordnance Factory Chanda UNIT-III BPS, ME/EE sensor telemetry" },
      { name: "PCB Design & Manufacturing", level: "Certified", proficiency: 82, highlight: false, useCases: "Schematic capture, PCB routing, component soldering, hardware testing" },
      { name: "Solar PV & Power Systems", level: "Applied", proficiency: 84, highlight: false, useCases: "Solar shock machine, pulse regulation, battery management" }
    ]
  }
];

export const EXTRACURRICULAR = [
  {
    title: "Member — Google Developer Club (GDG / GDSC)",
    role: "Active Member & Tech Explorer",
    description: "Collaborates with fellow developers in hands-on workshops, cloud study jams, and community coding sessions exploring modern web and AI tools.",
    badge: "COMMUNITY LEADER"
  },
  {
    title: "Active Participant — Coding & Hackathons",
    role: "Competitive Hacker & Builder",
    description: "Regularly participates in 24h/48h hackathons (including NxtWave Buildathon and Kaggle AI Agent sprints), delivering rapid functional prototypes under high time pressure.",
    badge: "SPRINT BUILDER"
  }
];
