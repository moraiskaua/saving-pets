import { InputHTMLAttributes } from 'react';

interface FormTextBoxProps extends InputHTMLAttributes<HTMLTextAreaElement> {}

const FormTextBox = (props: FormTextBoxProps) => {
  return (
    <textarea className="bg-gray-200 pr-2 pl-2 pt-2 pb-2 rounded-md shadow-md
    hover:placeholder:text-black placeholder:text-gray-400 focus:outline-none" {...props} />
  );
};

export default FormTextBox;
