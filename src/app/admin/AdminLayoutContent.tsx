
'use client';

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  useSidebar
} from '@/components/ui/sidebar';
import { GalleryHorizontal, LayoutDashboard, ShoppingBag, Newspaper, Home, LogOut, Menu  } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { Button } from "@/components/ui/button";

const adminNavItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/gallery', label: 'Manage Gallery', icon: GalleryHorizontal },
  { href: '/admin/store', label: 'Manage Store', icon: ShoppingBag },
  { href: '/admin/posts', label: 'Manage Posts', icon: Newspaper },
];

export default function AdminLayoutContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const { toggleSidebar } = useSidebar();

    const handleLogout = async () => {
        const res = await fetch('/api/logout', {
          method: 'POST',
        });
        if (res.ok) {
          router.push('/admin/login');
        }
    };

    return (
        <div className="flex min-h-screen">
            <Sidebar>
                <SidebarHeader>
                    <div className="flex items-center gap-2 p-2">
                        <span className="text-lg font-semibold">Admin Panel</span>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarMenu>
                        {adminNavItems.map((item) => (
                            <SidebarMenuItem key={item.href}>
                                <SidebarMenuButton
                                    as={Link}
                                    href={item.href}
                                    isActive={pathname === item.href}
                                >
                                    <item.icon />
                                    <span>{item.label}</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarContent>
                <div className="p-2">
                    <Button onClick={handleLogout} className="w-full justify-start">
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                    </Button>
                </div>
            </Sidebar>
            <SidebarInset className='min-h-0'>
                <div className="p-4 bg-card/40 border-b flex items-center gap-4 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:static">
                    <SidebarTrigger className="md:hidden" />
                    
                    <h1 className="text-xl font-semibold">
                        {adminNavItems.find(item => item.href === pathname)?.label || 'Admin'}
                    </h1>
                </div>
                <main className="p-4 md:p-6">{children}</main>
            </SidebarInset>
        </div>
    );
}
