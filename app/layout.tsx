import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Capybara Codes",
  description: "A capybara for every HTTP status code",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <script
        data-goatcounter="https://capycodes.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      ></script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
