module.exports = {
  content: ["./views/**/*.pug", "./app/**/*.tsx"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "l-p-600": "var(--l-p-600)",
        "l-p-500": "var(--l-p-500)",
        "l-p-400": "var(--l-p-400)",
        "l-p-bg": "var(--l-p-bg)",
        "l-s-600": "var(--l-s-600)",
        "l-s-500": "var(--l-s-500)",
        "l-s-400": "var(--l-s-400)",
        "l-s-bg": "var(--l-s-bg)",

        "d-p-600": "var(--d-p-600)",
        "d-p-500": "var(--d-p-500)",
        "d-p-400": "var(--d-p-400)",
        "d-p-bg": "var(--d-p-bg)",
        "d-s-600": "var(--d-s-600)",
        "d-s-500": "var(--d-s-500)",
        "d-s-400": "var(--d-s-400)",
        "d-s-bg": "var(--d-s-bg)",

        "l-bg": "var(--l-bg)",
        "l-bg-a": "var(--l-bg-a)",
        "l-text": "var(--l-text)",
        "l-text-a": "var(--l-text-a)",
        "d-bg": "var(--d-bg)",
        "d-bg-a": "var(--d-bg-a)",
        "d-text": "var(--d-text)",
        "d-text-a": "var(--d-text-a)",
      },
    },
  },
  plugins: [],
};
