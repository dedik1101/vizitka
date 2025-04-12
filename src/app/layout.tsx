import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "dedik1101",
    description: "bouncing DVD logos"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
