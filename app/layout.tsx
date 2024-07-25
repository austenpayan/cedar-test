import type { Metadata } from "next";
import { Inter } from "next/font/google";
import classNames from "classnames";
import Image from "next/image";

import "./globals.css";
import styles from "./styles.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Cedar",
    description:
        "Cedar’s enterprise healthcare fintech platform reduces administrative friction, yielding better outcomes for providers, payers & patients.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={classNames(
                    inter.className,
                    "flex flex-col min-h-screen"
                )}
            >
                <nav className={classNames(styles.navigation, "flex-none")}>
                    <Image
                        src="/abc-logo.svg"
                        width={153}
                        height={40}
                        alt="The Visa icon"
                    />
                </nav>
                {children}
            </body>
        </html>
    );
}
