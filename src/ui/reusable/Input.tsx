import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  inp: string;
} & ComponentPropsWithoutRef<"input">;

type StylesProps = {
  nav: string;
  primary: string;
  secondary: string;
  [key: string]: string; // Index signature allowing any string key
};

const styles: StylesProps = {
  nav: "md:w-96 w-48 p-1 placeholder:text-sm md:placeholder:text-md focus:outline-none rounded-md",
  primary: "w-60 p-1 focus:outline-none rounded-md",
  secondary:
    "md:w-80 w-72 p-1 md:pl-10 pl-10 placeholder:text-lg dark:text-secondary dark:bg-tertiary_dark/50 focus:outline-none md:px-3 rounded-md bg-tertiary_light/50 placeholder:text-secondary md:py-2",
};

function Input({ inp, ...otherProps }: InputProps) {
  return <input {...otherProps} className={styles[inp]} />;
}

export default Input;
