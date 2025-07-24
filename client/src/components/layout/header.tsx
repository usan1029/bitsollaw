import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "홈" },
    { href: "/about", label: "사무소 소개" },
    { href: "/team", label: "구성원" },
    { href: "/practice-areas", label: "업무분야" },
    { href: "/consultation", label: "상담신청" },
    { href: "/contact", label: "연락처" },
  ];

  const isActive = (href: string) => {
    return location === href || (href !== "/" && location.startsWith(href));
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-law-navy">
              빛솔 법률사무소
            </Link>
            <div className="ml-3 text-sm text-gray-600 hidden sm:block">
              관악구 30년 경험
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-law-navy"
                    : "text-gray-700 hover:text-law-navy"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 text-law-gold mr-2" />
              <a href="tel:02-858-8638" className="hover:text-law-navy">
                02-858-8638
              </a>
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-law-navy"
                          : "text-gray-700 hover:text-law-navy"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4 border-t">
                    <a
                      href="tel:02-858-8638"
                      className="flex items-center text-law-navy font-medium"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      02-858-8638
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
