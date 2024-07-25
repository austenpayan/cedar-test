import React from "react";
import styles from "../styles.module.scss";

export const FormField = ({
    label,
    children,
}: {
    label: string;
    children: React.ReactNode;
}) => {
    return (
        <label className={styles.field}>
            <span className={styles.field__label}>{label}</span>
            {children}
        </label>
    );
};
