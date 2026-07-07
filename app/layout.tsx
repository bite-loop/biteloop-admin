import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono, Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";

const robotoHeading = Roboto({subsets:['latin'],variable:'--font-heading'});
const montserrat = Montserrat({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "BiteLoop Admin",
  description: "BiteLoop Administrative Dashboard",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html
  lang="en"
  suppressHydrationWarning
 className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", montserrat.variable, robotoHeading.variable)}
>
<body className="min-h-full flex flex-col">
<ThemeProvider
>
  {children}

  <Toaster
    position="top-right"
    richColors
    closeButton
  />
</ThemeProvider>
</body>
    </html>
  );
}