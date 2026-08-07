import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, PackageOpen, Loader2, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api'; // Apne backend instance ka path

// Premium Background Images Array
const heroBackgrounds = [
  "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070", // Spices
  "https://i.pinimg.com/736x/eb/f4/3c/ebf43c6b42871de641ac82c7aef29e82.jpg", // Basmati Rice
  "https://i.pinimg.com/1200x/02/36/58/023658ea46c4f32c3781ae73cc8526fb.jpg", // Pulses/Grains
  "https://i.pinimg.com/1200x/42/8c/8e/428c8e06eb83089233a34167ac72a0e8.jpg"  // Soyabean/Farms
];

const Products = () => {
  const navigate = useNavigate();
  
  // States for Backend Data
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [isLoading, setIsLoading] = useState(true);

  // States for Filters
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [bgIndex, setBgIndex] = useState(0);

  // Background Slider Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % heroBackgrounds.length);
    }, 4500); 
    
    return () => clearInterval(interval);
  }, []);

  // FETCH PRODUCTS FROM BACKEND
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await api.get('/products/getAllProducts  '); // Apna GET API route hit karein
        const fetchedProducts = response.data;
        
        setProducts(fetchedProducts);
        
        // Dynamically extract unique categories from products
        const uniqueCategories = ['All', ...new Set(fetchedProducts.map(item => item.category))];
        setCategories(uniqueCategories);

      } catch (error) {
        console.error("Error fetching products from database:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter Logic (Runs whenever products, category, or search changes)
  useEffect(() => {
    let result = products;
    
    if (activeCategory !== 'All') {
      result = result.filter(product => product.category === activeCategory);
    }
    
    if (searchQuery) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredProducts(result);
  }, [products, activeCategory, searchQuery]);

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen pb-32 font-sans selection:bg-green-500 selection:text-white relative overflow-hidden">
      
      {/* Background Soft Orbs */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-green-50/50 to-transparent pointer-events-none"></div>
      <div className="absolute top-40 right-[-10%] w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-20 left-[-10%] w-[400px] h-[400px] bg-green-200/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* 1. Dynamic Auto-Sliding Hero Banner */}
      <section className="relative min-h-[60vh] py-24 flex items-center justify-center overflow-hidden rounded-b-[3rem] mx-2 sm:mx-4 mt-4 shadow-2xl bg-gray-950">
        
        <AnimatePresence mode="popLayout">
          <motion.img
            key={bgIndex}
            src={heroBackgrounds[bgIndex]}
            alt="Agriculture Background"
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center pb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-black text-white font-heading mb-6 tracking-tight leading-tight"
          >
            Our Premium <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Commodities</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Explore our diverse range of high-quality agricultural exports, ethically sourced directly from the finest farms in India.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        
        {/* 2. Floating Glassmorphism Control Center */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
          className="bg-white/90 backdrop-blur-2xl rounded-[2rem] lg:rounded-full p-4 lg:p-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col lg:flex-row justify-between items-center gap-4 -mt-16 mb-20 max-w-5xl mx-auto relative z-30 w-[95%] lg:w-full"
        >
          {/* Dynamic Categories Container */}
          <div className="flex overflow-x-auto w-full lg:w-auto p-1 gap-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 whitespace-nowrap overflow-hidden flex-shrink-0 ${
                  activeCategory === cat 
                    ? 'text-white shadow-md' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/50'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeCategoryTab"
                    className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80 flex-shrink-0 mt-2 lg:mt-0">
            <input 
              type="text" 
              placeholder="Search catalogue..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50/50 hover:bg-gray-100/80 border border-gray-200 text-gray-900 font-medium rounded-full py-3.5 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all shadow-inner"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
          </div>
        </motion.div>

        {/* 3. Liquid Animated Product Grid */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <Loader2 className="w-12 h-12 text-green-500 animate-spin mb-4" />
            <h3 className="text-xl font-bold text-gray-600">Loading our catalogue...</h3>
          </div>
        ) : (
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 [perspective:1200px]"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <motion.div
                    layout 
                    initial={{ opacity: 0, scale: 0.8, rotateX: 30, y: 50 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)", transition: { duration: 0.2 } }}
                    transition={{ 
                      duration: 0.5, 
                      type: "spring", 
                      bounce: 0.4,
                      delay: index * 0.05 
                    }}
                    key={product._id} // Backend uses _id
                    className="group preserve-3d"
                  >
                    <motion.div 
                      whileHover={{ y: -12, rotateX: 5, rotateY: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-[0_30px_50px_-15px_rgba(0,0,0,0.15)] transition-shadow duration-500 border border-gray-100 flex flex-col h-full relative"
                    >
                      {/* Image Section */}
                      <div className="relative h-64 overflow-hidden bg-gray-100">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070"; }}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                        
                        <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-xl px-4 py-1.5 rounded-full text-xs font-black tracking-wider text-white shadow-xl border border-white/30 transform group-hover:scale-105 transition-transform z-10">
                          {product.category}
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="p-8 flex flex-col flex-grow relative bg-white z-10 rounded-b-[2rem]">
                        <h3 className="text-2xl font-black font-heading text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-gray-500 text-sm mb-8 flex-grow line-clamp-3 leading-relaxed font-medium">
                          {product.desc}
                        </p>
                        
                        {/* Interactive Buttons Wrapper */}
                        <div className="border-t border-gray-100 pt-5 flex items-center justify-between gap-3 mt-auto">
                          
                          <button className="flex items-center gap-2 text-gray-900 font-bold group-hover:text-green-600 transition-colors text-sm uppercase tracking-widest w-full">
                            <span className="relative overflow-hidden flex-grow text-left">
                                Details
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                            </span> 
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-500 ease-out flex-shrink-0" />
                          </button>

                          {/* New ENQUIRE Button */}
                          <button 
                            onClick={() => navigate('/contact', { state: { product: product.name } })}
                            className="bg-green-50 hover:bg-green-600 text-green-700 hover:text-white flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-black transition-all duration-300 shadow-sm flex-shrink-0"
                          >
                            <MessageCircle size={16} />
                            Enquire
                          </button>
                          
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="col-span-full py-32 text-center bg-white rounded-[3rem] shadow-sm border border-dashed border-gray-200 flex flex-col items-center justify-center"
                >
                  <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                    <PackageOpen className="w-10 h-10 text-gray-300" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-3 font-heading">Nothing found</h3>
                  <p className="text-gray-500 text-lg max-w-md mx-auto">We couldn't find any products matching your current filters or search query.</p>
                  <button 
                    onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                    className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors shadow-lg hover:shadow-green-500/30"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Products;