

import { ThemeProvider } from '@/components/theme-provider';


import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "./globals.css";

const serif = Roboto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],

})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={serif.className}>

        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
          </body>
    </html>
  );
}
