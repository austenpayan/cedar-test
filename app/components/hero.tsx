import styles from "../styles.module.scss";
import classNames from "classnames";

export const Hero = ({
    title,
    description,
    className,
}: {
    title: string;
    description?: string;
    className?: string;
}) => {
    return (
        <div className={classNames(styles.hero, className)}>
            <h2 className={styles.hero__title}>{title}</h2>
            <p className={styles.hero__description}>{description}</p>
        </div>
    );
};
