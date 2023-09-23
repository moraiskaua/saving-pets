import { InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const FormInput = (props: FormInputProps) => {
  return (
    <input
      className="bg-gray-200 p-3 rounded-md shadow-md
    hover:placeholder:text-black placeholder:text-gray-400 focus:outline-none"
      {...props}
    />
  );
};

export default FormInput;
