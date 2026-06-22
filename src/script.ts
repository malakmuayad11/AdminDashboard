const UI = {
  btnCollapse: document.getElementById("btnCollapse") as HTMLButtonElement,
  sideMenu: document.getElementById("sideMenu") as HTMLElement,
  overlay: document.getElementById("overlay") as HTMLElement,
  pageLayout: document.getElementById("pageLayout") as HTMLElement,
  mainContent: document.getElementById("mainContent") as HTMLElement,
};

function collapseSideMenu(): void {
  UI.btnCollapse.dataset.collapse = "true";

  // Desktop
  if (window.innerWidth >= 768) {
    UI.pageLayout.classList.remove("md:grid-cols-[240px_1fr]");
    UI.pageLayout.classList.add("md:grid-cols-[0px_1fr]");

    UI.sideMenu.classList.add("opacity-0");

    UI.mainContent.classList.add("max-w-7xl", "mx-auto", "w-full");

    return;
  }

  // Mobile
  UI.sideMenu.classList.add("-translate-x-full");
  UI.overlay.classList.add("hidden");
}

function expandSideMenu(): void {
  UI.btnCollapse.dataset.collapse = "false";

  // Desktop
  if (window.innerWidth >= 768) {
    UI.pageLayout.classList.remove("md:grid-cols-[0px_1fr]");
    UI.pageLayout.classList.add("md:grid-cols-[240px_1fr]");

    UI.sideMenu.classList.remove("opacity-0");

    UI.mainContent.classList.remove("max-w-7xl", "mx-auto", "w-full");

    return;
  }

  // Mobile
  UI.sideMenu.classList.remove("-translate-x-full");
  UI.overlay.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  UI.btnCollapse.addEventListener("click", () => {
    const isCollapsed = UI.btnCollapse.dataset.collapse === "true";

    if (isCollapsed) {
      expandSideMenu();
    } else {
      collapseSideMenu();
    }
  });
});
