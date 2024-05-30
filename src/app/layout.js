import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const mosnstreat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Selon Sophi",
  description: "Selon Sophi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body className={mosnstreat.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
