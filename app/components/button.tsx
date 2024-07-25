import React from "react";
import styles from '../styles.module.scss';
import classNames from 'classnames';

const Button = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return <button type="button" className={classNames(styles.button, className)}>{children}</button>;
};

export default Button;
