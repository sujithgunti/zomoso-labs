"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/views/components/ui/button";
import { NAV_ITEMS } from "@/models/data";
import { useNavigation } from "@/controllers/useNavigation";
import { Menu, X } from "lucide-react";

export const Header = () => {
    const { isScrolled, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useNavigation();
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-[#2B3D72] shadow-sm py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group" onClick={closeMobileMenu}>
                    {/* Zemoso Logo */}
                    <img src="/zomoso_LogoIcon.svg" alt="Zemoso" className="h-8 w-auto" />
                    <span className={cn(
                        "font-bold text-xl tracking-tight transition-colors",
                        isScrolled ? "text-white" : "text-[#1a237e]"
                    )}>
                        Zemoso
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <div key={item.label} className="relative group/nav">
                            <Link
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-1 text-sm font-medium transition-colors",
                                    isScrolled ? "text-slate-200 hover:text-white" : "text-slate-600 hover:text-[#1a237e]"
                                )}
                            >
                                {item.label}
                                {item.hasDropdown && (
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover/nav:rotate-180 transition-transform">
                                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </Link>
                        </div>
                    ))}
                    <Button
                        variant="outline"
                        size="sm"
                        onMouseEnter={() => setIsButtonHovered(true)}
                        onMouseLeave={() => setIsButtonHovered(false)}
                        className={cn(
                            "rounded-[4px] px-6 transition-all border-transparent duration-500",
                            isScrolled
                                ? "text-white hover:text-white"
                                : "border-[#FF5722] text-[#FF5722] hover:bg-[#FF5722] hover:text-white"
                        )}
                        style={isScrolled ? {
                            background: "linear-gradient(#2B3D72, #2B3D72) padding-box, linear-gradient(to right, #5BA4E6, #FF5722, #5BA4E6) border-box",
                            border: "1px solid transparent",
                            backgroundSize: "100% 100%, 200% 100%",
                            backgroundPosition: isButtonHovered ? "100% 0" : "0 0",
                            transition: "background-position 0.5s ease"
                        } : {}}
                    >
                        Contact Us
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className={cn("md:hidden p-2 transition-colors", isScrolled ? "text-white" : "text-foreground")}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    "fixed inset-x-0 top-[70px] bg-background border-b border-border p-6 shadow-xl md:hidden transition-all duration-300 ease-in-out transform origin-top",
                    isMobileMenuOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-0 -translate-y-4 pointer-events-none"
                )}
            >
                <nav className="flex flex-col gap-4">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                            onClick={closeMobileMenu}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button className="w-full mt-4" variant="brand">Get in Touch</Button>
                </nav>
            </div>
        </header>
    );
};
