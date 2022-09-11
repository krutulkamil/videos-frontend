import { FunctionComponent, PropsWithChildren } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";
import { IButton } from "./button.interface";

const Button: FunctionComponent<PropsWithChildren<IButton>> = ({ children, className, ...rest }) => {
    return (
        <button className={cn(styles.button, className)} {...rest} >
            {children}
        </button>
    );
};

export default Button;