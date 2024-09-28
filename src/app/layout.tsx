import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trip Beyond",
  description: "Fly in a safe way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
    </html>
  );
}
