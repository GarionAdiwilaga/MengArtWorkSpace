'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Brush, ShoppingCart, LayoutDashboard, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/gallery', label: 'Gallery', icon: Brush },
  { href: '/store', label: 'Store', icon: ShoppingCart },
  { href: '/admin', label: 'Admin', icon: LayoutDashboard },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label, icon: Icon, isMobile = false }: { href: string; label: string; icon: React.ElementType; isMobile?: boolean; }) => {
    const isActive = pathname.startsWith(href);
    return (
      <Link href={href} passHref>
        <Button
          variant="ghost"
          className={cn(
            'justify-start gap-2',
            isActive ? 'bg-accent text-accent-foreground' : '',
            isMobile ? 'w-full text-lg py-4' : ''
          )}
          onClick={() => isMobile && setIsMobileMenuOpen(false)}
        >
          <Icon className="h-5 w-5" />
          <span>{label}</span>
        </Button>
      </Link>
    );
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Brush className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">
              MengArtWork.space
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-4">
              <div className="flex justify-between items-center mb-6">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Brush className="h-6 w-6 text-primary" />
                  <span className="font-bold">MengArtWork.space</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} isMobile />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
