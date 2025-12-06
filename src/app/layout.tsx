import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/views/components/Header";
import { Footer } from "@/views/components/Footer";
import { Preloader } from "@/views/components/Preloader";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm" });

export const metadata: Metadata = {
  title: "Disrupt enterprise business models with cutting-edge technology.",
  description: "Enterprise leaders innovate faster with our cross-functional development teams, using cutting edge technologies, including Gen AI.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.zemosolabs.com/enterprise-innovation",
    siteName: "Zemoso Technologies",
    title: "Disrupt enterprise business models with cutting-edge technology.",
    description: "Enterprise leaders innovate faster with our cross-functional development teams, using cutting edge technologies, including Gen AI.",
  },
  icons: {
    icon: "/zomoso_LogoIcon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable, dmSans.variable)}>
        <Preloader />
        <Header />
        <main className="flex-grow pt-20">
          {/* pt-20 to offset fixed header */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
