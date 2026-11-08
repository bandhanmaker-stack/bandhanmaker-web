# Bandhanmaker Design System

## 🎨 Visual Identity

### Logo & Branding
- **Logo Type**: Stage Lighting Mark with Gradient
- **Primary Colors**: Cyan (#00e5ff) + Magenta (#ff1493) + Gold (#ffa500)
- **Design Philosophy**: Energy, Innovation, Professional Excellence

### Icon System

All emojis have been replaced with professional SVG icons that reflect the event production industry:

#### Service Icons (Home Page)
- **Exhibition**: Display boards arrangement
- **Conference**: Podium with microphone and audience
- **Wedding**: Heart with engagement rings
- **Sound & Light**: Speaker with sound waves

#### Service Icons (Services Page - All 12)
1. **Exhibition**: Multi-level display boards
2. **Conference**: Professional podium setup
3. **Political Event**: Calendar/checklist mark
4. **Branding**: Logo and brand elements
5. **BTL Event**: Target/bullseye indicator
6. **Modeling & Acting**: Human figure silhouette
7. **Wedding Planning**: Calendar with checkmark
8. **All Types of Parties**: Balloons and confetti
9. **Sound & Light**: Speaker with audio waves
10. **Stage Management**: Stage with spotlights
11. **Photoshoot**: Camera lens
12. **Press & Printing**: Layered papers/documents

#### Feature Icons (Why Choose Us)
- **Expert Team**: Multiple person icons connected
- **Full Service**: Central hub with connected nodes
- **Modern Technology**: Computer/device icon
- **24/7 Support**: Clock face showing time

### Color Palette

```
Primary Colors:
- Cyan: #00e5ff (Main accent, interactive elements)
- Magenta: #ff1493 (Secondary accent, highlights)
- Gold: #ffa500 (Tertiary accent, energy indicators)

Backgrounds:
- Primary: #0f1419 (Deep navy)
- Secondary: #1a1f2e (Lighter navy)
- Tertiary: #252d3d (Accent navy)

Text:
- Primary: #ffffff (White)
- Secondary: #a0a8b8 (Gray)
```

### Typography

- **Display Font**: Poppins (Bold, Geometric)
  - Used for: Headlines, Hero titles, section headers
  - Weights: 600, 700, 800
  
- **Body Font**: Outfit (Clean, Modern)
  - Used for: Body text, paragraphs, UI elements
  - Weights: 400, 500, 600

### SVG Assets

All SVG files are located in `/assets/`:

- **logos.svg**: Main logo and text variants
- **service-icons.svg**: All 12 service icons
- **feature-icons.svg**: Feature card icons

### Animation Effects

Icons include smooth animations:
- **Hover Scale**: Icons scale up 1.1x on hover
- **Rotation**: Subtle rotation on service card hover
- **Float**: Hero logo has floating animation (±20px vertical movement)
- **Glow**: Icons have shadow effects that enhance on interaction

### Responsive Behavior

- **Desktop**: Full-size icons (80px-120px)
- **Tablet**: Slightly reduced size with smooth transitions
- **Mobile**: Optimized for touch, maintain readability

## 🎯 Icon Usage Guidelines

### When to Use SVG Icons
- Service descriptions and feature lists
- Navigation indicators
- Status indicators
- Interactive elements

### Icon Sizing
- Hero logo: 120px
- Service cards: 80px
- Feature cards: 60px
- Mini icons: 40px

### Color Coordination
- Cyan icons: Primary services, key features
- Magenta icons: Alternative services, secondary highlights
- Gold icons: Accent elements, special features
- Mixed gradient: Complex elements, combined effects

## 📱 Implementation Details

### HTML Usage
```html
<div class="service-icon">
    <svg viewBox="0 0 200 200" width="80" height="80">
        <!-- SVG content -->
    </svg>
</div>
```

### CSS Styling
```css
.service-icon {
    width: 80px;
    height: 80px;
    transition: transform 0.3s ease;
}

.service-icon:hover {
    transform: scale(1.1);
}
```

## 🔄 Future Enhancements

Potential visual upgrades:
1. Animated SVG elements (strokes, fills)
2. Interactive icon hover states
3. Icon variants (light/dark/outline)
4. Animated transitions between pages
5. Custom cursor designs
6. Lottie animations for complex sequences

## 📐 Customization

### Changing Icon Colors
Edit the SVG `fill` and `stroke` attributes:
```svg
<circle cx="100" cy="100" r="90" fill="#00e5ff" opacity="0.1"/>
```

### Adding New Icons
1. Create icon in SVG (200x200 viewBox recommended)
2. Use consistent color scheme
3. Add to appropriate SVG file in `/assets/`
4. Reference in HTML with inline SVG or `<use>` tag

### Updating Color Scheme
To change the entire color scheme:
1. Update `:root` variables in `css/styles.css`
2. Update SVG fill colors in all icon references
3. Test across all pages for consistency

---

**Last Updated**: 2025-11-07
**Design System Version**: 1.0