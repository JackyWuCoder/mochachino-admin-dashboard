// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById("sidebar");

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

document.querySelectorAll(".action-btn").forEach(button => {
  button.addEventListener("click", async (e) => {
      const action = e.target.innerText.trim();
      let apiURL = "";
      let details = prompt(`Enter details for ${action}`);
      if (!details) return alert("Details are required!");
  })
})