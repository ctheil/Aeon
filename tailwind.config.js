module.exports = {
  content: ["./views/**/*.pug"],
  theme: {
    extend: {
      colors: {
        "l-primary-600": "var(--l-primary-600)",
        "l-primary-500": "var(--l-primary-500)",
        "l-primary-400": "var(--l-primary-400)",
        "l-secondary-600": "var(--l-secondary-600)",
        "l-secondary-500": "var(--l-secondary-500)",
        "l-secondary-400": "var(--l-secondary-400)",

        "d-primary-600": "var(--d-primary-600)",
        "d-primary-500": "var(--d-primary-500)",
        "d-primary-400": "var(--d-primary-400)",
        "d-secondary-600": "var(--d-secondary-600)",
        "d-secondary-500": "var(--d-secondary-500)",
        "d-secondary-400": "var(--d-secondary-400)",

        "l-background": "var(--l-background)",
        "l-background-accent": "var(--l-background-accent)",
        "l-text": "var(--l-text)",
        "l-text-accent": "var(--l-text-accent)",
        "d-background": "var(--d-background)",
        "d-background-accent": "var(--d-background-accent)",
        "d-text": "var(--d-text)",
        "d-text-accent": "var(--d-text-accent)",
      },
    },
  },
  plugins: [],
};
