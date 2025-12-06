"use client";

import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-[#2B3D72] text-white pt-20 pb-8 font-dm">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Section: Navigation & Addresses */}
                    <div className="flex-1">

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 mb-16 inline-flex">
                            <img src="/zomoso_LogoIcon.svg" alt="Zemoso" className="h-8 w-auto" />
                            <span className="font-normal text-2xl tracking-tight text-white">
                                Zemoso Technologies
                            </span>
                        </Link>

                        {/* Navigation Links Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 mb-16">
                            {/* Services */}
                            <div className="flex flex-col gap-6">
                                <h4 className="font-medium text-lg">Services</h4>
                                <ul className="flex flex-col gap-4 text-sm text-white/80">
                                    <li><Link href="#" className="hover:text-white transition-colors">Product Design</Link></li>
                                    <li><Link href="#" className="hover:text-white transition-colors">Product Engineering</Link></li>
                                    <li><Link href="#" className="hover:text-white transition-colors">Get in touch</Link></li>
                                </ul>
                            </div>

                            {/* Insights */}
                            <div className="flex flex-col gap-6">
                                <h4 className="font-medium text-lg">Insights</h4>
                                <ul className="flex flex-col gap-4 text-sm text-white/80">
                                    <li><Link href="#" className="hover:text-white transition-colors">Customer Stories</Link></li>
                                    <li><Link href="#" className="hover:text-white transition-colors">Testimonials</Link></li>
                                    <li><Link href="#" className="hover:text-white transition-colors">Blogs</Link></li>
                                </ul>
                            </div>

                            {/* Company */}
                            <div className="flex flex-col gap-6">
                                <h4 className="font-medium text-lg">Company</h4>
                                <ul className="flex flex-col gap-4 text-sm text-white/80">
                                    <li><Link href="#" className="hover:text-white transition-colors">Get in touch</Link></li>
                                    <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                                    <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-white/20 mb-12" />

                        {/* Office Addresses */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm leading-relaxed text-white/90">
                            <div>
                                <h5 className="font-medium mb-3 text-white">Dallas, USA</h5>
                                <p className="opacity-80">
                                    5151 Headquarters Dr,<br />
                                    Suite 185, Plano,<br />
                                    Texas, 75024
                                </p>
                            </div>
                            <div>
                                <h5 className="font-medium mb-3 text-white">Waterloo, Canada</h5>
                                <p className="opacity-80">
                                    180 Northfield Dr W Unit # 4,<br />
                                    Waterloo,<br />
                                    Ontario N2L 0C7
                                </p>
                            </div>
                            <div>
                                <h5 className="font-medium mb-3 text-white">Hyderabad, India</h5>
                                <p className="opacity-80">
                                    MJR Magnifique, 802/803,<br />
                                    Prashant Hills, Khajaguda,<br />
                                    Hyderabad - 500008
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Right Section: Rocket Card (Video) */}
                    <div className="lg:w-[400px] shrink-0">
                        <div className="bg-[#F3F6FD] rounded-lg p-8 h-full min-h-[400px] flex flex-col justify-end relative overflow-hidden group">
                            {/* Video Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-contain"
                                >
                                    <source src="/enterprise.mp4" type="video/mp4" />
                                </video>
                            </div>

                            <div className="relative z-10 flex items-center justify-center gap-6 text-xs text-slate-500 font-medium mt-auto bg-white/50 backdrop-blur-sm py-2 px-4 rounded-full mx-auto">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-orange-300 rounded-sm"></span>
                                    <span>Zemoso team</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-blue-300 rounded-sm"></span>
                                    <span>Your team</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="h-px bg-white/20 mt-20 mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center bg-transparent gap-4 text-xs text-white/70">
                    <p>©2024 Zemoso Technologies. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span>|</span>
                        <Link href="#" className="hover:text-white transition-colors">Terms of use</Link>
                        <div className="w-3 h-3 rounded-full bg-white ml-2"></div>
                    </div>
                </div>

            </div>
        </footer>
    );
};
