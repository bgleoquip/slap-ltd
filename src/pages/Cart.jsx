import { useCart } from '../context/CartContext';
import { Trash2, MessageCircle, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    const phoneNumber = "919876543210"; 
    let message = "Hello Sunita Leoquip, I would like to request a quotation for the following items:%0a%0a";

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (x${item.quantity}) - ₹${(item.price * item.quantity).toLocaleString('en-IN')}%0a`;
    });

    message += `%0a*Total Estimated Amount: ₹${getCartTotal().toLocaleString('en-IN')}*`;
    message += "%0a%0aPlease confirm manufacturing availability, delivery schedules, and shipping details.";

    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center flex flex-col items-center">
        <div className="rounded-full bg-slate-100 p-6 mb-6">
          <ShoppingBag className="h-12 w-12 text-slate-400" />
        </div>
        <h2 className="text-2xl font-bold text-navy-800">Your Inquiry Cart is Empty</h2>
        <p className="text-slate-500 mt-2 mb-8 max-w-sm text-sm leading-relaxed">
          Looks like you haven't added any cast iron precision components or compressor spares to your inquiry cart yet.
        </p>
        <Button asChild className="bg-gold hover:bg-gold-light text-navy-900 font-bold rounded-md px-6 cursor-pointer">
          <Link to="/products" className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider">
            Browse Capabilities
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-3xl font-extrabold tracking-tight text-navy-800 uppercase border-b border-slate-200 pb-6 mb-8">
          Inquiry Cart
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          
          {/* Cart Items List */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm p-4 sm:p-6 flex flex-col gap-6">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4 sm:gap-6 items-center border-b border-slate-100 last:border-0 pb-6 last:pb-0">
                  {/* Image */}
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-lg overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-navy-800 line-clamp-1">{item.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5 sm:mt-1">{item.category}</p>
                    <p className="text-sm font-bold text-gold mt-1 sm:mt-2">₹{item.price.toLocaleString('en-IN')}</p>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-1 bg-slate-100 rounded-md p-1 scale-90 sm:scale-100">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="h-7 w-7 text-slate-500 hover:text-slate-950 rounded-md cursor-pointer"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm font-semibold text-slate-950 w-7 text-center">{item.quantity}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="h-7 w-7 text-slate-500 hover:text-slate-950 rounded-md cursor-pointer"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>

                  {/* Remove Button */}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600 hover:bg-red-50 h-8 w-8 rounded-md shrink-0 cursor-pointer"
                  >
                    <Trash2 className="h-5 w-5" />
                    <span className="sr-only">Remove item</span>
                  </Button>
                </div>
              ))}
            </div>

            {/* Helper links */}
            <div className="flex justify-between items-center mt-2 px-2">
              <Link to="/products" className="text-xs font-semibold text-gold hover:text-gold-light flex items-center gap-1">
                <ArrowLeft className="h-3.5 w-3.5" /> Continue Browsing
              </Link>
              <button 
                onClick={clearCart} 
                className="text-xs font-semibold text-slate-400 hover:text-red-500 underline underline-offset-4 cursor-pointer"
              >
                Clear Inquiry
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4 sticky top-24">
            <Card className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden">
              <CardHeader className="p-6 pb-4 border-b border-slate-100">
                <CardTitle className="text-base font-bold uppercase tracking-wider text-navy-800">Quotation Summary</CardTitle>
                <CardDescription className="text-xs text-slate-400">Total items: {cart.reduce((sum, item) => sum + item.quantity, 0)}</CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Subtotal</span>
                  <span className="font-semibold text-navy-800">₹{getCartTotal().toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-500 border-b border-slate-100 pb-4">
                  <span>Custom Tooling / Setup</span>
                  <span className="text-slate-400 italic text-xs">Based on batch size</span>
                </div>
                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-base font-bold text-navy-800">Total Estimate</span>
                  <span className="text-2xl font-extrabold text-gold">₹{getCartTotal().toLocaleString('en-IN')}</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 bg-slate-50 border-t border-slate-100 flex flex-col gap-3">
                <Button
                  onClick={handleCheckout}
                  size="lg"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-md h-11 flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-emerald-600/10 mt-4"
                >
                  <MessageCircle className="h-5 w-5 fill-white text-emerald-600" /> Request Quote on WhatsApp
                </Button>
                <p className="text-[10px] text-slate-400 text-center leading-relaxed">
                  Your inquiry summary will be pre-formatted. Send it to our engineering desk to finalize technical drawings and terms.
                </p>
              </CardFooter>
            </Card>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Cart;
