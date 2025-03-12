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

      switch (action) {
        case 'Add Artwork':
            apiUrl = '/api/artwork';
            break;
        case 'Update Commission Status':
            apiUrl = '/api/commission';
            break;
        case 'Add Convention':
            apiUrl = '/api/convention';
            break;
        case 'Write Blog Post':
            apiUrl = '/api/blog';
            break;
        default:
            return;
    }

    try {
      const response = await fetch(`http://localhost:5000${apiUrl}` , {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ details })
      });
    } catch (error) {

    }
  })
})