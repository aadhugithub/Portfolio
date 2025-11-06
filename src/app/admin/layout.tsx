"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, User, Briefcase, Brain, Mail, FileText, Settings, BarChart3, Home } from "lucide-react";
import { createClient } from "@/lib/supabaseClient";
import { cn } from "@/lib/utils";

const supabase = createClient();

const nav = [
  { name: "Dashboard", href: "/admin", icon: Home },
  { name: "Profile", href: "/admin/profile", icon: User },
  { name: "Projects", href: "/admin/projects", icon: Briefcase },
  { name: "Skills", href: "/admin/skills", icon: Brain },
  { name: "Contact", href: "/admin/contact", icon: Mail },
  { name: "Resume", href: "/admin/resume", icon: FileText },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <aside className="w-60 border-r border-gray-200 bg-white p-4 flex flex-col">
        <h1 className="text-xl font-semibold mb-6">Admin Panel</h1>
        <nav className="space-y-1 flex-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-gray-100 transition",
                pathname === item.href && "bg-blue-50 text-blue-600 font-medium"
              )}
            >
              <item.icon size={16} /> {item.name}
            </Link>
          ))}
        </nav>
        <button
          onClick={logout}
          className="flex items-center gap-2 text-red-500 hover:text-red-600 text-sm mt-auto"
        >
          <LogOut size={16} /> Logout
        </button>
      </aside>

      {/* Content */}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
