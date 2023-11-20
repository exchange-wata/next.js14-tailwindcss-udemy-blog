// ファイル全体に共通するレイアウト
import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";

export const metadata: Metadata = {
  title: "Next.js14 Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="container mx-auto bg-slate-700 text-slate-50">
        <Header></Header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
