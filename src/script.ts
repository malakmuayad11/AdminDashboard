const UI = {
  btnCollapse: document.getElementById("btnCollapse") as HTMLButtonElement,
  sideMenu: document.getElementById("sideMenu") as HTMLElement,
  overlay: document.getElementById("overlay") as HTMLElement,
  pageLayout: document.getElementById("pageLayout") as HTMLElement,
};

let isMobileOpen = false;
let isDesktopCollapsed = false;

function openMobileMenu() {
  UI.sideMenu.classList.remove("-translate-x-full");
  UI.overlay.classList.remove("hidden");

  // Safely manage opacity layers

  isMobileOpen = true;
}

function closeMobileMenu() {
  UI.sideMenu.classList.add("-translate-x-full");
  UI.overlay.classList.add("hidden");

  // Safely manage opacity layers

  isMobileOpen = false;
}

function toggleDesktopSidebar() {
  isDesktopCollapsed = !isDesktopCollapsed;

  if (isDesktopCollapsed) {
    // Completely hide the sidebar element space on desktop screens
    UI.sideMenu.classList.add("md:hidden");
    UI.sideMenu.classList.remove("opacity-100");
    UI.sideMenu.classList.add("opacity-0");
  } else {
    // Bring it back to layout view seamlessly
    UI.sideMenu.classList.remove("md:hidden");
    UI.sideMenu.classList.remove("opacity-0");
    UI.sideMenu.classList.add("opacity-100");
  }
}

function handleToggle() {
  if (window.innerWidth < 768) {
    if (isMobileOpen) closeMobileMenu();
    else openMobileMenu();
  } else {
    toggleDesktopSidebar();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  UI.btnCollapse.addEventListener("click", handleToggle);
  UI.overlay.addEventListener("click", closeMobileMenu);
});
