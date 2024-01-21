import { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import Head from 'next/head';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const trueno = localFont({
  src: [
    {
      // regular
      path: '../font/truenorg.otf',
      weight: '400 500',
      style: 'normal',
    },
    {
      // ultra light
      path: '../font/truenoultlt.otf',
      weight: '200',
      style: 'normal',
    },
    {
      // light
      path: '../font/truenolt.otf',
      weight: '300',
      style: 'normal',
    },
    {
      // semi bold
      path: '../font/truenosbd.otf',
      weight: '600',
      style: 'normal',
    },
    {
      // bold
      path: '../font/truenobd.otf',
      weight: '700',
      style: 'normal',
    },
    {
      // extra bold
      path: '../font/truenoexbd.otf',
      weight: '800',
      style: 'normal',
    },
    {
      // black
      path: '../font/truenoblk.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-trueno',
});

export const metadata: Metadata = {
  title: 'Apperci bot: Employee recognition and celebrations - inside Slack',
  description:
    'Make employee recognition, celebrations fun - all inside Slack. With Appreci, easily send kudos to your teammates and recognize their achievements.',
  openGraph: {
    type: 'website',
    url: 'https://apprecibot.com',
    title: 'Apperci bot: Employee recognition and celebrations - inside Slack',
    description:
      'Make employee recognition, celebrations fun - all inside Slack. With Appreci, easily send kudos to your teammates and recognize their achievements.',
    images: [
      {
        url: '/assets/meta/meta-hero.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apperci bot: Employee recognition and celebrations - inside Slack',
    description:
      'Make employee recognition, celebrations fun - all inside Slack. With Appreci, easily send kudos to your teammates and recognize their achievements.',
    images: '/assets/meta/meta-hero.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>
          Apperci bot: Employee recognition and celebrations - inside Slack
        </title>
      </Head>

      <body className={`${inter.variable} ${trueno.variable}`}>{children}</body>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-R5XHZ1VVC4" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-R5XHZ1VVC4');
        `}
      </Script>
    </html>
  );
}
