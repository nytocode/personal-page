import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GoogleAnalytics from "@/components/google-analytics";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GoogleAnalytics />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <div className="h-screen w-screen flex flex-col">
          <Navbar />
          <div className="flex-1 overflow-y-scroll flex flex-col w-[90%] max-w-[700px] mx-auto px-5 py-[50px]">
            {children}
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
