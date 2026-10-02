import { Service } from "@/types";

export const servicesData: Service[] = [
  {
    id: "impact",
    number: "01",
    name: "ORVYS Impact",
    tagline: "CSR Strategy, Corporate Partnerships & Ground Implementation",
    shortDescription: "CSR strategy, social impact programs, corporate partnerships and field implementation designed for measurable community outcomes.",
    fullDescription: "We assist corporate foundations and CSR leaders in transitioning from compliance-focused disbursements to structured, high-yield interventions. We design, mobilize, and govern programs on the ground across high-need geographies, ensuring full alignment with corporate intent and community realities.",
    capabilities: [
      "CSR Policy & Portfolio Strategy",
      "Baseline Need Assessments & Community Audits",
      "Corporate Foundation Operating Models",
      "Partner Due Diligence & NGO Ecosystem Selection",
      "Field Implementation Governance & Monitoring",
      "Regulatory Compliance (Section 135) & Impact Audits"
    ],
    deliverables: [
      "CSR 3-Year Strategic Roadmaps",
      "Ground Implementation Operating Manuals",
      "Partner Scorecards & Monitoring Frameworks",
      "Annual Social Return on Investment (SROI) Reports"
    ],
    targetStakeholders: ["Corporate Foundations", "CSR Committees", "ESG Directors", "Non-Profit Networks"],
    iconName: "HeartHandshake"
  },
  {
    id: "esg",
    number: "02",
    name: "ORVYS ESG",
    tagline: "ESG Strategy, Sustainability Architecture & Stakeholder Reporting",
    shortDescription: "ESG strategy, sustainability programs, BRSR reporting support, decarbonization pathways, and institutional stakeholder engagement.",
    fullDescription: "Integrating environmental, social, and governance priorities into core business strategy. We support mid-market and enterprise organizations with pragmatic sustainability roadmaps, BRSR/GRI alignment, and regional supply chain decarbonization.",
    capabilities: [
      "BRSR Core & Comprehensive Reporting Support",
      "Materiality Assessments & Stakeholder Engagement",
      "Supply Chain Decarbonization & Scope 3 Strategy",
      "Social Impact Metrics for ESG Disclosures",
      "Climate Risk & Regional Adaptation Planning"
    ],
    deliverables: [
      "Enterprise ESG Frameworks & Policies",
      "SEBI BRSR Compliance Dossiers",
      "Materiality Matrices & Action Plans",
      "Supply Chain Sustainability Guidelines"
    ],
    targetStakeholders: ["Chief Sustainability Officers", "Board Committees", "Investor Relations", "Operations Teams"],
    iconName: "Leaf"
  },
  {
    id: "advisory",
    number: "03",
    name: "ORVYS Advisory",
    tagline: "Strategic Advisory for Corporations, Governments & Institutions",
    shortDescription: "Strategic advisory for corporations, institutions and government stakeholders tackling systemic regional and sectoral challenges.",
    fullDescription: "Providing senior executive and governmental leadership with independent, evidence-backed counsel. We formulate multi-year institutional strategies, economic policy papers, public-private partnership (PPP) structures, and organizational transformation agendas.",
    capabilities: [
      "State-Level Development & Sector Strategy",
      "Public-Private Partnership (PPP) Structuring",
      "Institutional Policy Design & Whitepapers",
      "Market Entry & Regional Expansion Strategy",
      "Organizational Redesign for Impact Institutions"
    ],
    deliverables: [
      "Sectoral Vision Documents & Policy Briefs",
      "PPP Concession Frameworks & RFP Packages",
      "Institutional Transformation Roadmaps",
      "Feasibility & Diagnostic Studies"
    ],
    targetStakeholders: ["Government Departments", "Industry Associations", "Multilateral Bodies", "Corporate Leadership"],
    iconName: "Building2"
  },
  {
    id: "pmu",
    number: "04",
    name: "ORVYS PMU",
    tagline: "Program Management Units, Implementation Governance & MIS",
    shortDescription: "Program Management Units, governance structures, implementation monitoring, district MIS, and multi-stakeholder coordination.",
    fullDescription: "Embedding high-performing Program Management Units within government departments, university clusters, and large corporate programs. We bridge the gap between policy mandates and on-the-ground execution through rigorous governance, daily tracking, and rapid course correction.",
    capabilities: [
      "Turnkey PMU Setup & On-Ground Team Deployment",
      "Multi-District Milestone Tracking & MIS Portals",
      "Inter-Agency & Departmental Coordination",
      "Standard Operating Procedures (SOPs) & Toolkits",
      "Risk Mitigation & Rapid Issue Escalation Matrix"
    ],
    deliverables: [
      "Program Charters & Governance Frameworks",
      "Custom District-Level MIS Dashboards",
      "Weekly/Monthly Program Steering Reviews",
      "Execution Audits & Handover Documentation"
    ],
    targetStakeholders: ["Nodal State Agencies", "District Administrations", "State Skill Missions", "Program Directors"],
    iconName: "Workflow"
  },
  {
    id: "digital",
    number: "05",
    name: "ORVYS Digital",
    tagline: "Digital Transformation, Data Platforms & AI-Enabled Workflows",
    shortDescription: "Digital transformation, technology platforms, data systems and AI-enabled workflows tailored for large-scale impact programs.",
    fullDescription: "Modernizing social programs and institutional workflows with purpose-built digital architectures. We design lightweight mobile data collection, real-time analytics dashboards, automated verification pipelines, and AI-assisted skilling solutions.",
    capabilities: [
      "Civic & Social Program Tech Architecture",
      "Real-Time Data Collection & Verification Systems",
      "AI-Enabled Student/Beneficiary Tracking Systems",
      "Workflow Automation for Field Operations",
      "Data Security & Public Sector Compliance"
    ],
    deliverables: [
      "Technical Architecture & System Requirements (SRS)",
      "Analytics Dashboards & Operational MIS",
      "API Integration & Interoperability Frameworks",
      "Field Worker Digital Toolkits"
    ],
    targetStakeholders: ["Chief Information Officers", "Digital Program Leads", "Field Directors", "E-Governance Units"],
    iconName: "Cpu"
  },
  {
    id: "learning",
    number: "06",
    name: "ORVYS Learning",
    tagline: "Education, Employability, Skilling & Workforce Readiness",
    shortDescription: "Education, employability, skilling, curriculum development, faculty development and workforce readiness across Tier 2 & Tier 3 hubs.",
    fullDescription: "Transforming technical and higher education ecosystems across Bihar and Purvanchal. We build sustainable bridges between academic institutions, engineering colleges, polytechnics, and high-growth industry sectors through structured curriculum interventions.",
    capabilities: [
      "Industry-Aligned Curriculum Co-Creation",
      "Faculty Development Programs (FDPs) in Emerging Tech",
      "Engineering College & Polytechnic Modernization",
      "Student Onboarding, Mentorship & Capstone Labs",
      "Corporate Recruitment & Apprenticeship Linkages"
    ],
    deliverables: [
      "Credit-Aligned Skill Modules (AI/Cloud/Core)",
      "Faculty Master Trainer Certifications",
      "Institutional Readiness Scorecards",
      "Campus-to-Industry Placement Bridges"
    ],
    targetStakeholders: ["State Technical Universities", "Engineering Colleges", "Polytechnic Directorates", "Industry Skill Councils"],
    iconName: "GraduationCap"
  },
  {
    id: "insights",
    number: "07",
    name: "ORVYS Insights",
    tagline: "Research, Monitoring & Evaluation, Impact Measurement",
    shortDescription: "Research, monitoring & evaluation (M&E), impact measurement, interactive dashboards and evidence-based decision making.",
    fullDescription: "Providing rigorous empirical foundations for social investments and public policy. Our research team conducts mixed-methods baseline-endline studies, randomized evaluations, econometric modeling, and longitudinal impact assessments across rural and semi-urban clusters.",
    capabilities: [
      "Mixed-Methods Baseline & Endline Surveys",
      "Third-Party Monitoring & Quality Assurance",
      "Social Return on Investment (SROI) Studies",
      "Longitudinal Beneficiary Tracking",
      "Policy Whitepapers & Sectoral Landscape Studies"
    ],
    deliverables: [
      "Comprehensive Impact Assessment Reports",
      "Statistical Evaluation Briefs & Datasets",
      "Interactive Public/Executive Dashboards",
      "Evidence-Based Policy Recommendations"
    ],
    targetStakeholders: ["Research Foundations", "CSR Committees", "Development Banks", "Policy Think Tanks"],
    iconName: "BarChart3"
  }
];
