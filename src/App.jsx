import React, { useEffect, useRef, useState } from 'react';
import { projectsData } from './data/projects';
import { educationData } from './data/education';
import { ScrollProgress } from './components/ScrollProgress';

const links = [
  ['GitHub', 'https://github.com/nyx73'],
  ['LinkedIn', 'https://www.linkedin.com/in/rhythmchavda/'],
  ['LeetCode', 'https://leetcode.com/u/rhythmchavda073/'],
];
// Replace this with the email address where you want to receive portfolio messages.
const CONTACT_EMAIL = 'rhythmchavda147@gmail.com';
const technologyGroups = [
  { title: 'LANGUAGES', items: [['Java', 'openjdk'], ['Python', 'python'], ['JavaScript', 'javascript']] },
  { title: 'WEB & MOBILE', items: [['HTML5', 'html5'], ['CSS3', 'css3'], ['React', 'react'], ['Android', 'android']] },
  { title: 'BACKEND & TOOLS', items: [['FastAPI', 'fastapi'], ['Firebase', 'firebase'], ['Git', 'git'], ['GitHub', 'github'], ['Vite', 'vite'], ['Tailwind CSS', 'tailwindcss']] },
];

function Reveal({ children, className = '', delay = 0, variant = 'up' }) {
  const [shown, setShown] = useState(false);
  const element = useRef(null);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) { setShown(true); return undefined; }
    const node = element.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setShown(true); observer.disconnect(); }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={element} className={`reveal reveal-${variant} ${shown ? 'is-visible' : ''} ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>{children}</div>;
}

function Creature({ variant, name, message, onInteract }) {
  const [visible, setVisible] = useState(false);
  const [happy, setHappy] = useState(false);
  const creatureRef = useRef(null);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) { setVisible(true); return undefined; }
    if (!creatureRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    observer.observe(creatureRef.current);
    return () => observer.disconnect();
  }, []);
  const handleClick = () => {
    const next = !happy;
    setHappy(next);
    if (next) onInteract?.();
  };
  return <button ref={creatureRef} type="button" className={`creature creature-${variant} ${visible ? 'creature-visible' : ''} ${happy ? 'creature-happy' : ''}`} onClick={handleClick} aria-label={happy ? `${name}: ${message}` : `Ask ${name} about this section`} aria-expanded={happy} title={`Ask ${name}`}><span className="creature-antenna"/><span className="creature-body"><i className="creature-eye"/><i className="creature-eye"/><i className="creature-mouth"/></span><span className="creature-feet"><i/><i/></span><span className="creature-name">{happy ? 'hi!' : name}</span>{happy && <span className="creature-message" role="status">{message}</span>}</button>;
}

function Arrow() { return <span aria-hidden="true" className="arrow">↗</span>; }

function HeroMap() {
  const visualRef = useRef(null);
  const moveMap = (event) => {
    if (event.pointerType !== 'mouse' || !visualRef.current) return;
    const bounds = visualRef.current.getBoundingClientRect();
    visualRef.current.style.setProperty('--pointer-x', `${((event.clientX - bounds.left) / bounds.width - 0.5) * 6}deg`);
    visualRef.current.style.setProperty('--pointer-y', `${(0.5 - (event.clientY - bounds.top) / bounds.height) * 6}deg`);
  };
  const resetMap = () => {
    visualRef.current?.style.setProperty('--pointer-x', '0deg');
    visualRef.current?.style.setProperty('--pointer-y', '0deg');
  };
  return <div className="hero-visual" role="group" aria-label="Interactive map of my areas of work" onPointerMove={moveMap} onPointerLeave={resetMap}>
    <div className="hero-map" ref={visualRef}>
      <div className="map-core"><span className="map-core-kicker">IDEA → IMPACT</span><strong>Curiosity<br/><em>in motion.</em></strong><span className="map-core-status"><i/> OPEN TO BUILDING</span></div>
      <a className="map-creature map-creature-moss" href="#about" aria-label="Moss: go to About"><span className="map-creature-body"><i/><i/><b/></span><span className="map-creature-name">Moss</span></a>
      <a className="map-creature map-creature-pip" href="#work" aria-label="Pip: go to selected work"><span className="map-creature-body"><i/><i/><b/></span><span className="map-creature-name">Pip</span></a>
      <a className="map-creature map-creature-dot" href="#toolkit" aria-label="Dot: go to toolkit"><span className="map-creature-body"><i/><i/><b/></span><span className="map-creature-name">Dot</span></a>
      <a className="map-creature map-creature-bloop" href="#contact" aria-label="Bloop: go to contact"><span className="map-creature-body"><i/><i/><b/></span><span className="map-creature-name">Bloop</span></a>
    </div>
  </div>;
}

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 100} variant="project" className="project-reveal">
      <article className="project-card">
        <a className={`project-art art-${index % 4}`} href={project.liveUrl || project.githubUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} ${project.liveUrl ? 'live demo' : 'GitHub profile'}`}>
          <span className="art-index">0{index + 1} / 0{projectsData.length}</span>
          <span className="art-title">{project.title}</span>
          <span className="art-line" />
          <span className="art-open"><Arrow /></span>
          {index === 0 && <span className="graph-art" aria-hidden="true"><i /><i /><i /><i /><i /><i /></span>}
          {index === 1 && <span className="signal-art" aria-hidden="true"><i /><i /><i /><b>TRAFFIC<br/>FLOW</b></span>}
          {index === 2 && <span className="shop-art" aria-hidden="true"><i /><i /><i /></span>}
          {index === 3 && <span className="expense-art" aria-hidden="true"><i /><i /><i /><i /><b>₹</b></span>}
        </a>
        <div className="project-copy">
          <div className="project-heading"><h3>{project.title}</h3><span>{project.category}</span></div>
          <p>{project.tagline}</p>
          <div className="project-bottom"><div className="tag-list">{project.technologies.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-links"><a className="text-link" href={project.githubUrl} target="_blank" rel="noreferrer">{project.githubUrl.replace(/\/$/, '').split('/').pop() === 'nyx73' ? 'GitHub profile' : 'GitHub'} <Arrow /></a>{project.liveUrl && <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <Arrow /></a>}</div></div>
        </div>
      </article>
    </Reveal>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formFeedback, setFormFeedback] = useState(null);
  const heroRef = useRef(null);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: '-25% 0px -65% 0px' });
    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  const nav = [['About', 'about'], ['Work', 'work'], ['Toolkit', 'toolkit'], ['Education', 'education'], ['Contact', 'contact']];
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    const updateHero = () => {
      frame = 0;
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollProgress = Math.min(scrollY / Math.max(window.innerHeight * 0.8, 1), 1);
      hero.style.setProperty('--hero-scroll', scrollProgress.toFixed(3));
      hero.style.setProperty('--hero-lift', `${Math.round(scrollProgress * -34)}px`);
      hero.style.setProperty('--hero-scale', (1 - scrollProgress * 0.025).toFixed(3));
      hero.style.setProperty('--hero-opacity', (1 - scrollProgress * 0.82).toFixed(3));
      hero.style.setProperty('--visual-lift', `${Math.round(scrollProgress * -18)}px`);
      hero.style.setProperty('--visual-scale', (1 + scrollProgress * 0.018).toFixed(3));
      hero.style.setProperty('--visual-opacity', (1 - scrollProgress * 0.58).toFixed(3));
      if (!reduceMotion && scrollY > 28 && !hero.classList.contains('hero-first-scroll')) hero.classList.add('hero-first-scroll');
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(updateHero); };
    const entrance = window.requestAnimationFrame(() => {
      hero.classList.remove('hero-loading');
      hero.classList.add('hero-ready');
    });
    window.addEventListener('scroll', onScroll, { passive: true });
    updateHero();
    return () => {
      window.cancelAnimationFrame(entrance);
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  const sendMessage = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    setFormFeedback({ type: 'draft', message: `Your email app should open with a draft to ${CONTACT_EMAIL}. Review it and press Send there. If it does not open, email me directly.` });
    window.setTimeout(() => { window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`; }, 80);
  };
  const focusContactForm = () => {
    const input = document.getElementById('contact-name');
    input?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
    window.setTimeout(() => input?.focus({ preventScroll: true }), 450);
  };

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        document.querySelector('.menu-toggle')?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return <div className="portfolio-shell">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header"><a className="wordmark" href="#home" aria-label="Rhythm Chavda, home">rhythm<span>.</span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-controls="main-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}><span /><span /></button>
      <nav id="main-navigation" className={menuOpen ? 'nav-open' : ''} aria-label="Main navigation">{nav.map(([label, id]) => <a key={id} aria-current={active === id ? 'location' : undefined} className={active === id ? 'active' : ''} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Say hello <Arrow /></a></nav>
    </header>

    <main id="main-content">
      <ScrollProgress />
      <section ref={heroRef} className="hero-section hero-loading" id="home"><div className="hero-side"><span className="eyebrow"><i /> COMPUTER ENGINEERING · INDIA</span><h1>Building things<br/>that <em>make sense.</em></h1><p className="hero-intro">I’m Rhythm — a developer and engineering student turning thoughtful ideas into practical software.</p><div className="hero-actions"><a className="button-dark" href="#work">Explore my work <Arrow /></a><a className="underlined-link" href="https://www.linkedin.com/in/rhythmchavda/" target="_blank" rel="noreferrer">Get in touch <Arrow /></a></div></div>
        <HeroMap />
        <div className="hero-meta"><span>INDEPENDENTLY CURIOUS, INTENTIONALLY BUILT.</span><a href="#about" aria-label="Scroll to about">↓</a></div>
      </section>

      <section id="about" className="content-section about-section"><Creature variant="moss" name="Moss" message="I like turning curiosity into useful software."/><div className="section-label"><span>01 / A LITTLE ABOUT ME</span><span>THE PERSON BEHIND THE PIXELS</span></div><div className="about-grid"><Reveal variant="left"><h2>Good software<br/>starts with <em>good questions.</em></h2></Reveal><Reveal variant="right" delay={120}><div className="about-copy"><p>I’m a Computer Engineering student who likes understanding how things work, then making them work better. My interests span web applications, Android, and applied AI.</p><p>From mapping suspicious transaction networks to modelling traffic flow, I enjoy projects where a real problem gives the technology a reason to exist.</p><div className="social-links">{links.map(([label, href], index) => <a key={label} style={{ '--link-delay': `${index * 70}ms` }} href={href} target="_blank" rel="noreferrer">{label} <Arrow /></a>)}</div></div></Reveal></div></section>

      <section id="work" className="content-section work-section"><Creature variant="peach" name="Pip" message="Each project has a direct GitHub link; live demos are marked when available."/><div className="section-label"><span>02 / SELECTED WORK</span><span>IDEAS MADE TANGIBLE</span></div><div className="section-heading"><h2>A few things<br/>I’ve <em>put into the world.</em></h2><p>Experiments, tools, and little systems<br/>built to solve something specific.</p></div><div className="project-grid">{projectsData.map((project, index) => <ProjectCard key={project.id} project={project} index={index}/>)}</div></section>

      <section id="toolkit" className="content-section toolkit-section"><Creature variant="lavender" name="Dot" message="These are the tools behind the projects you just explored."/><div className="section-label"><span>03 / THE TOOLKIT</span><span>ALWAYS LEARNING SOMETHING NEW</span></div><div className="toolkit-layout"><Reveal variant="left" className="toolkit-intro-block"><h2>A growing<br/><em>set of tools.</em></h2><p className="toolkit-intro">Technologies I’ve learned and used while building real projects. Always adding something new.</p></Reveal><div className="technology-groups">{technologyGroups.map((group, groupIndex) => <div className="technology-group" key={group.title}><h3>{group.title}</h3><div className="technology-grid">{group.items.map(([name, icon], itemIndex) => <Reveal key={name} variant="pop" delay={groupIndex * 120 + itemIndex * 55} className="technology-reveal"><div className="technology-card" title={name}><span className="technology-mark"><span aria-hidden="true">{icon.slice(0, 2).toUpperCase()}</span><img src={`https://cdn.simpleicons.org/${icon}`} alt="" loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none'; }}/></span><span>{name}</span></div></Reveal>)}</div></div>)}</div></div></section>

      <section id="education" className="content-section education-section"><div className="section-label"><span>04 / EDUCATION</span><span>THE THINKING BEHIND THE BUILDING</span></div><div className="education-heading"><h2>Learning by<br/><em>doing the work.</em></h2><p>Foundations from class, sharpened by projects and competition.</p></div><div className="education-timeline">{educationData.map((entry, entryIndex) => <Reveal key={entry.degree} variant="education" delay={entryIndex * 140}><article className="education-entry"><span className="education-marker" aria-hidden="true"/><div className="education-copy"><p className="education-status">{entry.status}</p><h3>{entry.degree}</h3><ul className="education-focus">{entry.focus.map((item, index) => <li key={item} className="education-focus-item" style={{ '--item-delay': `${index * 75}ms` }}>{item}</li>)}</ul><p className="education-highlight">{entry.highlights[1]}</p></div></article></Reveal>)}</div></section>

      <section id="contact" className="contact-section"><Creature variant="blue" name="Bloop" message="Tell me what you’re building — I’ll take you to the message form." onInteract={focusContactForm}/><div className="section-label"><span>05 / YOUR TURN</span><span>OPEN TO GOOD IDEAS</span></div><div className="contact-layout"><Reveal variant="contact"><div className="contact-content"><p className="eyebrow">HAVE SOMETHING IN MIND?</p><h2>Let’s make<br/><em>it useful.</em></h2><a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>Email me <Arrow /></a><p className="contact-note">Always up for a good conversation about projects, hackathons, or what you’re building.</p></div></Reveal><Reveal variant="right" delay={120}><form className="contact-form" onSubmit={sendMessage} onInvalid={(event) => setFormFeedback({ type: 'error', message: `Please check the ${event.target.name === 'email' ? 'email address' : event.target.name || 'highlighted'} field and try again.` })}><label>Your name<input id="contact-name" name="name" required autoComplete="name" value={form.name} onChange={(event) => { setForm({ ...form, name: event.target.value }); if (formFeedback?.type === 'error') setFormFeedback(null); }} placeholder="Name" aria-describedby={formFeedback ? 'contact-feedback' : undefined}/></label><label>Your email<input name="email" required type="email" autoComplete="email" value={form.email} onChange={(event) => { setForm({ ...form, email: event.target.value }); if (formFeedback?.type === 'error') setFormFeedback(null); }} placeholder="you@example.com" aria-describedby={formFeedback ? 'contact-feedback' : undefined}/></label><label>Your message<textarea name="message" required rows="4" value={form.message} onChange={(event) => { setForm({ ...form, message: event.target.value }); if (formFeedback?.type === 'error') setFormFeedback(null); }} placeholder="What would you like to talk about?" aria-describedby={formFeedback ? 'contact-feedback' : undefined}/></label>{formFeedback && <p id="contact-feedback" className={`form-feedback form-feedback-${formFeedback.type}`} role={formFeedback.type === 'error' ? 'alert' : 'status'}>{formFeedback.message} {formFeedback.type === 'draft' && <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>}</p>}<button className="button-dark" type="submit">Open email to send <Arrow /></button></form></Reveal></div><footer className="site-footer"><a className="wordmark" href="#home">rhythm<span>.</span></a><span>Designed with curiosity. Built with care.</span><span>© {new Date().getFullYear()} Rhythm Chavda</span></footer></section>
    </main>
  </div>;
}
