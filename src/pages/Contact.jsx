import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl font-extrabold tracking-tight text-navy-800 sm:text-4xl uppercase">
            Get in Touch
          </h1>
          <div className="h-1 w-16 bg-gold mx-auto mt-4 rounded" />
          <p className="text-slate-500 mt-4 text-sm sm:text-base leading-relaxed">
            Have questions about specialized components, manufacturing capacity, volume discounting, or logistics? Reach out to our engineering desk.
          </p>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
          
          {/* Contact Form Column */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 sm:p-8">
            <h2 className="text-lg font-bold text-navy-800 mb-6">Send us a Message</h2>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Name</label>
                <Input 
                  type="text" 
                  placeholder="John Doe" 
                  className="bg-white border-slate-200 text-slate-955 focus-visible:ring-gold/20 focus-visible:border-gold h-10"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Email</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-white border-slate-200 text-slate-955 focus-visible:ring-gold/20 focus-visible:border-gold h-10"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Message</label>
                <Textarea 
                  rows={5} 
                  placeholder="Describe your manufacturing or procurement inquiry..." 
                  className="bg-white border-slate-200 text-slate-955 focus-visible:ring-gold/20 focus-visible:border-gold min-h-[120px]"
                />
              </div>
              <Button type="submit" className="bg-gold hover:bg-gold-light text-navy-900 font-bold rounded-md h-10 flex items-center justify-center gap-1.5 w-full sm:w-auto px-5 cursor-pointer shadow-sm mt-2">
                <Send className="h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>

          {/* Info Cards Column */}
          <div className="flex flex-col justify-between">
            <Card className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden h-full flex flex-col justify-between p-6 sm:p-8">
              
              <div>
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-lg font-bold text-navy-800">Contact Information</CardTitle>
                  <CardDescription className="text-xs text-slate-500 mt-1">
                    Connect directly with our engineering department or coordinate logistics visits.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-0 flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-gold/10 p-3 border border-gold/20 shrink-0">
                      <Phone className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Phone</p>
                      <p className="text-sm sm:text-base font-bold text-navy-800 mt-0.5">+91 79 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-gold/10 p-3 border border-gold/20 shrink-0">
                      <Mail className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Email</p>
                      <p className="text-sm sm:text-base font-bold text-navy-800 mt-0.5">support@sunitaleoquip.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-gold/10 p-3 border border-gold/20 shrink-0">
                      <MapPin className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Office</p>
                      <p className="text-sm sm:text-base font-bold text-navy-800 mt-0.5 leading-relaxed">
                        Sector 5, Industrial Area, Ahmedabad, Gujarat, India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </div>

              {/* Extra notice */}
              <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-400 leading-relaxed">
                Corporate Response Window: Due to custom setups and drawing approvals, technical quotations are typically processed within 24–48 business hours.
              </div>

            </Card>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
