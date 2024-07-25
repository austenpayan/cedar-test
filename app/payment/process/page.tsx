"use client";

import Button from "@/components/button";

import { formatCurrency } from "@/helpers";
import styles from "@/styles.module.scss";
import Image from "next/image";
import data from "@/data.json";
import { useState } from "react";
import { PaymentForm } from "./payment-form";

enum Step {
    Info = "info",
    Review = "review",
}

const ProcessPage = () => {
    const [step, setStep] = useState<Step>(Step.Info);

	const handleSubmit = () => {
		setStep(Step.Review);
	}

    return (
        <main className="flex flex-col flex-grow items-center justify-center">
            <div className={styles.card}>
                <div className={styles.section}>
                    <div className={styles.section__header}>
                        <div className={styles.section__header_count}>1</div>
                        <h2 className={styles.section__header_title}>
                            Payment Information
                        </h2>
                    </div>
                    {step === Step.Info && (
                        <PaymentForm onSubmit={handleSubmit} />
                    )}
                </div>
                <div className={styles.section}>
                    <div className={styles.section__header}>
                        <div className={styles.section__header_count}>2</div>
                        <h2 className={styles.section__header_title}>
                            Review and pay
                        </h2>
                    </div>
                    {step === Step.Review && (
                        <>
                            <p className={styles.section__description}>
                                You’re about to make a payment of{" "}
                                <span className="font-bold">{`${formatCurrency(
                                    data.bills.reduce(
                                        (acc, bill) => acc + bill.amount,
                                        0
                                    )
                                )}`}</span>
                            </p>
                            <p className={styles.field__label}>
                                Payment method
                            </p>
                            <div className="flex mb-11">
                                <Image
                                    src="/visa.svg"
                                    width={24}
                                    height={17}
                                    alt="The Visa icon"
                                />
                                <span className="ml-3">
                                    Card ending in ••••4242
                                </span>
                            </div>
                            <Button>Pay $600</Button>
                        </>
                    )}
                </div>
            </div>
        </main>
    );
};

export default ProcessPage;
