import { Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import aboutData from '../data/json/about.json';

const About = () => {
  return (
    <div className="bg-navy-900 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex rounded-full bg-gold/10 p-3 mb-4 border border-gold/20">
            <Settings className="h-8 w-8 text-gold animate-spin-slow" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            About <span className="text-gold">Sunita Leoquip</span>
          </h1>
          <div className="h-1 w-16 bg-gold mx-auto mt-4 rounded" />
        </div>

        {/* Content Card */}
        <Card className="bg-[#0b1929] border border-navy-700 shadow-lg rounded-xl overflow-hidden mb-10">
          <CardContent className="p-6 sm:p-10 text-slate-600 text-sm sm:text-base leading-relaxed flex flex-col gap-6">
            {aboutData.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {aboutData.stats.map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-[#0b1929] border border-navy-700 rounded-xl shadow-sm text-slate-200">
              <h3 className="text-3xl font-extrabold text-gold">{stat.value}</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1.5">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;
