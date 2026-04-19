import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Kayla Xiao | Economics PhD",
  description: "Personal academic webpage of Kayla Xiao",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-12">
          {children}
        </main>
        <footer className="text-center text-sm text-gray-400 py-6">
          © {new Date().getFullYear()} Kayla Xiao
        </footer>
      </body>
    </html>
  );
}
