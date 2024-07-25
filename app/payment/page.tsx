import Button from "../components/button";
import { FormField } from "../components/form-field";
import { Hero } from "../components/hero";
import { Input } from "../components/input";
import styles from "../styles.module.scss";
import classNames from "classnames";

const PaymentPage = () => {
    return (
        <main className="flex flex-col flex-grow">
            <Hero
                title="Hi Taylor"
                description="You have 6 medical bills ready from ABC Health System. You can
                pay your bills here or verify your identity to view full bill
                details."
                className="flex-none"
            />
            <div className={classNames("flex-grow", styles.subsection)}>
                <div className="flex m-auto items-center justify-between text-center max-w-sm">
                    <div>Total due:</div>
                    <div className={styles.hero__title}>$600</div>
                </div>
				<div className="max-w-sm m-auto mt-5"><Button>Pay total</Button></div>
            </div>
        </main>
    );
};

export default PaymentPage;
