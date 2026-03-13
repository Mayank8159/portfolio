"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  Brain,
  Code2,
  Database,
  FolderKanban,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Send,
  Sparkles,
  X,
} from "lucide-react";

const cards = [
  {
    title: "B.Tech CSE (AI & ML)",
    body: "Institute of Engineering & Management, Newtown, Kolkata (2024-2028). Focused on ML, DSA, DBMS, and full-stack development.",
    cta: "INSTITUTE",
    href: "https://iem.edu.in/",
    secondaryCta: "CURRICULUM",
    secondaryHref: "https://iem.edu.in/iem-college-engineering-technology/",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Student Result Predictor",
    body: "ML model that estimates semester performance from historical trends and study behavior features.",
    cta: "GITHUB",
    href: "https://github.com/Mayank8159/QuickAI",
    secondaryCta: "LIVE DEMO",
    secondaryHref: "https://github.com/Mayank8159/QuickAI",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Campus Connect Portal",
    body: "MERN-based portal for notices, events, and collaboration with role-based authentication.",
    cta: "GITHUB",
    href: "https://github.com/rajeet-04/technologia",
    secondaryCta: "LIVE DEMO",
    secondaryHref: "https://github.com/rajeet-04/technologia",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "AI Resume Screener",
    body: "NLP-driven resume parser that ranks profiles against job requirements for faster shortlisting.",
    cta: "GITHUB",
    href: "https://github.com/Mayank8159/hackathon2",
    secondaryCta: "LIVE DEMO",
    secondaryHref: "https://github.com/Mayank8159/hackathon2",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=500&q=80",
  },
];

const skillLogos = [
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
];

const quickFacts = [
  { icon: Brain, label: "AI/ML Focused" },
  { icon: Code2, label: "Full-Stack Builder" },
  { icon: Database, label: "Data + Backend" },
];

export default function Home() {
  const navItems = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "education", label: "Education" },
      { id: "skills", label: "Skills" },
      { id: "contact", label: "Contact" },
    ],
    [],
  );

  const [activeSection, setActiveSection] = useState("home");
  const [contactVisible, setContactVisible] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const elements = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [navItems]);

  useEffect(() => {
    const contactSection = document.getElementById("contact");

    if (!contactSection) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some(
          (entry) => entry.isIntersecting && entry.intersectionRatio > 0.2,
        );

        if (isVisible) {
          setContactVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: [0.2, 0.35],
      },
    );

    observer.observe(contactSection);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="portfolio">
      <header className={`nav ${navOpen ? "navOpen" : ""}`}>
        <div className="brandGroup">
          <div className="brandOrb" />
          <div>
            <div className="brand">Mayank&apos;s Portfolio</div>
            <p className="brandSub">AI/ML student and full-stack builder</p>
          </div>
        </div>

        <button
          type="button"
          className="navToggle"
          onClick={() => setNavOpen((open) => !open)}
          aria-label={navOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={navOpen}
        >
          {navOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <nav className={`links ${navOpen ? "linksOpen" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "linkActive" : ""}
              onClick={() => setNavOpen(false)}
            >
              <span className="linkDot" />
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="profileWrap">
          <Image
            className="profile"
            src="/profilePic.jpeg"
            alt="Mayank Sharma"
            width={220}
            height={220}
            priority
          />
        </div>
        <div className="heroContent">
          <div className="eyebrow">
            <Sparkles size={15} />
            <span>Hello! I am Mayank Sharma</span>
          </div>
          <h1>Builds with AI and code...</h1>
          <h2>I&apos;m a 2nd Year CSE (AI & ML) Student</h2>
          <p className="lead">
            I am an aspiring AI/ML engineer and full-stack learner with hands-on
            practice in Python, Machine Learning, and modern web development. I
            enjoy building projects that solve real student and campus problems.
          </p>
          <div className="heroMeta">
            {quickFacts.map((fact) => {
              const Icon = fact.icon;

              return (
                <div key={fact.label} className="metaPill">
                  <Icon size={16} />
                  <span>{fact.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="sectionHeader">
          <div className="eyebrow">
            <GraduationCap size={15} />
            <span>Education & Projects</span>
          </div>
          <h3>Education &amp; Key Projects</h3>
          <p className="sectionText">
            A snapshot of my academic foundation and the product-driven projects I
            am building around AI, analytics, and student experiences.
          </p>
        </div>
        <div className="eduGrid">
          {cards.map((card) => (
            <article key={card.title} className="card">
              <Image
                className="cardImage"
                src={card.image}
                alt={card.title}
                width={100}
                height={100}
              />
              <span className="cardTag">
                {card.title.includes("B.Tech") ? "Education" : "Project"}
              </span>
              <h4>{card.title}</h4>
              <p>{card.body}</p>
              <div className="cardActions">
                <a className="button" href={card.href} target="_blank" rel="noreferrer">
                  {card.cta}
                </a>
                <a
                  className="button buttonGhost"
                  href={card.secondaryHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {card.secondaryCta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="sectionHeader">
          <div className="eyebrow">
            <Code2 size={15} />
            <span>Core Stack</span>
          </div>
          <h3>Skills</h3>
          <p className="sectionText">
            Tools and technologies I rely on for machine learning workflows,
            backend logic, and modern web application interfaces.
          </p>
        </div>
        <div className="skillsWrap">
          <p className="skillsTitle">Core stack I use for AI/ML and Full-Stack web apps</p>
          <div className="skillsGrid">
            {skillLogos.map((skill) => (
              <div key={skill.name} className="skillItem">
                <Image src={skill.logo} alt={skill.name} width={30} height={30} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="sectionHeader">
          <div className="eyebrow">
            <FolderKanban size={15} />
            <span>Open to Opportunities</span>
          </div>
          <h3>Let us Connect</h3>
        </div>
        <div className="contactPanel">
          <p className="contactLead">
            I am currently looking for internships and collaborative opportunities in
            AI, Machine Learning, and Full-Stack Development.
          </p>

          <div className="contactGrid">
            <a
              className={`contactCard ${contactVisible ? "cardReveal" : ""}`}
              style={{ "--stagger": 0 }}
              href="mailto:mayankfhacker@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contactIcon"><Mail size={18} /></span>
              <span>
                <strong>Email</strong>
                <small>mayankfhacker@gmail.com</small>
              </span>
            </a>

            <a
              className={`contactCard ${contactVisible ? "cardReveal" : ""}`}
              style={{ "--stagger": 1 }}
              href="https://github.com/Mayank8159"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contactIcon"><Github size={18} /></span>
              <span>
                <strong>GitHub</strong>
                <small>github.com/Mayank8159</small>
              </span>
            </a>

            <a
              className={`contactCard ${contactVisible ? "cardReveal" : ""}`}
              style={{ "--stagger": 2 }}
              href="https://www.linkedin.com/in/mayank-kumar-sharma-900318318/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contactIcon"><Linkedin size={18} /></span>
              <span>
                <strong>LinkedIn</strong>
                <small>linkedin.com/in/mayank-kumar-sharma-900318318</small>
              </span>
            </a>
          </div>

          <div className="contactActions">
            <a className="button" href="mailto:mayankfhacker@gmail.com">
              <Send size={15} />
              Send Email
            </a>
            <a
              className="button buttonGhost"
              href="https://github.com/Mayank8159"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={15} />
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
