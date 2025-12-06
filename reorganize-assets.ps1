# Script to reorganize assets folder structure
# From: public/assets/{theme-name}/css, fonts, imgs
# To: public/assets/css/{theme-short-name}/, fonts/{theme-short-name}/, img/{theme-short-name}/

$assetsPath = "public\assets"
$themesToProcess = @(
    "accounting-service",
    "ai-solutions",
    "application",
    "business",
    "charity",
    "conference",
    "coworking-space",
    "creative-studio",
    "crypto-agency",
    "data-analysis",
    "digital-agency",
    "elearning",
    "event",
    "finance-consultant",
    "fintech-app",
    "fintech-solution",
    "insurance-consultancy",
    "it-solutions",
    "law-firm",
    "logistics",
    "marketing-agency",
    "news-magazine",
    "seo-agency",
    "startup",
    "support-desk",
    "tax-software",
    "yoga"
)

# Function to get short theme name (first part before hyphen)
function Get-ThemeShortName {
    param($themeName)
    if ($themeName -match "^([^-]+)") {
        return $matches[1]
    }
    return $themeName
}

# Create main folders
New-Item -ItemType Directory -Force -Path "$assetsPath\css" | Out-Null
New-Item -ItemType Directory -Force -Path "$assetsPath\fonts" | Out-Null
New-Item -ItemType Directory -Force -Path "$assetsPath\img" | Out-Null

# Process each theme
foreach ($theme in $themesToProcess) {
    $themePath = "$assetsPath\$theme"
    $shortName = Get-ThemeShortName $theme
    
    Write-Host "Processing theme: $theme -> $shortName"
    
    # Move CSS files
    if (Test-Path "$themePath\css") {
        $targetCssPath = "$assetsPath\css\$shortName"
        New-Item -ItemType Directory -Force -Path $targetCssPath | Out-Null
        Copy-Item -Path "$themePath\css\*" -Destination $targetCssPath -Recurse -Force
        Write-Host "  Moved CSS files to css\$shortName"
    }
    
    # Move Fonts files
    if (Test-Path "$themePath\fonts") {
        $targetFontsPath = "$assetsPath\fonts\$shortName"
        New-Item -ItemType Directory -Force -Path $targetFontsPath | Out-Null
        Copy-Item -Path "$themePath\fonts\*" -Destination $targetFontsPath -Recurse -Force
        Write-Host "  Moved Fonts files to fonts\$shortName"
    }
    
    # Move Imgs files (note: source is "imgs", destination is "img")
    if (Test-Path "$themePath\imgs") {
        $targetImgPath = "$assetsPath\img\$shortName"
        New-Item -ItemType Directory -Force -Path $targetImgPath | Out-Null
        Copy-Item -Path "$themePath\imgs\*" -Destination $targetImgPath -Recurse -Force
        Write-Host "  Moved Imgs files to img\$shortName"
    }
}

Write-Host "`nReorganization complete!"
Write-Host "Now deleting old theme folders..."

# Delete old theme folders
foreach ($theme in $themesToProcess) {
    $themePath = "$assetsPath\$theme"
    if (Test-Path $themePath) {
        Remove-Item -Path $themePath -Recurse -Force
        Write-Host "  Deleted: $theme"
    }
}

# Also delete the old css folder if it exists (the one with ai-css)
$oldCssPath = "$assetsPath\css"
if (Test-Path "$oldCssPath\ai-css") {
    Remove-Item -Path "$oldCssPath\ai-css" -Recurse -Force
    Write-Host "  Deleted old css\ai-css folder"
}

Write-Host "`nAll done!"

