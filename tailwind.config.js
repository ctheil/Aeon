module.exports = {
  content: ["./views/**/*.pug"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "l-p-600": "hsl(var(--l-p-600))",
        "l-p-500": "hsl(var(--l-p-500))",
        "l-p-400": "hsl( var(--l-p-400) )",
        "l-p-bg": "hsl( var(--l-p-bg) )",
        "l-s-600": "hsl( var(--l-s-600) )",
        "l-s-500": "hsl( var(--l-s-500) )",
        "l-s-400": "hsl( var(--l-s-400) )",
        "l-s-bg": "hsl( var(--l-s-bg) )",

        "d-p-600": "hsl( var(--d-p-600) )",
        "d-p-500": "hsl( var(--d-p-500) )",
        "d-p-400": "hsl( var(--d-p-400) )",
        "d-p-bg": "hsl( var(--d-p-bg) )",
        "d-s-600": "hsl( var(--d-s-600) )",
        "d-s-500": "hsl( var(--d-s-500) )",
        "d-s-400": "hsl( var(--d-s-400) )",
        "d-s-bg": "hsl( var(--d-s-bg) )",

        "l-bg": "hsl(var(--l-bg))",
        "l-bg-a": "hsl( var(--l-bg-a) )",
        "l-text": "hsl(var(--l-text))",
        "l-text-a": "hsl(var(--l-text-a))",
        "d-bg": "hsl( var(--d-bg) )",
        "d-bg-a": "hsl( var(--d-bg-a) )",
        "d-text": "hsl( var(--d-text) )",
        "d-text-a": "hsl( var(--d-text-a) )",
      },
    },
  },
  plugins: [],
};
