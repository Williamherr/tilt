import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";

export const metadata = {
  title: "Tilt",
  description:
    "Tilt is a social app that lets you join and create communities based on your interests and passions. Share your thoughts and opinions, participate in fun and engaging polls and quizzes, and discover new perspectives and insights. Tilt your world with Tilt!",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
