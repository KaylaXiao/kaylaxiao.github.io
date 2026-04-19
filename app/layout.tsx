import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Kayla Xiao | Economics PhD",
  description: "Personal academic webpage of Kayla Xiao, PhD Candidate in Economics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-10">
          {children}
        </main>
        <footer className="text-center text-xs text-gray-400 py-8 border-t border-gray-100">
          © {new Date().getFullYear()} Kayla Xiao
        </footer>
      </body>
    </html>
  );
}
