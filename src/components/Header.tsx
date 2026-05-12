"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: "/our-story", label: "Our Story" },
    { href: "/fastrig", label: "FastRig" },
    { href: "/fastreport", label: "FastReport" },
    { href: "/fastroute", label: "FastRoute" },
    { href: "/fastreach", label: "FastReach" },
    { href: "/team", label: "Team" },
    { href: "/press", label: "Press & Media" },
    { href: "/blog", label: "Blog" },
    { href: "/news", label: "Newsletters" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Smart Green Shipping"
              width={200}
              height={58}
              className="h-10 md:h-[58px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-[13px] font-semibold tracking-wide uppercase text-[var(--sgs-navy)] hover:text-[var(--sgs-teal)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social icons + Contact CTA - desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/smart-green-shipping-alliance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--sgs-navy)] hover:text-[var(--sgs-teal)] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a
              href="https://www.instagram.com/smartgreenshipping/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--sgs-navy)] hover:text-[var(--sgs-teal)] transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
            <a
              href="https://bsky.app/profile/smartgreenshipping.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--sgs-navy)] hover:text-[var(--sgs-teal)] transition-colors"
              aria-label="Bluesky"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.932 0 2.168 0 5.803c0 1.228.69 5.393 1.1 6.697 1.258 3.987 3.737 5.4 5.7 5.4 1.846 0 3.204-1.342 4.358-2.5.607-.612 1.162-1.17 1.742-1.414.34-.143.78-.22 1.39.065.707.33 1.287.953 1.877 1.585 1.135 1.213 2.516 2.564 4.333 2.564 1.963 0 4.442-1.413 5.7-5.4.41-1.304 1.1-5.469 1.1-6.697 0-3.635-2.566-4.871-5.202-2.998C16.046 4.747 13.087 8.686 12 10.8z" /></svg>
            </a>
            <a
              href="https://www.youtube.com/@smartgreenshipping"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--sgs-navy)] hover:text-[var(--sgs-teal)] transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </a>
            <div className="w-px h-5 bg-gray-200 mx-1" />
            <Link
              href="/contactus"
              className="bg-[var(--sgs-teal)] text-white px-5 py-2.5 text-[13px] font-semibold tracking-wide uppercase hover:bg-[var(--sgs-teal-dark)] transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-[var(--sgs-navy)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2.5 text-sm font-semibold tracking-wide uppercase text-[var(--sgs-navy)] hover:text-[var(--sgs-teal)] border-b border-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contactus"
              className="block mt-4 bg-[var(--sgs-teal)] text-white px-5 py-3 text-sm font-semibold tracking-wide uppercase text-center hover:bg-[var(--sgs-teal-dark)] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}