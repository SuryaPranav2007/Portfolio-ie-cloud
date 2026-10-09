/* =========================================================
   Surya Pranav Pratapam — Portfolio JS
   ========================================================= */

// ---------- PROJECT DATA (from GitHub API + LinkedIn) ----------
const FEATURED_PROJECTS = [
  {
    icon: '♞',
    title: 'MouseSlip — Chess Analyser',
    badge: 'Live',
    desc: 'A real-time chess analysis platform built from scratch. Analyze positions, get engine-backed insights, and improve your game move by move.',
    tags: ['TypeScript', 'Chess Engine', 'Real-time Analysis', 'Vercel', 'Web App'],
    live: 'https://mouse-slip-chess-analyser.vercel.app',
    code: 'https://github.com/SuryaPranav2007/MouseSlip-Chess-Analyser-'
  },
  {
    icon: '🏋️',
    title: 'AI Form Coach',
    badge: 'Kaggle Capstone',
    desc: 'Capstone for Kaggle\'s 5-Day AI Agents course with Google. A computer-vision agent that gives real-time biomechanics feedback, counts reps and raises safety alerts during workouts — with a full project write-up on Kaggle.',
    tags: ['AI Agents', 'Computer Vision', 'Pose Estimation', 'TypeScript', 'Kaggle', 'Fitness Tech'],
    live: 'https://ai-form-coach-orpin.vercel.app',
    code: 'https://github.com/SuryaPranav2007/AI-Form-Coach'
  },
  {
    icon: '🦖',
    title: 'Body-Controlled Chrome Dino',
    badge: 'Body-Controlled',
    desc: 'Instead of pressing the spacebar, you physically jump in front of your webcam — and the dino jumps with you. A Python + CV experiment in movement-as-input gaming.',
    tags: ['Python', 'Computer Vision', 'Body Tracking', 'OpenCV', 'Game'],
    live: null,
    code: 'https://github.com/SuryaPranav2007/chrome-dino-jump'
  },
  {
    icon: '🔢',
    title: 'Squat Counter',
    badge: 'Fitness Tech',
    desc: 'Ever lost count during squats and guessed whether it was 8 or 10? This CV-powered counter tracks your form and counts every rep automatically.',
    tags: ['Python', 'Pose Estimation', 'MediaPipe', 'Fitness Tech'],
    live: null,
    code: 'https://github.com/SuryaPranav2007/squat_counter'
  },
  {
    icon: '🧹',
    title: 'Fixing Corrupted Dataset',
    badge: 'Data',
    desc: 'A Jupyter Notebook project exploring strategies to detect, diagnose and repair corrupted data — because models are only as good as the data you feed them.',
    tags: ['Python', 'Jupyter', 'Data Cleaning', 'EDA'],
    live: null,
    code: 'https://github.com/SuryaPranav2007/Fixing-Corrupted-Dataset'
  },
  {
    icon: '♜',
    title: 'Interactive Chessboard JS',
    badge: 'Open Source',
    desc: 'A lightweight, interactive chessboard component built in vanilla JavaScript — drag pieces, highlight moves and embed it anywhere.',
    tags: ['JavaScript', 'HTML/CSS', 'Chess', 'Open Source'],
    live: null,
    code: 'https://github.com/SuryaPranav2007/interactive-chessboard-js'
  }
];

const MINI_PROJECTS = [
  { name: 'JumpingBox', lang: 'JavaScript', url: 'https://github.com/SuryaPranav2007/JumpingBox' },
  { name: 'Kill the Monster', lang: 'JavaScript', url: 'https://github.com/SuryaPranav2007/KILL-THE-MONSTER' },
  { name: 'Fruit Ninja', lang: 'JavaScript (P5)', url: 'https://github.com/SuryaPranav2007/FruitNinja' },
  { name: 'T-Rex Runner', lang: 'JavaScript (P5)', url: 'https://github.com/SuryaPranav2007/Hosting-Trex' },
  { name: 'Ghost Runner', lang: 'JavaScript', url: 'https://github.com/SuryaPranav2007/Ghost-runner' },
  { name: 'Plinko Game', lang: 'JavaScript (Matter.js)', url: 'https://github.com/SuryaPranav2007/PLINKO-GAME' },
  { name: 'Tower Siege 1 & 2', lang: 'JavaScript (Matter.js)', url: 'https://github.com/SuryaPranav2007/TOWER-SIEGE-1' },
  { name: 'Angry Birds 2.5', lang: 'JavaScript (Matter.js)', url: 'https://github.com/SuryaPranav2007/Angry-Birds2.5' },
  { name: 'Tom & Jerry', lang: 'JavaScript', url: 'https://github.com/SuryaPranav2007/Tom-Jerry' },
  { name: 'Newton\'s Cradle', lang: 'JavaScript (Matter.js)', url: 'https://github.com/SuryaPranav2007/.NEWTON-S-CRADLE.' },
  { name: 'Air Balloon Ride', lang: 'JavaScript', url: 'https://github.com/SuryaPranav2007/Air-balloon' },
  { name: 'Speed Racer', lang: 'JavaScript', url: 'https://github.com/SuryaPranav2007/Speed-Reacer' }
];

// ---------- RENDER FEATURED PROJECTS ----------
const grid = document.getElementById('projectsGrid');
FEATURED_PROJECTS.forEach((p, i) => {
  const card = document.createElement('div');
  card.className = 'project-card reveal';
  card.style.transitionDelay = `${i * 0.06}s`;
  card.innerHTML = `
    <div class="project-banner">${p.icon}</div>
    <div class="project-body">
      <h3 class="project-title">${p.title}<span class="badge">${p.badge}</span></h3>
      <p class="project-desc">${p.desc}</p>
      <button class="project-toggle" aria-expanded="false">
        <span>Tech tags &amp; links</span><span class="arrow">▾</span>
      </button>
      <div class="project-detail">
        <div class="project-detail-inner">
          <p class="detail-label">Tech Tags</p>
          <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
          <div class="detail-links">
            ${p.live ? `<a class="link-btn live" href="${p.live}" target="_blank">🚀 Live Demo</a>` : ''}
            <a class="link-btn code" href="${p.code}" target="_blank">&lt;/&gt; Source Code</a>
          </div>
        </div>
      </div>
    </div>`;
  grid.appendChild(card);

  const toggle = card.querySelector('.project-toggle');
  toggle.addEventListener('click', () => {
    const isOpen = card.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.querySelector('span').textContent = isOpen ? 'Hide details' : 'Tech tags & links';
  });
});

// ---------- RENDER MINI PROJECTS ----------
const miniGrid = document.getElementById('miniGrid');
MINI_PROJECTS.forEach(p => {
  const a = document.createElement('a');
  a.className = 'mini-card';
  a.href = p.url;
  a.target = '_blank';
  a.innerHTML = `${p.name}<span class="mini-lang">${p.lang}</span>`;
  miniGrid.appendChild(a);
});

// ---------- TYPING EFFECT ----------
const roles = [
  'AI Agent Builder 🤖',
  'Chess Analyzer Developer ♞',
  'Body-Controlled Game Creator 🎮',
  'Fitness Tech Enthusiast 🏋️',
  'CSE Undergrad @ KIIT 🎓'
];
const typedEl = document.getElementById('typed');
let roleIdx = 0, charIdx = 0, deleting = false;

function typeLoop() {
  const word = roles[roleIdx];
  typedEl.textContent = word.slice(0, charIdx);
  if (!deleting && charIdx < word.length) {
    charIdx++;
    setTimeout(typeLoop, 70);
  } else if (deleting && charIdx > 0) {
    charIdx--;
    setTimeout(typeLoop, 35);
  } else if (!deleting) {
    deleting = true;
    setTimeout(typeLoop, 1600);
  } else {
    deleting = false;
    roleIdx = (roleIdx + 1) % roles.length;
    setTimeout(typeLoop, 350);
  }
}
typeLoop();

// ---------- NAVBAR: hamburger + active link ----------
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// highlight active section
const sections = document.querySelectorAll('section[id]');
const navAnchors = navLinks.querySelectorAll('a');
window.addEventListener('scroll', () => {
  const y = window.scrollY + 120;
  sections.forEach(sec => {
    if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
      navAnchors.forEach(a =>
        a.classList.toggle('active', a.getAttribute('href') === '#' + sec.id)
      );
    }
  });
});

// ---------- SCROLL REVEAL ----------
const revealEls = document.querySelectorAll(
  '.section-title, .about-card, .skill-group, .project-card, .timeline-item, .edu-card, .contact-form, .socials, .mini-title, .mini-grid'
);
revealEls.forEach(el => el.classList.add('reveal'));
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

// ---------- CONTACT FORM (mailto — no backend needed) ----------
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const subject = encodeURIComponent(`Portfolio contact from ${fd.get('name')}`);
  const body = encodeURIComponent(`${fd.get('message')}\n\n— ${fd.get('name')} (${fd.get('email')})`);
  window.location.href = `mailto:suryapranavp@gmail.com?subject=${subject}&body=${body}`;
  document.getElementById('formNote').textContent =
    'Opening your email client… (or reach me on LinkedIn / GitHub below)';
});