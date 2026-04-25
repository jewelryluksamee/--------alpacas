"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Hotels", href: "/" },
  { label: "Flights", href: "/flights" },
  { label: "Bundles", href: "/bundles" },
  { label: "Activities", href: "/activities" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-border bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo + Nav */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-black text-[#2563EB] tracking-tight">
            T-Goda
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-semibold tracking-tight transition-colors ${
                    isActive
                      ? "text-[#2563EB] border-b-2 border-[#2563EB] pb-1"
                      : "text-[#475569] hover:text-[#2563EB]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/signin"
            className="px-4 py-2 text-sm font-semibold text-[#475569] hover:text-brand-blue transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 text-sm font-semibold text-white bg-brand-blue rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Account
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-brand-dark"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-brand-border bg-white px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-semibold ${
                  isActive ? "text-[#2563EB]" : "text-[#475569]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="flex flex-col gap-2 pt-2 border-t border-brand-border">
            <Link
              href="/signin"
              className="px-4 py-2 text-sm font-semibold text-[#475569] border border-brand-border rounded-lg text-center"
              onClick={() => setMobileOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 text-sm font-semibold text-white bg-brand-blue rounded-lg text-center"
              onClick={() => setMobileOpen(false)}
            >
              Create Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
