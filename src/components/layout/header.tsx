import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, GraduationCap as AppIcon, Home, Lightbulb, Info, Mail } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
  { href: '/course-suggester', label: 'Course Suggester', icon: <Lightbulb className="h-5 w-5" /> },
  { href: '/about', label: 'About Us', icon: <Info className="h-5 w-5" /> },
  { href: '/contact', label: 'Contact Us', icon: <Mail className="h-5 w-5" /> },
];

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-headline font-bold">
          <AppIcon className="h-8 w-8 text-accent" />
          MyCampusGuide
        </Link>
        
        <nav className="hidden md:flex gap-2">
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" asChild className="text-primary-foreground hover:bg-primary/80 hover:text-accent">
              <Link href={item.href} className="flex items-center gap-2">
                {item.icon}
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80 hover:text-accent">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background text-foreground p-6">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Button key={item.href} variant="ghost" asChild className="justify-start text-lg">
                    <Link href={item.href} className="flex items-center gap-3">
                      {item.icon}
                      {item.label}
                    </Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
