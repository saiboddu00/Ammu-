export interface EducationMilestone {
  id: string;
  degree: string;
  field?: string;
  institution: string;
  metricLabel: string;
  metricValue: string;
  secondaryLabel: string;
  secondaryValue: string;
  accent: string;
  gradient: string;
  summary: string;
  highlights: string[];
}

export interface LearningGoal {
  id: string;
  title: string;
  stage: "foundational" | "goal";
  stageLabel: string;
  description: string;
  accent: string;
}

export const PROFILE = {
  monogram: "JT",
  name: "Jadda Tejaswini",
  role: "Computer Science Engineering Undergraduate & Aspiring AI/ML Engineer",
  heroSubtitle:
    "Computer Science Engineering Student & Aspiring AI/ML Engineer.",
  eyebrow: "HELLO, WORLD!",
  heroIntro: "Hey, I'm",
  heroDescription:
    "A curious and motivated Computer Science Engineering undergraduate exploring Artificial Intelligence, Machine Learning, and Data Science. Passionate about learning new technologies, solving problems, and developing practical technical skills.",
  status: "Open to Internships",
  email: "tejaswinijadda@gmail.com",
  linkedin: "https://www.linkedin.com/in/tejaswini-jadda-673004380",
  location: "India",
  resumePath: "/Jadda_Tejaswini_Resume.pdf",
  resumeFileName: "Jadda_Tejaswini_Resume.pdf",
  footerText: "© Jadda Tejaswini. Designed with curiosity and creativity.",
} as const;

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "activities", label: "Activities" },
  { id: "contact", label: "Contact" },
] as const;

export const ABOUT_CONTENT = {
  heading: "A curious mind with a passion for technology.",
  paragraphs: [
    "I am Jadda Tejaswini, a Computer Science Engineering undergraduate at Annamacharya Institute of Technology and Sciences (AITS), with a CGPA of 9.04/10.",
    "I have foundational knowledge of Python, C, and Java and a strong interest in Artificial Intelligence, Machine Learning, and Data Science.",
    "I am eager to strengthen my technical knowledge, gain practical industry experience, and contribute to real-world projects. I enjoy learning new technologies and approaching challenges with a problem-solving mindset.",
    "My career goal is to build practical experience in AI/ML and grow toward entry-level engineering opportunities.",
  ],
  highlights: [
    {
      id: "cgpa",
      value: 9.04,
      decimals: 2,
      suffix: "/10",
      label: "B.Tech CGPA",
      accent: "#7C3AED",
      surface: "from-[#7C3AED]/15 via-[#C4B5FD]/15 to-transparent",
    },
    {
      id: "graduation",
      value: 2028,
      decimals: 0,
      suffix: "",
      label: "Expected Graduation",
      accent: "#F472B6",
      surface: "from-[#F472B6]/15 via-[#FF8066]/10 to-transparent",
    },
    {
      id: "code-langs",
      value: 3,
      decimals: 0,
      suffix: "",
      label: "Programming Languages",
      accent: "#38BDF8",
      surface: "from-[#38BDF8]/15 via-[#C4B5FD]/10 to-transparent",
    },
    {
      id: "spoken-langs",
      value: 3,
      decimals: 0,
      suffix: "",
      label: "Languages Spoken",
      accent: "#6EE7B7",
      surface: "from-[#6EE7B7]/15 via-[#38BDF8]/10 to-transparent",
    },
  ],
} as const;

export const EDUCATION_MILESTONES: EducationMilestone[] = [
  {
    id: "btech",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    institution: "Annamacharya Institute of Technology and Sciences (AITS)",
    metricLabel: "CGPA",
    metricValue: "9.04/10",
    secondaryLabel: "Expected Graduation",
    secondaryValue: "2028",
    accent: "#7C3AED",
    gradient: "from-[#7C3AED] via-[#F472B6] to-[#38BDF8]",
    summary:
      "Pursuing undergraduate studies in Computer Science and Engineering while building strong programming foundations and exploring Artificial Intelligence, Machine Learning, and Data Science.",
    highlights: [
      "Maintaining a 9.04/10 CGPA across undergraduate coursework.",
      "Selected for an AI/ML role in the student club.",
      "Participated in a college hackathon ideation challenge.",
    ],
  },
  {
    id: "intermediate",
    degree: "Intermediate Education",
    institution: "Sri Sai Vivekananda College",
    metricLabel: "Score",
    metricValue: "836/1000",
    secondaryLabel: "Percentage",
    secondaryValue: "83.6%",
    accent: "#F472B6",
    gradient: "from-[#F472B6] via-[#FF8066] to-[#C4B5FD]",
    summary:
      "Completed higher secondary academic preparation with an emphasis on analytical reasoning and quantitative problem-solving.",
    highlights: [
      "Achieved 836 out of 1000 marks (83.6%).",
      "Strengthened mathematical and logical foundations for Computer Science.",
    ],
  },
  {
    id: "secondary",
    degree: "Secondary School Education",
    institution: "Sri Chaitanya Children's Academy",
    metricLabel: "Score",
    metricValue: "521/600",
    secondaryLabel: "Percentage",
    secondaryValue: "86.83%",
    accent: "#38BDF8",
    gradient: "from-[#38BDF8] via-[#6EE7B7] to-[#7C3AED]",
    summary:
      "Built disciplined study habits, academic consistency, and curiosity across core science and mathematics subjects.",
    highlights: [
      "Achieved 521 out of 600 marks (86.83%).",
      "Consistent academic performance establishing readiness for engineering.",
    ],
  },
];

export const SKILLS_DATA = {
  programming: [
    {
      name: "Python",
      level: "Basic",
      symbol: "Py",
      accent: "#38BDF8",
      ring: "#7C3AED",
      description:
        "Core syntax, control flow, and foundational problem-solving scripts as the primary language for AI/ML exploration.",
    },
    {
      name: "C",
      level: "Basic",
      symbol: "C",
      accent: "#7C3AED",
      ring: "#C4B5FD",
      description:
        "Structured programming basics, logical reasoning, loops, conditionals, and foundational computer science concepts.",
    },
    {
      name: "Java",
      level: "Basic",
      symbol: "Jv",
      accent: "#FF8066",
      ring: "#F472B6",
      description:
        "Introductory object-oriented syntax, fundamental program structure, and core logic building.",
    },
  ],
  pythonFundamentals: [
    {
      title: "Variables",
      detail: "Storing, naming, and manipulating program state cleanly.",
      accent: "#7C3AED",
    },
    {
      title: "Data types",
      detail: "Working with numbers, strings, booleans, and core collections.",
      accent: "#F472B6",
    },
    {
      title: "Conditional statements",
      detail: "Branching program decisions with if, elif, and else logic.",
      accent: "#38BDF8",
    },
    {
      title: "Loops",
      detail: "Automating repetition and traversal using for and while loops.",
      accent: "#6EE7B7",
    },
    {
      title: "Basic problem-solving",
      detail: "Breaking beginner programming problems into clear, testable steps.",
      accent: "#FF8066",
    },
  ],
  currentlyLearning: [
    {
      title: "Artificial Intelligence fundamentals",
      tag: "Currently Learning",
      accent: "#7C3AED",
      note: "Core ideas behind intelligent systems, search, and reasoning.",
    },
    {
      title: "Machine Learning fundamentals",
      tag: "Currently Learning",
      accent: "#F472B6",
      note: "Understanding how models learn patterns from structured data.",
    },
    {
      title: "Data Science fundamentals",
      tag: "Currently Learning",
      accent: "#38BDF8",
      note: "Exploring how raw datasets are cleaned, analyzed, and interpreted.",
    },
  ],
  careerInterests: [
    { name: "Artificial Intelligence", accent: "#7C3AED" },
    { name: "Machine Learning", accent: "#F472B6" },
    { name: "Data Science", accent: "#38BDF8" },
    { name: "Software Development", accent: "#FF8066" },
    { name: "Problem Solving", accent: "#6EE7B7" },
  ],
} as const;

export const AI_LEARNING_GOALS: LearningGoal[] = [
  {
    id: "python-foundations",
    title: "Strengthening Python programming fundamentals.",
    stage: "foundational",
    stageLabel: "Current Foundation",
    description:
      "Building fluency with variables, data types, conditionals, loops, and structured problem-solving.",
    accent: "#38BDF8",
  },
  {
    id: "ai-concepts",
    title: "Understanding Artificial Intelligence concepts.",
    stage: "foundational",
    stageLabel: "Current Foundation",
    description:
      "Developing conceptual clarity around intelligent systems and modern AI foundations.",
    accent: "#7C3AED",
  },
  {
    id: "data-preprocessing",
    title: "Exploring data preprocessing.",
    stage: "goal",
    stageLabel: "Learning Goal",
    description:
      "Preparing raw datasets through cleaning, formatting, and handling missing values.",
    accent: "#6EE7B7",
  },
  {
    id: "feature-engineering",
    title: "Learning feature engineering.",
    stage: "goal",
    stageLabel: "Learning Goal",
    description:
      "Transforming raw attributes into meaningful signals for machine learning models.",
    accent: "#C4B5FD",
  },
  {
    id: "supervised-learning",
    title: "Understanding supervised learning.",
    stage: "goal",
    stageLabel: "Learning Goal",
    description:
      "Studying labeled training workflows for classification and regression tasks.",
    accent: "#F472B6",
  },
  {
    id: "unsupervised-learning",
    title: "Understanding unsupervised learning.",
    stage: "goal",
    stageLabel: "Learning Goal",
    description:
      "Discovering hidden structure, clustering, and patterns within unlabeled data.",
    accent: "#FF8066",
  },
  {
    id: "practical-ml",
    title: "Developing practical machine learning experience.",
    stage: "goal",
    stageLabel: "Learning Goal",
    description:
      "Applying core theory to hands-on notebooks, student club initiatives, and internships.",
    accent: "#38BDF8",
  },
];

export const ACTIVITIES = {
  hackathon: {
    badge: "Hackathon Concept · Not a Commercial Product",
    title: "College Hackathon Participation",
    concept: "One Lightweight Layer – Multiple Layers of Warmth",
    description:
      "Contributed to a temperature-adjustable lightweight garment concept focused on providing multiple levels of warmth through a lightweight design.",
    note: "Presented as an early-stage college hackathon concept exploring adaptive thermal comfort without bulky layering.",
  },
  club: {
    badge: "Student Leadership & Technical Role",
    title: "AI/ML Student Club",
    roleSummary:
      "Selected for an Artificial Intelligence and Machine Learning role in a student club.",
    description:
      "This opportunity reflects my interest in exploring AI/ML concepts and developing practical technical knowledge.",
  },
} as const;

export const PROJECTS_EXPERIENCE = {
  heading: "From Learning to Building",
  statement:
    "Currently strengthening my programming and AI/ML foundations and seeking opportunities to apply my knowledge through practical projects.",
  internshipObjective:
    "Seeking a beginner-friendly AI/ML internship to gain hands-on experience, understand industry workflows, and contribute to real-world technical projects.",
  upcomingTracks: [
    {
      title: "Python Problem-Solving Foundations",
      status: "Coming Soon",
      accent: "#38BDF8",
      focus:
        "Structured coding exercises and foundational logic modules built with Python.",
    },
    {
      title: "Data Preprocessing & Exploration",
      status: "Coming Soon",
      accent: "#6EE7B7",
      focus:
        "Upcoming hands-on practice exploring data cleaning, transformation, and analysis workflows.",
    },
    {
      title: "Introductory Machine Learning Labs",
      status: "Coming Soon",
      accent: "#F472B6",
      focus:
        "Future beginner experiments applying supervised and unsupervised learning concepts.",
    },
  ],
} as const;

export const PERSONAL_STRENGTHS = [
  {
    id: "quick-learner",
    title: "Quick Learner",
    description:
      "Picks up unfamiliar concepts rapidly and turns curiosity into structured understanding.",
    accent: "#7C3AED",
    span: "md:col-span-2",
  },
  {
    id: "problem-solving",
    title: "Problem-Solving Mindset",
    description:
      "Approaches technical challenges methodically, breaking problems into clear logical steps.",
    accent: "#F472B6",
    span: "md:col-span-2",
  },
  {
    id: "adaptable",
    title: "Adaptable",
    description:
      "Comfortable stepping into new tools, learning environments, and collaborative student teams.",
    accent: "#38BDF8",
    span: "md:col-span-1",
  },
  {
    id: "responsible",
    title: "Responsible",
    description:
      "Dependable and consistent with academic commitments, deadlines, and team contributions.",
    accent: "#6EE7B7",
    span: "md:col-span-1",
  },
  {
    id: "academic-performance",
    title: "Strong Academic Performance",
    description:
      "Demonstrated by a 9.04/10 B.Tech CGPA and consistently high scores across schooling.",
    accent: "#FF8066",
    span: "md:col-span-2",
  },
  {
    id: "willingness-to-learn",
    title: "Willingness to Learn New Technologies",
    description:
      "Actively exploring AI, Machine Learning, and Data Science fundamentals beyond coursework.",
    accent: "#C4B5FD",
    span: "md:col-span-2",
  },
] as const;

export const SPOKEN_LANGUAGES = [
  {
    name: "Telugu",
    nativeLabel: "తెలుగు",
    accent: "#7C3AED",
    gradient: "from-[#7C3AED]/20 to-[#C4B5FD]/25",
  },
  {
    name: "English",
    nativeLabel: "English",
    accent: "#38BDF8",
    gradient: "from-[#38BDF8]/20 to-[#6EE7B7]/25",
  },
  {
    name: "Tamil",
    nativeLabel: "தமிழ்",
    accent: "#F472B6",
    gradient: "from-[#F472B6]/20 to-[#FF8066]/25",
  },
] as const;

export const INTERNSHIP_INFO = {
  heading: "Ready to Learn. Ready to Grow.",
  description:
    "I am currently seeking a beginner-friendly internship in Artificial Intelligence or Machine Learning where I can strengthen my technical skills, gain practical industry experience, and contribute to meaningful projects.",
  duration: "1–3 months",
  environment: "Remote",
} as const;
