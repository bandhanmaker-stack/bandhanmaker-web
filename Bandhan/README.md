# Bandhanmaker - Event Production Website

A modern, fully-responsive event production website for Bandhanmaker with animated laser background, smooth animations, and professional UI/UX design.

## 🚀 Features

- **Animated Laser Background** - Dynamic rotating laser beams creating an energetic atmosphere
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme Support** - Adapts to system preferences with smooth transitions
- **Interactive Components** - Hover effects, scroll animations, and smooth transitions
- **Professional Navigation** - Sticky navbar with mobile menu toggle
- **Services Showcase** - 12 comprehensive services with detailed information
- **Portfolio Gallery** - Filterable portfolio with project categories
- **Contact Form** - Fully functional contact form with validation
- **Performance Optimized** - Fast loading and smooth animations

## 📁 Project Structure

```
Bandhan/
├── index.html                 # Home page
├── services.html              # Services page with 12 services
├── portfolio.html             # Portfolio gallery with filters
├── about.html                 # About us page
├── README.md                  # This file
│
├── css/
│   ├── styles.css            # Main stylesheet
│   └── animations.css         # Animation keyframes and classes
│
└── js/
    ├── laser-background.js   # Animated laser background
    ├── navigation.js         # Navigation and mobile menu
    ├── animations.js         # Scroll animations and effects
    └── form-handler.js       # Form validation and submission
```

## 🎨 Design System

### Colors
- **Primary Background**: `#0f1419` (Dark Navy)
- **Secondary Background**: `#1a1f2e`
- **Accent Cyan**: `#00e5ff` (Primary Accent)
- **Accent Magenta**: `#ff1493` (Secondary Accent)
- **Accent Gold**: `#ffa500` (Tertiary Accent)
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#a0a8b8`

### Typography
- **Display Font**: Poppins (Bold, Geometric)
- **Body Font**: Outfit (Modern, Clean)
- **Fallback Stack**: System fonts

### Layout
- **Container Width**: 1400px max-width
- **Responsive Breakpoints**: 1024px, 768px, 640px
- **Spacing System**: Gap-based (Flexbox/Grid)

## 📄 Pages

### Home Page (index.html)
- Hero section with animated laser background
- Featured services showcase
- Portfolio preview
- Statistics section
- Contact form
- Footer with links

### Services Page (services.html)
- Detailed view of all 12 services
- Service features and benefits
- Numbered service descriptions
- Feature tags for each service

### Portfolio Page (portfolio.html)
- Filterable gallery (All, Conference, Wedding, Corporate, Exhibition)
- 9 project showcases with descriptions
- Project statistics and details
- Portfolio performance metrics

### About Page (about.html)
- Company story and history
- Mission, Vision, and Values
- Team breakdown by department
- Why choose us section

## 🛠️ Installation & Setup

### Option 1: Local File Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Using Ruby
ruby -run -ehttpd . -p8000
```
Then visit: `http://localhost:8000`

### Option 2: Direct Opening
Simply open `index.html` in your browser (some features like form submission require a server)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 640px - 767px
- **Small Mobile**: Below 640px

## 🎬 Animations

- **Scroll Reveal**: Elements fade in as they enter viewport
- **Hover Effects**: Cards lift and glow on hover
- **Button Animations**: Smooth transitions and feedback states
- **Laser Background**: Rotating beams with opacity effects
- **Page Load**: Staggered animations for hero content

## 📋 Contact Form

The contact form includes:
- Name validation
- Email validation
- Event type field
- Event date picker
- Message textarea
- Success/Error notifications
- Form reset after submission

**Note**: Currently logs to browser console. To make it functional:
1. Connect to a backend service (PHP, Node.js, etc.)
2. Use a form service like Formspree or EmailJS
3. Add your API endpoint in `js/form-handler.js`

## 🔧 Customization

### Change Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --accent-cyan: #00e5ff;
    --accent-magenta: #ff1493;
    --accent-gold: #ffa500;
    /* Update other colors as needed */
}
```

### Update Contact Information
Edit in `index.html` and `about.html`:
```html
<span class="info-value">info@bandhanmaker.in</span>
<span class="info-value">+91 98765 43210</span>
```

### Add Your Own Laser Colors
In `js/laser-background.js`, modify the `lasers` array:
```javascript
const lasers = [
    { angle: 15, speed: 0.01, color: 'rgba(0, 229, 255, 0.3)' },
    // Add more lasers with different colors
];
```

### Modify Services
Update the service cards in `index.html` and `services.html` with your specific services.

## 🌐 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Push this folder to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://username.github.io/Bandhan`

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: (leave empty - static files)
3. Set publish directory: `.` (root)
4. Deploy!

### Traditional Web Hosting
1. FTP all files to your web server
2. Ensure `index.html` is in root directory
3. Visit your domain

## ⚡ Performance Tips

- **Images**: Optimize images with tools like TinyPNG
- **Caching**: Enable browser caching in your server
- **Minification**: Minify CSS/JS for production
- **CDN**: Use a CDN for Google Fonts
- **Lazy Loading**: Add lazy loading for portfolio images if needed

## 🔒 Security

- Form inputs are validated on client side
- No sensitive data is stored in browser
- Use HTTPS on production servers
- For form backend, implement server-side validation

## 🌙 Dark/Light Theme

The website automatically adapts to system preferences. Users can also set it manually through browser inspector:
```javascript
// Set dark theme
document.documentElement.setAttribute('data-theme', 'dark');

// Set light theme
document.documentElement.setAttribute('data-theme', 'light');

// Remove to use system preference
document.documentElement.removeAttribute('data-theme');
```

## 🤝 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Support & Maintenance

### Regular Updates Needed:
- Update portfolio with new projects
- Refresh service descriptions
- Update statistics in home/portfolio pages
- Maintain contact information
- Keep team section current

### Common Issues:
1. **Form not working**: Ensure you're using a local server
2. **Images not showing**: Check file paths are relative
3. **Animations not smooth**: Disable browser extensions
4. **Mobile menu not working**: Clear browser cache

## 📝 License

This website template is ready for use by Bandhanmaker. 

## 🎯 Future Enhancements

Consider adding:
- Blog/News section
- Client testimonials slider
- Interactive timeline
- Video background option
- Team member profiles with social links
- Multi-language support
- SEO optimization
- Google Analytics integration
- Booking/Inquiry system

---

**Created with ❤️ for Bandhanmaker - Creating Unforgettable Moments**# bandhanmaker-web
