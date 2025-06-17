
import "./globals.css";
import {Header, Footer} from "@/components";
import {fontPrimary} from "./font"
import { cn } from "@/lib/utils";
export const metadata = {
  title: "Best Selling Publisher",
  description: "",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={ cn ("font-sans", fontPrimary.variable)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
