const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
if (window.scrollY > 600) {
  navbar.classList.add("bg-accent");
  navbar.classList.remove("bg-accent/30");
} else {
  navbar.classList.add("bg-accent/30");
  navbar.classList.remove("bg-accent");
}
});