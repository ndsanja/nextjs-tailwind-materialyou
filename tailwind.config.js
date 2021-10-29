module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        //LIGHT COLOURS
        md: {
          primary: {
            _: "var(--primary)",
            container: "var(--primary-container)",
          },
          secondary: {
            _: "var(--secondary)",
            container: "var(--secondary-container)",
          },
          tertiary: {
            _: "var(--tertiary)",
            container: "var(--tertiary-container)",
          },
          error: {
            _: "var(--error)",
            container: "var(--error-container)",
          },
          background: "var(--background)",

          surface: {
            _: "var(--surface)",
            variant: "var(--surface-variant)",
          },
          outline: "var(--outline)",

          on: {
            primary: {
              _: "var(--on-primary)",
              container: "var(--on-primary-container)",
            },
            secondary: {
              _: "var(--on-secondary)",
              container: "var(--on-secondary-container)",
            },
            tertiary: {
              _: "var(--on-tertiary)",
              container: "var(--on-tertiary-container)",
            },
            error: {
              _: "var(--on-error)",
              container: "var(--on-error-container)",
            },
            background: "var(--on-background)",
            surface: {
              _: "var(--on-surface)",
              variant: "var(--on-surface-variant)",
            },
          },
          //DARK COLOURS

          dark: {
            primary: {
              _: "var(--primary-dark)",
              container: "var(--primary-container-dark)",
            },
            secondary: {
              _: "var(--secondary-dark)",
              container: "var(--secondary-container-dark)",
            },
            tertiary: {
              _: "var(--tertiary-dark)",
              container: "var(--tertiary-container-dark)",
            },
            error: {
              _: "var(--error-dark)",
              container: "var(--error-container-dark)",
            },
            background: "var(--background-dark)",

            surface: {
              _: "var(--surface-dark)",
              variant: "var(--surface-variant-dark)",
            },
            outline: "var(--outline-dark)",

            on: {
              primary: {
                _: "var(--on-primary-dark)",
                container: "var(--on-primary-container-dark)",
              },
              secondary: {
                _: "var(--on-secondary-dark)",
                container: "var(--on-secondary-container-dark)",
              },
              tertiary: {
                _: "var(--on-tertiary-dark)",
                container: "var(--on-tertiary-container-dark)",
              },
              error: {
                _: "var(--on-error-dark)",
                container: "var(--on-error-container-dark)",
              },
              background: "var(--on-background-dark)",

              surface: {
                _: "var(--on-surface-dark)",
                variant: "var(--on-surface-variant-dark)",
              },
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
