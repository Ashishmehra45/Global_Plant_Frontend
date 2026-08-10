import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Users, ShieldCheck, Sprout, ArrowRight, BookOpen, Scale, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sustainability = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Stagger animation for lists and grids
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const blogTopics = [
    "Why Madhya Pradesh Is India's Soybean Heartland",
    "Understanding Export Grades: What “Singapore” vs. “Europe” Quality Means for Cumin Buyers",
    "The Journey of a Spice Consignment: From Farm to Port",
    "India's Spice Export Growth: What It Means for International Buyers",
    "What Traceability Really Means in Agri-Commodity Exports",
    "A First-Time Buyer's Guide to Importing Rice from India"
  ];

  return (
    <div ref={containerRef} className="w-full bg-gray-50 min-h-screen pb-32 font-sans selection:bg-emerald-500 selection:text-white relative overflow-hidden">
      
      {/* 1. Immersive Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://i.pinimg.com/1200x/86/c8/c3/86c8c39b5897da3652c621c3975164ca.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-emerald-950/60 to-gray-950/90 backdrop-blur-[2px]" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 1.2 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-white mb-8 border border-white/20 shadow-lg"
          >
            {/* <Leaf size={18} className="text-emerald-400 animate-pulse" /> */}
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Our Approach</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white font-heading mb-6 tracking-tight leading-tight"
          >
            Built Into How We <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Source & Package.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Sustainability is not a separate initiative for us — it is built into how we source, document and package, from day one.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* 2. The Four Commitments (3D Floating Grid) */}
        <div className="py-32">
          <div className="text-center max-w-3xl mx-auto mb-20 relative">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-gray-900 font-heading mb-6 tracking-tight"
            >
              Four Commitments Structure That Work
            </motion.h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 [perspective:1200px]"
          >
            {[
              {
                icon: Users,
                title: "Responsible Sourcing & Farmer Partnerships",
                desc: "We favour long-term, fairly-priced offtake with farmers and processors over one-off spot purchases. It supports consistent supply on our side and steadier livelihoods on theirs.",
                color: "from-emerald-50 via-green-50 to-emerald-100",
                textColor: "text-emerald-950",
                iconColor: "text-emerald-600",
                border: "border-emerald-200"
              },
              {
                icon: ShieldCheck,
                title: "Quality, Food Safety & Traceability",
                desc: "A shipment can be traced back to where it began, because we source directly rather than through intermediaries. Documentation supports that traceability; it doesn't replace it.",
                color: "from-teal-50 via-cyan-50 to-teal-100",
                textColor: "text-teal-950",
                iconColor: "text-teal-600",
                border: "border-teal-200"
              },
              {
                icon: Sprout,
                title: "Environmental Stewardship",
                desc: "Packaging is chosen to protect product integrity without excess material, and we favour suppliers whose processing reduces post-harvest loss — responsible agriculture and export margin are not in conflict.",
                color: "from-blue-50 via-indigo-50 to-indigo-100",
                textColor: "text-indigo-950",
                iconColor: "text-indigo-600",
                border: "border-indigo-200"
              },
              {
                icon: Scale,
                title: "Ethical & Transparent Trade",
                desc: "Price, payment terms and quality are agreed transparently with every farmer, processor and buyer in our network, and held to internationally.",
                color: "from-rose-50 via-pink-50 to-pink-100",
                textColor: "text-pink-950",
                iconColor: "text-pink-600",
                border: "border-pink-200"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 80, rotateX: 20 },
                  visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", bounce: 0.4, duration: 1.2 } },
                }}
                className="preserve-3d h-full"
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                  whileHover={{ scale: 1.03, rotateY: 5, rotateX: 5, transition: { type: "spring", stiffness: 300 } }}
                  className={`bg-gradient-to-br ${item.color} p-10 lg:p-12 rounded-[2.5rem] shadow-lg hover:shadow-2xl border ${item.border} flex flex-col h-full relative overflow-hidden group cursor-pointer transition-shadow duration-500`}
                >
                  <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div
                    className="bg-white/80 backdrop-blur-md w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <item.icon className={`${item.iconColor} w-8 h-8`} />
                  </div>
                  
                  <div className="relative z-10 flex-grow">
                    <h3 className={`text-2xl font-black font-heading ${item.textColor} mb-4 tracking-tight`} style={{ transform: "translateZ(30px)" }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg font-medium opacity-90" style={{ transform: "translateZ(20px)" }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

       

        {/* 4. From the Blog (Search Visibility Content) */}
        <section className="py-24 bg-white rounded-[3rem] shadow-xl border border-gray-100 px-6 sm:px-12 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-[80px] -z-10"></div>
          
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <motion.div 
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-full mb-6"
            >
              <BookOpen size={16} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-800">Knowledge Hub</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-gray-900 font-heading mb-6 tracking-tight"
            >
              From the Blog
            </motion.h2>
            <motion.p 
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-lg text-gray-600 font-medium"
            >
              A recurring content section to build search visibility and buyer trust.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
          >
            {blogTopics.map((topic, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col h-full"
              >
                <div className="bg-emerald-100 p-3 rounded-xl w-fit mb-6 group-hover:bg-emerald-500 transition-colors duration-300">
                  <FileText className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-heading leading-tight mb-4 group-hover:text-emerald-700 transition-colors">
                  {topic}
                </h3>
                <div className="mt-auto pt-4 flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-wider">
                  Read Article <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

      </div>
    </div>
  );
};

export default Sustainability;