import './globals.css';
import { Baloo_2 } from 'next/font/google';

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Alejandro De La Mora | AI Solutions Architect',
  description:
    'AI Solutions Architect and community leader specializing in GenAI adoption, automation, and upskilling.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={baloo.className}>{children}</body>
    </html>
  );
}
