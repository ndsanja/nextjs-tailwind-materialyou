module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "my-primary": "var(--primary)",
        "my-on-primary": "var(--on-primary)",
        "my-primary-container": "var(--primary-container)",
        "my-on-primary-container": "var(--on-primary-container)",
        "my-dark-primary": "var(--primary-dark)",
        "my-dark-on-primary": "var(--on-primary-dark)",
        "my-dark-primary-container": "var(--primary-container-dark)",
        "my-dark-on-primary-container": "var(--on-primary-container-dark)",

        "my-secondary": "var(--secondary)",
        "my-on-secondary": "var(--on-secondary)",
        "my-secondary-container": "var(--secondary-container)",
        "my-on-secondary-container": "var(--on-secondary-container)",
        "my-dark-secondary": "var(--secondary-dark)",
        "my-dark-on-secondary": "var(--on-secondary-dark)",
        "my-dark-secondary-container": "var(--secondary-container-dark)",
        "my-dark-on-secondary-container": "var(--on-secondary-container-dark)",

        "my-tertiary": "var(--tertiary)",
        "my-on-tertiary": "var(--on-tertiary)",
        "my-tertiary-container": "var(--tertiary-container)",
        "my-on-tertiary-container": "var(--on-tertiary-container)",
        "my-dark-tertiary": "var(--tertiary-dark)",
        "my-dark-on-tertiary": "var(--on-tertiary-dark)",
        "my-dark-tertiary-container": "var(--tertiary-container-dark)",
        "my-dark-on-tertiary-container": "var(--on-tertiary-container-dark)",

        "my-error": "var(--error)",
        "my-on-error": "var(--on-error)",
        "my-error-container": "var(--error-container)",
        "my-on-error-container": "var(--on-error-container)",
        "my-dark-error": "var(--error-dark)",
        "my-dark-on-error": "var(--on-error-dark)",
        "my-dark-error-container": "var(--error-container-dark)",
        "my-dark-on-error-container": "var(--on-error-container-dark)",

        "my-background": "var(--background)",
        "my-on-background": "var(--on-background)",
        "my-dark-background": "var(--background-dark)",
        "my-dark-on-background": "var(--on-background-dark)",

        "my-surface": "var(--surface)",
        "my-on-surface": "var(--on-surface)",
        "my-dark-surface": "var(--surface-dark)",
        "my-dark-on-surface": "var(--on-surface-dark)",

        "my-surface-variant": "var(--surface-variant)",
        "my-on-surface-variant": "var(--on-surface-variant)",
        "my-dark-surface-variant": "var(--surface-variant-dark)",
        "my-dark-on-surface-variant": "var(--on-surface-variant-dark)",

        "my-outline": "var(--outline)",
        "my-on-outline": "var(--on-outline)",
      },
      fontSize: {
        "display-large": "var(--font-display-large)",
        "display-medium": "var(--font-display-medium)",
        "display-small": "var(--font-display-small)",

        "headline-large": "var(--font-headline-large)",
        "headline-medium": "var(--font-headline-medium)",
        "headline-small": "var(--font-headline-small)",

        "title-large": "var(--font-title-large)",
        "title-medium": "var(--font-title-medium)",
        "title-small": "var(--font-title-small)",

        "label-large": "var(--font-label-large)",
        "label-medium": "var(--font-label-medium)",
        "label-small": "var(--font-label-small)",

        "body-large": "var(--font-body-large)",
        "body-medium": "var(--font-body-medium)",
        "body-small": "var(--font-body-small)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
