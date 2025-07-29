import { Toaster } from '@/components/ui/toaster';
import React from 'react';

export const metadata = {
  title: 'Login',
};

export default function LoginLayout({
  children,
}: { 
  children: React.ReactNode; 
}) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}