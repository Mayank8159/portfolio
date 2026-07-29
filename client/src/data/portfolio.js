export const cards = [
  {
    title: "B.Tech CSE (AI & ML)",
    body: "IEM Newtown (2024-2028). Focused on ML, DSA, DBMS, and full-stack development.",
    cta: "INSTITUTE",
    href: "https://iem.edu.in/", // Note: Using UEM link if applicable
    secondaryCta: "CURRICULUM",
    secondaryHref: "https://iem.edu.in/iem-college-engineering-technology/",
    image: "/clg.jpg",
  },
  {
    title: "Prism Credit",
    body: "ML model for credit risk assessment with modern UI/UX.",
    cta: "GITHUB",
    href: "https://github.com/Mayank8159/credit_risk_app",
    secondaryCta: "LIVE DEMO",
    secondaryHref: "https://github.com/Mayank8159/credit_risk_app/releases/tag/v1.0.0",
    image: "/Credit.png",
  },
  {
    title: "Jet Engine RUL Predictor",
    body: "Using FD001 dataset, I built a model to predict jet engine Remaining Useful Life (RUL) with a sleek UI.",
    cta: "GITHUB",
    href: "https://github.com/Mayank8159/jet_engine",
    secondaryCta: "LIVE DEMO",
    secondaryHref: "https://jet-engine-lac.vercel.app/",
    image: "/jet_engine.png",
  },
  {
    title: "SkyNest Weather App",
    body: "Real-time weather forecasting app with interactive maps and detailed analytics.",
    cta: "GITHUB",
    href: "https://github.com/Mayank8159/WeatherApp",
    secondaryCta: "LIVE DEMO",
    secondaryHref: "https://github.com/Mayank8159/WeatherApp/releases/tag/v1.0.0",
    image: "/weather.png",
  },
];

export const skillLogos = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "Scikit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "MLOps", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" }
];

// CRITICAL FIX: Icons as strings
export const quickFacts = [
  { icon: "Brain", label: "AI/ML Focused" },
  { icon: "Code2", label: "Full-Stack Builder" },
  { icon: "Database", label: "Data + Backend" },
];

export const researchPapers = [
  {
    title: "From Rules to Residues: Demystifying Large Language Models via Ground-Up Structural Implementation",
    authors: "Mayank Kumar Sharma, IEM Newtown",
    abstract: "Modern natural language processing is dominated by Large Language Models (LLMs) centered on the Transformer architecture. This paper systematically reduces the LLM pipeline to its baseline deterministic components: tokenization via Byte Pair Encoding (BPE), distributional semantic vector generation, and matrix-multiplication-driven self-attention. By contextualizing a 52,000-parameter toy model built completely from scratch against 80 years of computational history, we evaluate the paradigm shift from handwritten, rule-based heuristics to statistical next-token auto-regressive generation. Finally, we discuss how fine-tuning frameworks like Reinforcement Learning from Human Feedback (RLHF) and external tool-calling execution environments shape a statistical autocomplete model into an apparent conversational agent.",
    file: "/papers/paperLLM.docx",
    tags: ["LLM", "Transformer", "Self-Attention", "Tokenization", "BPE", "Auto-regressive Generation"],
    year: "2025",
  },
];

export const hobbies = [
  {
    name: "Singing",
    description: "Expressing through melodies — from classical to contemporary.",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&q=80",
  },
  {
    name: "Camping",
    description: "Exploring the wild, one campsite at a time.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80",
  },
  {
    name: "Travelling",
    description: "Chasing new horizons and collecting stories.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80",
  },
  {
    name: "Research",
    description: "Diving deep into AI/ML to push the boundaries of knowledge.",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600&q=80",
  },
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "papers", label: "Papers" },
  { id: "hobbies", label: "Hobbies" },
  { id: "contact", label: "Contact" },
];
