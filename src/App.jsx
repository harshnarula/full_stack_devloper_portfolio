import React, { useState, useEffect } from "react";

/* ─── DATA ─── */
const data = {
  name: "Harsh Narula",
  title: "Full-Stack Developer & UI Engineer",
  tagline: "I build fast, scalable, and beautiful web experiences.",
  bio: "Full Stack Web Developer skilled in React.js, Node.js, Express.js, and MySQL. Experienced in building responsive web apps, REST APIs, and real-time features using Socket.IO. Passionate about clean UI, scalable backend development, and continuous learning.",
  location: "Mumbai, India",
  email: "harshnarula02@gmail.com",
  github: "https://github.com/harshnarula",
  linkedin: "https://www.linkedin.com/in/harsh-narula-597b95314",
  avatar: "👨‍💻",
  stats: [
    { num: "1.5+", label: "Years Exp." },
    { num: "5+", label: "Projects" },
    { num: "12+", label: "Technologies Used" },
    { num: "20+", label: "GitHub Repos" },
  ],

  techStack: {
    Frontend: [
      { name: "React.js", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "JavaScript", icon: "🔷" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Redux", icon: "🔄" },
      { name: "Html", icon: "🌐" },
      { name: "Flask", icon: "🐍" },
    ],
    Backend: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚂" },
      // { name: "Python", icon: "🐍" },
      { name: "FastAPI", icon: "⚡" },
      { name: "Socket.IO", icon: "📡" },
      { name: "REST APIs", icon: "🔗" },
      { name: "JWT Authentication", icon: "🔑" },
      { name: "Django", icon: "🎯" },
    ],
    Database: [
      { name: "MySQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
    ],
    DevOps: [
      { name: "Git", icon: "🌿" },
      { name: "GitHub", icon: "🐙" },
      { name: "GitHub Actions", icon: "🤖" },
      { name: "Vercel", icon: "▲" },
    ],
  },

  projects: [
    {
      title: "Shopy",
      desc: "Shopy is a full-stack e-commerce platform focused on electronics products, built using the MERN stack with MySQL integration. It features product listings, category filtering, secure user authentication, cart management, order processing, and online payment integration. The platform includes an admin dashboard for product and inventory management, delivering a seamless and responsive shopping experience across devices.",
      tech: ["MySQL", "Express.js", "React.js", "Node.js"],
      tag: "Full-Stack",
      color: "#00d4ff",
      emoji: "🛒",
      github: "https://github.com/harshnarula/shopy",
      live: "https://github.com/harshnarula/shopy",
      featured: true,
    },
    {
      title: "Weather Forecast",
      desc: "A responsive weather forecasting application built using React.js that fetches real-time weather data from a third-party API. Users can search for cities to view current temperature, weather conditions, humidity, wind speed, and multi-day forecasts. The application includes dynamic UI updates, error handling for invalid locations, and a clean, user-friendly interface.",
      tech: ["React.js", "JavaScript", "CSS", "REST API"],
      tag: "Frontend",
      color: "#00bcd4",
      emoji: "🌤️",
      github: "https://github.com/harshnarula/weather-app",
      live: "https://github.com/harshnarula/weather-app",
      featured: true,
    },
    {
      title: "ASHK",
      desc: "ASHK is a travel and holiday booking management website developed as a college project. The platform allows users to explore travel packages, view destination details, check pricing, and make booking inquiries. It includes user-friendly navigation, package categorization, and basic admin management features for handling travel listings.",
      tech: ["Django", "FastAPI", "Flask"],
      tag: "Full-Stack",
      color: "#7928ca",
      emoji: "🌍",
      github: "https://github.com/harshnarula/ASHK",
      live: "#",
      featured: false,
    },
    {
      title: "Video Chat Application",
      desc: "A real-time video calling web application developed as a college project. Contributed primarily to the frontend development, building responsive UI components and integrating them with a Flask backend. The platform enables users to connect via video calls and communicate seamlessly through a browser-based interface.",
      tech: ["HTML", "CSS", "JavaScript", "React.js"],
      tag: "Full-Stack",
      color: "#ff6b6b",
      emoji: "📹",
      github: "https://github.com/harshnarula/video-chat-application",
      live: "#",
      featured: false,
    },
    {
      title: "Sign Language Recognition System",
      desc: "An AI/ML-based system developed as a college project to assist communication for individuals with hearing and speech impairments. The project involved collecting and preprocessing gesture image data, preparing datasets for model training, and manually testing recognition accuracy. Focused on building a machine learning pipeline for gesture classification and basic prediction output.",
      tech: ["Python", "Machine Learning", "OpenCV", "NumPy"],
      tag: "AI / ML",
      color: "#22c55e",
      emoji: "🧠",
      github: "#",
      live: "#",
      featured: false,
    },
  ],

  experience: [
    {
      company: "Techmertia Pvt. Ltd.",
      role: "Application Developer",
      period: "Dec 2024 – Present",
      location: "Remote",
      type: "Full-time",
      color: "#00d4ff",
      desc: "Leading frontend development for EM360 Management’s SaaS platform using React.js and MERN stack. Designed scalable, component-driven architecture and optimized performance through code splitting, lazy loading, and efficient API handling. Built real-time modules including chat, campaigns, and task workflows with secure JWT authentication and REST integrations.",
      techs: ["Express.js", "React.js", "Node.js", "MySQL", "Flutter"],
      bullets: [
        "Developed a full-scale tech platform at EM360 Management using React.js with reusable components and modern responsive architecture.",
        "Built an in-house real-time chat application (MERN) with JWT authentication, Socket.IO messaging, channel management, and scalable REST APIs.",
        "Implemented campaign, project, task, and bidding modules with complete backend API integration.",
        "Developed an Employee Management System (Flutter + Express.js + MySQL) with project assignments, ticketing, announcements, and calendar modules.",
        "Integrated secure REST APIs and MySQL database to support employee workflows and data management.",
        "Built Techmertia company landing page using React.js with component-based architecture and fully responsive UI.",
      ],

      projects: [
        {
          name: "EM360 Management Platform",
          desc: "Full-scale React + MERN platform with chat system, campaign management, task workflows, and scalable backend APIs.",
        },
        {
          name: "EMS – Employee Management System",
          desc: "Flutter mobile app with Express.js backend and MySQL database supporting employee assignments, ticketing, and internal communication.",
        },
        {
          name: "Techmertia Landing Website",
          desc: "Responsive React.js company website with optimized UI, service showcase, and modern layout architecture.",
        },
      ],
    },
    {
      company: "Xertz Studios",
      role: "Frontend Developer Intern",
      period: "Aug 2024 – Dec 2024",
      location: "Remote",
      type: "Intern",
      color: "#7928ca",
      desc: "Developed and designed the official company website using HTML, CSS, JavaScript, and React. Focused on responsive layouts, clean UI structure, and performance-optimized frontend implementation.",
      techs: ["HTML", "CSS", "JavaScript", "React"],
      bullets: [
        "Designed and developed multiple website layout versions before final deployment.",
        "Built responsive pages ensuring cross-device and cross-browser compatibility.",
        "Implemented interactive UI components using JavaScript and React.",
        "Optimized page structure and assets for better performance and loading speed.",
      ],
      projects: [
        {
          name: "Xertz Studios Website",
          desc: "Company portfolio website developed with modern UI design, responsive layouts, and interactive frontend elements.",
        },
      ],
    },
    {
      company: "Sankey Solutions",
      role: "Solution Analyst",
      period: "Jun 2023 – Aug 2023",
      location: "Thane, India",
      type: "Job",
      color: "#ff4d6d",
      desc: "Worked as a Solution Analyst at Sankey Solutions, focusing on strengthening core JavaScript and React.js fundamentals while contributing to basic UI development tasks and feature enhancements.",
      techs: ["HTML", "CSS", "JavaScript", "React.js"],
      bullets: [
        "Learned and implemented core JavaScript concepts including ES6 features and DOM manipulation.",
        "Built basic UI components using React.js and practiced component-based architecture.",
        "Assisted in frontend bug fixes and minor feature updates.",
        "Gained hands-on experience in version control using Git.",
      ],
      projects: [
        {
          name: "Frontend Practice Modules",
          desc: "Developed small-scale practice components and UI sections to strengthen JavaScript and React fundamentals.",
        },
      ],
    },
  ],

  activities: [
    {
      icon: "🚀",
      title: "Quasar 2023",
      desc: "Part of the core team for Quasar Hackathon Event 2023. Contributed to event planning, coordination, and overall execution.",
      badge: "Hackathon Event",
      color: "#00d4ff",
    },
    {
      icon: "📢",
      title: "Marketing Head",
      desc: "Led marketing initiatives, handled promotions, outreach strategies, and ensured maximum participation for Quasar 2023.",
      badge: "Leadership",
      color: "#7928ca",
    },
    {
      icon: "🛠️",
      title: "Event Organiser",
      desc: "Managed event logistics, scheduling, team coordination, and smooth execution of activities during Quasar 2023.",
      badge: "Event Management",
      color: "#10b981",
    },
    {
      icon: "🎓",
      title: "Higher Studies Head",
      desc: "Served as Higher Studies Head, Training & Placement Office (TPO), VPPCOE & VA (2023). Coordinated seminars and guided students for higher education opportunities.",
      badge: "TPO",
      color: "#f59e0b",
    },
    {
      icon: "🤝",
      title: "Training & Placement Coordinator",
      desc: "Helped coordinate seminars, workshops, and placement-related events for students under the Training & Placement Department.",
      badge: "Coordination",
      color: "#06b6d4",
    },
  ],
};

/* ─── NAV ─── */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    "About",
    "Tech",
    "Experience",
    "Projects",
    "Activities",
    "Contact",
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all ${
        scrolled
          ? "bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-white font-semibold tracking-wide text-lg">
          {data.name}
        </h1>

        <ul className="hidden md:flex gap-8 text-sm text-slate-400">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="hover:text-white transition"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0f172a] px-6 pb-6 flex flex-col gap-4 text-slate-300">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="hover:text-white transition"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  const [typed, setTyped] = useState("");
  const roles = [
    "Full-Stack Web Developer",
    "Problem Solver",
    "Leadership",
    "Work Ethic",
  ];

  useEffect(() => {
    let i = 0;
    let deleting = false;
    let roleIndex = 0;

    const type = () => {
      const current = roles[roleIndex];

      if (!deleting) {
        setTyped(current.slice(0, i + 1));
        i++;
        if (i === current.length) {
          deleting = true;
          setTimeout(type, 1200);
          return;
        }
      } else {
        setTyped(current.slice(0, i - 1));
        i--;
        if (i === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }

      setTimeout(type, deleting ? 40 : 80);
    };

    const timer = setTimeout(type, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-[#0b1120] text-white px-6"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-500">{data.name}</span>
          </h2>

          <div className="text-lg text-slate-400 h-6">
            {typed}
            <span className="border-r-2 border-blue-500 ml-1 animate-pulse" />
          </div>

          <p className="text-slate-400 max-w-xl mx-auto lg:mx-0">{data.bio}</p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-sm font-medium transition"
            >
              Contact Me
            </a>

            <a
              href="#projects"
              className="border border-slate-600 hover:border-blue-500 px-6 py-2 rounded-md text-sm transition"
            >
              View Projects
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
            {data.stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-semibold text-blue-500">
                  {s.num}
                </div>
                <div className="text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div className="flex justify-center">
          <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-2xl bg-[#111827] border border-slate-800 flex items-center justify-center text-7xl shadow-xl">
            {data.avatar}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TECH STACK ─── */
function TechStack() {
  const categories = Object.keys(data.techStack);
  const [active, setActive] = useState(categories[0]);

  return (
    <section
      id="tech"
      className="bg-[#0f172a] border-y border-slate-800 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-3">
            Tools & Technologies
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            A curated stack of technologies I use to build scalable,
            production-ready applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-sm rounded-md border transition ${
                active === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-slate-700 text-slate-400 hover:border-blue-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.techStack[active].map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-6 bg-[#111827] border border-slate-800 rounded-xl hover:border-blue-500 transition"
            >
              <div className="text-3xl mb-3">{tech.icon}</div>
              <div className="text-sm text-white font-medium text-center">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PROJECTS ─── */
function Projects() {
  const featured = data.projects.filter((p) => p.featured);
  const rest = data.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-6 bg-[#0b1120]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <h3 className="text-3xl font-bold text-white mb-3">
            Selected Projects
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            A collection of full-stack applications and experimental builds
            showcasing real-world architecture and design.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featured.map((p) => (
            <div
              key={p.title}
              className="p-7 bg-[#111827] border border-slate-800 rounded-2xl hover:border-blue-500 transition"
            >
              <div className="flex justify-between items-start mb-5">
                <div>
                  <div className="text-3xl mb-3">{p.emoji}</div>
                  <h4 className="text-white font-semibold text-lg mb-1">
                    {p.title}
                  </h4>
                  <span className="text-xs text-blue-500">{p.tag}</span>
                </div>

                <div className="flex gap-3 text-lg">
                  <a
                    href={p.github}
                    className="text-slate-400 hover:text-blue-500 transition"
                  >
                    ⚡
                  </a>
                  <a
                    target="_blank"
                    href={p.live}
                    className="text-slate-400 hover:text-blue-500 transition"
                  >
                    🔗
                  </a>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 bg-[#0b1120] border border-slate-800 rounded-md text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p) => (
            <div
              key={p.title}
              className="p-6 bg-[#111827] border border-slate-800 rounded-xl hover:border-blue-500 transition"
            >
              <div className="text-2xl mb-3">{p.emoji}</div>

              <h5 className="text-white font-medium text-sm mb-1">{p.title}</h5>

              <span className="text-xs text-blue-500">{p.tag}</span>

              <p className="text-slate-400 text-xs leading-relaxed mt-3 mb-4">
                {p.desc.slice(0, 100)}...
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 bg-[#0b1120] border border-slate-800 rounded text-slate-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── EXPERIENCE ─── */
function Experience() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section
      id="experience"
      className="bg-[#0f172a] border-y border-slate-800 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <h3 className="text-3xl font-bold text-white mb-3">
            Professional Journey
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Companies I’ve worked with and the impact I’ve made along the way.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {data.experience.map((exp, i) => (
            <div key={exp.company} className="relative">
              {/* Card */}
              <div
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="relative group p-6 rounded-2xl bg-[#111827]/80 backdrop-blur-sm border border-slate-800 hover:border-blue-500/40 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Left Accent Bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{
                    background: `linear-gradient(to bottom, ${exp.color}, transparent)`,
                  }}
                />

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-white text-lg font-semibold">
                        {exp.role}
                      </h3>

                      <span
                        className="text-xs font-mono px-2 py-1 rounded-md border"
                        style={{
                          color: exp.color,
                          borderColor: `${exp.color}40`,
                          background: `${exp.color}15`,
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-slate-400 mt-1 text-sm">{exp.company}</p>
                  </div>

                  <div className="text-sm text-slate-500 font-mono">
                    <p>{exp.period}</p>
                    <p>📍 {exp.location}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mt-4">
                  {exp.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.techs.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Expanded Section */}
                {expanded === i && (
                  <div className="mt-6 pt-6 border-t border-slate-800 space-y-6">
                    {/* Contributions */}
                    <div>
                      <p className="text-xs font-mono text-slate-500 tracking-widest mb-3">
                        KEY CONTRIBUTIONS
                      </p>
                      <ul className="space-y-2">
                        {exp.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm text-slate-400"
                          >
                            <span className="mt-1" style={{ color: exp.color }}>
                              ▸
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Projects */}
                    <div>
                      <p className="text-xs font-mono text-slate-500 tracking-widest mb-3">
                        PROJECTS SHIPPED
                      </p>

                      <div className="grid sm:grid-cols-2 gap-4">
                        {exp.projects.map((proj) => (
                          <div
                            key={proj.name}
                            className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/30 transition"
                          >
                            <p className="text-sm font-medium text-white">
                              {proj.name}
                            </p>
                            <p className="text-xs text-slate-500 mt-1">
                              {proj.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Toggle Indicator */}
                <div className="mt-6 text-xs font-mono text-blue-500">
                  {expanded === i ? "▲ Collapse" : "▼ View Details"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ACTIVITIES ─── */
function Activities() {
  return (
    <section
      id="activities"
      className="bg-[#0f172a] border-y border-slate-800 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <h3 className="text-3xl font-bold text-white mb-3">Beyond Code</h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            What I do when I'm not shipping features — growing the community and
            myself.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.activities.map((act) => (
            <div
              key={act.title}
              className="relative group p-6 rounded-2xl bg-[#111827]/80 backdrop-blur-sm border border-slate-800 hover:border-blue-500/40 transition-all duration-300 overflow-hidden"
            >
              {/* Left Accent Bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                style={{
                  background: `linear-gradient(to bottom, ${act.color}, transparent)`,
                }}
              />

              {/* Content */}
              <div className="relative">
                {/* Top Row */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border"
                    style={{
                      background: `${act.color}15`,
                      borderColor: `${act.color}30`,
                    }}
                  >
                    {act.icon}
                  </div>

                  <span
                    className="text-xs font-mono px-2 py-1 rounded-md border"
                    style={{
                      color: act.color,
                      borderColor: `${act.color}40`,
                      background: `${act.color}15`,
                    }}
                  >
                    {act.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white text-lg font-semibold mb-3">
                  {act.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {act.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="bg-[#0f172a] border-t border-slate-800 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <h3 className="text-3xl font-bold text-white mb-3">
            Let’s Work Together
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Have a project in mind? Drop me a message and I’ll get back within
            24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info Panel */}
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: "📧", label: "Email", val: data.email },
              { icon: "📍", label: "Location", val: data.location },
              { icon: "⚡", label: "GitHub", val: data.github },
              { icon: "💼", label: "LinkedIn", val: data.linkedin },
            ].map((item) => (
              <div
                key={item.label}
                className="relative p-5 rounded-2xl bg-[#111827]/80 border border-slate-800 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-xs font-mono text-slate-500 tracking-widest mb-1">
                      {item.label}
                    </p>
                    {item.label === "GitHub" || item.label === "LinkedIn" ? (
                      <a
                        href={item.val}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit Harsh Narula's ${item.label} profile`}
                        className="text-sm text-blue-400 hover:text-blue-300 transition font-medium"
                      >
                        {item.label} Profile →
                      </a>
                    ) : (
                      <p className="text-sm text-slate-300 break-all">
                        {item.val}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Status Card */}
            <div className="relative p-5 rounded-2xl bg-[#111827]/80 border border-blue-500/20 backdrop-blur-sm">
              <p className="text-xs font-mono text-blue-400 tracking-widest mb-3">
                STATUS
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-sm text-slate-300">
                  Open to full-time & contract roles
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {["name", "email"].map((field) => (
                <div key={field}>
                  <label className="block text-xs font-mono text-slate-500 tracking-widest mb-2 uppercase">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    placeholder={
                      field === "name" ? "John Doe" : "john@example.com"
                    }
                    value={form[field]}
                    onChange={(e) =>
                      setForm({ ...form, [field]: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-slate-800 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/40 transition"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-500 tracking-widest mb-2 uppercase">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project inquiry, collaboration..."
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-slate-800 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/40 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-500 tracking-widest mb-2 uppercase">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your project or idea..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-slate-800 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/40 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all ${
                sent
                  ? "bg-emerald-500 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30"
              }`}
            >
              {sent
                ? "✓ Message Sent! I’ll be in touch soon."
                : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs font-mono text-slate-500">
          Designed & built by{" "}
          <span className="text-blue-400 font-semibold">Harsh Narula</span> ·{" "}
          {new Date().getFullYear()} · Built with React + Tailwind
        </p>
      </div>
    </footer>
  );
}

/* ─── APP ─── */
export default function App() {
  return (
    <div className="font-sans bg-[#0b1120] min-h-screen">
      <Nav />
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Activities />
      <Contact />
      <Footer />
    </div>
  );
}
