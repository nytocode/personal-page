import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/providers/theme-provider";
import { Suspense } from "react";
import { PHProvider, PostHogPageview } from "@/providers/posthog-provider";

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
      <Suspense>
        <PostHogPageview />
      </Suspense>
      <body className={ibm_plex_mono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PHProvider>
            <div className="h-screen w-screen flex flex-col">
              <Navbar />
              <div className="flex-1 overflow-y-scroll  px-5 py-[50px]">
                <div className="w-[90%] max-w-[700px] mx-auto ">{children}</div>
              </div>
              <Footer />
            </div>
          </PHProvider>
        </ThemeProvider>
        <Toaster richColors position="bottom-center" />
      </body>
    </html>
  );
}
