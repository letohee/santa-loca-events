import localFont from "next/font/local";
import "./globals.css";

const agamtoh = localFont({
  src: "./fonts/Agamtoh.ttf",
  display: "swap",
  // optional: weight: "400", style: "normal"
});

const xirod = localFont({
  src: "./fonts/Xirod.otf",
  variable: "--font-xirod",   // we’ll use this one via CSS var
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* 👇 this applies Agamtoh everywhere by default */}
      <body className={`${agamtoh.className} ${xirod.variable}`}>
        {children}
      </body>
    </html>
  );
}
