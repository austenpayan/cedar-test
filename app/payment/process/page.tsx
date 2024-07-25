import Button from "@/components/button";
import { FormField } from "@/components/form-field";
import { Input } from "@/components/input";
import styles from "@/styles.module.scss";
import Image from "next/image";

const ProcessPage = () => {
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
                    <FormField label="Card number">
                        <Input />
                    </FormField>
                    <FormField label="Expires (MM/YY)">
                        <Input />
                    </FormField>
                    <FormField label="Security code (CVV)">
                        <Input />
                    </FormField>
                    <FormField label="Name on card">
                        <Input />
                    </FormField>
                    <FormField label="Zip code">
                        <Input />
                    </FormField>
                    <Button>Continue</Button>
                </div>
                <div className={styles.section}>
                    <div className={styles.section__header}>
                        <div className={styles.section__header_count}>2</div>
                        <h2 className={styles.section__header_title}>
                            Review and pay
                        </h2>
                    </div>
                    <p className={styles.section__description}>
                        You’re about to make a payment of{" "}
                        <span className="font-bold">$600.00</span>
                    </p>
                    <p className={styles.field__label}>Payment method</p>
                    <div className="flex mb-11">
                        <Image
                            src="/visa.svg"
                            width={24}
                            height={17}
                            alt="The Visa icon"
                        />
						<span className="ml-3">Card ending in ••••4242</span>
                    </div>
                    <Button>Pay $600</Button>
                </div>
            </div>
        </main>
    );
};

export default ProcessPage;
