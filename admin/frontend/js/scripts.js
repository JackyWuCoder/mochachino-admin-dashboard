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

// Fetch Activities
async function fetchActivities( ) {
  const res = await fetch("http://localhost:5000/api/activities");
  const data = await res.json();

  const tableBody = document.querySelector(".activity-table tbody");
  tableBody.innerHTML = "";

  data.forEach(activity => {
    const row = `<tr>
        <td>${new Date(activity.date).toLocaleDateString()}</td>
        <td>${activity.action}</td>
        <td>${activity.section}</td>
        <td>${activity.details}</td>
      </tr>`;
      tableBody.innerHTML += row;
  })
}

// Handle Action Button Clicks
document.querySelectorAll(".action-btn").forEach(button => {
  button.addEventListener("click", async (e) => {
      const action = e.currentTarget.dataset.action;

      let apiUrl = "";
      let details = prompt(`Enter details for "${action}"`);

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

      const result = await response.json();
      alert(result.message);

      fetchActivities();
    } catch (error) {
      console.error("Error:", error);
    }
  })
})

fetchActivities(); // Initial load