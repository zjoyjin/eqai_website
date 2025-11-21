import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EQAIGlobal',
  description: 'Emotional Intelligence × AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}