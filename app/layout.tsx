import type React from "react"
import type { Metadata, Viewport } from "next"
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["300", "400", "500", "700"],
  display: "swap",
})

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["400", "500", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "もの減らし動物診断 | あなたのモノとの向き合い方を発見",
  description:
    "無料のもの減らし動物診断で、あなたのモノとの向き合い方を発見。12の質問に答えるだけで、あなたに合った片付け方法やミニマリズムへのアプローチがわかります。",
  openGraph: {
    title: "もの減らし動物診断 | あなたのモノとの向き合い方を発見",
    description:
      "無料のもの減らし動物診断で、あなたのモノとの向き合い方を発見。12の質問に答えるだけで、あなたに合った片付け方法やミニマリズムへのアプローチがわかります。",
    url: "https://minimal-diagnostic.netlify.app",
    siteName: "もの減らし動物診断",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "もの減らし動物診断 | あなたのモノとの向き合い方を発見",
    description:
      "無料のもの減らし動物診断で、あなたのモノとの向き合い方を発見。12の質問に答えるだけで、あなたに合った片付け方法やミニマリズムへのアプローチがわかります。",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://minimal-diagnostic.netlify.app"),
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#b8bdb5",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSans.variable} ${notoSerif.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
