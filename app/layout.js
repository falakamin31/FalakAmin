import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "Falak Amin — Frontend Engineer (React & Next.js)",
  description:
    "Frontend Engineer with 2.5+ years building fast, scalable, SEO-friendly web applications with React and Next.js for international clients.",
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Falak Amin",
  ],
  openGraph: {
    title: "Falak Amin — Frontend Engineer",
    description:
      "Building fast, scalable web applications with React & Next.js.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
