import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between mx-auto px-4">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <span className="font-bold">MengArtWork.space</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} MengArtWork.space. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Gallery
          </Link>
          <Link href="/store" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Store
          </Link>
          <Link href="/#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
