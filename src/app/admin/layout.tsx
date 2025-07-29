
import { Toaster } from '@/components/ui/toaster';
import AdminInterface from './AdminInterface';
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';

export const metadata = {
  title: 'Admin Dashboard',
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AdminInterface>{children}</AdminInterface>
      <Toaster />
    </SidebarProvider>
  );
}
