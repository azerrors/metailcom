import { ReactNode } from "react";

type ModalProps = { children: ReactNode; classing: string };

function Modal({ children, classing }: ModalProps) {
  return <div className={classing}>{children}</div>;
}

export default Modal;
