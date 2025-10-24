import { messages } from "i18n";

/* simple state */
const state = {
  lang: localStorage.getItem("lang") || "fr",
  skills: ["Pentest", "Blue Team", "DFIR", "SIEM", "EDR", "Python", "Bash", "Regex", "Windows", "Linux", "Cloud", "Threat Intel"],
  projects: [
    {
      id: "proj-detector",
      title: { fr: "Détecteur d'exfiltration", en: "Exfiltration Detector" },
      desc: {
        fr: "Détection d'exfiltration DNS/HTTP avec profils baselines et alerting.",
        en: "Detect DNS/HTTP exfiltration using baselines and alerting."
      },
      tags: ["Detection", "Python", "SIEM"],
      images: [
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    {
      id: "proj-redteam",
      title: { fr: "Kit Red Team léger", en: "Light Red Team Kit" },
      desc: {
        fr: "Outils de pivot, tunneling et OPSEC pour engagements rapides.",
        en: "Pivot, tunneling and OPSEC toolkit for quick engagements."
      },
      tags: ["Red Team", "Go", "OPSEC"],
      images: [
        "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1510511233900-1802aa32f5e4?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    {
      id: "proj-hunting",
      title: { fr: "Playbooks Threat Hunting", en: "Threat Hunting Playbooks" },
      desc: {
        fr: "Playbooks reproductibles pour EDR/SIEM, MITRE ATT&CK mappé.",
        en: "Repeatable playbooks for EDR/SIEM, mapped to MITRE ATT&CK."
      },
      tags: ["Hunting", "ATT&CK", "EDR"],
      images: [
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1557264301-1f9c484c0a3d?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    {
      id: "proj-incident",
      title: { fr: "Automatisation DFIR", en: "DFIR Automation" },
      desc: {
        fr: "Collecte/triage automatisés, parsers artefacts Windows & Linux.",
        en: "Automated triage & collection, Windows & Linux artifact parsers."
      },
      tags: ["DFIR", "Automation", "Python"],
      images: [
        "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    {
      id: "proj-soc",
      title: { fr: "Dashboards SOC", en: "SOC Dashboards" },
      desc: {
        fr: "Visualisation anomalies et priorisation incidents.",
        en: "Anomaly visualization & incident prioritization."
      },
      tags: ["SOC", "Visualization", "JS"],
      images: [
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    {
      id: "proj-malware",
      title: { fr: "Sandbox Malware", en: "Malware Sandbox" },
      desc: {
        fr: "Environnement contrôlé pour analyse comportementale.",
        en: "Controlled environment for behavioral analysis."
      },
      tags: ["Malware", "Sandbox", "Reverse"],
      images: [
        "https://images.unsplash.com/photo-1526378722484-bbefc2c7fdf2?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551280840-7c1eacae6b2f?q=80&w=1200&auto=format&fit=crop"
      ]
    }
  ]
};

const star = document.querySelector("#me .dialogue-undertale .star");
const dialogue = document.querySelector("#me .dialogue-undertale");

dialogue.addEventListener("mouseenter", () => {
  star.textContent = "❤";  // cœur rouge
  star.style.color = "red";
});

dialogue.addEventListener("mouseleave", () => {
  star.textContent = "*";  // redevient étoile
  star.style.color = "#fff";
});


/* i18n */
function applyI18n(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const msg = messages[lang]?.[key];
    if (!msg) return;

    if (el.closest(".dialogue-undertale")) {
      // lettre par lettre uniquement pour les dialogues Undertale
      typeWriter(el, msg, 30);
    } else {
      el.textContent = msg;
    }
  });
  document.getElementById("langLabel").textContent = lang.toUpperCase();
}



/* skills */
function renderSkills() {
  const ul = document.getElementById("skillsTags");
  ul.innerHTML = "";
  state.skills.forEach(s => {
    const li = document.createElement("li");
    li.textContent = s;
    ul.appendChild(li);
  });
}

/* projects */
function createCarousel(images) {
  const carousel = document.createElement("div");
  carousel.className = "carousel";

  const track = document.createElement("div");
  track.className = "carousel-track";

  images.forEach(src => {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    slide.appendChild(img);
    track.appendChild(slide);
  });

  carousel.appendChild(track);
  return carousel;
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";
  state.projects.forEach(p => {
    const card = document.createElement("article");
    card.className = "project-card fade-in";

    const carousel = createCarousel(p.images);

    const content = document.createElement("div");
    content.className = "project-content";

    const title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = p.title[state.lang];

    const desc = document.createElement("p");
    desc.className = "project-desc";
    desc.textContent = p.desc[state.lang];

    const meta = document.createElement("div");
    meta.className = "project-meta";
    p.tags.forEach(t => {
      const b = document.createElement("span");
      b.className = "badge";
      b.textContent = t;
      meta.appendChild(b);
    });

    content.append(title, desc, meta);
    card.append(carousel, content);
    grid.appendChild(card);
  });
}

/* typewriter pour dialogues Undertale */
function typeWriter(element, text, delay = 50) {
  // Annule une éventuelle animation en cours
  if (element._typeWriterTimeout) {
    clearTimeout(element._typeWriterTimeout);
  }

  element.textContent = "";
  let i = 0;

  function addLetter() {
    if (i < text.length) {
      element.textContent += text[i];

      let extraDelay = 0;
      if (".,!?;:".includes(text[i])) {
        extraDelay = 150; // par exemple 100ms de pause supplémentaire
      }

      i++;
      element._typeWriterTimeout = setTimeout(addLetter, delay+extraDelay);
    } else {
      delete element._typeWriterTimeout; // Nettoyage
    }
  }

  addLetter();
}



/* toggle langue */
function setupLangToggle() {
  const btn = document.getElementById("langToggle");
  btn.addEventListener("click", () => {
    state.lang = state.lang === "fr" ? "en" : "fr";
    localStorage.setItem("lang", state.lang);
    applyI18n(state.lang);
    renderProjects();
    setupScrollReveal();
  });
}

/* scroll reveal */
function setupScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
}

/* init */
document.getElementById("year").textContent = new Date().getFullYear();
applyI18n(state.lang);
renderSkills();
renderProjects();
setupLangToggle();
setupScrollReveal();
