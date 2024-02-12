// const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/views/**/*.tsx"],
  mode: "jit",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

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
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      // fontFamily: {
      //   sans: ["var(--font-sans)", ...fontFamily.sans],
      // },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
