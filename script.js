
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



  //logo animation 


const logo = document.querySelector(".logo");
const navLinks = document.querySelector(".nav-links");

logo.addEventListener("click", () => {

  // navbar hide
  navLinks.classList.add("hide");

  // logo animation
  logo.classList.add("animate-logo");

});

// add music 


const card = document.getElementById("musicCard");
const sound = document.getElementById("hoverSound");

card.addEventListener("mouseenter", () => {
  sound.currentTime = 0;

  sound.play().catch((err) => {
    console.log("Autoplay blocked:", err);
  });
});

card.addEventListener("mouseleave", () => {
  sound.pause();
  sound.currentTime = 0;
});