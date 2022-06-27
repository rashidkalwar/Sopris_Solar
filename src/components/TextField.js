const TextField = (props) => {
  const {
    id,
    name,
    type,
    autoComplete,
    value,
    required,
    autoFocus,
    placeholder,
    onChange,
    className,
    maxLength,
    rows,
    pattern,
  } = props;

  return (
    <input
      id={id}
      name={name}
      type={type}
      autoComplete={autoComplete}
      value={value}
      autoFocus={autoFocus}
      required={required}
      className={`${className} appearance-none md:text-md dark:bg-slate-800 dark:border-slate-800 h-14 mt-3 rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 dark:placeholder-slate-400 text-gray-900 dark:text-slate-200 focus:outline-none focus:ring-orange-400 focus:ring-2 text-sm`}
      placeholder={placeholder}
      onChange={onChange}
      maxLength={maxLength}
      rows={rows}
      pattern={pattern}
    />
  );
};

export default TextField;
