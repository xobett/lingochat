import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Lingochat",
  description: "Language exchange app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
