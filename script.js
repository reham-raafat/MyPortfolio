// ─── Scroll fade-in animations ───
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("visible");
  }),
  { threshold: 0.1 }
);
document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// ─── Hero parallax on glow blobs ───
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  document.querySelectorAll("#hero .glow-blob").forEach((blob, i) => {
    blob.style.transform = `translateY(${y * (i === 0 ? 0.1 : -0.07)}px)`;
  });
}, { passive: true });

// ─── Navbar: shrink on scroll ───
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 60);
}, { passive: true });

// ─── Hamburger menu toggle ───
const hamburger = document.getElementById("hamburger");
const drawer = document.getElementById("drawer");

hamburger.addEventListener("click", () => {
  const isOpen = hamburger.classList.toggle("open");
  drawer.classList.toggle("open", isOpen);
});

// Close drawer when any link inside it is clicked
drawer.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    drawer.classList.remove("open");
  });
});

// ─── Active nav link highlight on scroll ───
const navSectionIds = ["work", "skills", "experience", "cta"];
const navLinks = document.querySelectorAll(".nav-links a");
const navSectionEls = navSectionIds.map(id => document.getElementById(id));

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + 120;
  let current = "";

  navSectionEls.forEach((el, i) => {
    if (el && el.offsetTop <= scrollY) current = navSectionIds[i];
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
}, { passive: true });
