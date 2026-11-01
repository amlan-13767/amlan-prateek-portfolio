export const profile = {
  name: 'Amlan Prateek Panda',
  email: 'amlanprateeknitr8282@gmail.com',
  github: 'https://github.com/amlan-13767',
  linkedin: 'https://www.linkedin.com/in/amlan-prateek-panda-a947b6289',
  leetcode: 'https://leetcode.com/u/amlanprateeknitr8282/', // TODO: confirm the preferred LeetCode URL
  location: 'Rourkela, Odisha, India',
  resume: '/resume.pdf'
};

export const hero = {
  eyebrow: 'OPEN TO SOFTWARE & AI ROLES · CLASS OF 2027',
  intro: "I'm Amlan Prateek Panda — a Computer Science student at NIT Rourkela and former Software Engineer Intern at Akamai. I build AI-powered tools and full-stack products."
};

export const metrics = [
  { value: '470', label: "ALL INDIA RANK · ENGINEER'S RING OF HONOUR 2025" },
  { value: '1,000+', label: 'COMPANIES COORDINATED · CDC' },
  { value: '40', label: 'MEMBER PLACEMENT TEAM LED' },
  { value: '7.96/10', label: 'CGPA · NIT ROURKELA' }
];

export const education = {
  degree: 'B.Tech, Computer Science and Engineering · NIT Rourkela · Aug 2023 – May 2027 (expected)',
  location: 'Based in Odisha, India',
  availability: 'Open to opportunities worldwide',
  coursework: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management', 'Machine Learning', 'Operating Systems', 'Computer Networks']
};

export const experience = [{
  date: 'JUN 2026 — AUG 2026',
  type: 'INTERNSHIP',
  role: 'Software Engineer Intern',
  company: 'Akamai Technologies',
  location: 'Bengaluru, India',
  bullets: [
    'Developed an AI-powered engineering automation agent using GitHub Copilot Agent Mode and MCP for TLS CryptoServer workflows — from sandbox setup and code analysis to compilation, testing, and pull request generation.',
    'Built Python automation scripts and workflow state management to reduce manual effort and improve consistency.',
    'Investigated and resolved security findings in the TLS CryptoServer codebase through root-cause analysis and code fixes, then verified them with functional and regression testing.'
  ],
  tags: ['Python', 'AI Agents', 'MCP', 'Automation', 'Security Testing']
}];

const project = (details) => ({ demo: null, image: null, links: [], ...details });

export const projects = [
  project({
    slug: 'ai-learning-path-generator',
    title: 'AI Learning Path Generator',
    type: 'GENERATIVE AI · FULL STACK',
    date: 'AUG 2026 — PRESENT',
    description: "Generates a personalised learning path — milestones, curated resources and progress tracking — from a learner's topic, level, goals, learning style and available time.",
    highlights: [
      'RAG pipeline with LangChain, Sentence Transformers and ChromaDB for semantic resource retrieval',
      'Gemini 2.5 Flash for path generation and the in-app learning assistant; Perplexity for web resource search',
      'Flask API with PostgreSQL, Google sign-in and Redis + RQ background jobs; React + Vite + Tailwind frontend'
    ],
    stack: ['Python', 'Flask', 'LangChain', 'ChromaDB', 'Sentence Transformers', 'Gemini', 'PostgreSQL', 'Redis / RQ', 'React', 'Tailwind CSS'],
    repo: 'https://github.com/amlan-13767/ai-learning-path-generator',
    accent: 'violet',
    icon: 'Sparkles'
  }),
  project({
    slug: 'skillswap',
    title: 'SkillSwap — P2P Skills Exchange',
    type: 'WEB APP · ODOO HACKATHON 2025',
    date: 'JUL 2025',
    description: 'A peer-to-peer platform where people list the skills they can teach and want to learn, find compatible partners, and trade sessions.',
    highlights: [
      'Session-based auth with Passport.js and bcrypt; profiles with availability, skill search and filters',
      'Swap-request workflow with accept / reject',
      'Express REST API with Drizzle ORM on Neon PostgreSQL; React client with TanStack Query'
    ],
    stack: ['TypeScript', 'React', 'Vite', 'Express', 'PostgreSQL (Neon)', 'Drizzle ORM', 'Passport.js', 'Tailwind CSS'],
    repo: 'https://github.com/amlan-13767/Skill-Swap-PLatform',
    accent: 'lime',
    icon: 'Globe'
  }),
  project({
    slug: 'medicare',
    title: 'MediCare — Doctor & Patient Dashboard',
    type: 'HEALTHCARE · FULL STACK',
    date: 'JUN 2025',
    description: 'A healthcare dashboard where doctors manage patients, clinical records, prescriptions and specialist referrals, and patients sign in to view their own records.',
    highlights: [
      'Separate doctor and patient sign-in with NextAuth and bcrypt-hashed passwords',
      'Next.js API routes over MongoDB (Mongoose) for patients, prescriptions, clinical records and specialist requests'
    ],
    stack: ['TypeScript', 'Next.js', 'React', 'MongoDB', 'Mongoose', 'NextAuth', 'Tailwind CSS'],
    repo: 'https://github.com/amlan-13767/Doctor-Dashboard-new',
    accent: 'blue',
    icon: 'Database'
  }),
  project({
    slug: 'robotic-arm',
    title: 'Robotic Arm — CYBORG NIT Rourkela',
    type: 'ROBOTICS · EMBEDDED SYSTEMS · TEAM',
    date: 'MAY 2025 — FEB 2026',
    description: 'A modular multi-axis robotic arm prototype using ESP32-class control, TMC2209 stepper drivers, joystick input, motion-control logic, and experimental inverse kinematics.',
    highlights: [],
    stack: ['C++', 'ESP32', 'TMC2209', 'Embedded Systems', 'Robotics'],
    repo: 'https://github.com/CYBORG-NIT-ROURKELA/Robotic_ARM-CYB',
    accent: 'blue',
    icon: 'Cpu'
  })
];

export const otherProjects = [
  project({
    slug: 'uber-rides-analysis',
    title: 'Uber Rides Data Analysis & Dashboard',
    type: 'DATA ANALYTICS · POWER BI',
    date: 'SEP 2025',
    description: 'Cleaned and analysed Uber trip data in Python — trip duration, time-of-day and monthly features — and built a Power BI dashboard on ride categories, purposes, monthly volume and mileage.',
    highlights: [],
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter', 'Power BI'],
    repo: 'https://github.com/amlan-13767/Uber-Rides-Data-Analysis',
    links: [{ label: 'View dashboard', href: 'https://github.com/amlan-13767/Uber-Rides-Data-Analysis/blob/main/Dashboard.png' }],
    accent: 'lime',
    icon: 'ChartColumn'
  }),
  project({
    slug: 'hackstreetboys',
    title: 'HackStreetBoys — Hostel Management',
    type: 'WEB DEVELOPMENT · HACKINNOVISION · TEAM',
    date: 'AUG — DEC 2024',
    description: 'Team hostel-allotment website built for HackInnovision',
    highlights: [],
    stack: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/amlan-13767/HackStreetBoys',
    accent: 'violet',
    icon: 'Globe'
  }),
];

export const skills = [
  { title: 'Languages', items: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS'], icon: 'Code2' },
  { title: 'Frameworks', items: ['React', 'Next.js', 'Node.js', 'Express', 'Flask', 'Tailwind CSS'], icon: 'Terminal' },
  { title: 'AI & Data', items: ['LangChain', 'RAG', 'ChromaDB', 'Sentence Transformers', 'Google Gemini', 'Perplexity API', 'MCP', 'GitHub Copilot Agent Mode', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter', 'Power BI'], icon: 'Sparkles' },
  { title: 'Databases & Tools', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Drizzle ORM', 'Git', 'GitHub', 'Docker', 'VS Code'], icon: 'Database' },
  { title: 'Embedded', items: ['ESP32', 'Embedded C++', 'Proteus', 'PCB Design'], icon: 'Cpu' }
];

export const activities = [
  { date: 'MAY 2026 — PRESENT', title: 'Placement Secretary', organisation: 'Career Development Centre · NIT Rourkela', description: 'Lead a 40-member team coordinating internship and placement activities for 3,000+ students, while working with 1,000+ companies on recruitment scheduling and communication.', tags: ['Leadership', 'Recruitment Operations', 'Stakeholder Management'], icon: 'Users' },
  { date: 'MAY 2024 — PRESENT', title: 'CYBORG — Robotics & Automation Club', organisation: 'NIT Rourkela · Mentor (May 2026–Present), Vice President (May 2025–May 2026), Technical Team Member (May 2024–May 2025)', description: 'Progressed from the electronics subsystem technical team to Vice President and then Mentor. Contributed to club robotics work; the technical team role included electronics subsystem induction and hands-on circuit and PCB-related skills.', tags: ['Robotics', 'Proteus', 'PCB Design', 'Electronics'], icon: 'Cpu', link: 'https://github.com/CYBORG-NIT-ROURKELA/Robotic_ARM-CYB' },
  { date: 'AUG 2025 — PRESENT', title: 'Mentor', organisation: 'Institute Counselling Services · NIT Rourkela', description: 'Serve as a mentor through the institute’s counselling services, supporting student guidance and peer mentoring.', tags: ['Mentoring', 'Peer Support'], icon: 'GraduationCap' },
  { date: 'MAR 2025 — PRESENT', title: 'Technical Team Member', organisation: 'Algorithmic and Programming Society · NIT Rourkela', description: 'Contribute as a technical team member in the institute’s programming and algorithmic community.', tags: ['Programming', 'Problem Solving', 'Technical Community'], icon: 'Code2' },
  { date: 'AUG 2024 — AUG 2025', title: 'Secretary — Film and Music Society', organisation: 'National Institute of Technology Rourkela', description: 'Served as Secretary of the Film and Music Society, contributing to student cultural activities and society coordination.', tags: ['Society Leadership', 'Event Coordination', 'Arts & Culture'], icon: 'Globe' },
  { date: 'MAY 2024 — JUL 2024 · REMOTE', title: 'Open Source Contributor', organisation: 'Social · formerly Script Foundation', description: 'Contributed to the Social Summer of Code (SSOC) open-source program and worked with web technologies including HTML and CSS.', tags: ['Open Source', 'HTML', 'CSS'], icon: 'Github' }
];

export const recognition = [
  { title: 'Engineer’s Ring of Honour 2025', description: 'All India Rank 470 and College Rank 6 in Round 1', date: 'SEP 2025', icon: 'Trophy', link: 'https://www.naukri.com/campus/contests/scholarship-for-engineering-students/leaderboard' },
  { title: 'Career Essentials in Generative AI', description: 'Microsoft & LinkedIn · Generative AI fundamentals, applications, and industry use cases', date: 'JUN 2025', icon: 'GraduationCap', link: 'https://drive.google.com/file/d/1pXzgZEdMKS4SlEf7GUM1pHsZ85zWSVIc/view?usp=drive_link' }
];

export const contact = {
  intro: 'I’m always happy to connect about software engineering, AI, interesting projects, and new opportunities.'
};
