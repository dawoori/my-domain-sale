import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '도메인 판매 중 | Domain for Sale',
  description: '이 도메인을 판매하고 있습니다. 구매에 관심이 있으시면 연락 주세요. | This domain is for sale. Contact us if you are interested in purchasing.',
  keywords: ['도메인', '판매', '웹사이트', '웹주소', 'domain', 'for sale', 'website', 'web address'],
  openGraph: {
    title: '도메인 판매 중 | Domain for Sale',
    description: '이 도메인을 판매하고 있습니다. 구매에 관심이 있으시면 연락 주세요. | This domain is for sale. Contact us if you are interested in purchasing.',
    url: 'https://asd.ad',
    siteName: '도메인 판매 | Domain Sale',
    images: [
      {
        url: 'https://asd.ad/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '도메인 판매 중 | Domain for Sale',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '도메인 판매 중 | Domain for Sale',
    description: '이 도메인을 판매하고 있습니다. 구매에 관심이 있으시면 연락 주세요. | This domain is for sale. Contact us if you are interested in purchasing.',
    images: ['https://asd.ad/twitter-image.jpg'],
  },
  metadataBase: new URL('https://asd.ad'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
