import { CaseStudy } from "@/types";

export interface EcosystemCaseStudy extends CaseStudy {
  ecosystemBenchmark: string;
  orvysPOV: string;
  facilitationRole: string;
  institutionalBridge: string;
}

export const caseStudiesData: EcosystemCaseStudy[] = [
  {
    id: "cs-01",
    slug: "scaling-digital-ai-skills-bihar-engineering",
    number: "01",
    title: "Statewide Digital & AI Skills: Institutional Blueprint",
    subtitle: "Strategic analysis and operational roadmap for deploying emerging technology curricula across Bihar Engineering University (BEU) constituent colleges.",
    category: ["Education", "Skilling", "Technology"],
    primaryCategory: "Education & Skilling",
    region: "Bihar (Statewide — BEU Network)",
    year: "2025–2026 Strategic Blueprint",
    clientType: "Bihar Engineering Ecosystem & Corporate CSR Partners",
    overview: "An ORVYS facilitation framework analyzing large-scale digital education models, designed for direct implementation across all engineering colleges affiliated with Bihar Engineering University (BEU).",
    ecosystemBenchmark: "Benchmark initiatives across India demonstrate that standard digital courses achieve <20% completion without embedded campus facilitators and credit-linked laboratory integration.",
    orvysPOV: "Pure online training models fail in Tier 2/3 engineering ecosystems. True outcomes require formal university MoUs, faculty co-delivery, hands-on lab sandboxes, and structured industry recruitment bridges.",
    facilitationRole: "ORVYS acts as the on-ground strategic facilitator—connecting corporate CSR capital and technology partners with Bihar Engineering University's network of 38+ district engineering institutions.",
    institutionalBridge: "Backed by institutional alignment with Bihar Engineering University (BEU), providing immediate access to engineering campuses and students across North & South Bihar.",
    challenge: "Engineering colleges across Bihar's 38 districts face urgent demand to align student skills with industry AI, Cloud, and Data Engineering requirements, yet lack dedicated corporate hiring pipelines and advanced faculty training toolkits.",
    approach: [
      "Leverage ORVYS's institutional gateway with Bihar Engineering University (BEU) to establish credit-aligned semester tracks.",
      "Facilitate partnerships with leading technology enterprises and corporate foundations seeking validated CSR skilling impact.",
      "Deploy localized Train-the-Trainer (ToT) programs upskilling resident engineering faculty across all district campuses.",
      "Provide real-time digital PMU telemetry tracking student lab completions, coding assessments, and capstone submissions."
    ],
    implementation: [
      {
        phase: "Phase 1: Institutional Alignment & Campus Diagnostics",
        description: "Engaging BEU leadership, university deans, and district college principals to audit computer labs and connectivity infrastructure.",
        milestone: "Diagnostic completed across Bihar engineering colleges; university circulars issued"
      },
      {
        phase: "Phase 2: Corporate CSR Integration & Master Faculty Bootcamps",
        description: "Structuring corporate CSR sponsorship packages and training 100+ university professors in applied AI development.",
        milestone: "Master faculty certified; curriculum integrated into academic lab hours"
      },
      {
        phase: "Phase 3: Statewide Student Capstones & Placement Corridors",
        description: "Executing project hackathons, industry-mentored capstones, and direct interview pipelines for graduating cohorts.",
        milestone: "Statewide engineering talent showcase & corporate hiring drives"
      }
    ],
    outcomes: [
      {
        metric: "38+",
        label: "Engineering Colleges Accessible",
        detail: "Full institutional gateway across Bihar Engineering University network in all districts"
      },
      {
        metric: "25,000+",
        label: "Target Student Reach",
        detail: "Undergraduate engineering students across Computer Science, Electronics, and Core branches"
      },
      {
        metric: "100%",
        label: "University Alignment",
        detail: "Program modules structured in harmony with statutory BEU academic guidelines"
      },
      {
        metric: "Zero Latency",
        label: "On-Ground PMU Monitoring",
        detail: "District-level coordinators ensuring daily laboratory uptime and student attendance"
      }
    ],
    highlights: [
      "Direct institutional bridge via Bihar Engineering University (BEU) collaboration",
      "Ready-to-deploy turnkey PMU infrastructure across all Bihar district headquarters",
      "Transparent SROI and CSR Section 135 reporting dossiers for corporate sponsors"
    ],
    featuredImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "cs-02",
    slug: "corporate-csr-industry-academia-consortiums",
    number: "02",
    title: "Industry–Academia CoEs: Corporate CSR Delivery Model",
    subtitle: "Facilitating corporate CSR foundations to establish Centers of Excellence (CoEs) inside regional government universities.",
    category: ["Government Advisory", "CSR", "Partnerships"],
    primaryCategory: "Corporate Partnerships",
    region: "Bihar & Delhi NCR",
    year: "2025 Advisory Framework",
    clientType: "Enterprise CSR Foundations & State Technical Bodies",
    overview: "A strategic facilitation study examining how corporate social investments can move beyond short-term donations into enduring university Centers of Excellence.",
    ecosystemBenchmark: "Corporate CSR funds exceeding ₹500 Cr are deployed annually across India in youth skilling, but over 60% lack institutional anchoring inside accredited state universities.",
    orvysPOV: "Corporates achieve 4x higher social return on investment (SROI) when programs are embedded within state technical universities rather than temporary private training centers.",
    facilitationRole: "ORVYS serves as the neutral institutional bridge: drafting tripartite MoUs, securing university administration approvals, and managing ongoing campus operations.",
    institutionalBridge: "Direct engagement channel with university vice-chancellors, registrars, and technical boards across Eastern India.",
    challenge: "Enterprise CSR heads struggle with administrative delays and lack of local coordination when trying to set up state-of-the-art tech labs in non-metro public universities.",
    approach: [
      "Standardize tripartite partnership agreements establishing transparent roles for corporate donors, university leadership, and ORVYS execution teams.",
      "Design turn-key Center of Excellence blueprints covering physical hardware, cloud compute grants, and industry-curated modules.",
      "Embed full-time on-campus coordinators to ensure daily lab utilization and continuous student mentoring."
    ],
    implementation: [
      {
        phase: "Phase 1: Tripartite Structuring & Legal Clearances",
        description: "Aligning corporate CSR mandates with university statutes to pass necessary academic council approvals.",
        milestone: "Formal Tripartite MoU executed with zero bureaucratic friction"
      },
      {
        phase: "Phase 2: Center of Excellence Commissioning",
        description: "Procuring and establishing high-performance computing labs inside university campus premises.",
        milestone: "Physical lab operational with branded corporate CSR recognition"
      },
      {
        phase: "Phase 3: Continuous Program Delivery & SROI Audits",
        description: "Managing regular batches, student project assessments, and independent statutory CSR impact audits.",
        milestone: "First annual corporate impact report published with verified metrics"
      }
    ],
    outcomes: [
      {
        metric: "100%",
        label: "Compliance Assurance",
        detail: "Full alignment with Section 135 CSR norms and Schedule VII guidelines"
      },
      {
        metric: "4x",
        label: "Higher SROI Multiplier",
        detail: "Through permanent infrastructure anchoring within state institutions"
      },
      {
        metric: "365 Days",
        label: "Active Campus Operations",
        detail: "Year-round training cycles integrated into official university semester calendars"
      }
    ],
    highlights: [
      "Eliminates administrative bottlenecks between corporate boards and university administrations",
      "Delivers branded, highly visible CSR assets with verifiable student impact"
    ],
    featuredImage: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "cs-03",
    slug: "csr-field-execution-bihar-purvanchal",
    number: "03",
    title: "Ground-Level CSR Delivery in Purvanchal & Bihar",
    subtitle: "A strategic assessment of grassroots program implementation and the critical necessity of local field units.",
    category: ["CSR", "Program Management", "Implementation"],
    primaryCategory: "CSR & Social Impact",
    region: "Bihar & Purvanchal (Eastern UP)",
    year: "2024–2025 Case Perspective",
    clientType: "National Manufacturing & Tech Conglomerates",
    overview: "An analytical review of grassroots CSR interventions across eastern districts, highlighting why local administrative presence determines long-term beneficiary retention.",
    ecosystemBenchmark: "Major industrial CSR programs in Eastern India face high participant dropout rates when field operations are outsourced to distant generic agencies.",
    orvysPOV: "District-level operational credibility and understanding of local socio-economic nuances (harvest cycles, local transit, community leadership) are essential to maintain 90%+ retention.",
    facilitationRole: "ORVYS provides on-ground execution governance, deploying trained district managers and verified mobile telemetry across block-level centers.",
    institutionalBridge: "Established relationships with district collectorates, local civic bodies, and community institutions across 36+ districts.",
    challenge: "Corporate foundations funding impactful livelihood and technical skill initiatives in Eastern UP and Bihar often lack visibility into daily ground-level operations.",
    approach: [
      "Conduct rigorous block-level baseline audits to identify infrastructure gaps and realistic community training schedules.",
      "Deploy dedicated ORVYS field coordinators equipped with GPS-enabled real-time attendance and milestone tracking apps.",
      "Institute quarterly independent third-party monitoring to provide donors with verifiable evidence of change."
    ],
    implementation: [
      {
        phase: "Phase 1: Ground Feasibility & Block Selection",
        description: "Mapping aspirational districts and identifying local community centers for maximum demographic impact.",
        milestone: "Baseline diagnostic completed across target blocks"
      },
      {
        phase: "Phase 2: Localized Mobilization & Trainer Deployment",
        description: "Onboarding certified vocational and digital trainers with vernacular language fluency.",
        milestone: "100% batch capacity mobilized with zero dropouts in first 60 days"
      },
      {
        phase: "Phase 3: Economic Linkages & Outcome Reporting",
        description: "Connecting trained cohorts with micro-enterprise linkages, local MSMEs, and formal employment channels.",
        milestone: "Comprehensive SROI evaluation dossier handed over to corporate donor"
      }
    ],
    outcomes: [
      {
        metric: "36+",
        label: "Districts Ready for Deployment",
        detail: "Established field coordination footprint across Bihar and Eastern UP"
      },
      {
        metric: "90%+",
        label: "Target Completion Threshold",
        detail: "Achieved through active community mobilization and localized scheduling"
      },
      {
        metric: "100%",
        label: "Geotagged Telemetry",
        detail: "Real-time attendance and milestone tracking accessible via online dashboard"
      }
    ],
    highlights: [
      "Deep understanding of eastern regional dynamics and administrative protocols",
      "Zero-latency reporting to corporate CSR committees and board stakeholders"
    ],
    featuredImage: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "cs-04",
    slug: "realtime-field-telemetry-digital-systems",
    number: "04",
    title: "Digital Telemetry for Social Programs",
    subtitle: "Architecting zero-data-loss field monitoring systems tailored for low-connectivity regional environments.",
    category: ["Digital Transformation", "AI", "Impact"],
    primaryCategory: "Technology & Digital",
    region: "Pan-India & Eastern Corridor",
    year: "2025 Tech Architecture",
    clientType: "Development Foundations & PMU Operations",
    overview: "A technical systems blueprint demonstrating how lightweight offline mobile applications and executive dashboards eliminate reporting delays in social sector programs.",
    ecosystemBenchmark: "Conventional paper-based or generic survey tools suffer 45+ day reporting latency and significant data discrepancies in remote rural blocks.",
    orvysPOV: "Digital telemetry must be built offline-first with automated cryptographic verification, GPS stamping, and instant aggregation into state-level dashboards.",
    facilitationRole: "ORVYS designs and deploys custom digital MIS portals, integrating field data pipelines with executive decision dashboards for government and corporate clients.",
    institutionalBridge: "Deployable across any district, college campus, or community center with zero specialized hardware requirements.",
    challenge: "State administrators and corporate funders frequently make strategic resource allocation decisions based on outdated quarterly reports.",
    approach: [
      "Develop lightweight Android mobile tools that operate 100% offline and automatically sync upon detecting cellular signals.",
      "Build automated data anomaly detection algorithms to flag duplicate records or suspicious survey patterns.",
      "Deliver intuitive executive dashboards for state secretaries, foundation heads, and district collectors."
    ],
    implementation: [
      {
        phase: "Phase 1: Architecture & UX Design",
        description: "Optimizing data collection workflows for local field workers with bilingual Hindi/English interfaces.",
        milestone: "Usability testing completed with on-ground field teams"
      },
      {
        phase: "Phase 2: Platform Deployment & Data Sync Engine",
        description: "Configuring cloud database with automated backup, differential syncing, and end-to-end encryption.",
        milestone: "100% offline data integrity validated during field trials"
      },
      {
        phase: "Phase 3: Executive Analytics & Automated Digest",
        description: "Launching automated weekly executive digests and real-time district performance leaderboards.",
        milestone: "Live dashboard operational for program steering committees"
      }
    ],
    outcomes: [
      {
        metric: "< 48 Hrs",
        label: "Data Availability Latency",
        detail: "Reduced from traditional 45-day survey cycles to near real-time ingestion"
      },
      {
        metric: "100%",
        label: "Audit Traceability",
        detail: "Every record timestamped, geotagged, and cryptographically verified"
      },
      {
        metric: "Zero",
        label: "Data Loss in Low Bandwidth",
        detail: "Engineered specifically for remote rural and semi-urban connectivity conditions"
      }
    ],
    highlights: [
      "Customizable for education, healthcare, skilling, and infrastructure monitoring",
      "Executive role-based access for board directors and district officers"
    ],
    featuredImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "cs-05",
    slug: "faculty-capacity-building-modernization",
    number: "05",
    title: "Engineering Faculty Enablement & Modern Pedagogy",
    subtitle: "A sustainable institutional strategy for training university professors in applied computing and modern laboratory facilitation.",
    category: ["Learning", "Faculty Development", "Skilling"],
    primaryCategory: "Institutional Capacity",
    region: "Bihar & Purvanchal Universities",
    year: "2025 Institutional Blueprint",
    clientType: "State Technical Universities & Technical Boards",
    overview: "A master institutional framework outlining how continuous Faculty Development Programs (FDPs) create permanent internal teaching capacity across regional engineering institutions.",
    ecosystemBenchmark: "Over 80% of corporate skilling interventions bypass permanent faculty, resulting in immediate program decay once external trainer contracts expire.",
    orvysPOV: "True institutional transformation happens only when resident university faculty are empowered as master mentors and certified in contemporary toolchains.",
    facilitationRole: "ORVYS partners with apex technology firms to deliver certified Faculty Development Programs (FDPs) directly to college department heads and professors.",
    institutionalBridge: "Direct coordination with Bihar Engineering University (BEU) academic deans and department chairpersons.",
    challenge: "Faculty members in regional engineering colleges face limited opportunities for direct industry exposure, widening the curriculum-employability gap for students.",
    approach: [
      "Structure multi-tier Faculty Enablement Modules (AI/ML, Cloud Native, IoT, Cyber Security) recognized for academic credit.",
      "Conduct intensive residential and hybrid bootcamps led by senior enterprise technology architects.",
      "Establish permanent Faculty Mentorship Cells within each participating engineering institution."
    ],
    implementation: [
      {
        phase: "Phase 1: Faculty Competency Mapping",
        description: "Benchmarking current technical syllabus and faculty specialization across all affiliated engineering campuses.",
        milestone: "Competency matrix finalized across 6 engineering disciplines"
      },
      {
        phase: "Phase 2: Master Trainer Bootcamps",
        description: "Conducting hands-on masterclasses covering industry tools, code repositories, and laboratory assessment rubrics.",
        milestone: "100+ senior faculty members certified as Master Mentors"
      },
      {
        phase: "Phase 3: Institutionalization & Lab Handover",
        description: "Transitioning classroom delivery entirely to certified resident faculty with ongoing virtual support.",
        milestone: "Self-sustaining internal academic delivery established across campuses"
      }
    ],
    outcomes: [
      {
        metric: "100+",
        label: "Target Master Faculty",
        detail: "Professors and lecturers across all Bihar Engineering University campuses"
      },
      {
        metric: "100%",
        label: "Institutional Retention",
        detail: "Knowledge permanently retained inside the university ecosystem"
      },
      {
        metric: "5x",
        label: "Cost-Efficiency vs External Vendors",
        detail: "Leveraging empowered faculty drastically reduces recurring corporate training spend"
      }
    ],
    highlights: [
      "Permanent institutional capability upgrade aligned with NBA/NAAC accreditations",
      "Strong faculty co-ownership ensuring year-round laboratory excellence"
    ],
    featuredImage: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "cs-06",
    slug: "bito-global-trade-investment-bihar-corridor",
    number: "06",
    title: "Global Trade & Investment Gateway: Institutional Alignment with BITO",
    subtitle: "Strategic facilitation framework connecting global NRI networks, enterprise trade corridors, and investment pipelines with Bihar's industrial and trade ecosystem.",
    category: ["Trade Advisory", "Global Partnerships", "Investment"],
    primaryCategory: "Trade & Global Advisory",
    region: "Bihar & International Diaspora Networks",
    year: "2025–2026 Active Partnership",
    clientType: "Trade Organizations & Global NRI Consortiums",
    clientName: "Bihar International Trade Organization (BITO)",
    clientUrl: "https://bitoworld.in/",
    overview: "A strategic partnership and facilitation framework with Bihar International Trade Organization (BITO) to bridge international business, NRI investments, and industrial partnerships directly into regional trade nodes across Bihar.",
    ecosystemBenchmark: "International trade initiatives aimed at regional states often lack structured on-ground execution units, resulting in high MoU attrition and slow investment setup.",
    orvysPOV: "Global capital and trade networks require dedicated PMU operations and district-level administrative navigation to convert high-level international trade dialogues into operating enterprises.",
    facilitationRole: "ORVYS serves as an operating advisory partner for BITO, structuring trade facilitation roadmaps, investor landing infrastructure, and institutional linkages between global trade bodies and local state nodes.",
    institutionalBridge: "Direct collaborative alignment with Bihar International Trade Organization (BITO) and global NRI diaspora networks across North America, Middle East, and Southeast Asia.",
    challenge: "Global investors and NRI trade leaders face institutional complexity and localized regulatory hurdles when trying to deploy capital or establish trade supply chains in regional Indian hubs.",
    approach: [
      "Establish streamlined investor facilitation dossiers for trade corridors and industrial hubs.",
      "Facilitate high-impact B2B and institutional roundtables connecting global NRI entrepreneurs with regional manufacturers.",
      "Deploy localized PMU teams to fast-track administrative, infrastructure, and academic-industry alignment across Bihar."
    ],
    implementation: [
      {
        phase: "Phase 1: Global Diaspora & Trade Corridor Mapping",
        description: "Cataloging NRI trade groups, investor interest sectors, and state policy incentives for targeted matchmaking.",
        milestone: "Global trade matrix and investor briefing dossiers finalized"
      },
      {
        phase: "Phase 2: Institutional Summit & Tripartite MoUs",
        description: "Convening international trade summits and executing bilateral agreements with state economic bodies and BITO leadership.",
        milestone: "Formal trade agreements signed across key growth verticals"
      },
      {
        phase: "Phase 3: Operational PMU & Investor Landing Facilitation",
        description: "On-ground PMU assistance providing end-to-end support for site selection, university skill pipelines, and local regulatory clearances.",
        milestone: "Active trade landing cell operational with zero-latency progress tracking"
      }
    ],
    outcomes: [
      {
        metric: "Global",
        label: "Diaspora Reach",
        detail: "Direct connection with BITO global chapters across US, UAE, Europe, and Asia"
      },
      {
        metric: "100%",
        label: "Trade Facilitation Alignment",
        detail: "Full synergy between global trade objectives and regional industrial policy mandates"
      },
      {
        metric: "Turnkey",
        label: "On-Ground PMU Support",
        detail: "District-level navigation enabling rapid project execution in Bihar"
      }
    ],
    highlights: [
      "Strategic partnership with Bihar International Trade Organization (BITO)",
      "Direct channel for global NRI investments into regional trade & industrial corridors",
      "Comprehensive end-to-end PMU landing framework for international enterprises"
    ],
    featuredImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80"
  }
];
