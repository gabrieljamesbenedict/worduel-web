import type { Metadata } from "next";
import { roboto } from "./fonts";

export const metadata: Metadata = {
  title: "Worduel",
  description: "Competitive Word-Guessing Game",
};

const RootLayout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <html
      lang="en"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

export default RootLayout