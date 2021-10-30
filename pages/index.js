import Button from "../components/Button";
import Typography from "../components/Typography";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-8 space-y-2 bg-gray-200 text-my-font-size-body-large font-roboto">
      {/* Light Mode */}
      <Button />
      <Typography />
      <div className="flex flex-col space-y-2 items-center justify-center bg-gray-100 p-8">
        <h1 className="text-my-font-size-display-large text-my-color-on-primary-container">
          LIGHT
        </h1>
        <div className="flex items-center justify-center w-full space-x-2">
          <div className="p-4 bg-my-color-primary text-my-color-on-primary">
            primary
          </div>
          <div className="p-4 bg-my-color-on-primary text-my-color-primary">
            on primary
          </div>
          <div className="p-4 bg-my-color-primary-container text-my-color-on-primary-container">
            primary container
          </div>
          <div className="p-4 bg-my-color-on-primary-container text-my-color-primary-container">
            on primary container
          </div>
        </div>

        <div className="flex items-center justify-center w-full space-x-2">
          <div className="p-4 bg-my-color-secondary text-my-color-on-secondary">
            secondary
          </div>
          <div className="p-4 bg-my-color-on-secondary text-my-color-secondary">
            on secondary
          </div>
          <div className="p-4 bg-my-color-secondary-container text-my-color-on-secondary-container">
            secondary container
          </div>
          <div className="p-4 bg-my-color-on-secondary-container text-my-color-secondary-container">
            on secondary container
          </div>
        </div>

        <div className="flex items-center justify-center w-full space-x-2">
          <div className="p-4 bg-my-color-tertiary text-my-color-on-tertiary">
            tertiary
          </div>
          <div className="p-4 bg-my-color-on-tertiary text-my-color-tertiary">
            on tertiary
          </div>
          <div className="p-4 bg-my-color-tertiary-container text-my-color-on-tertiary-container">
            tertiary container
          </div>
          <div className="p-4 bg-my-color-on-tertiary-container text-my-color-tertiary-container">
            on tertiary container
          </div>
        </div>

        <div className="flex items-center justify-center w-full space-x-2">
          <div className="p-4 bg-my-color-error text-my-color-on-error">
            error
          </div>
          <div className="p-4 bg-my-color-on-error text-my-color-error">
            on error
          </div>
          <div className="p-4 bg-my-color-error-container text-my-color-on-error-container">
            error container
          </div>
          <div className="p-4 bg-my-color-on-error-container text-my-color-error-container">
            on error container
          </div>
        </div>

        <div className="flex items-center justify-center w-full space-x-2">
          <div className="p-4 bg-my-color-background text-my-color-on-background">
            background
          </div>
          <div className="p-4 bg-my-color-on-background text-my-color-background">
            on background
          </div>
          <div className="p-4 bg-my-color-surface text-my-color-on-surfabg-surface">
            surface
          </div>
          <div className="p-4 bg-my-color-on-surface text-my-color-surface">
            on surface
          </div>
        </div>

        <div className="flex items-center justify-center w-full space-x-2">
          <div className="p-4 bg-my-color-surface-variant text-my-color-on-surface-variant">
            surface variant
          </div>
          <div className="p-4 bg-my-color-on-surface-variant text-my-color-surface-variant">
            on surface variant
          </div>
          <div className="p-4 bg-my-color-outline text-my-color-on-surface-outline">
            outline
          </div>
        </div>
      </div>

      {/* Dark Mode */}
      <div className="flex flex-col space-y-2 items-center justify-center bg-black p-8 text-my-font-size-body-small">
        <h1 className="text-my-font-size-headline-large text-my-color-dark-on-primary-container">
          Dark
        </h1>
        <div className="flex items-center justify-center w-full space-x-2">
          <div className="p-4 bg-my-color-dark-primary text-my-color-dark-on-primary">
            primary
          </div>
          <div className="p-4 bg-my-color-dark-on-primary text-my-color-dark-primary">
            on primary
          </div>
          <div className="p-4 bg-my-color-dark-primary-container text-my-color-dark-on-primary-container">
            primary container
          </div>
          <div className="p-4 bg-my-color-dark-on-primary-container text-my-color-dark-primary-container">
            on primary container
          </div>
        </div>

        <div className="flex items-center justify-center w-full space-x-2">
          <div className="p-4 bg-my-color-dark-secondary text-my-color-dark-on-secondary">
            secondary
          </div>
          <div className="p-4 bg-my-color-dark-on-secondary text-my-color-dark-secondary">
            on secondary
          </div>
          <div className="p-4 bg-my-color-dark-secondary-container text-my-color-dark-on-secondary-container">
            secondary container
          </div>
          <div className="p-4 bg-my-color-dark-on-secondary-container text-my-color-dark-secondary-container">
            on secondary container
          </div>
        </div>

        <div className="flex items-center justify-center w-full space-x-2">
          <div className="p-4 bg-my-color-dark-tertiary text-my-color-dark-on-tertiary">
            tertiary
          </div>
          <div className="p-4 bg-my-color-dark-on-tertiary text-my-color-dark-tertiary">
            on tertiary
          </div>
          <div className="p-4 bg-my-color-dark-tertiary-container text-my-color-dark-on-tertiary-container">
            tertiary container
          </div>
          <div className="p-4 bg-my-color-dark-on-tertiary-container text-my-color-dark-tertiary-container">
            on tertiary container
          </div>
        </div>

        <div className="flex items-center justify-center w-full space-x-2">
          <div className="p-4 bg-my-color-dark-error text-my-color-dark-on-error">
            error
          </div>
          <div className="p-4 bg-my-color-dark-on-error text-my-color-dark-error">
            on error
          </div>
          <div className="p-4 bg-my-color-dark-error-container text-my-color-dark-on-error-container">
            error container
          </div>
          <div className="p-4 bg-my-color-dark-on-error-container text-my-color-dark-error-container">
            on error container
          </div>
        </div>

        <div className="flex items-center justify-center w-full space-x-2">
          <div className="p-4 bg-my-color-dark-background text-my-color-dark-on-background">
            background
          </div>
          <div className="p-4 bg-my-color-dark-on-background text-my-color-dark-background">
            on background
          </div>
          <div className="p-4 bg-my-color-dark-surface text-my-color-dark-on-surface">
            surface
          </div>
          <div className="p-4 bg-my-color-dark-on-surface text-my-color-dark-surface">
            on surface
          </div>
        </div>

        <div className="flex items-center justify-center w-full space-x-2">
          <div className="p-4 bg-my-color-dark-surface-variant text-my-color-dark-on-surface-variant">
            surface variant
          </div>
          <div className="p-4 bg-my-color-dark-on-surface-variant text-my-color-dark-surface-variant">
            on surface variant
          </div>
          <div className="p-4 bg-my-color-dark-outline text-my-color-dark-on-surface-outline">
            outline
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-my-font-size-body-large text-my-color-on-background container p-4 text-center space-y-4">
        <h2 className="text-my-font-size-title-large font-semibold">
          This is a title for the article
        </h2>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes fromsections 1.10.32 and 1.10.33
          ofde Finibus Bonorum et (The Extremes of Good and Evil) by Cicero,
          written in 45 BC. This book is a treatise on the theory of ethics,
          very popular during the Renaissance. The first line of Lorem
          Ipsum,Lorem ipsum dolor sit amet, comes from a line in section
          1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
          reproduced below for those interested. Sections 1.10.32 and 1.10.33
          fromde Finibus Bonorum et by Cicero are also reproduced in their exact
          original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
      </div>
    </div>
  );
}

export default Home;
