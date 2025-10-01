# Pinia Task Management

A sleek task management application built with Vue 3 and Pinia, featuring a modern black and ivory design theme. Manage your tasks with ease, mark favorites, and enjoy a responsive interface.

![Pinia Task Manager](https://pinia.vuejs.org/logo.svg)

## ✨ Features

- **Task Management**
  - Create tasks with titles and descriptions
  - Delete tasks when completed
  - Favorite important tasks for quick access
  - View all tasks or filter by favorites

- **Modern UI**
  - Clean black and ivory color scheme
  - Responsive design for all devices
  - Smooth transitions and animations
  - Intuitive task filtering

- **Data Persistence**
  - Tasks automatically save to localStorage
  - Persists across browser sessions
  - No backend required

## 🚀 Quick Start

### Prerequisites

- Node.js version ^20.19.0 || >=22.12.0
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd pinia-vue-task-management
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Development

### Project Structure

```
src/
├── assets/          # Static assets and global CSS
├── components/      # Vue components
│   ├── TaskForm.vue    # Task creation form
│   ├── TaskItem.vue    # Individual task display
│   └── TaskList.vue    # Task list and filtering
├── stores/          # Pinia stores
│   └── tasks.js     # Task management store
├── App.vue         # Root component
└── main.js         # Application entry point
```

### Available Scripts

- Development server:
```bash
npm run dev
```

- Build for production:
```bash
npm run build
```

- Preview production build:
```bash
npm run preview
```

## 💻 Usage Guide

### Creating Tasks
1. Enter a task title in the input field
2. Optionally add a description
3. Click "Add" or press Enter

### Managing Tasks
- **Delete**: Click the "Delete" button on any task
- **Favorite**: Click the star icon (☆/★) to toggle favorite status
- **Filter**: Use the "All Tasks" or "Favorites" buttons to filter your view

### Task Storage
- Tasks automatically save to your browser's localStorage
- Data persists even after closing the browser
- Clear browser data to reset tasks

## 🎨 Customization

### Styling
- Main color scheme uses:
  - Background: `#000000` (Black)
  - Text and accents: `#fffff0` (Ivory)
  - Task items: Semi-transparent ivory
  - Interactive elements: Various opacity levels

### Configuration
- Edit `vite.config.js` for build customization
- Modify `src/stores/tasks.js` for storage key changes
- Adjust components in `src/components/` for UI modifications

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Dependencies

- [Vue 3](https://vuejs.org/) - Progressive JavaScript Framework
- [Pinia](https://pinia.vuejs.org/) - Vue Store Management
- [Vite](https://vitejs.dev/) - Frontend Build Tool

## 🔧 Browser Support

- Chrome/Edge/Brave (latest)
- Firefox (latest)
- Safari (latest)

## 🌟 IDE Setup

### VS Code (Recommended)
1. Install [VS Code](https://code.visualstudio.com/)
2. Install [Volar Extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
3. Disable Vetur if installed

### Browser DevTools
- Install [Vue DevTools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- Enable Custom Object Formatter in DevTools

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Vue.js Team](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vite](https://vitejs.dev/)
