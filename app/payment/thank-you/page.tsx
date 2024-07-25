"use client";

import { Hero } from "@/components/hero";

const ThankYouPage = () => {
    return (
        <main className="flex flex-col flex-grow content-start">
            <Hero
                title="Thank you for your payment!"
            />
        </main>
    );
};

export default ThankYouPage;
