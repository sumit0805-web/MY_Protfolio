import { ProfileData, SkillCategory, Project, EducationItem } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Sumit Kumar',
  headline: 'Frontend Developer & 2nd Year CSE (AI & ML) Student',
  subheadline: 'Focusing on clean, accessible interfaces with React and TypeScript, supported by foundational programming in Python and C.',
  summary:
    'Frontend Developer and second-year undergraduate in Computer Science & Engineering (AI & ML) at RVITM Bengaluru. Experienced in building structured web applications with React, TypeScript, and Node.js, with a grounded foundation in Python and C programming.',
  location: 'Samastipur, Bihar',
  academicLocation: 'RVITM, Bengaluru',
  email: 'sumitkumar51423@gmail.com',
  phone: '+91 96087 05122',
  linkedin: 'https://linkedin.com/in/sumit-kumar-600357378',
  github: 'https://github.com',
  statusBadge: '2nd Year Student • Open for Opportunities',
};

export const skillsData: SkillCategory[] = [
  {
    title: 'Languages',
    description: 'Foundational programming and scripting languages for systems, logic, and web',
    skills: [
      { name: 'Python', badge: 'Core' },
      { name: 'C', badge: 'Foundational' },
      { name: 'TypeScript', badge: 'Modern' },
      { name: 'JavaScript', badge: 'ES6+' },
      { name: 'HTML5', badge: 'Semantic' },
      { name: 'CSS3', badge: 'Styling' },
    ],
  },
  {
    title: 'Frontend Development',
    description: 'Component architecture, reactive state management, and modern styling systems',
    skills: [
      { name: 'React.js (Vite)', badge: 'Primary' },
      { name: 'Tailwind CSS', badge: 'Utility' },
      { name: 'Bootstrap', badge: 'Responsive' },
      { name: 'Recharts', badge: 'Data Viz' },
    ],
  },
  {
    title: 'Backend & Data',
    description: 'Server runtime environments, RESTful APIs, and secure authentication',
    skills: [
      { name: 'Node.js', badge: 'Runtime' },
      { name: 'Express.js', badge: 'API Routing' },
      { name: 'Better-SQLite3', badge: 'Persistence' },
      { name: 'JWT & Bcrypt', badge: 'Security' },
    ],
  },
  {
    title: 'Tools & Version Control',
    description: 'Development environment, repository management, and collaboration workflows',
    skills: [
      { name: 'Git', badge: 'VCS' },
      { name: 'GitHub', badge: 'Collaboration' },
      { name: 'Google Gen AI SDK', badge: 'AI Integration' },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'caretrack-ai',
    title: 'CareTrack AI',
    subtitle: 'Health & Wellness Platform with AI Triage & Analytics',
    category: 'Full-Stack',
    description:
      'A full-stack health and wellness application enabling users to securely manage medical records, track vital statistics (weight, blood pressure, blood sugar), and visualize historical trends through interactive charts, augmented with an AI symptom checker.',
    role: 'Full-Stack Developer (Solo Engineering)',
    status: 'Completed / Active Showcase',
    technologies: [
      'TypeScript',
      'React (Vite)',
      'Tailwind CSS',
      'Recharts',
      'Node.js',
      'Express',
      'JWT',
      'Bcrypt',
      'Better-SQLite3',
      'Google Gen AI SDK (Gemini 3.5 Flash)',
    ],
    githubUrl: 'https://github.com',
    highlights: [
      'Personalized health dashboard with Recharts historical vitals trend visualization',
      'Google Gen AI SDK integration for real-time symptom checking & proactive health chatbot using Gemini 3.5 Flash',
      'Secure Node.js & Express RESTful API with JWT tokens and Bcrypt password hashing',
      'Local data persistence and query optimization with Better-SQLite3',
      'Secure document upload, categorized organization, and retrieval pipeline for medical records',
    ],
    caseStudy: {
      problem:
        'Individuals frequently deal with fragmented healthcare data: vitals are recorded across loose papers or disconnected apps, medical records are difficult to locate during emergencies, and patients often lack immediate, contextual preliminary guidance when experiencing unusual symptoms.',
      approach:
        'Architected a cohesive, unified health hub combining quantitative health tracking (blood pressure, sugar, weight), secure document storage, and immediate AI-assisted triage into a single clean, high-performance interface.',
      technologies: [
        'React 18 + Vite for high-speed client-side responsiveness and modular components',
        'Tailwind CSS for a clean, accessible health dashboard design system',
        'Recharts for interactive multi-axis SVG visualization of longitudinal health indicators',
        'Node.js & Express for modular REST routing and validation middleware',
        'Better-SQLite3 for embedded, zero-latency database storage with synchronous queries',
        'JWT & Bcrypt for cryptographically secure session handling and password hashing',
        'Google Gen AI SDK (Gemini 3.5 Flash) for responsive, multi-turn clinical triage assistance',
      ],
      keyFeatures: [
        'Vitals Tracking & Trend Graphs: Track blood pressure systolic/diastolic, blood glucose levels, and body weight over configurable time spans.',
        'AI Symptom Checker Chatbot: Powered by Gemini 3.5 Flash to provide structured preliminary analysis, cautionary advice, and emergency warning indicators.',
        'Medical Records Vault: Upload, categorize (lab reports, prescriptions, discharge summaries), and download critical medical files securely.',
        'Secure Identity & Sessions: Protected private health records with cryptographically hashed passwords and signed JWT tokens.',
      ],
      challenges: [
        'Ensuring sensitive health data remains isolated and protected per-user while maintaining instantaneous client-side graph updates.',
        'Designing prompt guidelines and response parsing for the Gemini 3.5 Flash model so it provides responsible, structured health information without posing as definitive medical diagnosis.',
        'Normalizing irregular date-time health readings into continuous, visually readable timeline curves on Recharts.',
      ],
      solution:
        'Engineered a deterministic SQLite schema with foreign-key user constraints and indexing on timestamp fields. Implemented system instructions for Gemini 3.5 Flash ensuring clear disclaimer boundaries and structured bullet points for symptom triage, paired with responsive optimistic UI updates in React.',
      outcome:
        'Successfully delivered an end-to-end full-stack prototype demonstrating complete control of modern frontend engineering, robust backend routing, database transactions, and generative AI integration.',
      futureImprovements: [
        'Integration with wearable health API export standards (Apple HealthKit / Google Fit export formats)',
        'Automated prescription OCR parsing to auto-populate medication schedules',
        'Doctor-facing exportable PDF summary generation for clinical appointments',
      ],
    },
  },
];

export const educationData: EducationItem[] = [
  {
    degree: 'B.E. in Computer Science & Engineering (AI & ML)',
    institution: 'RV Institute of Technology and Management (RVITM)',
    location: 'Bengaluru, Karnataka',
    grade: 'CGPA: 9.275 (Sem 1: 9.1 | Sem 2: 9.45)',
    period: '2nd Year Undergraduate',
    description:
      'Pursuing an engineering degree specializing in Artificial Intelligence and Machine Learning. Completed Year 1 with a cumulative CGPA of 9.275, establishing core fundamentals in data structures, systems programming in C and Python, and discrete mathematics.',
    courseworkHighlights: [
      'Foundations of Python & C Programming',
      'Data Structures & Algorithms',
      'Artificial Intelligence & Machine Learning Fundamentals',
      'Discrete Mathematics & Computational Logic',
    ],
  },
];
