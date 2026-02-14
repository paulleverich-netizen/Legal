import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = location === href;
    return (
      <Link href={href}>
        <span className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${isActive ? "text-primary font-bold" : "text-muted-foreground"}`}>
          {children}
        </span>
      </Link>
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <Shield className="h-6 w-6 text-primary fill-primary/20" />
              <span className="font-serif text-xl font-bold tracking-tight text-primary">LedgerShield AI</span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/#features">Features</NavLink>
          <NavLink href="/#pricing">Pricing</NavLink>
          <NavLink href="/#testimonials">Success Stories</NavLink>
          <div className="flex items-center gap-4">
            <Link href="/auth">
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link href="/auth?mode=signup">
              <Button size="sm" className="bg-primary text-white hover:bg-primary/90 shadow-md">
                Get Protected
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-10">
                <Link href="/#features" onClick={() => setIsOpen(false)}>Features</Link>
                <Link href="/#pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
                <Link href="/#testimonials" onClick={() => setIsOpen(false)}>Success Stories</Link>
                <div className="h-px bg-border" />
                <Link href="/auth" onClick={() => setIsOpen(false)}>Log in</Link>
                <Link href="/auth?mode=signup" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Get Protected</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
