import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

type ButtonTypes = {
  children: ReactNode;
  btn: string;
} & ComponentPropsWithoutRef<"button">;
type ButtonLinkTypes = ButtonTypes & LinkProps & { to?: string };

function isRouterLink(
  props: ButtonLinkTypes | ButtonTypes
): props is ButtonLinkTypes {
  return "to" in props;
}
type StylesType = {
  none: string;
  primary: string;
  secondary: string;
  nav_primary: string;
  nav_secondary: string;
  nav_tertiary: string;
  [key: string]: string; // Index signature allowing any string key
};

const styles: StylesType = {
  none: "",
  primary:
    "font-medium border border-secondary hover:bg-tertiary/90 active:text-secondary hover:text-secondary/40 tracking-wider hover:-translate-y-2 active:translate-y-1 transition-all duration-300 uppercase bg-tertiary text-secondary md:text-xl md:px-5 px-3 py-2 md:py-3 rounded-md",
  secondary: "bg-secondary px-3 py-2 tracking-wider rounded-md uppercase font-medium text-tertiary",

  nav_primary:
    "text-md uppercase  text-secondary font-semibold hover:bg-stone-100/50 p-1   rounded-md transition-all duration-200",
  nav_secondary: "text-sm uppercase text-secondary ",
  nav_tertiary:
    "p-2 text-secondary rounded-lg tracking-wider text-lg border-x-2 border-secondary font-semibold uppercase  ",
};

function Button(props: ButtonTypes | ButtonLinkTypes) {
  if (isRouterLink(props)) {
    const { to, children, btn } = props;
    return (
      <Link to={to} className={styles[btn]}>
        {children}
      </Link>
    );
  }
  const { children, btn, ...otherProps } = props;
  return (
    <button {...otherProps} className={styles[btn]}>
      {children}
    </button>
  );
}

export default Button;
