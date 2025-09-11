import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Header from "../components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes'
const inter= Inter({ subsets: ["latin"] });
export const metadata = {
  title: "AI Career Coach",
  description: "AI Career Coach",
};


export default function RootLayout({ children }) {
  return (
     <ClerkProvider appearance={{baseTheme:dark}} >
    <html lang="en" className={`${inter.className}`}>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-muted/50 py-20 text-center text-gray-200">
            AI CAREER COACH BUILT BY SHIVAKUMAR DASARI
          </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
