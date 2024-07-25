import React, { useState } from "react";
import styles from "../styles.module.scss";
import classNames from "classnames";
import Image from "next/image";

export const Input = ({
	onChange,
	name,
	onBlur,
	value,
    didError = false,
	isRequired = false,
}: {
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    didError?: boolean;
	isRequired?: boolean;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}) => {
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => {
		setIsFocused(true);
	}

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		setIsFocused(false);
		onBlur?.(e);
	}

    return (
        <div className={styles.input__container}>
            <input
                className={classNames(styles.input, {
                    [styles.input__error]: didError,
                })}
				value={value}
				name={name}
                type="text"
				onChange={onChange}
				required={isRequired}
				onFocus={handleFocus}
				onBlur={handleBlur}
				aria-required={isRequired}
				aria-invalid={didError}
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
            {!isFocused && !didError && value.length ? (
                <Image
                    className={styles.input__icon}
                    src="/check.svg"
                    width={25}
                    height={25}
                    alt="An error icon"
                />
            ) : null}
        </div>
    );
};
