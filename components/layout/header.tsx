"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/market", label: "Market" },
  { href: "/auto-trade", label: "Auto Trade" },
  { href: "/manual-trade", label: "Manual Trade" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm transition-shadow duration-300 hover:shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo - No Icon */}
        <Link href="/" className="group flex items-center">
          <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 tracking-tight">
            DIPNOMICS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200",
                pathname === item.href
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              )}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-8 bg-blue-600 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden md:flex text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
          >
            <User className="h-5 w-5" />
          </Button>
          <Button
            className="hidden md:flex bg-blue-600 text-white hover:bg-blue-700 font-semibold transition-all duration-200 hover:scale-105"
            size="sm"
          >
            Get Started
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-700 hover:bg-gray-50 transition-all duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation - Enhanced */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden animate-slide-down">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-200",
                  pathname === item.href
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                )}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 mt-4">
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
