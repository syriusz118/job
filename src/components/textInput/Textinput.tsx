import {InputLabel, InputWrapper, TextInput} from "../../App.styles.tsx";
import {FormControl} from "@mui/material";
import React, {ReactElement, SetStateAction, useEffect, useState} from "react";
import z from 'zod';

interface TextInputPropsInterface {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  errorMessage?: string;
  setData: React.Dispatch<SetStateAction<Record<string, string>>>;
  required?: boolean;
}

const getSchemaValidator = (type: string) => {
  switch (type) {
    case 'email':
      return z.coerce.string().email();
    case 'password':
      return z.coerce.string();
    case 'url':
      return z.coerce.string().url();
    case 'text':
      return z.coerce.string().refine((value) => /\//.test(value));
    default:
      return z.coerce.string();
  }
}

export const TextInputComponent = ({ required, label, name, type, placeholder, setData }: TextInputPropsInterface): ReactElement => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!value) {
      return;
    }

    const schema = getSchemaValidator(type);

    try {
      schema.parse(value);
      setError(false);
      setData?.(prevVal => ({...prevVal, [name]: value}))
    } catch (e) {
      setData?.(prevVal => ({...prevVal, [name]: ''}))
      setError(true);
    }
  }, [value]);

  return <InputWrapper>
    <InputLabel>{label}</InputLabel>
    <FormControl>
      <TextInput
        required={required}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={({ target: {value} }) => setValue(value)}
        error={error}
      />
    </FormControl>
  </InputWrapper>
}
