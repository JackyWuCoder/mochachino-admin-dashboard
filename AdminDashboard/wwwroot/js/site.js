// SIDEBAR TOGGLE
let sidebarOpen = false;
const sidebar = document.getElementById("sidebar");

// Open Sidebar
function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

// Close Sidebar
function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}