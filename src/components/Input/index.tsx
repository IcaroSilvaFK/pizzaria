import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

import { CardError } from "../CardError";

interface IInputProps {
  name: string;
  placeholder: string;
  type: string;
  label: string;
}

import styles from "./styles.module.scss";

export const Input: FC<IInputProps> = ({ name, placeholder, type, label }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className={styles.container}>
          <label htmlFor={name}>{label}</label>
          <input {...field} type={type} placeholder={placeholder} />
          <CardError error={errors[name]?.message} />
        </div>
      )}
    />
  );
};
