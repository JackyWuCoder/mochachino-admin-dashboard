using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

public class PortfolioModel : PageModel
{
    private readonly string _uploadPath = "wwwroot/uploads/";
    private readonly string _dataPath = "Data/portfolio.json";

    public string UploadMessage { get; set; }
    public List<string> UploadedImages { get; set; } = new();

    public async Task<IActionResult> OnPostUploadAsync(IFormFile upload)
    {
        if (upload != null && upload.Length > 0)
        {
            var filePath = Path.Combine(_uploadPath, upload.FileName);

            // Save the uploaded file
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await upload.CopyToAsync(stream);
            }
            
            // Update JSON data (simplified)
            var imageData = new { FileName = upload.FileName, Path = $"/uploads/{upload.FileName}" };
            var jsonData = JsonSerializer.Serialize(imageData);
            await System.IO.File.WriteAllTextAsync(_dataPath, jsonData);

            UploadMessage = "Upload successful!";
        }

        return Page();
    }

    public IActionResult OnPostDelete(string fileName)
    {
        var filePath = Path.Combine(_uploadPath, fileName);
        if (System.IO.File.Exists(filePath))
        {
            System.IO.File.Delete(filePath);
            UploadMessage = "File deleted successfully!";
        }
        else
        {
            UploadMessage = "File not found!";
        }

        LoadUploadedImages();
        return Page();
    }

    private void LoadUploadedImages()
    {
        if (Directory.Exists(_uploadPath))
        {
            UploadedImages = Directory.GetFiles(_uploadPath)
                .Select(Path.GetFileName)
                .Where(x => x != null) // Ensures no null values
                .Select(x => x!) // Converts to non-nullable string
                .ToList();
        }
    }
}