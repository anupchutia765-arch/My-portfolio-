
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 30); });

  const revealEls = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObs.observe(el));

  const panel = document.getElementById('introPanel');
  const panelObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) panel.classList.add('visible'); });
  }, { threshold: 0.3 });
  panelObs.observe(panel);

  const introPanel = document.querySelector(".intro-right");

const introObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        introPanel.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.3,
  }
);

introObserver.observe(introPanel);

  document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.orb');
    const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx, dy = (e.clientY - cy) / cy;
    orbs.forEach((orb, i) => {
      const f = (i + 1) * 12;
      orb.style.transform = `translate(${dx*f}px, ${dy*f}px)`;
    });
  });

  window.addEventListener('load', () => { document.querySelector('#home .reveal')?.classList.add('visible'); });





