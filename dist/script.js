const UI = {
    btnCollapse: document.getElementById("btnCollapse"),
};
function toggleSideMenu() {
    const isCollapsed = UI.btnCollapse.dataset.collapse === "true";
    UI.btnCollapse.dataset.collapse = isCollapsed ? "false" : "true";
}
UI.btnCollapse.addEventListener("click", toggleSideMenu);
export {};
//# sourceMappingURL=script.js.map