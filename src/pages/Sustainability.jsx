import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Globe, Users, TreePine, ShieldCheck, Sprout, Activity, ArrowRight } from 'lucide-react';

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

  return (
    <div ref={containerRef} className="w-full bg-gray-50 min-h-screen pb-32 font-sans selection:bg-emerald-500 selection:text-white relative overflow-hidden">
      
      {/* Background Ambient Orbs for Nature Feel */}
      {/* <div className="absolute top-0 left-0 w-full h-[70vh] bg-gradient-to-b from-emerald-50/80 to-transparent pointer-events-none"></div>
      <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-green-200/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-80 left-[-10%] w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-[100px] pointer-events-none"></div> */}

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
    <motion.h1 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-5xl md:text-7xl lg:text-8xl font-black text-white font-heading mb-6 tracking-tight leading-tight"
    >
      Growing with <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Responsibility.</span>
    </motion.h1>
    
    <motion.p 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed"
    >
      We want to leave the world a better place than we found it. Sustainability is not an afterthought—it is the guiding principle that shapes every shipment, every farm, and every partnership.
    </motion.p>
  </div>
</section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* 2. The Sustainability Framework (3D Floating Cards) */}
        <div className="py-32">
          <div className="text-center max-w-3xl mx-auto mb-20 relative">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-gray-900 font-heading mb-6 tracking-tight"
            >
              Our Sustainability Framework
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 font-light"
            >
              We focus our resources on innovating solutions that preserve natural ecosystems while empowering the communities at the heart of agriculture.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 [perspective:1200px]"
          >
            {[
              {
                icon: Sprout,
                title: "Stewarding the Land",
                desc: "Working to protect natural ecosystems by eliminating deforestation, incentivizing farmers to use degraded land, and supporting regenerative agricultural practices.",
                color: "from-emerald-50 via-green-50 to-emerald-100",
                textColor: "text-emerald-950",
                iconColor: "text-emerald-600",
                border: "border-emerald-200"
              },
              {
                icon: ShieldCheck,
                title: "Responsible Sourcing",
                desc: "Direct engagement with farmers to ensure fair and transparent procurement. We deploy traceability systems that connect every shipment back to its origin.",
                color: "from-teal-50 via-cyan-50 to-teal-100",
                textColor: "text-teal-950",
                iconColor: "text-teal-600",
                border: "border-teal-200"
              },
              {
                icon: Users,
                title: "Empowering People",
                desc: "Generating employment in rural areas, offering skill development, and upholding the human and labor rights of the people across our value chains.",
                color: "from-blue-50 via-indigo-50 to-indigo-100",
                textColor: "text-indigo-950",
                iconColor: "text-indigo-600",
                border: "border-indigo-200"
              },
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
                  className={`bg-gradient-to-br ${item.color} p-10 rounded-[2.5rem] shadow-lg hover:shadow-2xl border ${item.border} flex flex-col h-full relative overflow-hidden group cursor-pointer transition-shadow duration-500`}
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
                    <p className="text-gray-700 leading-relaxed text-base font-medium opacity-90" style={{ transform: "translateZ(20px)" }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 3. Technology & Sustainable Growth (Split Parallax Section) */}
        <section className="py-24 bg-white rounded-[3rem] shadow-xl border border-gray-100 px-6 sm:px-12 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-[80px] -z-10"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-full">
                <Activity size={16} className="text-emerald-600" />
                <span className="text-xs font-bold tracking-widest uppercase text-emerald-800">Innovation & Traceability</span>
              </motion.div>
              
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-gray-900 font-heading leading-[1.1] tracking-tight">
                Sustainable Growth through <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Technology</span>
              </motion.h2>
              
              <motion.p variants={fadeInUp} className="text-lg text-gray-600 leading-relaxed">
                Technology helps us collect data, improve transparency, and give farmers the information needed to grow volumes and quality. Our sustainability insights platform provides a single view across the supply chain, ensuring:
              </motion.p>

              <motion.ul variants={staggerContainer} className="space-y-4">
                {[
                  "Investing in green technologies for future expansions.",
                  "Continuous improvement in waste reduction and resource utilization.",
                  "Delivering safe, natural, and responsibly made products globally."
                ].map((point, idx) => (
                  <motion.li key={idx} variants={fadeInUp} className="flex items-start gap-4">
                    <div className="mt-1 bg-emerald-100 p-1.5 rounded-full">
                      <TreePine size={16} className="text-emerald-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group"
            >
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070" 
                alt="Technology in Agriculture" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/20 backdrop-blur-xl border border-white/30 p-6 rounded-2xl shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-500 p-3 rounded-xl">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-xl font-heading">Global Impact</h4>
                    <p className="text-emerald-100 text-sm font-medium">End-to-end metrics & transparency</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. Our Promise (Bold CTA) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Subtle background texture/gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-gray-950 to-gray-950 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white font-heading mb-8 tracking-tight">
              Our Promise
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-10">
              We grow with responsibility – ensuring our legacy in global agriculture contributes to a sustainable, resilient, and thriving future for people and the planet.
            </p>
            <button className="bg-emerald-500 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-400 transition-colors shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.7)] flex items-center gap-3 mx-auto group text-lg">
              Download 2026 Sustainability Report 
              <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Sustainability;