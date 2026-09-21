import { useEffect, useState } from 'react';
import type { IconType } from 'react-icons';
import {
  SiC,
  SiCplusplus,
  SiFastapi,
  SiGit,
  SiGithub,
  SiHuggingface,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiPostman,
  SiPython,
  SiPytorch,
  SiReact,
  SiTensorflow,
} from 'react-icons/si';
import { projects } from './data/projects';
import './index.css';

type Theme = 'light' | 'dark';

type Skill = { name: string; icon?: IconType; text?: string };

type SkillGroup = { title: string; description: string; skills: Skill[] };

const skillGroups: SkillGroup[] = [
  {
    title: 'AI & Machine Learning',
    description: 'Models and intelligent systems',
    skills: [
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'Hugging Face', icon: SiHuggingface },
      { name: 'Computer Vision', text: 'CV' },
      { name: 'NLP', text: 'NLP' },
      { name: 'LLMs', text: 'LLM' },
    ],
  },
  {
    title: 'Programming & Data',
    description: 'Languages and data work',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'C', icon: SiC },
      { name: 'C++', icon: SiCplusplus },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'SQL', text: 'SQL' },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Pandas', icon: SiPandas },
    ],
  },
  {
    title: 'Development',
    description: 'From APIs to interfaces',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'React Native', icon: SiReact },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Postman', icon: SiPostman },
    ],
  },
  {
    title: 'Databases & Tools',
    description: 'Build, version, test, ship',
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Linux', icon: SiLinux },
      { name: 'DVC', text: 'DVC' },
    ],
  },
];

const certifications = [
  {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    detail: 'Deep learning foundations, optimization and neural networks',
  },
  {
    title: 'Generative AI with Large Language Models',
    issuer: 'DeepLearning.AI',
    detail: 'Generative AI concepts and large language model workflows',
  },
  {
    title: 'Practical Guide to Python',
    issuer: 'Frontend Masters',
    detail: 'Practical Python development and programming fundamentals',
  },
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

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
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
    <div className="project-media manuscript-media" aria-label="Manuscript Digitizer preview">
      <div className="manuscript-sheet">
        <div className="manuscript-top">NEPALI MANUSCRIPT</div>
        <div className="manuscript-script">क ख ग घ च छ ज झ</div>
        <div className="manuscript-lines"><i /><i /><i /><i /><i /><i /></div>
        <div className="manuscript-chip">OCR + RESTORATION</div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
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
          <a href={project.github} target="_blank" rel="noreferrer"><SiGithub aria-hidden="true" /> GitHub <Arrow diagonal /></a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">
              {project.title === 'CalibraKidney' ? 'Try app' : 'Live demo'} <Arrow diagonal />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('gaurab-theme') as Theme | null;
    return saved === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('gaurab-theme', theme);
  }, [theme]);

  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setTheme((value) => value === 'light' ? 'dark' : 'light');

  return (
    <div className="site-shell">
      <div className="ambient ambient-a" aria-hidden="true" />
      <div className="ambient ambient-b" aria-hidden="true" />
      <div className="grid-fade" aria-hidden="true" />

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
            <p className="hero-kicker">AI / ML Student · Final-Year B.Tech</p>
            <h1 id="hero-title">I build <strong>AI systems</strong> for real-world problems.</h1>
            <p className="hero-description">I'm Gaurab Kushwaha, an Artificial Intelligence and Machine Learning student working across machine learning, deep learning, computer vision, NLP, and generative AI.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View projects <Arrow /></a>
              <a className="button button-secondary" href="#contact">Get in touch <Arrow diagonal /></a>
            </div>
            <div className="hero-meta">
              <a href="https://github.com/GaurabSingh012" target="_blank" rel="noreferrer"><SiGithub aria-hidden="true" /> GitHub</a>
              <a href="https://www.linkedin.com/in/gaurab-kushwaha-837237285/" target="_blank" rel="noreferrer"><LinkedinIcon /> LinkedIn</a>
              <a href="mailto:gaurabkus781@gmail.com"><MailIcon /> Email</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-card">
              <div className="profile-top"><span>Gaurab / 2026</span><span>Pune, India</span></div>
              <div className="profile-image-wrap"><img src="/PP.jpeg" alt="Gaurab Kushwaha" decoding="async" /></div>
              <div className="profile-bottom">
                <div><span className="profile-label">Focus</span><strong>AI · ML · GenAI</strong></div>
                <div className="profile-availability"><span className="status-dot" /> Available</div>
              </div>
            </div>
          </div>
        </section>

        <section className="focus-strip container" aria-label="Focus areas">
          <span>Machine Learning</span><span>Deep Learning</span><span>Computer Vision</span><span>NLP</span><span>Generative AI</span><span>MLOps</span>
        </section>

        <section id="about" className="section container" aria-labelledby="about-title">
          <div className="section-topline"><span>About</span></div>
          <div className="about-grid">
            <div>
              <h2 id="about-title">Curious about how <em>intelligent systems</em> become useful products.</h2>
            </div>
            <div className="about-copy">
              <p>I enjoy working between machine learning models and the software that makes them useful. My projects cover computer vision, natural language processing, deep learning, and generative AI.</p>
              <p>I like taking a problem from data preparation and experimentation through to an application that people can actually use.</p>
              <div className="about-facts">
                <div><span>Current</span><strong>B.Tech AIML · SIT Pune</strong></div>
                <div><span>Outside code</span><strong>Cricket · Chess</strong></div>
                <div><span>Languages</span><strong>English · Hindi · Nepali · German</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section container" aria-labelledby="education-title">
          <div className="section-topline"><span>Education</span></div>
          <div className="section-intro">
            <h2 id="education-title">Academic background.</h2>
            <p>My current degree and higher-secondary education.</p>
          </div>
          <div className="education-list">
            <article className="education-item education-current">
              <div className="education-date">2023 — 2027</div>
              <div className="education-main">
                <span className="education-degree">B.Tech</span>
                <h3>Artificial Intelligence and Machine Learning</h3>
                <p>Symbiosis Institute of Technology · Pune, India</p>
              </div>
              <div className="education-score"><span>CGPA</span><strong>7.7 / 10</strong></div>
            </article>
            <article className="education-item">
              <div className="education-date">2021 — 2023</div>
              <div className="education-main">
                <span className="education-degree">Class XII</span>
                <h3>Higher Secondary Education</h3>
                <p>Tirion International College · Kathmandu, Nepal</p>
              </div>
              <div className="education-score"><span>GPA</span><strong>3.44</strong></div>
            </article>
          </div>
        </section>

        <section id="skills" className="section container" aria-labelledby="skills-title">
          <div className="section-topline"><span>Skills</span></div>
          <div className="section-intro skill-intro">
            <h2 id="skills-title">Tools I work with.</h2>
            <p>A practical stack built around AI/ML, programming, development, data, and engineering tools.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <div className="skill-group-head">
                  <div>
                    <span>{group.title}</span>
                    <p>{group.description}</p>
                  </div>
                  <small>{String(group.skills.length).padStart(2, '0')}</small>
                </div>
                <div className="skill-chip-grid">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div className="skill-chip" key={skill.name}>
                        <span className="skill-chip-icon">{Icon ? <Icon aria-hidden="true" /> : skill.text}</span>
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section container" aria-labelledby="experience-title">
          <div className="section-topline"><span>Experience</span></div>
          <div className="experience-grid">
            <div className="section-intro">
              <h2 id="experience-title">Professional experience.</h2>
              <p>Hands-on work with real datasets, analysis, cleaning, and reporting.</p>
            </div>
            <article className="experience-item">
              <div className="experience-meta"><span>Jul 2025 — Oct 2025</span><span>Pune, India</span></div>
              <h3>Service Learning Intern</h3>
              <p className="experience-org">Swayam Shikshan Prayog (SSP)</p>
              <div className="experience-points">
                <p>Processed and analysed survey datasets using Python, Pandas, and NumPy.</p>
                <p>Cleaned, transformed, and organised collected datasets for analysis and reporting.</p>
              </div>
            </article>
          </div>
        </section>

        <section id="projects" className="section container" aria-labelledby="projects-title">
          <div className="section-topline"><span>Projects</span></div>
          <div className="section-intro projects-intro">
            <h2 id="projects-title">Selected projects.</h2>
            <p>Four projects spanning computer vision, generative AI, NLP, and full-stack AI.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </section>

        <section className="section container" aria-labelledby="credentials-title">
          <div className="section-topline"><span>Credentials</span></div>
          <div className="section-intro">
            <h2 id="credentials-title">Certifications & recognition.</h2>
            <p>Selected courses and a university achievement.</p>
          </div>
          <div className="credentials-list">
            {certifications.map((item, index) => (
              <article className="credential" key={item.title}>
                <div className="credential-number">0{index + 1}</div>
                <div className="credential-content">
                  <div>
                    <span className="credential-issuer">{item.issuer}</span>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.detail}</p>
                </div>
                <Arrow diagonal />
              </article>
            ))}
            <article className="credential recognition">
              <div className="credential-number">★</div>
              <div className="credential-content">
                <div>
                  <span className="credential-issuer">Symbiosis Institute of Technology</span>
                  <h3>Winner · SIT AIML Industry Conclave 2026</h3>
                </div>
                <p>University-level recognition in the AIML programme.</p>
              </div>
              <span className="recognition-tag">Recognition</span>
            </article>
          </div>
        </section>

        <section id="contact" className="contact-section container" aria-labelledby="contact-title">
          <div className="contact-panel">
            <div className="section-topline"><span>Contact</span></div>
            <div className="contact-grid">
              <div>
                <h2 id="contact-title">Have a problem worth <em>building?</em></h2>
              </div>
              <div>
                <p>I’m open to internships, collaborations, and opportunities in AI/ML engineering.</p>
                <div className="contact-actions">
                  <a className="button button-primary" href="mailto:gaurabkus781@gmail.com">Email me <Arrow diagonal /></a>
                  <a className="button button-secondary" href="/Resume.pdf" download>Resume <DownloadIcon /></a>
                </div>
                <div className="contact-meta"><span>gaurabkus781@gmail.com</span><span>Pune, India</span><span className="available-inline"><span className="status-dot" /> Open to opportunities</span></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>© {new Date().getFullYear()} Gaurab Kushwaha</span>
        <div className="footer-links">
          <a href="https://github.com/GaurabSingh012" target="_blank" rel="noreferrer"><SiGithub aria-hidden="true" /> GitHub</a>
          <a href="https://www.linkedin.com/in/gaurab-kushwaha-837237285/" target="_blank" rel="noreferrer"><LinkedinIcon /> LinkedIn</a>
          <a href="mailto:gaurabkus781@gmail.com"><MailIcon /> Email</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
