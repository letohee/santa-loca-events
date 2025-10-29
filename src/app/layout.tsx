import localFont from "next/font/local";
import "./globals.css";

const uniSans = localFont({
  src: [
    { path: "./fonts/Uni Sans Heavy.otf", weight: "700", style: "normal" },
    { path: "./fonts/Uni Sans Heavy Italic.otf", weight: "700", style: "italic" },
    { path: "./fonts/Uni Sans Thin.otf", weight: "300", style: "normal" },
    { path: "./fonts/Uni Sans Thin Italic.otf", weight: "300", style: "italic" },
  ],
  variable: "--font-uni-sans",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${uniSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
