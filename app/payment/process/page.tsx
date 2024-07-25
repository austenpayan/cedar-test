"use client";

import Button from "@/components/button";

import { FieldNames, formatCurrency } from "@/helpers";
import styles from "@/styles.module.scss";
import Image from "next/image";
import data from "@/data.json";
import { useState } from "react";
import { PaymentForm } from "./payment-form";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import { SectionHeader } from "@/components/section-header";

enum Step {
    Info = "info",
    Review = "review",
}

const ProcessPage = () => {
    const [step, setStep] = useState<Step>(Step.Info);

    const [fields, setFields] = useState<Record<FieldNames, string>>({
        [FieldNames.CardNumber]: "",
        [FieldNames.Expiration]: "",
        [FieldNames.SecurityCode]: "",
        [FieldNames.Name]: "",
        [FieldNames.Zip]: "",
    });

    const router = useRouter();

    const handlePaymentFormSubmit = () => {
        setStep(Step.Review);
    };

    const handleConfirmation = () => {
        // This is where we might hit an API with the form values. For the purposes
        // of this exercise, I'll just navigate to the "thank you" page as if the request was successful
        router.push("/payment/thank-you");
    };

    const handleEditClick = () => {
        setStep(Step.Info);
    };

    return (
        <main className="flex flex-col flex-grow items-center justify-center">
            <div className={styles.card}>
                <div className={styles.section}>
                    <SectionHeader
                        order={1}
                        title="Payment information"
                        onEdit={
                            step !== Step.Info ? handleEditClick : undefined
                        }
                        isActive={step === Step.Info}
                    />
                    {step === Step.Info && (
                        <PaymentForm
                            fields={fields}
                            setFields={setFields}
                            onSubmit={handlePaymentFormSubmit}
                        />
                    )}
                </div>
                <div className={styles.section}>
                    <SectionHeader
                        order={2}
                        title="Review and pay"
                        isDisabled={step !== Step.Review}
                        isActive={step === Step.Review}
                    />
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
                            <Button onClick={handleConfirmation}>
                                Pay $600
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </main>
    );
};

export default ProcessPage;
