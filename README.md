# React Chat UI

A modern, responsive chat interface built with React.js and Tailwind CSS that provides real-time messaging capabilities using Socket.io and local storage for data persistence.

## Features

- 💬 Real-time messaging with Socket.io integration
- 📱 Responsive design for both desktop and mobile screens
- 🎨 Modern UI with Tailwind CSS styling
- 💾 Local storage for message persistence
- ⌚ Message timestamps
- 🔄 Modular and reusable components

## Tech Stack

- React.js - Frontend framework
- Tailwind CSS - Styling and responsive design
- Socket.io-client - Real-time communication
- localStorage API - Data persistence
- Vite - Build tool and development server

## Project Structure

```
├── frontend/          # React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── context/     # React context for state management
│   │   ├── services/    # Socket.io and storage services
│   │   └── assets/      # Static assets
└── socket/           # Socket.io configuration
```

## Getting Started

1. Clone the repository
```bash
git clone <repository-url>
cd chat-ui
```

2. Install dependencies
```bash
# Install frontend dependencies
cd frontend
npm install

# Install socket dependencies
cd socket
npm install
```

3. Start the development server
```bash
# Start frontend
cd frontend
npm run dev

# Start socket server (in a new terminal)
cd socket
node server.js
```

## Features Implementation

- **Real-time Messaging**: Implemented using Socket.io for instant message delivery
- **Local Storage**: Messages are persisted in browser's localStorage
- **Responsive Design**: Mobile-first approach using Tailwind CSS breakpoints
- **Component Architecture**: Modular components for better code organization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
