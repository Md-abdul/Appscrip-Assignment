# Landing Page Clone 🛠️

A beautiful landing page cloned from a Figma design using Next.js and plain CSS.

## Overview

This project is a fully responsive landing page built with Next.js and styled using plain CSS. The page closely follows the Figma design provided and showcases modern web development practices with a focus on performance, accessibility, and maintainability.

## 🌟 Features

- **Responsive Design**: Fully responsive and optimized for various devices and screen sizes.
- **Modern UI**: Sleek and modern user interface design.
- **Performance Optimized**: Efficiently coded with performance in mind.
- **SEO Friendly**: Implemented best practices for search engine optimization.
- **Plain CSS**: Utilized custom CSS for styling, allowing for precise control over the UI.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **CSS**: Plain CSS (organized in a custom `styles` folder)
- **JavaScript**: [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Version Control**: [Git](https://git-scm.com/) and [GitHub](https://github.com/)

## 🗂️ Folder Structure

    ├── public
    │   └── assets
    │       └── ... (all images used in the project)
    ├── src
    │   ├── components
    │   │   └── Navbar.js
    │   │   └── TitleSection.js
    │   │   └── Footer.js
    │   │   └── Spinner.js  
    │   ├── pages
    │   │   ├── Products
    │   │   │    └── Sidebar.js
    │   │   │    └── ProductList.js
    │   │   ├── _app.js
    │   │   └── index.js (landing page)
    │   ├── styles
    │   │   └── customStyles
    │   │       ├── Navbar.css
    │   │       ├── TitleSection.css
    │   │       ├── Footer.css
    │   │       ├── Spinner.css
    │   │       ├── Sidebar.css
    │   │       └── ProductList.css
    │   ├── global.css
    ├── .gitignore
    ├── next.config.js
    └── README.md

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/landing-page-clone.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd landing-page-clone
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Custom CSS Structure

Each component in the `src/components` directory has a corresponding CSS file in the `src/styles/customStyles` folder. This keeps the styles modular and easy to maintain.

- `Navbar.js` → `Navbar.css`
- `TitleSection.js` → `TitleSection.css`
- `Footer.js` → `Footer.css`
- `Spinner.js` → `Spinner.css`
- `Sidebar.js` → `Sidebar.css`
- `ProductList.js` → `ProductList.css`

All global styles that apply to the entire project are located in the `global.css` file.

## License

This project is open-source and available under the MIT License.
