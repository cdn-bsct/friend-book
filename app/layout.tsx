import type { Metadata } from "next";
import "@/styles/globals.scss";
import Header from "@/components/header/header";
import PageLayout from "@/layouts/page-layout";

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
        <PageLayout>
          <Header />
            {children}
        </PageLayout>
      </body>
    </html>
  );
}
