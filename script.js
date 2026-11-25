document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu
  const menuBtn = document.querySelector(".menu-btn"), menu = document.getElementById("menu");
  if (menuBtn) menuBtn.addEventListener("click", () => menu.classList.toggle("open"));

  // Image slider (Home page)
  const slides = [...document.querySelectorAll(".slide")];
  if (slides.length) {
    let i = 0, timer;
    const count = document.querySelector(".count");
    const show = n => {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle("on", k === i));
      count.textContent = (i + 1) + " / " + slides.length;
    };
    const auto = () => { clearInterval(timer); timer = setInterval(() => show(i + 1), 5000); };
    document.querySelector(".prev").addEventListener("click", () => { show(i - 1); auto(); });
    document.querySelector(".next").addEventListener("click", () => { show(i + 1); auto(); });
    show(0); auto();
  }

  // Project filters (Projects page)
  const buttons = document.querySelectorAll(".filters button");
  buttons.forEach(b => b.addEventListener("click", () => {
    buttons.forEach(x => x.classList.remove("on")); b.classList.add("on");
    document.querySelectorAll(".project").forEach(c => {
      c.style.display = (b.dataset.filter === "all" || c.dataset.type === b.dataset.filter) ? "" : "none";
    });
  }));

  // Contact form (Contact Us page)
  const form = document.getElementById("contactForm");
  if (form) form.addEventListener("submit", e => {
    e.preventDefault();
    // Browser checks the required fields first. To really send the form, connect it to a form service or a server.
    document.getElementById("formMsg").style.display = "block";
    form.reset();
  });
});
