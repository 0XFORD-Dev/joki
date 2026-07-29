const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}
