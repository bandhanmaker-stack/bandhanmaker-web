# Bandhanmaker - Image Integration Guide

## 📁 Images Directory Structure

All images are located in `/images/` folder:

```
images/
├── logo.png                          # Bandhanmaker logo (navbar)
├── conference.png                    # Conference/Event image
├── weeding_planner.png              # Wedding planning event
├── BTLevent.png                     # BTL Event
├── exhibition.png                   # Exhibition booth
├── Modern BM Exhibition Booth.png   # Modern exhibition setup
├── indoor_outdoor_event.png         # Indoor/Outdoor branding
├── kidsparty.png                    # Party events
├── sound_light.png                  # Sound & Light setup
├── statemanagement.png              # Stage management
├── modeling_acting.png              # Modeling & Acting
├── photoshoot.png                   # Photography/Videography
└── press_printing.png               # Press & Printing
```

## 🖼️ Image Usage Across Pages

### Home Page (index.html)
- **Logo**: `images/logo.png` - Displayed in navbar with gradient text
- **Portfolio Preview Grid** (4 images):
  - `images/conference.png` - Tech Conference 2025
  - `images/BTLevent.png` - Brand Activation
  - `images/weeding_planner.png` - Wedding Reception
  - `images/kidsparty.png` - Music Festival

### Services Page (services.html)
- **Navbar Logo**: `images/logo.png`
- Service icons are SVG-based (no image changes needed)

### Portfolio Page (portfolio.html)
- **Navbar Logo**: `images/logo.png`
- **Full Portfolio Grid** (9 images):
  1. `images/conference.png` - Tech Conference 2025
  2. `images/weeding_planner.png` - Grand Wedding Reception
  3. `images/BTLevent.png` - Brand Activation
  4. `images/Modern BM Exhibition Booth.png` - International Exhibition
  5. `images/exhibition.png` - Annual Summit 2024
  6. `images/indoor_outdoor_event.png` - Corporate Gala Dinner
  7. `images/sound_light.png` - Destination Wedding
  8. `images/photoshoot.png` - Art & Design Exhibition
  9. `images/kidsparty.png` - Music Festival 2024

### About Page (about.html)
- **Navbar Logo**: `images/logo.png`
- Team section uses SVG avatars (gradient backgrounds)

## 🎨 Image Specifications

### Logo
- **File**: logo.png
- **Size**: ~860KB (recommended to optimize to 100-150KB)
- **Use**: Navbar branding
- **Format**: PNG (transparent background preferred)

### Portfolio Images
- **Files**: conference.png, weeding_planner.png, BTLevent.png, etc.
- **Size**: ~2MB each (should optimize to 300-500KB each)
- **Aspect Ratio**: Appears to be square or 16:9 format
- **Use**: Portfolio cards, gallery displays
- **Format**: PNG

## 📸 Image Optimization Tips

To improve loading performance, consider:

1. **Compress Images**: Use tools like:
   - TinyPNG (https://tinypng.com)
   - ImageOptim
   - Squoosh (https://squoosh.app)

2. **Convert to Modern Formats**: WebP format for better compression
   ```html
   <picture>
       <source srcset="image.webp" type="image/webp">
       <img src="image.png" alt="Description">
   </picture>
   ```

3. **Lazy Loading**: Add to images for faster page load
   ```html
   <img src="image.png" loading="lazy" alt="Description">
   ```

4. **Responsive Images**: Serve different sizes for different devices
   ```html
   <img srcset="image-small.png 480w, image-medium.png 800w" 
        sizes="(max-width: 600px) 480px, 800px"
        src="image.png" alt="Description">
   ```

## 🔧 Updating Images

### To Replace an Image:
1. Keep the same filename
2. Place new image in `/images/` folder
3. Clear browser cache (Ctrl+Shift+Del)
4. Refresh page

### To Add a New Image:
1. Save image to `/images/` folder with descriptive name
2. Update HTML to reference the new image
3. Example: `<img src="images/new-image.png" alt="Description">`

## 📱 Responsive Image Handling

Images are styled to be fully responsive:

```css
.portfolio-image {
    width: 100%;
    aspect-ratio: 1;
    background-size: cover;
    background-position: center;
}
```

This ensures:
- Images maintain aspect ratio
- Cover the container completely
- Center-aligned and cropped appropriately
- No image stretching or distortion

## 🎯 Image Best Practices Used

✅ **Background Images**: Used for portfolio cards (CSS `background-image`)
✅ **Responsive**: Scales with container size
✅ **Performance**: Images only load when visible (lazy loading compatible)
✅ **Fallbacks**: CSS gradients as backup if images don't load
✅ **Logo**: Flexible sizing with max-height constraint

## 📊 Current Status

| Image | Status | Location | Size |
|-------|--------|----------|------|
| logo.png | ✅ Active | Navbar | 860KB |
| conference.png | ✅ Active | Portfolio | 1.9MB |
| weeding_planner.png | ✅ Active | Portfolio | 2.3MB |
| BTLevent.png | ✅ Active | Portfolio | 2.4MB |
| exhibition.png | ✅ Active | Portfolio | 2.2MB |
| Modern BM Exhibition Booth.png | ✅ Active | Portfolio | 2.2MB |
| indoor_outdoor_event.png | ✅ Active | Portfolio | 2.2MB |
| kidsparty.png | ✅ Active | Portfolio | 2.3MB |
| sound_light.png | ✅ Active | Portfolio | 2.2MB |
| statemanagement.png | ✅ Unused | Available | 2.4MB |
| modeling_acting.png | ✅ Unused | Available | 2.0MB |
| photoshoot.png | ✅ Active | Portfolio | 2.0MB |
| press_printing.png | ✅ Unused | Available | 2.0MB |

## 💡 Future Enhancements

1. Compress all images for web (target <500KB each)
2. Convert to WebP format with PNG fallbacks
3. Implement lazy loading for portfolio images
4. Add image lightbox/modal on click
5. Create image carousel slider
6. Add image filters (hover effects)

---

**Last Updated**: 2025-11-07
**Total Images**: 14
**Total Size**: ~30MB (unoptimized)