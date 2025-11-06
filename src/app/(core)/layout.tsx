import "@/styles/globals.css";
import "@/styles/nprogress.css";
import { Urbanist } from "next/font/google";
import AmbientBackground from "@/components/core/AmbientBackground";
import Navbar from "@/components/core/Navbar";
import ClientWrapper from "@/components/core/ClientWrapper";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-sans",
});

// ✅ REQUIRED DEFAULT EXPORT
export default function CoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${urbanist.variable}`}>
      <body className="bg-[#0A0A0A] text-[#F5F5F5] font-sans overflow-x-hidden relative">
        <AmbientBackground />
        <Navbar />
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}

// ✅ Optionally include metadata below
export const metadata = {
  title: "Adarsh N — Designer & Storyteller",
  description:
    "Minimal, cinematic portfolio by Adarsh N — UI/UX Designer crafting creative experiences with emotion and precision.",
};
