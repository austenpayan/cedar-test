export function formatCurrency(num: number, allowFraction = true) {
    const dollarAmount = num / 100;

    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: allowFraction ? 2 : 0,
        maximumFractionDigits: allowFraction ? 2 : 0,
    }).format(dollarAmount);
}

export const validateCreditCardNumber = (num: string) => {
    const regex = /^\d{16}$/;
    return regex.test(num);
};

export const validateExpiryDate = (date: string) => {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return regex.test(date);
};

export const validateSecurityCode = (code: string) => {
    const regex = /^\d{3,4}$/;
    return regex.test(code);
};

export enum FieldNames {
    CardNumber = "number",
    Expiration = "exp",
    SecurityCode = "cvv",
    Name = "name",
    Zip = "zip",
}
