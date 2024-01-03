import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";

const ibm_plex_mono = IBM_Plex_Mono({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antonio Forte | Software Engineer",
  description: "A Full Stack Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={ibm_plex_mono.className}>{children}</body>
    </html>
  );
}
