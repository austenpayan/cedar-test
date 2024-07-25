export function formatCurrency(num: number, allowFraction = true) {
	const dollarAmount = num / 100;

    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: allowFraction ? 2 : 0,
        maximumFractionDigits: allowFraction ? 2 : 0,
    }).format(dollarAmount);
}
