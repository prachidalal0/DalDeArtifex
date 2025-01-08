# Dal De Artifex

Dal De Artifex is a portfolio website designed to showcase interdisciplinary projects at the intersection of data science, linguistics, philosophy, and technology. Built with a modern tech stack, this platform serves as a space to highlight innovative ideas, fully deployed projects, and thought-provoking explorations.

## Project Purpose
The primary goal of Dal De Artifex is to:
- Provide an intuitive and visually engaging platform for sharing projects.
- Highlight research and applications in NLP, AI, and interdisciplinary fields.
- Bridge abstract concepts from psychology, philosophy, and technology into tangible outcomes.

---

## Tech Stack
The Dal De Artifex website leverages the following technologies:

### **Framework**
- **Next.js**: For server-side rendering and static site generation, ensuring optimal performance and SEO.
- **React.js**: To create a dynamic and component-driven user interface.

### **Languages**
- **JavaScript (JSX)**: Combines JavaScript and XML-like syntax for building reusable components.
- **HTML**: For structuring the content of web pages.
- **CSS (TailwindCSS)**: For styling the website with a utility-first approach.

### **Hosting & Deployment**
- **Vercel**: Used for deploying and hosting the site, ensuring fast and reliable delivery.

---

## Features

### 1. **Dynamic Routing**
- Next.js powers seamless navigation across the website’s pages (e.g., `/about`, `/projects`).

### 2. **Responsive Design**
- Fully responsive and mobile-friendly layout designed using TailwindCSS.

### 3. **Header Navigation**
- Interactive navigation menu with links to pages such as About, Blog, Art, Trinkets, and external platforms (e.g., LinkedIn, GitHub).

### 4. **Static Site Generation (SSG)**
- Pages are pre-rendered at build time, ensuring faster load times and better SEO.

### 5. **Custom Components**
- Modular and reusable React components for the header, footer, and content sections.

### 6. **Rich Text Integration**
- Utilizes JSX for embedding styled and formatted text seamlessly within React components.

### 7. **Optimized Performance**
- Lazy loading and optimized static assets for high performance and low latency.

---

## File Structure

```
├── public/                # Static assets (images, icons, etc.)
├── src/
│   ├── app/
│   │   ├── page.js       # Homepage logic and content
│   │   ├── about/        # About page logic and content
│   │   ├── blog/         # Blog page logic and content
│   │   └── [dynamic]     # Placeholder for future dynamic routing
│   ├── components/       # Reusable React components
│   ├── styles/           # TailwindCSS configuration
│   └── utils/            # Utility functions (if any)
├── .eslintrc.js          # ESLint configuration
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
```

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v18+)
- **npm** or **yarn**

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/prachidalal0/dal-de-artifex.git
   ```
2. Navigate to the project directory:
   ```bash
   cd dal-de-artifex
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To run the website locally:
```bash
npm run dev
```
Access the development server at `http://localhost:3000/`.

### Building for Production
To create an optimized production build:
```bash
npm run build
```
Start the production server:
```bash
npm start
```

---

## Deployment

This project is deployed on [Vercel](https://vercel.com):
1. Push your changes to the `main` branch.
2. Vercel automatically deploys the latest build.

---

## Future Plans
- Add a **Projects** page to showcase detailed descriptions of deployed applications.
- Integrate a **Blog** page for thought leadership content.
- Expand dynamic routing to include project-specific pages.
- Optimize accessibility (ARIA compliance).
- Add animations for an engaging user experience.

---

## Contact
Feel free to reach out:
- **Email**: prachidalal2@gmail.com
- **LinkedIn**: [Prachi Dalal](https://www.linkedin.com/in/prachidalal2/)
- **GitHub**: [@prachidalal0](https://github.com/prachidalal0)

---

## License
This project is licensed under the [MIT License](LICENSE).