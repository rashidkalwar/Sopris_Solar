const DefaultButton = ({ children }, props) => {
  const { onClick, className, type } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      role="button"
      className={`${className} text-md font-semibold leading-none text-white dark:text-black drop-shadow-md shadow-orange-400 bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-400 border-none rounded-md py-4 w-full transition duration-500`}
    >
      {children}
    </button>
  );
};

export default DefaultButton;
