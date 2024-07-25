import React from "react";
import styles from "../styles.module.scss";
import classNames from "classnames";

const Button = ({
    children,
    onClick,
    className,
    type,
    style,
}: {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit";
    style?: "default" | "text";
}) => {
    return (
        <button
            type={type}
            className={classNames(
                styles.button,
                { [styles.button__text]: style === "text" },
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
