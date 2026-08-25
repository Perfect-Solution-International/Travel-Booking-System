import React from 'react';
import type { Metadata } from 'next';
import EmotionRegistry from '../lib/EmotionRegistry';
import ClientProviders from '../components/ClientProviders';
import './globals.css';

export const metadata: Metadata = {
  title: 'SriLanakaHotel.lk',
  description: 'Booking platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <EmotionRegistry>
          <ClientProviders>{children}</ClientProviders>
        </EmotionRegistry>
      </body>
    </html>
  );
}
