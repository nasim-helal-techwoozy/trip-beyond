import ProvideStore from "@/redux/ProvideStore";
import { ThemeProvider } from "@/themes/theme-provider";
import { ToastWrapper } from "keep-react";
import type { Metadata } from "next";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";
import Header from "@/components/root/Header/Header";
import Footer from "@/components/root/footer/Footer";

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
      <body className="!border-metal-400 text-metal-900 dark:bg-metal-700 dark:text-metal-100 text-base">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ProvideStore>
            <main>
              <Header />
              {children}
              <Footer />
            </main>
          </ProvideStore>
          <ToastWrapper
            toastOptions={{
              classNames: {
                toast:
                  "dark:bg-metal-900 border dark:border-metal-800 border-white bg-white",
                title: "text-metal-900 dark:text-white",
                description: "dark:text-metal-300 text-metal-600",
                actionButton: "dark:bg-metal-800 bg-metal-900 text-white",
                cancelButton: "dark:bg-metal-800 bg-metal-900 text-white",
                closeButton: "dark:bg-metal-800 bg-metal-900 text-white",
                error: "text-error-500",
                success: "text-success-500",
                warning: "text-warning-500",
                info: "text-primary-500",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
