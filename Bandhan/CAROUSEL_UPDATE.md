# Bandhanmaker - Carousel & Color Scheme Update

## 🎨 Brand New Color Scheme: Red, White & Black

All colors have been updated to use **Desire Red (#E60000)**, **White**, and **Black** only.

### Color Palette
```
Primary Red:     #E60000 (Desire Red)
White:           #ffffff
Black:           #000000
Light Gray:      #f5f5f5 (for backgrounds)
Medium Gray:     #666666 (for text)
```

### Where Each Color is Used
- **#E60000** - Buttons, borders, accents, links, hover states
- **#ffffff** - Text on red backgrounds, primary text, backgrounds
- **#000000** - Primary text, borders, navigation, footer
- **#f5f5f5** - Secondary backgrounds, cards

## 🎠 Auto-Rotating Carousel

### Features
✅ **12 Images** - All portfolio images rotate automatically  
✅ **Auto-Play** - Changes every 4 seconds  
✅ **Manual Controls** - Previous/Next buttons  
✅ **Indicators** - Click dots to jump to specific slide  
✅ **Pause on Hover** - Stops auto-play when hovering  
✅ **Responsive** - Works on all devices  
✅ **Smooth Transitions** - 0.8s fade effect  

### Carousel Images (In Order)
1. conference.png
2. weeding_planner.png
3. BTLevent.png
4. exhibition.png
5. Modern BM Exhibition Booth.png
6. indoor_outdoor_event.png
7. kidsparty.png
8. sound_light.png
9. statemanagement.png
10. modeling_acting.png
11. photoshoot.png
12. press_printing.png

## 📝 Changes Made

### 1. HTML Changes (index.html)
- ✅ Removed SVG laser background from hero
- ✅ Added carousel container with 12 slides
- ✅ Added carousel controls (previous/next buttons)
- ✅ Added carousel indicators (dot navigation)
- ✅ Content now overlays on carousel images
- ✅ Added carousel.js script reference

### 2. CSS Changes (styles.css)
**Complete redesign with new color scheme:**
- ✅ White primary background (#ffffff)
- ✅ Red borders (2px solid #E60000)
- ✅ Red buttons with white text
- ✅ Black footer with red accent
- ✅ Red navigation underlines on hover
- ✅ Updated all link colors to red
- ✅ Added carousel styling
- ✅ Removed gradient backgrounds
- ✅ Clean, modern design with bold colors

**Navbar:**
- White background with red bottom border
- Red "Contact" CTA button
- Black menu links with red underline on hover

**Hero Section:**
- Full-screen carousel with image backgrounds
- Semi-transparent dark overlay on images
- Red and white buttons
- White text with black shadow for readability
- Red carousel indicators
- Red navigation buttons

**Buttons:**
- Red background (#E60000) for primary
- White borders for secondary
- White text on red
- Hover effect: darker red (#cc0000)

**Cards & Sections:**
- White backgrounds with red borders
- Red section headings
- Red accent colors throughout
- Red hover states

### 3. JavaScript (js/carousel.js)
**New carousel functionality:**
```javascript
- Auto-play every 4 seconds
- Previous/Next button controls
- Dot indicator navigation
- Pause on hover, resume on mouse leave
- Smooth fade transitions
- Responsive to all screen sizes
```

## 🎯 User Experience

### Homepage Flow
1. **Navbar** - Logo, red "Contact" button
2. **Hero/Carousel** - Auto-playing images with content overlay
3. **Featured Services** - Cards with images
4. **Portfolio** - Gallery grid
5. **Why Choose Us** - Feature cards
6. **Contact Form** - White and red design
7. **Footer** - Black with red accents

### Carousel Interaction
- Automatically cycles every 4 seconds
- Click any dot indicator to jump to that image
- Use < > buttons for manual control
- Hover to pause auto-play
- Mouse leave resumes auto-play

## 🔧 Customization

### Change Carousel Speed
Edit `js/carousel.js`, line 39:
```javascript
autoplayInterval = setInterval(autoplay, 4000); // 4 seconds
```

### Add/Remove Carousel Images
1. Add image to indicators in HTML
2. Add carousel-slide div with new image
3. JavaScript will auto-detect and work

### Change Red Color
Edit `css/styles.css`, line 5:
```css
--accent-red: #E60000; /* Change this value */
```

All red elements will update automatically.

## 📱 Responsive Design

**Desktop:**
- Full carousel controls visible
- Large text and buttons
- Indicators at bottom

**Tablet:**
- Smaller controls
- Optimized spacing
- Touch-friendly buttons

**Mobile:**
- Stacked layout
- Larger touch areas
- Carousel still auto-plays

## ✨ Visual Highlights

### Carousel Indicators
- Inactive: Translucent white circles
- Active: Solid red rectangle
- Smooth animation on change
- Click to navigate

### Buttons
- Red with white text (#E60000)
- 2px red border with slight shadow
- Hover: Darker red (#cc0000)
- Smooth transitions

### Navigation
- Clean white navbar
- Red bottom border
- Red underline on hover
- Bold red "Contact" button

### Footer
- Black background
- Red top border
- White text
- Red section headings
- Red social icons on hover

## 🚀 Live Features

✅ **Auto-Play Carousel** - Starts on page load  
✅ **Manual Controls** - Buttons always available  
✅ **Indicator Dots** - Click to jump  
✅ **Pause/Resume** - Hover to pause  
✅ **Smooth Fades** - Professional transitions  
✅ **Image Overlay** - Content visible on images  
✅ **Responsive** - All screen sizes  
✅ **Accessible** - Keyboard and mouse control  

## 📊 File Structure

```
Bandhan/
├── index.html                    (Added carousel HTML)
├── css/
│   └── styles.css               (Complete redesign - Red/White/Black)
├── js/
│   ├── carousel.js              (NEW - Auto-play carousel)
│   ├── laser-background.js      (Still loads, opacity: 0)
│   ├── navigation.js
│   ├── animations.js
│   └── form-handler.js
└── images/
    ├── conference.png
    ├── weeding_planner.png
    ├── BTLevent.png
    ├── exhibition.png
    └── ... (all 12 images used)
```

## 🎨 Design Philosophy

**Clean & Bold:**
- Red (#E60000) is the accent color
- White and black provide contrast
- Large, readable typography
- Professional appearance

**Modern & Responsive:**
- Carousel provides visual interest
- Auto-play keeps visitors engaged
- Manual controls give user control
- Works perfectly on all devices

**Brandable:**
- Red is bold and memorable
- High contrast for accessibility
- Easy to customize
- Professional for B2B events

---

**Live Demo:** http://localhost:8000  
**Last Updated:** 2025-11-07  
**Status:** ✅ Ready for Production