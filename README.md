# Glossary

### Creating a new React project with Vite

```bash
npm create vite@latest myapp
```

- The static logos, images etc must be placed in assets and not public since they are optimised by vite

- Files related to SEO must be placed in public. Files in public are not optimised by vite

### Tailwind commands

```bash
npm install tailwindcss @tailwindcss/vite
```

Add plugin in vite.config.js

```bash
tailwindcss()
```