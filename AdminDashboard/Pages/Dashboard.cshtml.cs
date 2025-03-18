using Microsoft.AspNetCore.Mvc.RazorPages;

public class DashboardModel : PageModel
{
    public int PortfolioCount { get; set; }
    public int CommissionsCount { get; set; }
    public int ConventionsCount { get; set; }
    public int BlogCount { get; set; }
    public List<Activity> RecentActivities { get; set; } = new();

    public void OnGet()
    {
        // Simulated Data (Replace with actual logic)
        PortfolioCount = 249;
        CommissionsCount = 83;
        ConventionsCount = 79;
        BlogCount = 56;

        RecentActivities = new List<Activity>
        {
            new Activity { Date = "Mar 9, 2025", ActionType = "Added", Section = "Portfolio", Details = "New illustration 'Forest Guardian'" },
            new Activity { Date = "Mar 5, 2025", ActionType = "Updated", Section = "Commissions", Details = "Commission status set to OPEN" },
            new Activity { Date = "Mar 1, 2025", ActionType = "Published", Section = "Blog", Details = "New post 'Excited to Announce My Next Convention!'" },
            new Activity { Date = "Feb 28, 2025", ActionType = "Added", Section = "Conventions", Details = "New convention 'ArtCon 2025'" },
            new Activity { Date = "Feb 15, 2025", ActionType = "Published", Section = "Blog", Details = "New post 'Behind the Scenes: Creating a Fantasy Illustration'" }
        };
    }

    public class Activity
    {
        public string Date { get; set; }
        public string ActionType { get; set; }
        public string Section { get; set; }
        public string Details { get; set; }
    }
}
