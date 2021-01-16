import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  placeholder: string;
  name: string;
  type?: string;
};

const InputField: React.FC<InputFieldProps> = (props) => {
  const { label, placeholder, type } = props;
  const [field, { error }] = useField(props);
  return (
    <div>
      <label htmlFor={field.name}>
        {label}
        <input {...field} id={field.name} placeholder={placeholder} type={type || 'text'} />
      </label>
      {error && <span>{error}</span>}
    </div>
  );
};

export default InputField;
