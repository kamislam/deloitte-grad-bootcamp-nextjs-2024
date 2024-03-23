import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// mantine styles
import "@mantine/core/styles.css";

// mantine
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

// ds
import { Header } from "@/ds";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deloitte - FED Bootcamp 2024",
  description: "Example Next JS project for Deloitte FED Bootcamp 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <Header />
          <div className="body-content">{children}</div>
        </MantineProvider>
      </body>
    </html>
  );
}
