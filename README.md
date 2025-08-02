# 🎵 Spotify Web Player Clone
- Student ID: 1401/INFI25/018
A pixel-perfect recreation of the Spotify Web Player interface, built with modern web technologies. This project demonstrates advanced CSS styling, responsive design, and interactive JavaScript functionality.

## ✨ Features

### 🎨 UI/UX
- **Authentic Spotify Design**: Pixel-perfect recreation of the original Spotify interface
- **Dark Theme**: Complete dark mode styling matching Spotify's aesthetic
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Custom Scrollbars**: Styled scrollbars that match the Spotify theme

### 🎵 Player Features
- **Now Playing Bar**: Displays current song information with album art
- **Interactive Player Controls**: Play/pause, skip, shuffle, and repeat buttons
- **Progress Bar**: Clickable progress bar with time display
- **Volume Control**: Interactive volume slider with mute functionality
- **Responsive Player**: Adapts layout for mobile devices

### 📱 Navigation & Layout
- **Collapsible Sidebar**: Desktop sidebar with playlist navigation
- **Mobile Menu**: Slide-out navigation menu for mobile devices
- **Breadcrumb Navigation**: Back/forward navigation buttons
- **User Profile Menu**: Dropdown menu with user options

### 🎶 Content Sections
- **Featured Playlist**: Hero section with gradient background
- **Song List**: Interactive track listing with hover effects
- **Made For You**: Personalized playlist recommendations
- **Browse Categories**: Genre cards with vibrant backgrounds
- **Quick Actions**: Create playlist, like songs, and more

### 💫 Interactive Elements
- **Toast Notifications**: Elegant notifications for user actions
- **Like System**: Heart button animations for favoriting tracks
- **Hover Effects**: Smooth transitions on all interactive elements
- **Keyboard Shortcuts**: ESC to close mobile menu and other shortcuts

## 🛠️ Tech Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Advanced styling with Flexbox, Grid, and custom properties
- **JavaScript (ES6+)**: Modern JavaScript with DOM manipulation
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Montserrat font family for typography

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML, CSS, and JavaScript (for customization)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/spotify-clone.git
   cd spotify-clone
   ```

2. **Open the project**
   ```bash
   # Simply open index.html in your browser
   open index.html
   
   # Or use a local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **Start exploring!**
   - The application runs entirely in the browser
   - No build process or dependencies required
   - All assets are loaded from CDNs

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop** (1200px+): Full sidebar, complete player controls
- **Tablet** (768px - 1199px): Collapsed sidebar, adapted layout
- **Mobile** (< 768px): Slide-out menu, simplified player controls

## 🎨 Customization

### Color Scheme
The project uses CSS custom properties for easy theming:

```css
:root {
  --spotify-green: #1ED760;
  --spotify-black: #121212;
  --spotify-dark: #181818;
  --spotify-light-black: #282828;
  --spotify-gray: #b3b3b3;
}
```

### Adding New Playlists
Update the playlist data in `script.js`:

```javascript
const playlists = [
  {
    name: "Your Playlist Name",
    description: "Your playlist description",
    image: "path/to/your/image.jpg"
  }
];
```

### Modifying Songs
Edit the song list in `index.html`:

```html
<div class="song-item">
  <img src="album-art.jpg" alt="Song Cover" class="song-img">
  <div>
    <div class="song-name">Song Title</div>
    <div class="song-artist">Artist Name</div>
  </div>
</div>
```

## 📂 Project Structure

```
spotify-clone/
├── index.html          # Main HTML file
├── style.css           # Custom CSS styles
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── assets/             # Images and other assets (if any)
```

## ⚡ Performance Features

- **Lazy Loading**: Images load as needed
- **Optimized CSS**: Minimal custom CSS thanks to Tailwind
- **Efficient JS**: Event delegation and optimized DOM manipulation
- **CDN Assets**: Fast loading from reliable CDNs

## 🌟 Key Components

### Mobile Sidebar
- Slide-out navigation for mobile devices
- Touch-friendly interface
- Backdrop click to close

### Player Controls
- Real-time progress simulation
- Volume control with visual feedback
- Play/pause state management

### Toast Notifications
- Non-intrusive user feedback
- Auto-dismiss functionality
- Responsive positioning

## 🐛 Known Issues & Limitations

- **Audio Playback**: This is a UI clone only - no actual audio playback
- **Streaming**: No integration with Spotify API or music streaming
- **User Authentication**: No real user accounts or authentication
- **Data Persistence**: No data is saved between sessions

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Contribution Guidelines
- Follow the existing code style
- Test your changes on multiple devices
- Update documentation as needed
- Add comments for complex functionality

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Spotify**: For the amazing design inspiration
- **Tailwind CSS**: For the utility-first CSS framework
- **Font Awesome**: For the comprehensive icon library
- **Google Fonts**: For the beautiful typography

## 📞 Contact & Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/yourusername/spotify-clone/issues)
- **Email**: tigmanshukumar5@gmail.com
- **LinkedIn**: [My LinkedIn Profile](https://www.linkedin.com/in/tigmanshu-kumar-a774082b7/)

## 🎯 Future Enhancements

- [ ] Spotify Web API integration
- [ ] User authentication
- [ ] Real audio playback
- [ ] Playlist creation/management
- [ ] Search functionality
- [ ] Dark/Light theme toggle
- [ ] Keyboard shortcuts
- [ ] Progressive Web App (PWA) features

---

**⭐ Star this repository if you found it helpful!**

## 🎨 Design Resources

- **🔗 [Live Demo](https://yourusername.github.io/spotify-clone)**
- **🎨 [Figma Design](https://www.figma.com/file/your-figma-file-id/Spotify-Clone-Design)** - View the complete design system and wireframes

Made with ❤️ and lots of ☕
