import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav/Nav";
import { Content } from "@/components/Content/Content";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IA Test",
  description: "Tools for study any info that you find",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        <Content>
          {children}
        </Content>
      </body>
    </html>
  );
}
