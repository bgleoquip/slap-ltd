import { useCart } from '../context/CartContext';
import { Trash2, MessageCircle, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import cartData from '../data/json/cart.json';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    const phoneNumber = cartData.whatsappPhone; 
    let message = cartData.whatsappTemplate.prefix;

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (x${item.quantity}) - ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n`;
    });

    message += `\n*Total Estimated Amount: ₹${getCartTotal().toLocaleString('en-IN')}*`;
    message += cartData.whatsappTemplate.suffix;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="bg-[#040b15] min-h-[70vh] flex items-center justify-center py-16 sm:py-24 px-4">
        <div className="mx-auto max-w-xl w-full px-6 py-16 text-center flex flex-col items-center bg-[#0b1929] rounded-3xl shadow-2xl border border-navy-700">
          <div className="rounded-full bg-slate-100 p-6 mb-6">
            <ShoppingBag className="h-12 w-12 text-slate-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">{cartData.emptyState.title}</h2>
          <p className="text-slate-300 mt-2 mb-8 max-w-sm text-sm leading-relaxed">
            {cartData.emptyState.description}
          </p>
          <Button asChild className="bg-gold hover:bg-gold-light text-navy-900 font-bold rounded-md px-6 cursor-pointer">
            <Link to="/products" className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider">
              {cartData.emptyState.cta}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-navy-900 min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-3xl font-extrabold tracking-tight text-white uppercase border-b border-navy-700 pb-6 mb-8">
          {cartData.heading}
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          
          {/* Cart Items List */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="bg-[#0b1929] border border-navy-700 rounded-xl overflow-hidden shadow-sm p-4 sm:p-6 flex flex-col gap-6 text-slate-200">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4 sm:gap-6 items-center border-b border-slate-100 last:border-0 pb-6 last:pb-0">
                  {/* Image */}
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-lg overflow-hidden bg-navy-800 border border-navy-700 shrink-0">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">{item.name}</h3>
                    <p className="text-xs text-slate-400 mt-0.5 sm:mt-1">{item.category}</p>
                    <p className="text-sm font-bold text-gold mt-1 sm:mt-2">₹{item.price.toLocaleString('en-IN')}</p>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-1 bg-navy-800 rounded-md p-1 scale-90 sm:scale-100">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="h-7 w-7 text-slate-300 hover:text-white rounded-md cursor-pointer"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm font-semibold text-slate-100 w-7 text-center">{item.quantity}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="h-7 w-7 text-slate-300 hover:text-white rounded-md cursor-pointer"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>

                  {/* Remove Button */}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-500 hover:bg-red-900/30 h-8 w-8 rounded-md shrink-0 cursor-pointer"
                  >
                    <Trash2 className="h-5 w-5" />
                    <span className="sr-only">Remove item</span>
                  </Button>
                </div>
              ))}
            </div>

            {/* Clear Cart link */}
            <div className="flex justify-start">
              <Button 
                variant="ghost" 
                onClick={clearCart} 
                className="text-slate-400 hover:text-red-400 font-semibold text-xs flex items-center gap-1.5 cursor-pointer"
              >
                Clear All Items
              </Button>
            </div>
          </div>

          {/* Quotation Summary Card */}
          <div className="lg:col-span-4">
            <Card className="bg-[#0b1929] border border-navy-700 text-slate-200 rounded-xl overflow-hidden shadow-sm">
              <CardHeader className="border-b border-navy-700 p-6">
                <CardTitle className="text-base font-bold text-white">Inquiry Summary</CardTitle>
                <CardDescription className="text-slate-400 text-xs mt-1">Review the items selected for quotation request.</CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-slate-400">Total Items:</span>
                  <span className="text-sm font-bold text-white">{cart.reduce((sum, i) => sum + i.quantity, 0)} units</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-slate-400">Total Categories:</span>
                  <span className="text-sm font-bold text-white">{new Set(cart.map(i => i.category)).size} types</span>
                </div>
                <div className="border-t border-navy-700 pt-4 flex justify-between items-baseline mt-2">
                  <span className="text-sm font-bold text-white">Estimated Amount:</span>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-gold">₹{getCartTotal().toLocaleString('en-IN')}</span>
                    <p className="text-[10px] text-slate-500 mt-0.5 leading-none">Excluding taxes & shipping</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-navy-900/60 border-t border-navy-700 p-6 flex flex-col gap-3">
                <Button 
                  onClick={handleCheckout} 
                  className="bg-gold hover:bg-gold-light text-navy-900 font-bold rounded-md w-full h-11 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageCircle className="h-5 w-5 fill-current" /> Request Quote via WhatsApp
                </Button>
                <Link to="/products" className="text-xs text-slate-400 hover:text-slate-300 font-semibold flex items-center gap-1 mt-1 justify-center">
                  <ArrowLeft className="h-3.5 w-3.5" /> Add more components
                </Link>
              </CardFooter>
            </Card>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Cart;
