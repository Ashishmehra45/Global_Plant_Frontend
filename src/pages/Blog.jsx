import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight, Sparkles, BookOpen, User, Tag } from 'lucide-react';

// Mock Blog Posts Data
const blogCategories = ['All', 'Market Trends', 'Sustainable Farming', 'Global Logistics', 'Export Standards'];

const blogPosts = [
  {
    id: 1,
    title: "Global Basmati Rice Trade Outlook 2026: Supply Chains & Demand Shifts",
    excerpt: "An in-depth analysis of international demand patterns, freight rate dynamics, and premium grain yield forecasts across European and Middle Eastern markets.",
    category: "Market Trends",
    date: "July 24, 2026",
    readTime: "6 min read",
    author: "Ravi K. Tiwari",
    authorRole: "Export Analyst",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=2070",
    featured: true,
  },
  {
    id: 2,
    title: "Regenerative Agriculture: How Indian Farmers are Redefining Sustainable Exports",
    excerpt: "Discover how organic soil replenishment and water conservation methodologies are increasing crop resilience while satisfying strict EU chemical residency standards.",
    category: "Sustainable Farming",
    date: "July 18, 2026",
    readTime: "4 min read",
    author: "Ananya Sharma",
    authorRole: "Agronomy Specialist",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfefcb0c?q=80&w=2070",
    featured: false,
  },
  {
    id: 3,
    title: "Navigating International Food Safety Standards: ISO 22000 & BRCGS Decoded",
    excerpt: "Key protocols every global importer needs to verify when sourcing agricultural commodities from South Asian export hubs.",
    category: "Export Standards",
    date: "July 11, 2026",
    readTime: "5 min read",
    author: "Vikramaditya Roy",
    authorRole: "Quality Compliance Head",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070",
    featured: false,
  },
  {
    id: 4,
    title: "Cold Chain Innovations: Retaining Spice Essential Oils During Maritime Freight",
    excerpt: "How climate-controlled atmospheric packaging prevents volatile oil loss in cardamom and black pepper shipments across long-transit oceanic routes.",
    category: "Global Logistics",
    date: "June 29, 2026",
    readTime: "7 min read",
    author: "Siddharth Verma",
    authorRole: "Supply Chain Director",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2089",
    featured: false,
  },
  {
    id: 5,
    title: "The Millet Revolution: Scaling Ancient Grains for Western Wellness Markets",
    excerpt: "Why gluten-free supergrains like Sorghum and Pearl Millet are seeing unprecedented adoption across North American food processing verticals.",
    category: "Market Trends",
    date: "June 15, 2026",
    readTime: "5 min read",
    author: "Ravi K. Tiwari",
    authorRole: "Export Analyst",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070",
    featured: false,
  }
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPost = blogPosts.find(post => post.featured);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen pb-32 font-sans selection:bg-green-500 selection:text-white relative overflow-hidden">
      
      {/* Background Soft Orbs */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-green-50/50 to-transparent pointer-events-none"></div>
      <div className="absolute top-40 right-[-10%] w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-20 left-[-10%] w-[400px] h-[400px] bg-green-200/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* 1. Hero Section */}
      <section className="relative min-h-[50vh] py-24 flex items-center justify-center overflow-hidden rounded-b-[3rem] mx-2 sm:mx-4 mt-4 shadow-2xl bg-gray-950">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500937386664-56d1dfefcb0c?q=80&w=2070')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-10" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 1.2 }}
            className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20 shadow-lg"
          >
            <BookOpen className="w-8 h-8 text-green-400" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white font-heading mb-6 tracking-tight leading-tight"
          >
            Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Perspectives</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Expert analysis on global agricultural trade, supply chain innovation, sustainable crop yield, and international export standards.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        
        {/* 2. Floating Filter & Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="bg-white/90 backdrop-blur-2xl rounded-full p-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col lg:flex-row justify-between items-center gap-4 -mt-12 mb-16 max-w-5xl mx-auto relative z-30"
        >
          {/* Category Tabs */}
          <div className="flex overflow-x-auto no-scrollbar w-full lg:w-auto p-1 gap-2">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 whitespace-nowrap overflow-hidden ${
                  activeCategory === cat 
                    ? 'text-white shadow-md' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/50'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeBlogTab"
                    className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80 flex-shrink-0">
            <input 
              type="text" 
              placeholder="Search insights..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 hover:bg-gray-100/80 border border-gray-200 text-gray-900 font-medium rounded-full py-3.5 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all"
            />
            <Search className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
          </div>
        </motion.div>

        {/* 3. Featured Main Article Banner (If no search query) */}
        {!searchQuery && activeCategory === 'All' && featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-emerald-50 via-teal-50/30 to-white border border-teal-200/60 rounded-[3rem] p-8 lg:p-12 shadow-xl grid lg:grid-cols-12 gap-10 items-center group cursor-pointer hover:shadow-2xl transition-all duration-500">
              
              <div className="lg:col-span-7 relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-md">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-gray-950/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-2">
                  <Sparkles size={14} className="text-green-400" /> Featured Highlight
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
                <div>
                  <div className="flex items-center gap-4 text-xs font-bold text-teal-700 uppercase tracking-widest mb-4">
                    <span className="bg-teal-100 px-3 py-1 rounded-full">{featuredPost.category}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {featuredPost.readTime}</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black font-heading text-gray-950 mb-6 leading-tight group-hover:text-green-600 transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed font-light mb-8 text-lg">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-teal-100 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center">
                      {featuredPost.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{featuredPost.author}</h4>
                      <p className="text-xs text-gray-500 font-medium">{featuredPost.authorRole}</p>
                    </div>
                  </div>

                  <div className="bg-gray-950 group-hover:bg-green-600 text-white p-3 rounded-full transition-colors">
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* 4. Blog Posts Liquid Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:1200px]">
          <AnimatePresence mode="popLayout">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, idx) => (
                <motion.div
                  layout
                  key={post.id}
                  initial={{ opacity: 0, y: 50, rotateX: 20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0.3, delay: idx * 0.08 }}
                  className="group preserve-3d"
                >
                  <motion.div 
                    whileHover={{ y: -10, rotateX: 4, rotateY: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 flex flex-col h-full cursor-pointer relative"
                  >
                    {/* Image Header */}
                    <div className="relative h-60 overflow-hidden bg-gray-100">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                      
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                        {post.category}
                      </div>

                      <div className="absolute bottom-4 left-4 text-white/90 text-xs font-semibold flex items-center gap-3">
                        <span className="flex items-center gap-1"><Calendar size={13} /> {post.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime}</span>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-8 flex flex-col flex-grow bg-white">
                      <h3 className="text-2xl font-bold font-heading text-gray-950 mb-4 group-hover:text-green-600 transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-500 text-sm mb-8 flex-grow line-clamp-3 leading-relaxed font-medium">
                        {post.excerpt}
                      </p>

                      {/* Author & Read More */}
                      <div className="border-t border-gray-100 pt-5 flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                          <User size={16} className="text-green-600" />
                          <span className="text-xs font-bold text-gray-700">{post.author}</span>
                        </div>

                        <span className="text-xs font-bold uppercase tracking-widest text-green-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Read More <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-24 text-center bg-white rounded-[3rem] border border-dashed border-gray-200">
                <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your category selection or search term.</p>
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* 5. Newsletter Subscription CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-28 bg-gradient-to-r from-gray-950 via-teal-950 to-gray-950 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.2em] text-green-400 uppercase mb-4 block">Stay Ahead Of The Market</span>
            <h2 className="text-4xl md:text-5xl font-black font-heading mb-6 tracking-tight">
              Subscribe to Commodity Intelligence
            </h2>
            <p className="text-gray-300 font-light text-lg mb-10">
              Get monthly export reports, freight trend updates, and crop yield forecasts directly in your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your corporate email..." 
                className="bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-full px-6 py-4 flex-grow focus:outline-none focus:ring-2 focus:ring-green-400 backdrop-blur-md"
              />
              <button className="bg-green-500 text-gray-950 px-8 py-4 rounded-full font-bold hover:bg-green-400 transition-all shadow-lg hover:shadow-green-500/50 flex-shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Blog;