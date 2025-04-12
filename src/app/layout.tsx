import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "dedik1101 | Personal Site",
    description: "Сайт-визитка с DVD логотипами и контактами"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
