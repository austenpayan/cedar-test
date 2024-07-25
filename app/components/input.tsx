import React from "react";
import styles from "../styles.module.scss";
import classNames from "classnames";
import Image from "next/image";

export const Input = ({
    didError = false,
    didValidate = false,
}: {
    didError?: boolean;
    didValidate?: boolean;
}) => {
    return (
        <div className={styles.input__container}>
            <input
                className={classNames(styles.input, {
                    [styles.input__error]: didError,
                })}
                type="text"
            />
            {didError && (
                <Image
                    className={styles.input__icon}
                    src="/error.svg"
                    width={20}
                    height={20}
                    alt="An error icon"
                />
            )}
            {didValidate && (
                <Image
                    className={styles.input__icon}
                    src="/check.svg"
                    width={25}
                    height={25}
                    alt="An error icon"
                />
            )}
        </div>
    );
};
