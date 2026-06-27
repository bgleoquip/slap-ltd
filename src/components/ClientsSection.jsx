import { useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

import clientData from '../data/json/clients.json';

export function ClientsSection() {
  const [failedLogos, setFailedLogos] = useState({});

  const handleImageError = (name) => {
    setFailedLogos(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const renderClientCard = (client, index) => {
    const isImageFailed = !client.logo || failedLogos[client.name];
    const CardContent = (
      <>
        {isImageFailed ? (
          <div className="flex flex-col items-center justify-center text-center h-full w-full px-2">
            <span className="text-[11px] sm:text-xs font-bold text-navy-800 group-hover:text-gold transition-colors duration-300 tracking-wide uppercase">
              {client.name}
            </span>
            <span className="text-[8px] text-slate-400 font-semibold uppercase tracking-wider mt-1 px-2 py-0.5 rounded-full bg-slate-50 border border-slate-100 group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-300">
              {client.category}
            </span>
          </div>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center p-2.5">
            <img 
              src={client.logo} 
              alt={client.name} 
              className="max-h-12 max-w-[90%] object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"
              onError={() => handleImageError(client.name)}
            />
          </div>
        )}
        
        {client.url && (
          <div className="absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <ExternalLink className="h-2.5 w-2.5 text-slate-400 group-hover:text-gold" />
          </div>
        )}
      </>
    );

    const cardClasses = "group relative flex flex-col items-center justify-center h-22 rounded-lg border border-slate-200 bg-white hover:border-gold hover:ring-3 hover:ring-gold/15 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer select-none";

    if (client.url) {
      return (
        <a 
          key={client.name + index}
          href={client.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={cardClasses}
          title={`Visit ${client.name} (${client.url})`}
        >
          {CardContent}
        </a>
      );
    }

    return (
      <div 
        key={client.name + index}
        className={cardClasses}
        title={client.name}
      >
        {CardContent}
      </div>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-gold uppercase tracking-[0.2em] bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
            <Sparkles className="h-3 w-3 text-gold" />
            Our Esteemed Clients
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-800 sm:text-4xl uppercase mt-4">
            Trusted by Industry Leaders
          </h2>
          <div className="h-1 w-16 bg-gold mx-auto mt-4 rounded" />
          <p className="text-slate-500 mt-4 text-sm sm:text-base leading-relaxed">
            We are proud to serve some of the most recognized names in India's industrial and manufacturing landscape.
          </p>
        </div>

        {/* Client Grid (Matching 5-columns, responsive queries from website) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
          {clientData.map((client, idx) => renderClientCard(client, idx))}
          
          {/* "+ Many More" card to match original website */}
          <div className="group relative flex flex-col items-center justify-center h-22 rounded-lg border border-navy-800 bg-navy-800 text-gold hover:bg-navy-700 hover:border-navy-700 transition-all duration-300 select-none text-center">
            <span className="text-xs font-bold italic tracking-wide">
              + Many More
            </span>
            <span className="text-[8px] text-gold/60 uppercase tracking-widest mt-1">
              Nationwide Network
            </span>
          </div>
        </div>

        {/* Section Footnote */}
        <div className="text-center mt-12 text-xs text-slate-400 select-none">
          Trusted by 20+ leading manufacturers, OEMs &amp; service providers across India. Click cards with external indicators to visit client websites.
        </div>

      </div>
    </section>
  );
}
