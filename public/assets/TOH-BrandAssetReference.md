# TOH Brand Asset Reference
## For use in all Claude-built apps, docs, and tools

Base URL: `https://raw.githubusercontent.com/TheOrthoHouse/TOH_Referral_Gameplan/main/public/assets/`

---

## COLORS
| Name | Hex | Use |
|---|---|---|
| Navy | `#223F5D` | Primary background, headers, text |
| Coral | `#EB4A4B` | Accents, buttons, highlights |
| Light | `#F7F4F0` | Page backgrounds, card fills |

---

## LOGO USAGE MAP

### On NAVY or dark backgrounds → use WHITE version
```
toh-logo-white-rgb.png           ← main header logo
toh-logo-stacked-white-rgb.png   ← compact/footer logo
toh-logo-no-cali-white-rgb.png   ← when space is tight
```

### On WHITE or light backgrounds → use BLUE or COLOR version
```
toh-logo-blue-rgb.png            ← main header on white
toh-logo-color-rgb.png           ← full color on white/light
toh-logo-stacked-blue-rgb.png    ← compact on white
toh-logo-no-cali-color-rgb.png   ← no "California" variant
```

### Watermark / subtle background use
```
toh-logo-watermark-rgb.png           ← full logo watermark
toh-logo-stacked-watermark-rgb.png   ← stacked watermark
toh-diamond-watermark-rgb.png        ← diamond mark watermark
toh-flag-watermark-rgb.png           ← flag watermark
```

---

## SECONDARY MARKS USAGE MAP

### Diamond Mark
| File | Use |
|---|---|
| `toh-diamond-blue-rgb.png` | Section icons on white |
| `toh-diamond-red-rgb.png` | Alert/highlight icons |
| `toh-diamond-white-rgb.png` | Icons on navy background |
| `toh-diamond-watermark-rgb.png` | Subtle background accent |
| `toh-diamond-black-rgb.png` | Print / black & white |

### Flag Mark
| File | Use |
|---|---|
| `toh-flag-blue-rgb.png` | Banners on white |
| `toh-flag-red-rgb.png` | Alert banners |
| `toh-flag-white-rgb.png` | Banners on navy |
| `toh-flag-watermark-rgb.png` | **Header background watermark ← preferred** |
| `toh-flag-black-rgb.png` | Print |

### Smile & Ride the Wave Stamp
| File | Use |
|---|---|
| `toh-smile-ride-wave-color-rgb.png` | Footer on white/light |
| `toh-smile-ride-wave-white-rgb.png` | Footer on navy |
| `toh-smile-ride-wave-blue-rgb.png` | Monochrome on white |
| `toh-smile-ride-wave-red-rgb.png` | Coral/red accent version |
| `toh-smile-ride-wave-watermark-rgb.png` | Background watermark |
| `toh-smile-ride-wave-black-rgb.png` | Print |

### Brush Smile Align Repeat
| File | Use |
|---|---|
| `toh-brush-smile-align-color-rgb.png` | Dividers on white |
| `toh-brush-smile-align-black-rgb.png` | Print / footers |

### Surfboards Mark
| File | Use |
|---|---|
| `toh-surfboards-blue-rgb.png` | Decorative on white |
| `toh-surfboards-white-rgb.png` | Decorative on navy |
| `toh-surfboards-red-rgb.png` | Accent version |
| `toh-surfboards-watermark-rgb.png` | Background |
| `toh-surfboards-black-rgb.png` | Print |

### Avatars / Social Icons
| File | Use |
|---|---|
| `toh-avatar-1-logo.png` | Social profile photo |
| `toh-avatar-2-stacked.png` | Alt social profile photo |
| `toh-avatar-3-red-x.png` | App icon / favicon |
| `toh-avatar-4-red-x-blue.png` | Alt app icon |

### Favicons
| File | Use |
|---|---|
| `toh-favicon-1-red-x.png` | Browser tab icon |
| `toh-favicon-2-red-x-blue.png` | Alt browser tab icon |

---

## QUICK COPY — COMMON IMAGE TAGS

### Header logo (on navy background)
```jsx
<img
  src="https://raw.githubusercontent.com/TheOrthoHouse/TOH_Referral_Gameplan/main/public/assets/toh-logo-white-rgb.png"
  alt="The Ortho House California"
  style={{ height: 70, width: "auto" }}
/>
```

### Header logo (on white background)
```jsx
<img
  src="https://raw.githubusercontent.com/TheOrthoHouse/TOH_Referral_Gameplan/main/public/assets/toh-logo-blue-rgb.png"
  alt="The Ortho House California"
  style={{ height: 60, width: "auto" }}
/>
```

### Diamond watermark (header background accent)
```jsx
<img
  src="https://raw.githubusercontent.com/TheOrthoHouse/TOH_Referral_Gameplan/main/public/assets/toh-diamond-watermark-rgb.png"
  alt=""
  style={{ position: "absolute", right: -10, top: -10, height: 180, opacity: 0.15 }}
/>
```

### Footer stamp (on navy footer)
```jsx
<img
  src="https://raw.githubusercontent.com/TheOrthoHouse/TOH_Referral_Gameplan/main/public/assets/toh-smile-ride-wave-white-rgb.png"
  alt="Smile & Ride the Wave"
  style={{ height: 56, width: "auto" }}
/>
```

### Stacked footer logo (on navy footer)
```jsx
<img
  src="https://raw.githubusercontent.com/TheOrthoHouse/TOH_Referral_Gameplan/main/public/assets/toh-logo-stacked-white-rgb.png"
  alt="The Ortho House California"
  style={{ height: 48, width: "auto" }}
/>
```

---

## STANDARD APP LAYOUT PATTERN

Every TOH app should follow this structure:
1. **Navy header** → white logo + flag watermark accent
2. **Light (#F7F4F0) body** → content with navy text, coral accents
3. **Navy footer** → Smile & Ride the Wave stamp (left) + Surfboards logo (right)

---
*Last updated: May 2026 — add new assets to GitHub at the base URL above*
