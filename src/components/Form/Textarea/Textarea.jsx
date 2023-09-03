import { forwardRef } from "react";
import styles from "./styles.module.scss";

export const Textarea = forwardRef(({ id, error, ...rest }, ref) => {
  return (
    <>
      <textarea
        className={`text ${styles.textarea}`}
        {...rest}
        ref={ref}
      ></textarea>
    </>
  );
});
