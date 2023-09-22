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
      <body className="bg-stone font-inconsolata text-gray-900">
        <div className="flex flex-col mx-auto max-w-5xl px-4 py-4 md:py-6">
          <Header title={metadata.title} navLinks={navLinks} />
          <div className="my-6 mb-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
