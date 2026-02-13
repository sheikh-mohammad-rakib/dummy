
# User Cards React App

This project is a simple React application that fetches and displays a list of users from an external API. The UI is styled using Tailwind CSS and daisyUI for a modern, responsive look.

## Features

- Fetches user data from https://dummyjson.com/users
- Displays users in responsive cards with image, name, and email
- "Buy Now" button on each user card
- Styled with Tailwind CSS and daisyUI components
- Clean, minimal, and mobile-friendly interface

## Setup and Usage

1. **Install dependencies:**
	```
	npm install
	```

2. **Start the development server:**
	```
	npm run dev
	```
	The app will be available at the local address shown in the terminal.

3. **Build for production:**
	```
	npm run build
	```

4. **Preview the production build:**
	```
	npm run preview
	```

5. **Lint the code:**
	```
	npm run lint
	```

## Custom Scripts

- `dev`: Start the Vite development server
- `build`: Build the app for production
- `preview`: Preview the production build locally
- `lint`: Run ESLint on the project

## Notable Dependencies

- **React**: UI library for building the app
- **Vite**: Fast development/build tool
- **Tailwind CSS**: Utility-first CSS framework
- **daisyUI**: Tailwind CSS component library
- **@vitejs/plugin-react-swc**: React plugin for Vite with SWC
- **ESLint**: Linting for code quality

## Folder Structure

```
d:/mern/
│
├── public/                # Static assets
├── src/
│   ├── App.jsx            # Main app component; fetches and displays users
│   ├── LoadUser.jsx       # Component for rendering a single user card
│   ├── main.jsx           # Entry point; renders App into the DOM
│   ├── index.css          # Imports Tailwind CSS and daisyUI
│   ├── App.css            # (Empty, reserved for custom styles if needed)
│   └── assets/            # Images or other assets
│
├── index.html             # Main HTML file, includes root div for React
├── package.json           # Project metadata, scripts, and dependencies
├── vite.config.js         # Vite configuration (React, Tailwind plugins)
├── eslint.config.js       # ESLint configuration
└── README.md              # Project documentation (this file)
```

## Notes

- All UI is built with React components and styled using Tailwind CSS and daisyUI classes.
- No custom CSS is used; all styling is via utility classes and daisyUI components.
- The project is minimal and focused on demonstrating API data fetching and modern UI practices.
