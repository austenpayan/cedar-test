import React from "react";
import styles from '../styles.module.scss';
import classNames from 'classnames';

const Button = ({ children, className, type }: { children: React.ReactNode, className?: string; type?: 'button' | 'submit'}) => {
    return <button type={type} className={classNames(styles.button, className)}>{children}</button>;
};

export default Button;
