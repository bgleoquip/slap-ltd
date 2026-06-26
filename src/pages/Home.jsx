import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowRight, ChevronRight, CheckCircle2, ShieldCheck, Truck, Cpu, Layers, Wrench, Award, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
    title: "Sunita Leoquip",
    subtitle: "Precision manufacturing & custom engineering solutions since 1979.",
    eyebrow: "Established 1979 · 45+ Years of Excellence"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1563968743333-044cef800537?q=80&w=1965&auto=format&fit=crop",
    title: "Precision Machining",
    subtitle: "Specialists in high-grade cast iron products, CNC turning, and precision VMC operations.",
    eyebrow: "State-of-the-Art Production Lines"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop",
    title: "OEM Compressor Spares",
    subtitle: "Trusted compressor component manufacturing, engineering, and testing services for top global brands.",
    eyebrow: "Ingersoll Rand & OEM Approved Parts"
  }
];

const competencies = [
  {
    icon: Settings,
    title: "Custom Precision Manufacturing",
    desc: "Providing custom-manufactured components and precision-engineered spares, serving as a trusted supplier to leading OEMs."
  },
  {
    icon: Layers,
    title: "Specialists in Cast Iron Products",
    desc: "Engineering high-grade, durable cast iron components using advanced metallurgy and casting methods."
  },
  {
    icon: Cpu,
    title: "High Accuracy Machining",
    desc: "Utilizing precision VMC, CNC turning, honing, and grinding lines to build components to exact OEM specifications."
  },
  {
    icon: Wrench,
    title: "Reverse Engineering & Development",
    desc: "Obtaining physical samples and performing full dimensional layouts and material analysis to recreate parts."
  },
  {
    icon: Award,
    title: "Quality & On-Time Delivery",
    desc: "Maintaining a 100% quality commitment built on an engineering legacy, ensuring on-schedule dispatches."
  }
];

const oemClients = [
  "Ingersoll Rand",
  "Sunita Tools",
  "Anest Iwata",
  "Elgi Compressors",
  "Chicago Pneumatic",
  "Atlas Copco",
  "Kirloskar Pneumatic",
  "Leoquip Engineering"
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* SECTION 1: Hero Slider (Dark Navy background/overlay) */}
      <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden bg-[#040b15]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out flex items-center justify-center text-center px-4 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(4, 11, 21, 0.75), rgba(4, 11, 21, 0.85)), url(${slide.image})`,
            }}
          >
            <div className={`max-w-3xl transform transition-all duration-700 delay-300 ${
              index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}>
              <div className="inline-flex items-center gap-1.5 bg-gold/15 border border-gold/30 px-3 py-1 rounded-full text-xs font-semibold text-gold tracking-wider uppercase mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                {slide.eyebrow}
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase mb-4 sm:mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
                {slide.subtitle}
              </p>
              <div>
                <Button size="lg" asChild className="bg-gold hover:bg-gold-light text-navy-900 font-bold rounded-md px-6 h-11 cursor-pointer">
                  <Link to="/products" className="flex items-center gap-2">
                    Explore Capabilities <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-gold' : 'w-2.5 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* SECTION 2: Trust Badges (Light / White Background) */}
      <section className="py-10 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
              <ShieldCheck className="h-10 w-10 text-gold shrink-0" />
              <div>
                <h4 className="font-bold text-navy-800">Precision Machined Quality</h4>
                <p className="text-xs text-slate-500">Every component is tested for absolute endurance and tolerances.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
              <Truck className="h-10 w-10 text-gold shrink-0" />
              <div>
                <h4 className="font-bold text-navy-800">Fast Industrial Logistics</h4>
                <p className="text-xs text-slate-500">Secure cargo packaging and rapid delivery to your processing hubs.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
              <CheckCircle2 className="h-10 w-10 text-gold shrink-0" />
              <div>
                <h4 className="font-bold text-navy-800">45+ Years of Trust</h4>
                <p className="text-xs text-slate-500">Proudly serving OEM clients and aerospace requirements since 1979.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Core Competencies (Dark Blue / Navy Background) */}
      <section className="py-16 sm:py-24 bg-[#0b1929] text-white border-b border-[#1a3a5c]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] bg-gold/15 px-3 py-1 rounded-full border border-gold/20">Specialization</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl uppercase mt-3">
              Core Competencies
            </h2>
            <div className="h-1 w-16 bg-gold mx-auto mt-4 rounded" />
            <p className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed">
              We specialize in end-to-end manufacturing workflows, ensuring high tolerance parameters and custom mechanical solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {competencies.map((comp, idx) => {
              const IconComponent = comp.icon;
              return (
                <div key={idx} className="flex flex-col bg-[#0f2040] border border-[#1a3a5c] rounded-xl p-5 hover:border-gold/45 hover:shadow-lg transition-all duration-300 group">
                  <div className="rounded-lg bg-[#0b1929] border border-[#1a3a5c] p-3 w-fit mb-4 text-slate-300 group-hover:text-gold transition-colors shadow-sm">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-gold transition-colors mb-2 leading-snug">
                    {comp.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {comp.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 4: OEM Clients Banner (Light / White Background) */}
      <section className="py-14 bg-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] font-extrabold text-center text-slate-400 uppercase tracking-[0.2em] mb-6">
            Trusted by Compressor Manufacturers & OEMs Across India
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-80">
            {oemClients.map((client, idx) => (
              <span 
                key={idx} 
                className="text-xs font-bold text-navy-700 tracking-wider hover:text-gold transition-colors select-none cursor-default py-1"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Precision Components (Dark Blue / Navy Background) */}
      <section className="py-16 sm:py-24 bg-[#040b15] text-white border-b border-[#0f2040]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] bg-gold/15 px-3 py-1 rounded-full border border-gold/20">Offerings</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl uppercase mt-3">
              Precision Components
            </h2>
            <div className="h-1 w-16 bg-gold mx-auto mt-4 rounded" />
            <p className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed">
              Browse our standard cylinder liners, VMC ground crankshafts, and assemblies built exactly to design specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(0, 3).map(product => (
              <Card key={product.id} className="bg-[#0b1929] border border-[#1a3a5c] shadow-md hover:shadow-lg hover:border-gold/30 transition-all duration-300 flex flex-col justify-between rounded-xl overflow-hidden group">
                <div>
                  <div className="relative h-48 overflow-hidden bg-[#040b15]">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center rounded-md bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold ring-1 ring-inset ring-gold/20 shadow-sm backdrop-blur-xs">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="p-5 pb-2">
                    <CardTitle className="text-base font-bold text-white group-hover:text-gold transition-colors">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                </div>
                <div>
                  <CardContent className="px-5 pt-0 pb-4">
                    <p className="text-xl font-extrabold text-gold">
                      ₹{product.price.toLocaleString('en-IN')}
                    </p>
                  </CardContent>
                  <CardFooter className="bg-[#040b15]/60 border-t border-[#1a3a5c]/55 px-5 py-4 flex justify-between items-center">
                    <Link to="/products" className="text-xs font-bold text-gold hover:text-gold-light inline-flex items-center gap-1">
                      See Details <ChevronRight className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>

          {/* Browse Catalog CTA */}
          <div className="mt-16 text-center">
            <Button size="lg" variant="outline" asChild className="border-[#1a3a5c] bg-transparent text-white hover:bg-[#0b1929] hover:text-gold rounded-md font-bold cursor-pointer">
              <Link to="/products" className="flex items-center gap-1.5">
                Explore Full Catalog <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
