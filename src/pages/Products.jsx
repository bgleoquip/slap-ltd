import { useState } from 'react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { Filter, ShoppingCart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useCart();
  const [addedIds, setAddedIds] = useState([]);

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedIds(prev => [...prev, product.id]);
    setTimeout(() => {
      setAddedIds(prev => prev.filter(id => id !== product.id));
    }, 1200);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Title & Category Filters */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-slate-200 pb-8 mb-10">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-navy-800 uppercase">
              Capabilities Catalog
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Select standard mechanical components, cast iron components, and compressor spares.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
              <Filter className="h-4 w-4" /> Filter:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {categories.map(cat => (
                <Button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  className={`rounded-full px-4 h-8 text-xs font-semibold cursor-pointer transition-colors ${
                    selectedCategory === cat
                      ? 'bg-gold hover:bg-gold-light text-navy-900 shadow-sm border-gold'
                      : 'border-slate-300 text-navy-700 hover:bg-slate-50 hover:text-navy-900 bg-white'
                  }`}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map(product => (
            <Card key={product.id} className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between rounded-xl overflow-hidden group">
              <div>
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-white/95 border border-slate-200 text-gold font-bold px-2.5 py-0.5 shadow-sm">
                      {product.category}
                    </Badge>
                  </div>
                </div>

                {/* Card Title & Content */}
                <CardHeader className="p-6 pb-2">
                  <CardTitle className="text-base font-bold text-navy-800 group-hover:text-gold transition-colors line-clamp-1">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-slate-500 text-xs mt-1 leading-relaxed line-clamp-3">
                    {product.description}
                  </CardDescription>
                </CardHeader>
              </div>

              <div>
                <CardContent className="px-6 pt-0 pb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-extrabold text-navy-800">₹{product.price.toLocaleString('en-IN')}</span>
                    <span className="text-xs text-slate-400">/ unit</span>
                  </div>
                </CardContent>

                {/* Action button */}
                <CardFooter className="bg-slate-50/50 border-t border-slate-100 px-6 py-4 flex items-center justify-end">
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className={`h-9 px-4 rounded-md font-semibold text-xs flex items-center gap-1.5 transition-all shadow-sm cursor-pointer ${
                      addedIds.includes(product.id)
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                        : 'bg-gold hover:bg-gold-light text-navy-900'
                    }`}
                  >
                    {addedIds.includes(product.id) ? (
                      <>
                        <Check className="h-4 w-4" /> Added
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-4 w-4" /> Add to Order
                      </>
                    )}
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white border border-slate-200 rounded-xl max-w-lg mx-auto shadow-sm mt-8">
            <h3 className="text-lg font-bold text-navy-800">No capabilities found</h3>
            <p className="text-sm text-slate-500 mt-1.5">There are no items matching this category at the moment.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Products;
