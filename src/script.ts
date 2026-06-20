const UI = {
  btnCollapse: document.getElementById("btnCollapse") as HTMLButtonElement,
};

function toggleSideMenu(): void {
  const isCollapsed: boolean = UI.btnCollapse.dataset.collapse === "true";

  UI.btnCollapse.dataset.collapse = isCollapsed ? "false" : "true";
}

UI.btnCollapse.addEventListener("click", toggleSideMenu);
