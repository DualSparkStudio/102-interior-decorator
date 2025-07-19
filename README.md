# Elegance Interiors - Interior Decorator Website

A modern, professional interior decorator website built with React, TypeScript, and Tailwind CSS. Features a comprehensive admin panel for managing services, portfolio items, and design options.

## 🚀 Features

### For Visitors
- **Modern Design**: Beautiful, responsive design with smooth animations
- **Services Showcase**: View available interior design services
- **Portfolio Gallery**: Browse completed projects with multiple design options
- **Contact Information**: Easy ways to get in touch
- **Mobile Responsive**: Optimized for all device sizes

### For Administrators
- **Secure Admin Panel**: Password-protected admin interface
- **Services Management**: Add, edit, and delete services
- **Portfolio Management**: Create portfolio items with multiple design options
- **Design Options**: Each portfolio item can have multiple design variations
- **Local Storage**: Data persistence without backend requirements
- **Real-time Updates**: Changes reflect immediately on the frontend

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router
- **Icons**: Lucide React
- **State Management**: React Hooks + localStorage

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd 102-interior-decorator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🔐 Admin Panel Access

### Login Credentials
- **URL**: `/admin`
- **Password**: `admin123`

### Admin Panel Features

#### Dashboard
- Overview of total services, portfolio items, and design options
- Recent activity summary
- Quick statistics

#### Services Management
- **Add New Service**: Create services with title, description, price, duration, and features
- **Edit Service**: Modify existing service details
- **Delete Service**: Remove services with confirmation
- **Features List**: Add/remove service features dynamically

#### Portfolio Management
- **Add Portfolio Item**: Create new portfolio projects
- **Design Options**: Add multiple design variations per portfolio item
- **Edit Portfolio**: Modify project details and design options
- **Delete Portfolio**: Remove projects with confirmation

#### Settings
- Admin password management
- Website configuration
- Data export/import options

## 📱 Portfolio Design Options

Each portfolio item supports multiple design variations:

### Design Features
- **Design Name**: Unique name for each design option
- **Description**: Detailed description of the design
- **Image/Emoji**: Visual representation (emoji or image URL)
- **Price**: Optional pricing information
- **Features**: List of design-specific features

### Visitor Experience
- **Grid View**: Shows design count and preview of first 2 designs
- **Expandable Details**: Click to view all design options
- **Category Filtering**: Filter by room type
- **Responsive Layout**: Works on all screen sizes

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- Primary colors: Blue tones
- Accent colors: Teal/Green tones
- All colors are customizable in the config file

### Content
- **Services**: Managed through admin panel
- **Portfolio**: Managed through admin panel
- **Static Content**: Edit directly in component files

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/          # Page sections (Hero, Services, etc.)
│   ├── Navbar.tsx         # Navigation component
│   └── Footer.tsx         # Footer component
├── pages/
│   ├── Home.tsx           # Home page
│   ├── Services.tsx       # Services page
│   ├── Portfolio.tsx      # Portfolio page
│   ├── About.tsx          # About page
│   ├── Contact.tsx        # Contact page
│   └── Admin.tsx          # Admin panel
├── utils/
│   └── demoData.ts        # Demo data initialization
├── App.tsx                # Main app component
└── main.tsx              # Entry point
```

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS v3 with custom configuration:
- Custom color palette
- Responsive design utilities
- Custom component classes

### Vite
- Fast development server
- Hot module replacement
- Optimized build process

## 📊 Data Management

### Local Storage
- Services data: `admin-services`
- Portfolio data: `admin-portfolio`
- Data persists between sessions
- No backend required

### Demo Data
- Pre-loaded sample services and portfolio items
- Automatically initialized on first visit
- Can be reset through admin panel

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy automatically on push

### Other Platforms
- **Vercel**: Similar to Netlify setup
- **GitHub Pages**: Requires additional configuration
- **Traditional Hosting**: Upload `dist` folder contents

## 🔒 Security Notes

- Admin panel uses simple password protection
- For production, consider implementing proper authentication
- Data is stored locally in browser storage
- Consider backend integration for production use

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For support or questions:
- Check the documentation
- Review the code comments
- Open an issue on GitHub

---

**Built with ❤️ using modern web technologies**
