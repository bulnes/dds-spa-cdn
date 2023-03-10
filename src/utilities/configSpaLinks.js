import navigation from "@/router";

export function configSpaLinks() {
  const gotoLinks = document.querySelectorAll("[data-goto]");

  gotoLinks.forEach((link) => {
    const href = link.getAttribute("href");

    link.addEventListener("click", (e) => {
      e.preventDefault();
      navigation(href);
    });
  });
}
