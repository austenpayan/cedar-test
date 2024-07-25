import React from "react";
import styles from "../styles.module.scss";

export const FormField = ({
    label,
    children,
    errorMessage,
}: {
    label: string;
    children: React.ReactNode;
    errorMessage?: string;
}) => {
    return (
        <label className={styles.field}>
            <span className={styles.field__label}>{label}</span>
            {children}
            {errorMessage && <span className={styles.field__error}>{errorMessage}</span>}
        </label>
    );
};
