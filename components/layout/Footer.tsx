"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const baseAnim = "transition-all duration-700 ease-out";
  const hidden = "opacity-0 translate-y-6";
  const shown = "opacity-100 translate-y-0";

  return (
    <>
      <footer ref={footerRef} className="border-t border-brand-border bg-brand-footer-bg">
        <div className="max-w-[1280px] mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Brand Column */}
            <div className={`flex flex-col gap-4 ${baseAnim} ${visible ? shown : hidden}`} style={{ transitionDelay: "0ms" }}>
              <span className="text-xl font-bold text-[#0F172A]">T-Goda</span>
              <p className="text-sm text-[#64748B] max-w-sm leading-5">
                Making world travel accessible, affordable, and delightful for
                everyone since 2024. Your journey starts here.
              </p>
              <p className="text-sm text-[#64748B]">
                © 2024 T-Goda Booking. All rights reserved.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {[
                  {
                    label: "Facebook",
                    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                  },
                  {
                    label: "Twitter",
                    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                  },
                  {
                    label: "Instagram",
                    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                  },
                ].map(({ label, path }) => (
                  <a
                    key={label}
                    aria-label={label}
                    className="w-8 h-8 flex items-center justify-center text-[#D1D5DB] hover:text-[#64748B] hover:scale-125 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d={path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="grid grid-cols-3 gap-6">
              {[
                {
                  heading: "Company",
                  links: [{ label: "About Us", href: "/about" }, { label: "Careers", href: "/careers" }],
                },
                {
                  heading: "Support",
                  links: [{ label: "Support", href: "/support" }, { label: "Mobile App", href: "/mobile" }],
                },
                {
                  heading: "Legal",
                  links: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Service", href: "/terms" }],
                },
              ].map(({ heading, links }, i) => (
                <div
                  key={heading}
                  className={`flex flex-col gap-3 ${baseAnim} ${visible ? shown : hidden}`}
                  style={{ transitionDelay: `${(i + 1) * 120}ms` }}
                >
                  <span className="text-sm font-bold text-[#0F172A]">{heading}</span>
                  {links.map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="text-sm text-[#64748B] hover:text-brand-blue hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Back-to-top button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg
          transition-all duration-300 hover:scale-110 active:scale-95
          ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </>
  );
}
