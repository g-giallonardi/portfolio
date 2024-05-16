import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Guillaume GIALLONARDI · Software Engineer",
  description: "Fullstack developer on Django, React, TailwindCSS and openAI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body
        className={cn(
            "min-h-screen font-sans antialiased text-foreground text-slate-700 ",
            fontSans.variable
        )}
    >
    {/*<Header/>*/}
    {children}
    </body>
    </html>
  );
}
