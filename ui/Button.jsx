import PropTypes from "prop-types";

const Button = ({ text, variant }) => {
  return (
    <button
      type="button"
      className={`${
        variant === "transparent"
          ? "bg-transparent text-yellow-600 border border-amber-400"
          : "bg-amber-400"
      } 
      flex
    rounded-full 
    text-slate-900 
    px-4 py-2 
    font-semibold 
    mt-5 
    hover:bg-yellow-600 
    hover:text-slate-900
    transition-all
    duration-300`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default Button;
