export function initSideNav() {
  const element = document.getElementById("sidenav-910670975");
  const api = DDS.SideNav(element);

  const sideNavLinks = [...document.querySelectorAll("[data-goto]")];

  sideNavLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const { parentNode } = e.currentTarget;
      api.select(parentNode);
    });
  });
}
