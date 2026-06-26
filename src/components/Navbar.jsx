import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

const Navbar = () => {
  const { getCartCount } = useCart();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand/Logo */}
        <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-90 leading-none">
          <img 
            src="/sunita-aerospace-logo.jpeg" 
            alt="Sunita Leoquip Logo" 
            className="h-10 w-auto object-contain rounded-md"
          />
          <div className="flex flex-col">
            <span className="text-sm font-extrabold tracking-tight text-navy-800">
              SUNITA <span className="text-gold">LEOQUIP</span>
            </span>
            <span className="text-[9px] font-bold tracking-[0.2em] text-slate-400 uppercase mt-0.5">
              AEROSPACE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-semibold transition-colors hover:text-gold py-2 ${
                isActive(link.path)
                  ? 'text-gold'
                  : 'text-navy-700'
              }`}
            >
              {link.label}
              {isActive(link.path) && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gold" />
              )}
            </Link>
          ))}
        </div>

        {/* Action icons / Cart */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative p-2 text-navy-700 transition-colors hover:text-gold">
            <ShoppingCart className="h-5.5 w-5.5" />
            {getCartCount() > 0 && (
              <span className="absolute top-0 right-0 flex h-5 w-5 -translate-y-1 translate-x-1 items-center justify-center rounded-full bg-gold text-[10px] font-extrabold text-navy-900 shadow-sm">
                {getCartCount()}
              </span>
            )}
          </Link>

          {/* Mobile Navigation Drawer */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-navy-700 hover:text-gold cursor-pointer">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-white">
                <SheetHeader className="border-b border-slate-100 pb-4 mb-4">
                  <SheetTitle className="flex items-center gap-3 leading-none">
                    <img 
                      src="/sunita-aerospace-logo.jpeg" 
                      alt="Sunita Leoquip Logo" 
                      className="h-8 w-auto object-contain rounded-md"
                    />
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-extrabold tracking-tight text-navy-800">
                        SUNITA <span className="text-gold">LEOQUIP</span>
                      </span>
                      <span className="text-[8px] font-bold tracking-[0.2em] text-slate-400 uppercase mt-0.5">
                        AEROSPACE
                      </span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-semibold transition-colors hover:text-gold p-2 rounded-md ${
                        isActive(link.path)
                          ? 'bg-gold/10 text-gold'
                          : 'text-navy-700 hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    to="/cart"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-2 rounded-md text-base font-semibold text-navy-700 hover:bg-slate-50 transition-colors hover:text-gold"
                  >
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      <span>Shopping Cart</span>
                    </div>
                    {getCartCount() > 0 && (
                      <span className="rounded-full bg-gold px-2.5 py-0.5 text-xs font-bold text-navy-900">
                        {getCartCount()}
                      </span>
                    )}
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
