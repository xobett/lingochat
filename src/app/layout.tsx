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
      <body className="bg-gray-900 h-svh flex flex-col">
        <Navbar />
        <Providers>
          <main className="h-full text-white p-3 flex-1">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
