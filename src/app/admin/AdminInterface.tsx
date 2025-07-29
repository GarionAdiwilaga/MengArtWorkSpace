
'use client';

import { SidebarProvider } from '@/components/ui/sidebar';
import React from 'react';
import { usePathname } from 'next/navigation';
import AdminLayoutContent from './AdminLayoutContent';

export default function AdminInterface({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';

  return (
    <SidebarProvider>
      {isLoginPage ? (
        <div className="flex flex-1 items-center justify-center px-4">
          {children}
        </div>
      ) : (
        <AdminLayoutContent>{children}</AdminLayoutContent>
      )}
    </SidebarProvider>
  );
}
