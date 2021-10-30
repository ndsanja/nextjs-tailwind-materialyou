const colors = require("tailwindcss/colors");

const PRIMARY_COLOR = colors.cyan;
const SECONDARY_COLOR = colors.indigo;
const TERTIARY_COLOR = colors.fuchsia;
const ERROR_COLOR = colors.red;
const NEUTRAL_COLOR = colors.gray;
const NEUTRAL_VARIANTS_COLOR = colors.warmGray;
const WHITE_COLORS = colors.white;
const BLACK_COLORS = colors.black;

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
        "my-color-primary": PRIMARY_COLOR[500],
        "my-color-on-primary": WHITE_COLORS,
        "my-color-primary-container": PRIMARY_COLOR[100],
        "my-color-on-primary-container": PRIMARY_COLOR[900],
        "my-color-dark-primary": PRIMARY_COLOR[200],
        "my-color-dark-on-primary": PRIMARY_COLOR[800],
        "my-color-dark-primary-container": PRIMARY_COLOR[700],
        "my-color-dark-on-primary-container": PRIMARY_COLOR[100],
        "my-color-inverse-primary": PRIMARY_COLOR[500],

        "my-color-secondary": SECONDARY_COLOR[500],
        "my-color-on-secondary": WHITE_COLORS,
        "my-color-secondary-container": SECONDARY_COLOR[100],
        "my-color-on-secondary-container": SECONDARY_COLOR[900],
        "my-color-dark-secondary": SECONDARY_COLOR[200],
        "my-color-dark-on-secondary": SECONDARY_COLOR[800],
        "my-color-dark-secondary-container": SECONDARY_COLOR[700],
        "my-color-dark-on-secondary-container": SECONDARY_COLOR[100],
        "my-color-inverse-secondary": SECONDARY_COLOR[500],

        "my-color-tertiary": TERTIARY_COLOR[500],
        "my-color-on-tertiary": WHITE_COLORS,
        "my-color-tertiary-container": TERTIARY_COLOR[100],
        "my-color-on-tertiary-container": TERTIARY_COLOR[900],
        "my-color-dark-tertiary": TERTIARY_COLOR[200],
        "my-color-dark-on-tertiary": TERTIARY_COLOR[800],
        "my-color-dark-tertiary-container": TERTIARY_COLOR[700],
        "my-color-dark-on-tertiary-container": TERTIARY_COLOR[100],
        "my-color-inverse-tertiary": TERTIARY_COLOR[500],

        "my-color-error": ERROR_COLOR[500],
        "my-color-on-error": WHITE_COLORS,
        "my-color-error-container": ERROR_COLOR[100],
        "my-color-on-error-container": ERROR_COLOR[900],
        "my-color-dark-error": ERROR_COLOR[200],
        "my-color-dark-on-error": ERROR_COLOR[800],
        "my-color-dark-error-container": ERROR_COLOR[700],
        "my-color-dark-on-error-container": ERROR_COLOR[100],
        "my-color-inverse-error": ERROR_COLOR[500],

        "my-color-background": NEUTRAL_COLOR[50],
        "my-color-on-background": NEUTRAL_COLOR[900],
        "my-color-dark-background": NEUTRAL_COLOR[900],
        "my-color-dark-on-background": NEUTRAL_COLOR[100],

        "my-color-surface": NEUTRAL_COLOR[50],
        "my-color-on-surface": NEUTRAL_COLOR[900],
        "my-color-dark-surface": NEUTRAL_COLOR[900],
        "my-color-dark-on-surface": NEUTRAL_COLOR[100],

        "my-color-inverse-surface": NEUTRAL_COLOR[800],
        "my-color-on-inverse-surface": NEUTRAL_COLOR[50],
        "my-color-dark-inverse-surface": NEUTRAL_COLOR[100],
        "my-color-dark-on-inverse-surface": NEUTRAL_COLOR[800],

        "my-color-surface-variant": NEUTRAL_VARIANTS_COLOR[100],
        "my-color-on-surface-variant": NEUTRAL_VARIANTS_COLOR[700],
        "my-color-dark-surface-variant": NEUTRAL_VARIANTS_COLOR[700],
        "my-color-dark-on-surface-variant": NEUTRAL_VARIANTS_COLOR[200],

        "my-color-outline": NEUTRAL_VARIANTS_COLOR[400],
        "my-color-dark-outline": NEUTRAL_VARIANTS_COLOR[300],

        "my-color-shadow": BLACK_COLORS,
        "my-color-dark-shadow": BLACK_COLORS,
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
