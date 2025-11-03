import { messages } from "i18n";

/* simple state */
const state = {
  lang: localStorage.getItem("lang") || "fr",
  skills: ["Pentest AD/WEB/AWS", "Blue/Red Team", "ASW", "Network", "Forensic", "Burp Suite", "Cloud", "Git", "HTML", "Java", "JS", "Bash", "C/C++", "Python", "Linux"],
  projects: [
    {
      id: "article",
      title: { fr: "Article : Sécurité AWS et gestion des permissions IAM", en: "Article: AWS security and IAM permission management" },
      desc: {
        fr: "Cet article présente de manière claire et illustrée la gestion des identités et des permissions sur AWS. Il couvre les différents types d’entités IAM, les politiques de droits et leur interaction pour sécuriser un environnement cloud, tout en proposant des exemples concrets et des schémas pour faciliter la compréhension.",
        en: "This article provides a clear and illustrated explanation of identity and access management on AWS. It covers the different types of IAM entities, access policies, and how they interact to secure a cloud environment, while also offering practical examples and diagrams to facilitate understanding."
      },
      tags: ["AWS", "IAM", "Cloud", "Blue/Red Team"],
      images: [
        "./images/article1.png",
      ],
      url: "https://kenzo-3.gitbook.io/aws-articles/"  // ← ici
    },
    {
      id: "proj-aws",
      title: { fr: "Méthodologie de tests d’intrusion dans des environnements AWS", en: "Methodology for Penetration Testing in AWS Environments" },
      desc: {
        fr: "Documentation méthodologique rédigée pendant mon stage de fin d’études chez Orasys (2025). Le document sert de guide pratique et reproductible pour réaliser des tests d’intrusion sur des environnements AWS (boîte noire, grise et blanche). Il compile bonnes pratiques, commandes et outils (Pacu, labs, scripts d’automatisation), propose des scénarios d’attaque détaillés et décrit pas à pas les procédures d’énumération et d’escalade illustrées par des labs. Travail produit de manière itérative et encadrée, destiné aux auditeurs et à l’équipe pour standardiser et accélérer les missions de pentest cloud.",
        en: "Methodology documentation written during my end‑of‑study internship at Orasys (2025). The document functions as a practical, reproducible guide for conducting penetration tests on AWS environments (black‑box, grey‑box, white‑box). It gathers best practices, commands and tools (Pacu, labs, automation scripts), outlines detailed attack scenarios and provides step‑by‑step enumeration and escalation procedures illustrated with labs. Created iteratively under supervision, it is intended for auditors and the team to standardise and speed up cloud pentest engagements."
      },
      tags: ["Pentest", "Red Team", "AWS", "IAM", "Cloud", "Documentation", "Python"],
      images: [
        "./images/doc.png",
      ]
    },
    {
      id: "proj-usur",
      title: { fr: "Nspoof : Projet usurpation DnS", en: "Nspoof: DNS spoofing project" },
      desc: {
        fr: "Projet de simulation d’une attaque Man‑In‑The‑Middle (MITM) menée à deux pour analyser les vulnérabilités DNS en environnement local. Nous avons développé en Python un outil multi‑thread réalisant de l’ARP spoofing, intercepte et répond sélectivement aux requêtes DNS (filtrage IPv4/A), automatise le déploiement de sites piégés via nginx et génère une autorité de certification pour des tests HTTPS. Travail réalisé de manière éthique et encadrée dans un cadre pédagogique, avec un focus sur les contre‑mesures (SSL, isolation réseau, VLAN, captive portals) et l’amélioration de la sécurité des infrastructures réseau.",
        en: "Two‑person project simulating a Man‑In‑The‑Middle (MITM) attack to analyze DNS vulnerabilities in a local environment. We developed a multi‑threaded Python tool that performs ARP spoofing, selectively intercepts and forges DNS responses (IPv4/A filtering), automates deployment of trap sites using nginx, and generates a local certificate authority for HTTPS testing. All work was conducted ethically and under supervision as part of a pedagogical exercise, with emphasis on defenses (SSL, network isolation, VLANs, captive portals) and improving network security."
      },
      tags: ["Red Team", "DNS", "Network Security", "Ethical Hacking", "MITM", "Packet Manipulation"],
      images: [
        "https://www.youtube.com/watch?v=tRzctTaRiAQ" // YouTube
      ],
      url:"https://github.com/kmcarpio1/Nspoof_Enseirb"
    },
    {
      id: "proj-ctf",
      title: { fr: "CTF : La Grenouille", en: "CTF: The Frog" },
      desc: {
        fr: "Projet CTF réalisé à quatre lors d’un événement de notre école. Objectif : créer un challenge pédagogique déployable localement, couvrant plusieurs types de failles (web, logique, authentification…). Nous avons utilisé Docker et docker‑compose pour orchestrer des services vulnérables, développé des composants web (PHP/Hack) et rédigé la scénarisation du défi. L’environnement permet un lancement rapide des containers et la soumission de flags. Travail éthique et encadré, axé sur la pédagogie et l’initiation aux techniques de pentest en CTF.",
        en: "CTF project developed by a four‑person team during a school event. Goal: build an educational, locally deployable challenge covering multiple types of vulnerabilities (web, logic, authentication…). We used Docker and docker‑compose to orchestrate vulnerable services, developed web components (PHP/Hack) and wrote the challenge scenario. The environment allows quick container startup and flag submission. Work was conducted ethically, focusing on pedagogy and introducing pentesting techniques in a CTF context."
      },
      tags: ["CTF", "DevWeb", "Sécurité Web", "XSS", "SQL", "Bash"],
      images: [
        "./images/ctf.png",
      ],
      url:"https://github.com/kmcarpio1/CTF_LaGrenouille"
    },

    {
      id: "proj-5G",
      title: { fr: "FiveGProject", en: "FiveGProject" },
      desc: {
        fr: "Projet réalisé lors de mon stage à l’Université de Pretoria (Afrique du Sud) dans un environnement 5G NFV, développé en Java. J’ai contribué à un projet plus vaste avec une grande autonomie et peu de visibilité initiale. Mon travail portait sur la collecte, la préservation et le stockage de preuves numériques issues des instances 5G. J’ai mis en œuvre la collecte en temps réel depuis les instances VNF, assuré la communication entre plusieurs machines, appliqué des fonctions de hachage cryptographique pour garantir l’intégrité des données, et intégré des vérifications supplémentaires d’intégrité ainsi que des méthodes de sécurisation des données en cas de coupure Internet. Les informations étaient ensuite stockées de manière sécurisée pour une analyse future par une IA. Le code a été conçu pour être flexible et adaptable tout en offrant une expérience utilisateur fluide et intuitive. Ce projet m’a permis de développer des compétences concrètes en développement Java, sécurité des données et architectures distribuées.",
        en: "Project carried out during my internship at the University of Pretoria (South Africa) within a 5G NFV environment, developed in Java. I contributed to a larger project with high autonomy and limited initial visibility. My work focused on the collection, preservation, and storage of digital evidence from 5G instances. I implemented real-time data collection from VNF instances, managed communication between multiple machines, applied cryptographic hashing to ensure data integrity, and added additional integrity checks along with methods to secure data in case of Internet outages. The information was then securely stored for future AI analysis. The code was designed to be flexible and adaptable while providing a smooth and intuitive user experience. This project strengthened my practical skills in Java development, data security, and distributed architectures."
      },
      tags: ["Java", "5G", "User-Centric Dev", "Forensic", "Distributed Systems", "Problem Solving"],
      images: [
        "./images/5G1.png",
        "./images/5G2.png",
        "./images/5G3.png",
        "./images/5G4.png",
        "./images/5G5.png",
        "./images/5G6.png",
      ],
      url: "https://github.com/kmcarpio1/FiveGProject"
    },
    {
      id: "proj-network",
      title: { fr: "Network P2P", en: "Network P2P" },
      desc: {
        fr: "Application d’échange peer‑to‑peer (P2P) pour le transfert de gros fichiers, développée dans le cadre du projet « Réseaux S8 » à l’école. Le dépôt contient un serveur, un client et un tracker (build via Makefile) — implémentés en Java et C — ainsi qu’une procédure de test pour démarrer deux clients et simuler l’échange d’un fichier. Travail collectif axé sur la conception protocolaire (découverte, échange de chunks, suivi via tracker), la robustesse du transfert et la reproductibilité des tests. Idéal pour démontrer des compétences en réseaux, programmation système et ingénierie logicielle.",
        en: "Peer‑to‑peer (P2P) large‑file sharing application, developed as part of the \"Networks S8\" course project. The repository includes a server, client and tracker (Makefile build) — implemented in Java and C — plus a test procedure to run two clients and simulate file exchange. Team project focused on protocol design (peer discovery, chunk exchange, tracker coordination), transfer robustness and reproducible testing. Useful to showcase skills in networking, systems programming and software engineering."
      },
      tags: ["Network", "P2P Protocols", "Java", "C", "Tests/Simulations"],
      images: [
        "./images/P2P.png",
      ],
      url:"https://github.com/kmcarpio1/Free_Network_P2P"
    },
    {
      id: "proj-thread",
      title: { fr: "Bibliothèque Utilisateur de Threads", en: "User-level threading library" },
      desc: {
        fr: "Bibliothèque utilisateur de threads (user‑level threading library) développée dans un cadre pédagogique pour gérer la création, la gestion et l’ordonnancement de threads sans passer par les primitives système. Les threads sont basés sur la spécification pthread et implémentent une interface similaire, tout en fonctionnant entièrement en mode utilisateur. Le dépôt inclut les fichiers source (C), l’implémentation des fonctions de création, d’attente, de terminaison de threads, un ordonnanceur simple et des exemples d’utilisation. Projet en groupe de 5, axé sur le fonctionnement interne des threads, le contrôle explicite du contexte d’exécution et la compréhension du multitâche au niveau utilisateur.",
        en: "User‑level threading library (user_threads_lib) developed in an educational context to manage creation, scheduling, and termination of threads without relying on kernel‑level primitives. Threads follow the pthread specification and implement a similar interface, but operate entirely at user level. The repository includes C source files, implementations of thread creation, join, exit functions, a basic scheduler and usage examples. 5-persons team project focusing on thread internals, explicit context switching, and understanding user‑level multitasking."
      },
      tags: ["user‑level threading", "Debugging & optimization", "API design", "C", "Multitasking"],
      images: [
        "./images/t1.png",
        "./images/t2.png",
        "./images/t3.png",
        "./images/t4.png",
        "./images/t5.png",      
      ],
      url: "https://github.com/kmcarpio1/user_threads_lib"
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
      // utiliser innerHTML pour interpréter les <br> et balises HTML
      el.innerHTML = msg;
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
function createCarousel(items) {
  const carousel = document.createElement("div");
  carousel.className = "carousel";

  const track = document.createElement("div");
  track.className = "carousel-track";

  items.forEach(src => {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";

    if (src.includes("youtube.com") || src.includes("youtu.be")) {
      const iframe = document.createElement("iframe");
      iframe.src = src.replace("watch?v=", "embed/");
      iframe.frameBorder = "0";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      slide.appendChild(iframe);
    }
    else {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "";
      slide.appendChild(img);
    }

    track.appendChild(slide);
  });

  carousel.appendChild(track);
  return carousel;
}


function makeCarouselFunctional(carousel) {
  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  let currentSlide = 0;

  function showSlide(index) {
    if (index < 0) currentSlide = slides.length - 1;
    else if (index >= slides.length) currentSlide = 0;
    else currentSlide = index;

    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  // défiler automatiquement toutes les 3s
  setInterval(() => showSlide(currentSlide + 1), 3000);

  // retour de la fonction pour contrôle manuel si besoin
  return showSlide;
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";

  state.projects.forEach(p => {
  
    // Crée la carte projet
    const card = document.createElement("article");
    card.className = "project-card fade-in";

    const carousel = createCarousel(p.images);
    makeCarouselFunctional(carousel);

    const content = document.createElement("div");
    content.className = "project-content";

    const title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = p.title[state.lang] + (p.url ? " 🔗" : "");

    const meta = document.createElement("div");
    meta.className = "project-meta";
    p.tags.forEach(t => {
      const b = document.createElement("span");
      b.className = "badge";
      b.textContent = t;
      meta.appendChild(b);
    });

    const desc = document.createElement("p");
    desc.className = "project-desc";
    desc.textContent = p.desc[state.lang];

    content.append(title, meta, desc);
    card.append(carousel, content);

    if (p.url) {
      // projet cliquable
      const link = document.createElement("a");
      link.href = p.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.classList.add("project-link");
      link.appendChild(card);
      grid.appendChild(link);
    } else {
      // projet non cliquable
      grid.appendChild(card);
    }
  });
}




/* typewriter pour dialogues Undertale */
function typeWriter(element, text, delay = 50) {
  // Annule une éventuelle animation en cours
  if (element._typeWriterTimeout) {
    clearTimeout(element._typeWriterTimeout);
  }

  element.innerHTML = ""; // <-- innerHTML ici
  let i = 0;

  function addLetter() {
    if (i < text.length) {
      if (text[i] === '|') {
        element.innerHTML += "<br>"; // <-- maintenant interprété comme HTML
      } else {
        element.innerHTML += text[i];
      }

      let extraDelay = 0;
      if (".,!?;:".includes(text[i])) {
        extraDelay = 150; // pause supplémentaire
      }

      i++;
      element._typeWriterTimeout = setTimeout(addLetter, delay + extraDelay);
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
