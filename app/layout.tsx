import React from "react";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import navLinks from "@/data/navLinks";

export const metadata = {
  title: "Jack Haynes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-6xl px-4">
          <Header title={metadata.title} navLinks={navLinks} />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
