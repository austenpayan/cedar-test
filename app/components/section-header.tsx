import classNames from "classnames";
import styles from "@/styles.module.scss";
import Button from "./button";

export const SectionHeader = ({
    order,
    title,
    isDisabled = false,
    isActive = false,
    onEdit,
}: {
    order: number;
    title: string;
    isDisabled?: boolean;
    isActive?: boolean;
    onEdit?: () => void;
}) => {
    return (
        <div
            className={classNames(styles.section__header, {
                [styles.section__header__disabled]: isDisabled,
            })}
        >
            <div
                className={classNames(styles.section__header_count, {
                    [styles.section__header_count__inactive]: !isActive,
                })}
            >
                {order}
            </div>
            <h2 className={styles.section__header_title}>{title}</h2>
            {onEdit && (
                <Button onClick={onEdit} style="text">
                    Edit
                </Button>
            )}
        </div>
    );
};
