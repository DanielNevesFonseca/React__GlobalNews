import { forwardRef } from "react";
import style from "./input.module.scss";

export const Input = forwardRef(({ id, error, ...rest }, ref) => {
  return (
    <>
      <input className={`${style.input} text`} {...rest} ref={ref} />
      <span className="text-sm">{error?.message}</span>
    </>
  );
});
