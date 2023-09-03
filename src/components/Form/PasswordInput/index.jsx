import { forwardRef, useState } from "react";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import style from "./passwordInput.module.scss";

export const InputPassword = forwardRef(({ id, error, ...rest }, ref) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div>
      <div className={style.grid}>
        <input
          className={`${style.password} text`}
          ref={ref}
          {...rest}
          type={isHidden ? "password" : "text"}
        />
        <button type="button" onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
        </button>
      </div>
      <span className="text-sm">{error?.message}</span>
    </div>
  );
});
