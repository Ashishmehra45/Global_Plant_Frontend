import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, PackageOpen } from 'lucide-react';
import { productsData, categories } from '../data/products';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // Filter Logic
  useEffect(() => {
    let result = productsData;
    
    // Category Filter
    if (activeCategory !== 'All') {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Search Filter
    if (searchQuery) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredProducts(result);
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full bg-gray-50 min-h-screen pb-24">
      
      {/* 1. Stunning Hero Banner */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070')" }}
        />
        <div className="absolute inset-0 bg-agro-dark/80 backdrop-blur-sm" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20"
          >
            <PackageOpen className="w-8 h-8 text-agro-accent" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold text-white font-heading mb-4"
          >
            Our Premium <span className="text-agro-accent">Catalogue</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Explore our diverse range of high-quality agricultural commodities, sourced directly from the finest farms in India.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        
        {/* 2. Interactive Filter & Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-[2rem] p-6 shadow-xl flex flex-col lg:flex-row justify-between items-center gap-6 mb-16 border border-gray-100"
        >
          {/* Category Pills */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-agro-primary text-white shadow-md scale-105' 
                    : 'bg-gray-100 text-gray-600 hover:bg-agro-light hover:text-agro-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-agro-primary focus:border-transparent transition-all"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
          </div>
        </motion.div>

        {/* 3. Animated Product Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                  key={product.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
                >
                  {/* Image Section with Zoom */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    {/* Dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-agro-primary shadow-sm">
                      {product.category}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow relative bg-white z-10">
                    <h3 className="text-xl font-bold font-heading text-gray-900 mb-3 group-hover:text-agro-primary transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                      {product.desc}
                    </p>
                    
                    {/* Bottom Action */}
                    <div className="border-t border-gray-100 pt-4 flex justify-between items-center mt-auto">
                      <button className="flex items-center gap-2 text-agro-dark font-bold hover:text-agro-primary transition-colors text-sm uppercase tracking-wide">
                        View Details <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              /* Empty State */
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="col-span-full py-20 text-center"
              >
                <PackageOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-700 mb-2">No Products Found</h3>
                <p className="text-gray-500">We couldn't find anything matching your search criteria.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};

export default Products;