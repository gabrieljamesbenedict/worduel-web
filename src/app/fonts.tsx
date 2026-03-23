import { Bree_Serif, Roboto } from "next/font/google";
import "./globals.css";

export const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "400"
})

export const breeSerif = Bree_Serif({
  variable: "--font-bree-serif",
  subsets: ["latin"],
  weight: "400"
});