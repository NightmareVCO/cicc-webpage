const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
if (window.scrollY > 600) {
  navbar.classList.add("bg-accent");
} else {
  navbar.classList.remove("bg-accent");
}
});