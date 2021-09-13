import React from 'react';

const InputCustom = (props: any) => {
  const {
    errors,
    registerField,
    placeholder,
    type,
    classAppend,
    title,
  } = props;
  return (
    <>
      <label className="block text-xs font-semibold text-gray-600 uppercase">
        {title}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`${classAppend} block w-full py-3 px-1 mt-2 
        text-gray-800 appearance-none 
        border-b-2 border-gray-100
        focus:text-gray-500 focus:outline-none focus:border-gray-200`}
        {...registerField}
      />
      {errors && (
        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {errors.message || 'Invalid !'}
        </span>
      )}
    </>
  );
};

export default InputCustom;
