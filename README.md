# Accessible Design Co. Website

A responsive, accessible multi-section webpage for the fictitious company "Accessible Design Co." This project demonstrates modern web development practices with a focus on accessibility features and responsive design.

## Project Overview

This website includes:

- Semantic HTML5 structure
- Responsive design using CSS Flexbox and Grid
- ARIA attributes and roles for enhanced accessibility
- Form validation with accessible feedback
- Proper keyboard navigation and focus management
- Responsive navigation with mobile menu

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Media Queries)
- JavaScript (ES6)
- ARIA (Accessible Rich Internet Applications)

## Features

### Semantic HTML Structure
- Uses semantic elements (`header`, `main`, `section`, `article`, etc.)
- Hierarchical heading structure
- Meaningful content organization

### Responsive Design
- Flexbox navigation bar that adapts to small screens
- CSS Grid for multi-column layout that collapses on mobile
- Media queries for responsive typography and layout

### Accessibility Features
- ARIA roles and attributes
- Skip link for keyboard users
- Visible focus states
- Accessible form labels and validation
- Color contrast ratios meeting WCAG guidelines
- Keyboard navigation support

## Project Structure

```
accessible-design-co/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
└── img/                # Image directory
    ├── logo-placeholder.png
    ├── hero-bg.jpg
    ├── web-design-icon.png
    ├── audit-icon.png
    ├── training-icon.png
    └── consulting-icon.png
```

## How to View the Website

### Option 1: Direct File Opening
1. Download or clone this repository
2. Open the `index.html` file in any modern web browser

### Option 2: Using a Local Server
1. Download or clone this repository
2. In the project directory, start a local server:
   - Using Python:
     ```
     # Python 3
     python -m http.server
     
     # Python 2
     python -m SimpleHTTPServer
     ```
   - Using Node.js (after installing http-server):
     ```
     npx http-server
     ```
3. Open your browser and navigate to `http://localhost:8000` (or the port shown in your terminal)

### Option 3: View Live Demo
You can view the live demo at [your-github-pages-url] (if deployed)

## Accessibility Features Implemented

- Semantic HTML structure with appropriate landmarks
- ARIA roles and attributes for enhanced accessibility
- Skip link for keyboard navigation
- Properly labeled form controls with validation feedback
- Adequate color contrast
- Responsive design for all devices
- Keyboard focus management
- Meaningful alt text for images

## Browser Compatibility

The website has been tested and works in the following browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add more interactive elements with advanced ARIA patterns
- Implement dark mode toggle with preserved accessibility
- Add multilingual support
- Enhance form validation with more robust patterns

## License

This project is licensed under the MIT License

## Author

Bolivar Vega Leon