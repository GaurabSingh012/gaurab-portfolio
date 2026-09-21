import { useEffect, useState } from 'react';
import type { IconType } from 'react-icons';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiLinux,
  SiPostman,
  SiNumpy,
  SiPandas,
  SiPytorch,
  SiTensorflow,
  SiHuggingface,
} from 'react-icons/si';
import { projects } from './data/projects';
import './index.css';

type Theme = 'light' | 'dark';

type SkillItem = {
  name: string;
  icon?: IconType;
  note?: string;
};

const skillRows: { label: string; description: string; items: SkillItem[] }[] = [
  {
    label: 'AI / ML',
    description: 'Models, vision, language, and generative AI',
    items: [
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'Hugging Face', icon: SiHuggingface },
      { name: 'Computer Vision', note: 'CV' },
      { name: 'NLP', note: 'NLP' },
      { name: 'LLMs', note: 'LLM' },
    ],
  },
  {
    label: 'Programming',
    description: 'The languages I use most often',
    items: [
      { name: 'Python', icon: SiPython },
      { name: 'SQL', note: 'SQL' },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
    ],
  },
  {
    label: 'Development',
    description: 'From API to interface',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'React Native', icon: SiReact },
      { name: 'Postman', icon: SiPostman },
    ],
  },
  {
    label: 'Data / Tools',
    description: 'Working with data and shipping software',
    items: [
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Pandas', icon: SiPandas },
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Linux', icon: SiLinux },
      { name: 'DVC', note: 'DVC' },
    ],
  },
];

const certifications = [
  { title: 'Deep Learning Specialization', issuer: 'DeepLearning.AI', mark: 'DL', accent: 'blue' },
  { title: 'Generative AI with Large Language Models', issuer: 'DeepLearning.AI', mark: 'AI', accent: 'violet' },
  { title: 'Practical Guide to Python', issuer: 'Frontend Masters', mark: 'PY', accent: 'green' },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      {diagonal ? (
        <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M12 4v10m0 0 4-4m-4 4-4-4M5 19h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <rect x="3.25" y="5.25" width="17.5" height="13.5" rx="2.25" stroke="currentColor" strokeWidth="1.7" />
      <path d="m5.2 7 6.8 5.2L18.8 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GithubIcon() {
  return <SiGithub aria-hidden="true" />;
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.49 2.49 0 1 1 0 4.98 2.49 2.49 0 0 1 0-4.98ZM3 9h3.96v12H3V9Zm6.5 0h3.8v1.64h.06c.53-1 1.82-2.05 3.74-2.05 4 0 4.74 2.63 4.74 6.06V21h-3.96v-5.63c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.97V21H9.5V9Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3.7" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 2.5v2M12 19.5v2M4.88 4.88l1.42 1.42M17.7 17.7l1.42 1.42M2.5 12h2M19.5 12h2M4.88 19.12l1.42-1.42M17.7 6.3l1.42-1.42" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" aria-hidden="true">
      <path d="M20 14.35A7.65 7.65 0 0 1 9.65 4 7.65 7.65 0 1 0 20 14.35Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" fill="none" aria-hidden="true">
      {open ? (
        <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      )}
    </svg>
  );
}

function ProjectVisual({ project }: { project: typeof projects[number] }) {
  if (project.image) {
    return (
      <div className="project-media">
        <img
          className="project-image"
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div className="project-media manuscript-media" aria-label="Manuscript Digitizer visual preview">
      <div className="manuscript-sheet">
        <div className="manuscript-top">NEPALI MANUSCRIPT</div>
        <div className="manuscript-script">क ख ग घ च छ ज झ</div>
        <div className="manuscript-lines"><i /><i /><i /><i /><i /><i /></div>
        <div className="manuscript-chip">OCR + RESTORATION</div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: typeof projects[number] }) {
  return (
    <article className="project-card">
      <ProjectVisual project={project} />
      <div className="project-body">
        <div className="project-meta">
          <span>{project.type}</span>
          <span>{project.number}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer"><GithubIcon /> GitHub <Arrow diagonal /></a>
          {project.live && <a href={project.live} target="_blank" rel="noreferrer">{project.title === 'CalibraKidney' ? 'Try app' : 'Live demo'} <Arrow diagonal /></a>}
        </div>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio-theme-v2') as Theme | null;
    return saved === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme-v2', theme);
  }, [theme]);

  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setTheme((value) => value === 'light' ? 'dark' : 'light');

  return (
    <div className="site-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="grid-fade" />

      <header className="navbar-wrap">
        <nav className="navbar container" aria-label="Primary navigation">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Gaurab Kushwaha home">
            <span className="brand-mark">G</span>
            <span className="brand-name">Gaurab Kushwaha</span>
          </a>

          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>

          <div className="nav-actions">
            <a className="nav-resume" href="/Resume.pdf" download>Resume <DownloadIcon /></a>
            <button className="theme-toggle" onClick={toggleTheme} type="button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <Arrow diagonal /></a>
          </div>

          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
            <MenuIcon open={menuOpen} />
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" />Open to opportunities</div>
            <p className="hero-kicker">AI / ML Engineer · Final-Year B.Tech</p>
            <h1 id="hero-title">Building <span>practical AI</span> systems that are useful in the real world.</h1>
            <p className="hero-description">I’m Gaurab Kushwaha, an AI/ML student working across machine learning, deep learning, computer vision, NLP, and generative AI.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View projects <Arrow /></a>
              <a className="button button-secondary" href="#contact">Get in touch <Arrow diagonal /></a>
            </div>
            <div className="hero-meta">
              <a href="https://github.com/GaurabSingh012" target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
              <a href="https://www.linkedin.com/in/gaurab-kushwaha-837237285/" target="_blank" rel="noreferrer"><LinkedinIcon /> LinkedIn</a>
              <a href="mailto:gaurabkus781@gmail.com"><MailIcon /> Email</a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Profile card">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="hero-card">
              <div className="hero-card-top"><span>G / 2026</span><span>AI · ML · GENAI</span></div>
              <div className="portrait-wrap"><img src="/PP.jpeg" alt="Portrait of Gaurab Kushwaha" /></div>
              <div className="hero-card-bottom"><span>Pune · India</span><span className="available"><span className="status-dot" /> Open to opportunities</span></div>
            </div>
          </div>
        </section>

        <section className="focus-strip container" aria-label="Areas of focus">
          <span>Machine Learning</span><span>Deep Learning</span><span>Generative AI</span><span>Computer Vision</span><span>NLP</span><span>MLOps</span>
        </section>

        <section id="about" className="section container" aria-labelledby="about-title">
          <div className="section-label">About</div>
          <div className="about-layout">
            <h2 id="about-title">I like turning <span>models</span> into useful systems.</h2>
            <div className="about-copy">
              <p>I’m an Artificial Intelligence and Machine Learning student who enjoys working at the intersection of intelligent models and real-world software.</p>
              <p>My work spans machine learning, deep learning, computer vision, NLP, and generative AI, with a focus on taking an idea from experimentation to a working application.</p>
              <div className="about-facts">
                <div><span>Currently</span><strong>B.Tech AIML · SIT Pune</strong></div>
                <div><span>Outside code</span><strong>Cricket · Chess</strong></div>
                <div><span>Languages</span><strong>English · Hindi · Nepali · German</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section container" aria-labelledby="education-title">
          <div className="section-label">Education</div>
          <div className="section-heading-clean">
            <h2 id="education-title">Academic <span>background.</span></h2>
            <p>My current degree and higher-secondary education.</p>
          </div>
          <div className="education-list">
            <article className="education-item current">
              <div className="education-date">Jul 2023 — Jun 2027</div>
              <div className="education-main-copy">
                <span className="education-type">B.Tech</span>
                <h3>Artificial Intelligence and Machine Learning</h3>
                <p>Symbiosis Institute of Technology · Pune, India</p>
              </div>
              <div className="education-score"><span>CGPA</span><strong>7.7 / 10</strong></div>
            </article>
            <article className="education-item">
              <div className="education-date">Jun 2021 — Apr 2023</div>
              <div className="education-main-copy">
                <span className="education-type">Class XII</span>
                <h3>Higher Secondary Education</h3>
                <p>Tirion International College · Kathmandu, Nepal</p>
              </div>
              <div className="education-score"><span>GPA</span><strong>3.44</strong></div>
            </article>
          </div>
        </section>

        <section id="skills" className="section container" aria-labelledby="skills-title">
          <div className="section-label">Skills</div>
          <div className="section-heading-clean">
            <h2 id="skills-title">The <span>stack</span> I work with.</h2>
            <p>Core technologies across AI/ML, software development, data, and tooling.</p>
          </div>
          <div className="skills-list">
            {skillRows.map((row) => (
              <div className="skill-row" key={row.label}>
                <div className="skill-row-heading"><strong>{row.label}</strong><span>{row.description}</span></div>
                <div className="skill-items">
                  {row.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div className="skill-item" key={item.name}>
                        <span className="skill-icon">
                          {Icon ? <Icon aria-hidden="true" /> : <span>{item.note}</span>}
                        </span>
                        <span>{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section container" aria-labelledby="experience-title">
          <div className="section-label">Experience</div>
          <div className="experience-layout-clean">
            <div>
              <h2 id="experience-title">Professional <span>experience.</span></h2>
              <p>Hands-on experience working with real datasets, analysis, and reporting.</p>
            </div>
            <article className="experience-entry">
              <div className="experience-top"><span>Jul 2025 — Oct 2025</span><span>Pune, India</span></div>
              <h3>Service Learning Intern</h3>
              <p className="experience-org">Swayam Shikshan Prayog (SSP)</p>
              <div className="experience-points">
                <p>Processed and analysed survey datasets using Python, Pandas, and NumPy.</p>
                <p>Cleaned, transformed, and organised collected datasets for analysis and reporting.</p>
              </div>
            </article>
          </div>
        </section>

        <section id="projects" className="section container projects-section" aria-labelledby="projects-title">
          <div className="section-label">Projects</div>
          <div className="section-heading-clean projects-heading">
            <h2 id="projects-title">Things I’ve <span>built.</span></h2>
            <p>Four projects spanning computer vision, generative AI, NLP, and full-stack AI.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </section>

        <section className="section container credentials-section" aria-labelledby="credentials-title">
          <div className="section-label">Credentials</div>
          <div className="section-heading-clean">
            <h2 id="credentials-title">Certifications & <span>recognition.</span></h2>
            <p>Selected learning credentials and university recognition.</p>
          </div>
          <div className="credentials-grid">
            {certifications.map((item) => (
              <article className={`credential-row ${item.accent}`} key={item.title}>
                <div className="credential-mark">{item.mark}</div>
                <div><h3>{item.title}</h3><p>{item.issuer}</p></div>
              </article>
            ))}
            <article className="credential-row gold">
              <div className="credential-mark">★</div>
              <div><h3>Winner · SIT AIML Industry Conclave 2026</h3><p>Symbiosis Institute of Technology</p></div>
            </article>
          </div>
        </section>

        <section id="contact" className="contact-section container" aria-labelledby="contact-title">
          <div className="contact-panel">
            <div className="contact-content">
              <div className="section-label">Contact</div>
              <h2 id="contact-title">Let’s build something <span>useful.</span></h2>
              <p>I’m open to internships, collaborations, and opportunities in AI/ML engineering.</p>
              <div className="contact-actions">
                <a className="button button-primary" href="mailto:gaurabkus781@gmail.com">Email me <Arrow diagonal /></a>
                <a className="button button-secondary" href="/Resume.pdf" download>Download resume <DownloadIcon /></a>
              </div>
              <div className="contact-meta"><span>gaurabkus781@gmail.com</span><span>Pune, India</span><span>Open to opportunities</span></div>
            </div>
            <div className="contact-orbit" aria-hidden="true" />
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>© {new Date().getFullYear()} Gaurab Kushwaha</span>
        <div className="footer-links">
          <a href="https://github.com/GaurabSingh012" target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
          <a href="https://www.linkedin.com/in/gaurab-kushwaha-837237285/" target="_blank" rel="noreferrer"><LinkedinIcon /> LinkedIn</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
