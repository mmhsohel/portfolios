import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/profile";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${profile.name} — ${profile.designation}`, template: `%s | ${profile.name}` },
  description: profile.intro,
  openGraph: { title: `${profile.name} — ${profile.designation}`, description: profile.intro, type: "website", url: siteUrl, images: [{ url: profile.photo }] },
  icons: { icon: "/favicon.ico" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" suppressHydrationWarning><body>
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:p-2 focus:bg-black focus:text-white focus:z-50">Skip to content</a>
    <Navbar /><main id="main">{children}</main><Footer />
  </body></html>);
}