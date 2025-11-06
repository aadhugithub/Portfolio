import "./globals.css";
import ClientProvider from "@/components/ClientProvider";

export const metadata = {
  title: "Portfolio Admin",
  description: "Manage your portfolio content",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#0A0A0A] text-[#F5F5F5] font-sans overflow-x-hidden relative">
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
