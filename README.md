# React Colors

This repository contains the final project for "The Modern React Bootcamp" course, focusing on building an interactive color palette application using advanced React features.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The **React Colors** application allows users to browse, create, and manage color palettes. It provides an intuitive UI for selecting colors, adjusting shades, and copying color codes. This project consolidates various React concepts, including hooks, context API, and routing.

## Features

- **Palette Browsing**: View a collection of predefined color palettes.
- **Palette Creation**: Create custom palettes with a color picker and save them for future use.
- **Color Shades**: Generate different shades for each color in a palette.
- **Color Format Toggle**: Switch between HEX, RGB, and HSL color formats.
- **Clipboard Copy**: Copy color codes to the clipboard with a single click.
- **Responsive Design**: Ensures usability across various devices and screen sizes.

## Technologies Used

- **Frontend**:
  - [React](https://reactjs.org/): JavaScript library for building user interfaces.
  - [React Router](https://reactrouter.com/): Declarative routing for React applications.
  - [Material-UI](https://mui.com/): React components for faster and easier web development.
  - [rc-slider](https://www.npmjs.com/package/rc-slider): Slider component for React.

- **State Management**:
  - [React Context API](https://reactjs.org/docs/context.html): For managing global application state.

- **Utilities**:
  - [chroma-js](https://gka.github.io/chroma.js/): JavaScript library for color manipulations.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/cenanionut/react-colors.git
   cd react-colors
   ```

2. **Install Dependencies**:

   Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. Then, run:

   ```bash
   npm install
   ```

3. **Start the Application**:

   ```bash
   npm start
   ```

   The application will run in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
react-colors/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Palette.js
│   │   ├── PaletteList.js
│   │   ├── SingleColorPalette.js
│   │   ├── ColorBox.js
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── ColorPickerForm.js
│   │   ├── PaletteMetaForm.js
│   │   └── ...
│   ├── contexts/
│   │   ├── ThemeContext.js
│   │   └── ...
│   ├── utils/
│   │   ├── colorHelpers.js
│   │   └── seedColors.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

- `public/`: Contains static assets and the main HTML file.
- `src/`: Contains React components, context providers, utility functions, and the main application logic.
  - `components/`: Reusable UI components.
  - `contexts/`: Context providers for global state management.
  - `utils/`: Helper functions and seed data for color palettes.

## Available Scripts

In the project directory, you can run:

- **Start the Application**:

  ```bash
  npm start
  ```

  Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

- **Run Tests**:

  ```bash
  npm test
  ```

  Launches the test runner in interactive watch mode.

- **Build for Production**:

  ```bash
  npm run build
  ```

  Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

- **Eject Configuration**:

  ```bash
  npm run eject
  ```

  **Note**: This action is irreversible. It exposes the configuration files for customization.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests. Ensure adherence to the project's coding standards and include relevant tests for new features or bug fixes.

## License

This project is licensed under the MIT License.

---

Feel free to customize this README further to align with specific details of your project. 
