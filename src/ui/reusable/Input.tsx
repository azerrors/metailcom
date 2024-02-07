import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  inp: string;
} & ComponentPropsWithoutRef<"input">;

type StylesProps = {
  nav: string;
  primary: string;
  [key: string]: string; // Index signature allowing any string key
};

const styles: StylesProps = {
  nav: "md:w-96 w-56 p-1 focus:outline-none rounded-md",
  primary: "w-60 p-1 focus:outline-none rounded-md",
};

function Input({ inp, ...otherProps }: InputProps) {
  return <input {...otherProps} className={styles[inp]} />;
}

export default Input;
