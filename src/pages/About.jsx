import { Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex rounded-full bg-gold/10 p-3 mb-4 border border-gold/20">
            <Settings className="h-8 w-8 text-gold animate-spin-slow" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-800 uppercase">
            About <span className="text-gold">Sunita Leoquip</span>
          </h1>
          <div className="h-1 w-16 bg-gold mx-auto mt-4 rounded" />
        </div>

        {/* Content Card */}
        <Card className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden mb-10">
          <CardContent className="p-6 sm:p-10 text-slate-600 text-sm sm:text-base leading-relaxed flex flex-col gap-6">
            <p>
              Sunita Leoquip Aerospace Pvt. Ltd. is a premier precision manufacturing specialist and custom engineering solutions provider. Established in 1979, we have spent over four decades building a reputation for extreme reliability and quality.
            </p>
            <p>
              Our core competencies include custom precision manufacturing, cast iron products, and high-accuracy CNC machining. Equipped with advanced VMC centers, honing, and grinding lines, we manufacture high-tolerance compressor parts and custom spares trusted by global OEMs and brands like Ingersoll Rand.
            </p>
            <p>
              Based in Ahmedabad, Gujarat, we support the manufacturing sector with engineering expertise, reverse development capability, and strict quality control standards.
            </p>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="text-center p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            <h3 className="text-3xl font-extrabold text-gold">45+</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1.5">Years of Excellence</p>
          </div>
          <div className="text-center p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            <h3 className="text-3xl font-extrabold text-gold">5000+</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1.5">Components Catalog</p>
          </div>
          <div className="text-center p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            <h3 className="text-3xl font-extrabold text-gold">100%</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1.5">OEM Approved</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
