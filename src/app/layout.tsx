import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "./components/ReduxProvider";

export const metadata: Metadata = {
  title: "App",
  description: "App form my best friend",
};

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
