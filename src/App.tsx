import { useEffect, useRef, useState } from "react";

const EMAIL = "mcdwebs4135@gmail.com";
const DEFAULT_MESSAGE =
  "Hi, I’m interested in working with you on a new project. Here are a few details about what I need:";

type Work = {
  id: string;
  title: string;
  category: string;
  blurb: string;
  image: string;
  url?: string;
};

const works: Work[] = [
  {
    id: "01",
    title: "Fernwood Bakery",
    category: "Food / Local business",
    blurb:
      "A warm, editorial site for a neighborhood bakery, with a live menu, a pre-order tray and opening hours that know what day it is.",
    image: "/work/fernwood.jpg",
    url: "/fernwood/",
  },
  {
    id: "02",
    title: "Ledgerly",
    category: "SaaS / Fintech",
    blurb:
      "A crisp product site for an invoicing tool: an interactive dashboard preview, ROI calculator and clear pricing.",
    image: "/work/ledgerly.jpg",
    url: "/ledgerly/",
  },
  {
    id: "03",
    title: "Rook Electric",
    category: "E-commerce / Brand",
    blurb:
      "A loud, brutalist launch site for an e-bike brand, with a bike you can recolor and a finder that picks your model.",
    image: "/work/rook.jpg",
    url: "/rook/",
  },
  {
    id: "04",
    title: "Maré",
    category: "Hospitality / Travel",
    blurb:
      "A photography-led site for a coastal retreat, with a slow word-by-word intro, a draggable room carousel and a live stay estimator.",
    image: "/work/mare.jpg",
    url: "/mare/",
  },
  {
    id: "05",
    title: "Netanel Levinstein",
    category: "Photography",
    blurb:
      "A portfolio for a photographer who sells feeling, not files. The site gets out of the way so the frames do the talking.",
    image: "/work/netanel.jpg",
    url: "https://www.netanelewen.com/Home?lang=en",
  },
  {
    id: "06",
    title: "Terra Ceramics",
    category: "Craft / Local studio",
    blurb:
      "A tactile, collage-style site for a pottery studio, with a class finder and a glaze picker that recolors the whole page.",
    image: "/work/terra.jpg",
    url: "/terra/",
  },
  {
    id: "07",
    title: "Wavelength Festival",
    category: "Events / Music",
    blurb:
      "A loud, colorful festival site where you tune a wavelength and the whole page, and its sound wave, shifts with it.",
    image: "/work/wavelength.jpg",
    url: "/wavelength/",
  },
];

function Shot({ w, alt }: { w: Work; alt?: string }) {
  return <img src={w.image} alt={alt ?? ""} loading="lazy" decoding="async" />;
}

const layers = [
  {
    n: "01",
    title: "Design",
    text: "Brand-led visual systems, layouts and type that look like nobody else’s. Every project starts with a concept, not a template.",
    tags: ["Brand identity", "UI / UX", "Responsive"],
  },
  {
    n: "02",
    title: "Build",
    text: "Fast, accessible React and TypeScript sites, hand-built and deployed on modern infrastructure. E-commerce and CMS when you need it.",
    tags: ["React", "TypeScript", "E-commerce", "CMS"],
  },
  {
    n: "03",
    title: "Motion",
    text: "Scroll-driven reveals, micro-interactions and cinematic transitions that explain the product, never just decorate it.",
    tags: ["Scroll effects", "Micro-interactions", "Performance"],
  },
  {
    n: "04",
    title: "Automate",
    text: "Bots, integrations and workflows that take the repetitive work off your plate, wired into the site you already have.",
    tags: ["Bots", "Automation", "Integrations"],
  },
  {
    n: "05",
    title: "Grow",
    text: "SEO foundations and analytics built in from day one, so you can see what’s working and keep improving it.",
    tags: ["SEO", "Analytics", "Optimization"],
  },
];

const steps = [
  { t: "Brief", d: "We talk goals, audience and what success looks like." },
  { t: "Storyboard", d: "Concept, structure and visual direction, agreed before any code." },
  { t: "Shoot", d: "I build it: responsive, animated, fast. You see progress as it happens." },
  { t: "Release", d: "Launch, measure and tune. Support doesn’t stop at go-live." },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--d": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    ["Work", "#work"],
    ["Layers", "#layers"],
    ["Process", "#process"],
    ["Contact", "#contact"],
  ];
  return (
    <header className={`nav-wrap ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav glass" aria-label="Main">
        <a href="#top" className="brand">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          mcd webs
        </a>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([l, h]) => (
            <li key={h}>
              <a href={h} onClick={() => setOpen(false)}>
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-sm btn-light nav-cta">
          Start a project
        </a>
        <button
          className="burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}

function Reel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const screen = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((n) => (n + 1) % works.length), 5200);
    return () => clearTimeout(t);
  }, [i, paused]);

  const onMove = (e: React.PointerEvent) => {
    const el = screen.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-y * 3).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 4).toFixed(2)}deg`);
  };
  const onLeave = () => {
    screen.current?.style.setProperty("--rx", "0deg");
    screen.current?.style.setProperty("--ry", "0deg");
  };

  return (
    <div className="reel-stage">
      <div
        className="reel"
        ref={screen}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {works.map((w, k) => (
          <div key={w.id} className={`reel-img ${k === i ? "on" : ""}`}>
            <Shot w={w} alt={k === i ? `${w.title} website preview` : ""} />
          </div>
        ))}
        <div className="grain" aria-hidden="true" />
        <div className="reel-shade" aria-hidden="true" />
        <div className="hud hud-top">
          <span className="rec">
            <i /> REEL
          </span>
          <span className="mono">
            {works[i].id} / 0{works.length}
          </span>
        </div>
        <div className="hud hud-bottom">
          <div>
            <p className="mono dim">{works[i].category}</p>
            <h2 className="reel-title">{works[i].title}</h2>
          </div>
                      <a className="btn btn-sm btn-glass" href={works[i].url} {...ext(works[i].url)}>
              Visit site ↗
            </a>
        </div>
      </div>
      <div className="reel-ticks" role="tablist" aria-label="Reel">
        {works.map((w, k) => (
          <button
            key={w.id}
            role="tab"
            aria-selected={k === i}
            className={`tick ${k === i ? "on" : ""} ${paused ? "paused" : ""}`}
            onClick={() => setI(k)}
          >
            <span className="tick-bar">
              <i />
            </span>
            <span className="tick-label">{w.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-copy">
        <p className="pill mono">Web design &amp; development studio</p>
        <h1>
          Websites with a <em>cinematic</em> pulse.
        </h1>
        <p className="lede">
          I’m Michael, the one-person studio behind MCD Webs. I design, build and
          automate sites that feel like a product launch, not a template.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-light">
            Start a project
          </a>
          <a href="#work" className="btn btn-glass">
            Watch the reel ↓
          </a>
        </div>
      </div>
      <div className="wrap wide">
        <Reel />
      </div>
    </section>
  );
}

const ext = (u?: string) => (u?.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {});

function Card({ w, children }: { w: Work; children: React.ReactNode }) {
  return w.url ? (
    <a className="card" href={w.url} {...ext(w.url)}>
      {children}
    </a>
  ) : (
    <div className="card">{children}</div>
  );
}

function Library() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <Reveal className="head">
          <p className="mono dim">Library</p>
          <h2 className="h2">
            Selected <em>work</em>
          </h2>
        </Reveal>
        <div className="library">
          {works.map((w, k) => (
            <Reveal key={w.id} className="card-wrap" delay={k % 2 ? 90 : 0}>
              <Card w={w}>
                <div className="card-media">
                  <Shot w={w} alt={`${w.title} website`} />
                  <span className="card-visit btn btn-sm btn-light">Visit ↗</span>
                </div>
                <div className="card-meta">
                  <div>
                    <h3>{w.title}</h3>
                    <p className="card-blurb">{w.blurb}</p>
                  </div>
                  <span className="mono dim card-cat">{w.category}</span>
                </div>
              </Card>
            </Reveal>
          ))}
          <Reveal className="card-wrap" delay={works.length % 2 ? 90 : 0}>
            <a className="card" href="#contact">
              <div className="card-media next-media">
                <span>
                  Your site, <em>here.</em>
                </span>
              </div>
              <div className="card-meta">
                <div>
                  <h3>Your project, next</h3>
                  <p className="card-blurb">
                    Have an idea, a brand or a business that deserves a site like these? Let’s build it.
                  </p>
                </div>
                <span className="mono dim card-cat">Let’s talk</span>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Layers() {
  return (
    <section className="section layers" id="layers">
      <div className="wrap layers-grid">
        <div className="layers-intro">
          <Reveal>
            <p className="mono dim">Layers</p>
            <h2 className="h2">
              A site is <em>five layers</em> deep.
            </h2>
            <p className="lede sm">
              Most studios sell one of them. I build the whole stack, so the
              design, the code and the automation actually fit together.
            </p>
          </Reveal>
        </div>
        <ol className="stackcards">
          {layers.map((l, k) => (
            <li
              key={l.n}
              className="layer glass"
              style={{ "--k": k } as React.CSSProperties}
            >
              <span className="mono dim">{l.n}</span>
              <h3>{l.title}</h3>
              <p>{l.text}</p>
              <ul className="stack mono">
                {l.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <Reveal className="head">
          <p className="mono dim">Process</p>
          <h2 className="h2">
            From brief to <em>release</em>.
          </h2>
        </Reveal>
        <ol className="steps">
          {steps.map((s, k) => (
            <Reveal key={s.t} delay={k * 80}>
              <li className="step">
                <span className="step-n">0{k + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const [state, setState] = useState<"idle" | "busy" | "done" | "error">("idle");
  const [err, setErr] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      setState("error");
      setErr("Please add your email and a message.");
      return;
    }
    setState("busy");
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await r.json();
      if (!r.ok || !data.success) throw new Error(data.error);
      setState("done");
      setName("");
      setEmail("");
      setMessage(DEFAULT_MESSAGE);
    } catch {
      setState("error");
      setErr("Couldn’t send that. Please try again or email me directly.");
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <Reveal className="contact-panel glass">
          <div className="contact-copy">
            <p className="mono dim">Contact</p>
            <h2 className="mega">
              Let’s roll <em>camera.</em>
            </h2>
            <p className="lede sm">
              Tell me what you’re building. I’ll reply with ideas, not a sales
              script.
            </p>
            <a className="mail" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </div>
          <form className="form" onSubmit={submit} noValidate>
            <label>
              <span className="mono dim">Name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
            </label>
            <label>
              <span className="mono dim">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </label>
            <label>
              <span className="mono dim">Message</span>
              <textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required />
            </label>
            <button className={`btn btn-light submit ${state}`} disabled={state === "busy"}>
              {state === "busy" ? "Sending…" : state === "done" ? "Sent ✓" : "Send message"}
            </button>
            <p className="form-note" role="status" aria-live="polite">
              {state === "done" && "Thanks! I’ll be in touch soon."}
              {state === "error" && <span className="err">{err}</span>}
            </p>
          </form>
        </Reveal>
      </div>
      <footer className="wrap foot">
        <span>© {new Date().getFullYear()} MCD Webs</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Library />
        <Layers />
        <Process />
        <Contact />
      </main>
    </>
  );
}
