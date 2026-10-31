import '@/styles/global.css';

import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import { useAnalytics } from '@/lib/analytics';

export default function App({ Component, pageProps }) {
  useAnalytics();

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
