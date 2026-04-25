import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "T-Goda",
  description: "Escape to Your Perfect Paradise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
            {children}
      </body>
    </html>
  );
}
