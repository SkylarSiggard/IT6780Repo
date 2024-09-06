import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/app/components/Nav";

export const metadata: Metadata = {
  title: "The Recipe Hub",
  description: "Share Recipes!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
      <Nav/>
      <div className="flex justify-center items-center p-24">
        {children}
      </div>
      </body>
    </html>
  );
}
