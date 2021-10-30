import { MdOutlineArrowCircleDown } from "react-icons/md";

function Button() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 max-w-screen-2xl">
      <div className="flex items-center justify-center space-x-4">
        <button className="my-button my-button-filled my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Filled Button</p>
        </button>
        <button className="my-button my-button-filled-primary my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Filled Primary</p>
        </button>
        <button className="my-button my-button-filled-secondary my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Filled Secondary</p>
        </button>
        <button className="my-button my-button-filled-tertiary my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Filled Tertiary</p>
        </button>
        <button className="my-button my-button-filled-error my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Filled Error</p>
        </button>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <button className="my-button my-button-elevated my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Elevated Button</p>
        </button>
        <button className="my-button my-button-elevated-primary my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Elevated Primary</p>
        </button>
        <button className="my-button my-button-elevated-secondary my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Elevated Secondary</p>
        </button>
        <button className="my-button my-button-elevated-tertiary my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Elevated Tertiary</p>
        </button>
        <button className="my-button my-button-elevated-error my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Elevated Error</p>
        </button>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <button className="my-button my-button-outlined my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Outlined Button</p>
        </button>
        <button className="my-button my-button-outlined-primary my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Outlined Primary</p>
        </button>
        <button className="my-button my-button-outlined-secondary my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Outlined Secondary</p>
        </button>
        <button className="my-button my-button-outlined-tertiary my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Outlined Tertiary</p>
        </button>
        <button className="my-button my-button-outlined-error my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Outlined Error</p>
        </button>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <button className="my-button my-button-text my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Text Button</p>
        </button>
        <button className="my-button my-button-text-primary my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Text Primary</p>
        </button>
        <button className="my-button my-button-text-secondary my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Text Secondary</p>
        </button>
        <button className="my-button my-button-text-tertiary my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Text Tertiary</p>
        </button>
        <button className="my-button my-button-text-error my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Text Error</p>
        </button>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <button className="my-button my-button-filled-tonal my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Tonal Button</p>
        </button>
        <button className="my-button my-button-filled-tonal-primary my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Tonal Primary</p>
        </button>
        <button className="my-button my-button-filled-tonal-secondary my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Tonal Secondary</p>
        </button>
        <button className="my-button my-button-filled-tonal-tertiary my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Tonal Tertiary</p>
        </button>
        <button className="my-button my-button-filled-tonal-error my-button-icon-left">
          <MdOutlineArrowCircleDown />
          <p>Tonal Error</p>
        </button>
      </div>
    </div>
  );
}

export default Button;
