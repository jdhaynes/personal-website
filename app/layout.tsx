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
      <body className="bg-stone font-inconsolata">
        <div className="flex flex-col mx-auto max-w-5xl">
          <Header title={metadata.title} navLinks={navLinks} />
          <div className="my-6 mb-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
