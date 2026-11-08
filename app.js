const printButtons = document.querySelectorAll(".print");
let openedDetails = [];
window.addEventListener("beforeprint", () => {
  openedDetails = [...document.querySelectorAll("details:not([open])")];
  openedDetails.forEach((el) => (el.open = true));
});
window.addEventListener("afterprint", () => {
  openedDetails.forEach((el) => (el.open = false));
  openedDetails = [];
});
printButtons.forEach((button) =>
  button.addEventListener("click", () => window.print()),
);
const navLinks = [...document.querySelectorAll("nav a")];
const sections = [...document.querySelectorAll("main section[id]")];
const groups = {
  inicio: "",
  visao: "visao",
  midia: "midia",
  site: "midia",
  mensuracao: "midia",
  instagram: "midia",
  video: "midia",
  portais: "midia",
  prioridades: "prioridades",
  conversa: "conversa",
  fontes: "conversa",
};
function updateNav() {
  let current = "";
  for (const section of sections) {
    if (section.getBoundingClientRect().top < 180) current = groups[section.id];
  }
  navLinks.forEach((link) => {
    const active = link.hash === "#" + current;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}
window.addEventListener("scroll", updateNav, { passive: true });
updateNav();
document.querySelectorAll(".table-wrap").forEach((el) => {
  el.tabIndex = 0;
  el.setAttribute("role", "region");
  el.setAttribute(
    "aria-label",
    el.querySelector("caption")?.textContent || "Tabela do relatório",
  );
});
