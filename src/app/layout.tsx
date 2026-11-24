import type { Metadata } from "next";
import { Space_Grotesk, Sora, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Jadda Tejaswini — Computer Science Engineering Undergraduate & Aspiring AI/ML Engineer",
  description:
    "Personal portfolio of Jadda Tejaswini, a Computer Science Engineering undergraduate at Annamacharya Institute of Technology and Sciences (AITS) exploring Artificial Intelligence, Machine Learning, and Data Science.",
  keywords: [
    "Jadda Tejaswini",
    "Computer Science Engineering",
    "AI/ML",
    "Machine Learning",
    "Data Science",
    "AITS",
    "Portfolio",
    "Python",
  ],
  openGraph: {
    title:
      "Jadda Tejaswini — Computer Science Engineering Undergraduate & Aspiring AI/ML Engineer",
    description:
      "Exploring Artificial Intelligence, Machine Learning, and Data Science. Open to beginner-friendly AI/ML internships.",
    type: "website",
  },
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('jt-portfolio-theme');
    var dark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (dark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${sora.variable} ${plusJakartaSans.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen selection:bg-[#7C3AED]/25 selection:text-[#7C3AED] dark:selection:bg-[#F472B6]/30 dark:selection:text-[#FFF9F5]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
