import type { Metadata } from "next";
import "@/styles/globals.scss";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "FriendBook",
  description: "Classic Friend Book",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
          {children}
      </body>
    </html>
  );
}
