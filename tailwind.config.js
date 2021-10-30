module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto", "ui-sans-serif", "system-ui"],
      },
      colors: {
        "my-color-primary": "var(--primary)",
        "my-color-on-primary": "var(--on-primary)",
        "my-color-primary-container": "var(--primary-container)",
        "my-color-on-primary-container": "var(--on-primary-container)",
        "my-color-dark-primary": "var(--primary-dark)",
        "my-color-dark-on-primary": "var(--on-primary-dark)",
        "my-color-dark-primary-container": "var(--primary-container-dark)",
        "my-color-dark-on-primary-container":
          "var(--on-primary-container-dark)",
        "my-color-inverse-primary": "var(--inverse-primary)",

        "my-color-secondary": "var(--secondary)",
        "my-color-on-secondary": "var(--on-secondary)",
        "my-color-secondary-container": "var(--secondary-container)",
        "my-color-on-secondary-container": "var(--on-secondary-container)",
        "my-color-dark-secondary": "var(--secondary-dark)",
        "my-color-dark-on-secondary": "var(--on-secondary-dark)",
        "my-color-dark-secondary-container": "var(--secondary-container-dark)",
        "my-color-dark-on-secondary-container":
          "var(--on-secondary-container-dark)",
        "my-color-dark-inverse-primary": "var(--inverse-primary-dark)",

        "my-color-tertiary": "var(--tertiary)",
        "my-color-on-tertiary": "var(--on-tertiary)",
        "my-color-tertiary-container": "var(--tertiary-container)",
        "my-color-on-tertiary-container": "var(--on-tertiary-container)",
        "my-color-dark-tertiary": "var(--tertiary-dark)",
        "my-color-dark-on-tertiary": "var(--on-tertiary-dark)",
        "my-color-dark-tertiary-container": "var(--tertiary-container-dark)",
        "my-color-dark-on-tertiary-container":
          "var(--on-tertiary-container-dark)",

        "my-color-error": "var(--error)",
        "my-color-on-error": "var(--on-error)",
        "my-color-error-container": "var(--error-container)",
        "my-color-on-error-container": "var(--on-error-container)",
        "my-color-dark-error": "var(--error-dark)",
        "my-color-dark-on-error": "var(--on-error-dark)",
        "my-color-dark-error-container": "var(--error-container-dark)",
        "my-color-dark-on-error-container": "var(--on-error-container-dark)",

        "my-color-background": "var(--background)",
        "my-color-on-background": "var(--on-background)",
        "my-color-dark-background": "var(--background-dark)",
        "my-color-dark-on-background": "var(--on-background-dark)",

        "my-color-surface": "var(--surface)",
        "my-color-on-surface": "var(--on-surface)",
        "my-color-dark-surface": "var(--surface-dark)",
        "my-color-dark-on-surface": "var(--on-surface-dark)",

        "my-color-inverse-surface": "var(--inverse-surface)",
        "my-color-on-inverse-surface": "var(--on-inverse-surface)",
        "my-color-dark-inverse-surface": "var(--inverse-surface-dark)",
        "my-color-dark-on-inverse-surface": "var(--on-inverse-surface-dark)",

        "my-color-surface-variant": "var(--surface-variant)",
        "my-color-on-surface-variant": "var(--on-surface-variant)",
        "my-color-dark-surface-variant": "var(--surface-variant-dark)",
        "my-color-dark-on-surface-variant": "var(--on-surface-variant-dark)",

        "my-color-outline": "var(--outline)",
        "my-color-on-outline": "var(--on-outline)",

        "my-color-shadow": "var(--shadow)",
        "my-color-dark-shadow": "var(--shadow-dark)",
      },
      fontSize: {
        "my-font-size-display-large": [
          "var(--font-display-large)",
          { lineHeight: "var(--line-height-display-large)" },
        ],
        "my-font-size-display-medium": [
          "var(--font-display-medium)",
          { lineHeight: "var(--line-height-display-medium)" },
        ],
        "my-font-size-display-small": [
          "var(--font-display-small)",
          { lineHeight: "var(--line-height-display-small)" },
        ],

        "my-font-size-headline-large": [
          "var(--font-headline-large)",
          { lineHeight: "var(--line-height-headline-large)" },
        ],
        "my-font-size-headline-medium": [
          "var(--font-headline-medium)",
          { lineHeight: "var(--line-height-headline-medium)" },
        ],
        "my-font-size-headline-small": [
          "var(--font-headline-small)",
          { lineHeight: "var(--line-height-headline-small)" },
        ],

        "my-font-size-title-large": [
          "var(--font-title-large)",
          { lineHeight: "var(--line-height-title-large)" },
        ],
        "my-font-size-title-medium": [
          "var(--font-title-medium)",
          { lineHeight: "var(--line-height-title-medium)" },
        ],
        "my-font-size-title-small": [
          "var(--font-title-small)",
          { lineHeight: "var(--line-height-title-small)" },
        ],

        "my-font-size-label-large": [
          "var(--font-label-large)",
          { lineHeight: "var(--line-height-label-large)" },
        ],
        "my-font-size-label-medium": [
          "var(--font-label-medium)",
          { lineHeight: "var(--line-height-label-medium)" },
        ],
        "my-font-size-label-small": [
          "var(--font-label-small)",
          { lineHeight: "var(--line-height-label-small)" },
        ],

        "my-font-size-body-large": [
          "var(--font-body-large)",
          { lineHeight: "var(--line-height-body-large)" },
        ],
        "my-font-size-body-medium": [
          "var(--font-body-medium)",
          { lineHeight: "var(--line-height-body-medium)" },
        ],
        "my-font-size-body-small": [
          "var(--font-body-small)",
          { lineHeight: "var(--line-height-body-small)" },
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
