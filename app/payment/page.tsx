"use client";

import Button from "@/components/button";
import { Hero } from "@/components/hero";
import styles from "@/styles.module.scss";
import classNames from "classnames";
import data from "@/data.json";
import { formatCurrency } from "@/helpers";
import { useRouter } from "next/navigation";

const PaymentPage = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/payment/process");
    };

    return (
        <main className="flex flex-col flex-grow">
            <Hero
                title={`Hi ${data.patient.firstName}`}
                description={`You have ${data.bills.length} medical bills ready from ABC Health System. You can
                pay your bills here or verify your identity to view full bill
                details.`}
                className="flex-none"
            />
            <div className={classNames("flex-grow", styles.subsection)}>
                <div className="flex m-auto items-center justify-between text-center max-w-sm">
                    <div>Total due:</div>
                    <div className={styles.hero__title}>{`${formatCurrency(
                        data.bills.reduce((acc, bill) => acc + bill.amount, 0)
                    )}`}</div>
                </div>
                <div className="max-w-sm m-auto mt-5">
                    <Button onClick={handleClick}>Pay total</Button>
                </div>
            </div>
        </main>
    );
};

export default PaymentPage;
