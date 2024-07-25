import { FormField } from "@/components/form-field";
import { Input } from "@/components/input";
import Button from "@/components/button";
import { useState } from "react";
import {
    validateCreditCardNumber,
    validateExpiryDate,
    validateSecurityCode,
} from "@/helpers";
import { Lemon } from "next/font/google";

enum FieldNames {
    CardNumber = "number",
    Expiration = "exp",
    SecurityCode = "cvv",
    Name = "name",
    Zip = "zip",
}

export const PaymentForm = ({ onSubmit }: { onSubmit: () => void }) => {
    const [fields, setFields] = useState<Record<FieldNames, string>>({
        [FieldNames.CardNumber]: "",
        [FieldNames.Expiration]: "",
        [FieldNames.SecurityCode]: "",
        [FieldNames.Name]: "",
        [FieldNames.Zip]: "",
    });
    const [errors, setErrors] = useState<
        Record<FieldNames, { description: string; didError: boolean }>
    >({
        [FieldNames.CardNumber]: { description: "", didError: false },
        [FieldNames.Expiration]: { description: "", didError: false },
        [FieldNames.SecurityCode]: { description: "", didError: false },
        [FieldNames.Name]: { description: "", didError: false },
        [FieldNames.Zip]: { description: "", didError: false },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        // Reset the error
        setErrors((prev) => ({
            ...prev,
            [e.target.name]: { description: "", didError: false },
        }));
    };

    const processFieldValidity = (formElement: HTMLInputElement) => {
        console.debug("formElement", formElement);
        let isValid = true;
        if (formElement.tagName === "INPUT") {
            // Check the built-in validity mechanism, usually signifying a required field is empty
            // Then, check specific fields for invalid values or formats
            if (!formElement.checkValidity()) {
                setErrors((prev) => ({
                    ...prev,
                    [formElement.name]: {
                        description: "This field is required",
                        didError: true,
                    },
                }));
                isValid = false;
            } else if (
                formElement.name === FieldNames.CardNumber &&
                !validateCreditCardNumber(formElement.value)
            ) {
                setErrors((prev) => ({
                    ...prev,
                    [formElement.name]: {
                        description: "Please enter a valid credit card number",
                        didError: true,
                    },
                }));
                isValid = false;
            } else if (
                formElement.name === FieldNames.Expiration &&
                !validateExpiryDate(formElement.value)
            ) {
                setErrors((prev) => ({
                    ...prev,
                    [formElement.name]: {
                        description: "Please enter a valid expiration date",
                        didError: true,
                    },
                }));
                isValid = false;
            } else if (
                formElement.name === FieldNames.SecurityCode &&
                !validateSecurityCode(formElement.value)
            ) {
                setErrors((prev) => ({
                    ...prev,
                    [formElement.name]: {
                        description: "Please enter a valid security code",
                        didError: true,
                    },
                }));
                isValid = false;
            }
        }

        // Reset the validity if we haven't detected any errors
        if (isValid) {
            setErrors((prev) => ({
                ...prev,
                [formElement.name]: {
                    description: "",
                    didError: false,
                },
            }));
        }

        return isValid;
    };

    const processFormValidity = (
        formElements: HTMLFormControlsCollection
    ): boolean => {
        let allValid = true;

        for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i] as HTMLInputElement;
            const isElementValid = processFieldValidity(element);

            if (!isElementValid) allValid = false;
        }

        return allValid;
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        processFieldValidity(e.target);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formElement = e.target as HTMLFormElement;

        if (processFormValidity(formElement.elements)) {
            onSubmit();
        }
    };

    return (
        <form onSubmit={handleSubmit} autoComplete="off" noValidate>
            <FormField
                label="Card number"
                errorMessage={errors[FieldNames.CardNumber].description}
            >
                <Input
                    name={FieldNames.CardNumber}
                    onChange={handleChange}
                    value={fields[FieldNames.CardNumber]}
                    didError={errors[FieldNames.CardNumber].didError}
                    onBlur={handleBlur}
                    isRequired
                />
            </FormField>
            <FormField
                label="Expires (MM/YY)"
                errorMessage={errors[FieldNames.Expiration].description}
            >
                <Input
                    name={FieldNames.Expiration}
                    onChange={handleChange}
                    value={fields[FieldNames.Expiration]}
                    didError={errors[FieldNames.Expiration].didError}
                    onBlur={handleBlur}
                    isRequired
                />
            </FormField>
            <FormField
                label="Security code (CVV)"
                errorMessage={errors[FieldNames.SecurityCode].description}
            >
                <Input
                    name={FieldNames.SecurityCode}
                    onChange={handleChange}
                    value={fields[FieldNames.SecurityCode]}
                    didError={errors[FieldNames.SecurityCode].didError}
                    onBlur={handleBlur}
                    isRequired
                />
            </FormField>
            <FormField
                label="Name on card"
                errorMessage={errors[FieldNames.Name].description}
            >
                <Input
                    name={FieldNames.Name}
                    onChange={handleChange}
                    value={fields[FieldNames.Name]}
                    didError={errors[FieldNames.Name].didError}
                    onBlur={handleBlur}
                    isRequired
                />
            </FormField>
            <FormField
                label="Zip code"
                errorMessage={errors[FieldNames.Zip].description}
            >
                <Input
                    name={FieldNames.Zip}
                    onChange={handleChange}
                    value={fields[FieldNames.Zip]}
                    didError={errors[FieldNames.Zip].didError}
                    onBlur={handleBlur}
                    isRequired
                />
            </FormField>
            <Button type="submit">Continue</Button>
        </form>
    );
};
