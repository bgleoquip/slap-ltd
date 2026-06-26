import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-white text-slate-600 py-12 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand and Bio */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 transition-opacity hover:opacity-90 leading-none">
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
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xs leading-relaxed mt-2">
              Precision manufacturing specialists in high-grade cast iron products, CNC machining, and critical compressor components. Serving top OEMs since 1979.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3 md:pl-8">
            <h4 className="text-xs font-bold tracking-wider text-navy-800 uppercase">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/products" className="hover:text-gold transition-colors font-medium">Products</Link>
              <Link to="/about" className="hover:text-gold transition-colors font-medium">About Us</Link>
              <Link to="/contact" className="hover:text-gold transition-colors font-medium">Contact</Link>
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold tracking-wider text-navy-800 uppercase">Contact Info</h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-slate-400 shrink-0 mt-0.5" />
                <span>Sector 5, Industrial Area, Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-slate-400 shrink-0" />
                <span>+91 79 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-slate-400 shrink-0" />
                <span>support@sunitaleoquip.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright section */}
        <div className="mt-12 pt-6 border-t border-slate-100 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Sunita Leoquip Aerospace Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
