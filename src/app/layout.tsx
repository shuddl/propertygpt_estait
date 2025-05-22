import type { Metadata } from "next";
import { Raleway, Manrope } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-anticipatory",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600"]
});

const manrope = Manrope({
  variable: "--font-conversational",
  subsets: ["latin"],
  weight: ["300", "400", "600"]
});

export const metadata: Metadata = {
  title: "PropertyGPT - Anticipatory Real Estate Intelligence",
  description: "AI-powered real estate platform that predicts your needs and surfaces opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
