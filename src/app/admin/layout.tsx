
import { Toaster } from '@/components/ui/toaster';
import AdminInterface from './AdminInterface';
import React from 'react';

export const metadata = {
  title: 'Admin Dashboard',
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminInterface>{children}</AdminInterface>
      <Toaster />
    </>
  );
}
