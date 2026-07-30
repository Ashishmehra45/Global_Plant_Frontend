import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Eye, ShieldCheck, Award, Globe, Users, Clock, Leaf, ChevronRight } from 'lucide-react';
import CountUp from 'react-countup';
import { useRef } from 'react';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 3D Staggered text variants
  const wordAnimation = {
    hidden: { opacity: 0, rotateX: -90, y: 50 },
    visible: { 
      opacity: 1, 
      rotateX: 0, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } 
    },
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div ref={containerRef} className="w-full bg-[#f8fafc] overflow-hidden selection:bg-agro-accent selection:text-agro-dark">
      
      {/* 1. Immersive 3D Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center [perspective:1000px]">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1592982537447-6f296d9f6976?q=80&w=2070')",
            y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) // Smooth Parallax
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/60 to-[#f8fafc]" />
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20 preserve-3d">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, translateZ: -100 }}
            animate={{ opacity: 1, scale: 1, translateZ: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-2.5 rounded-full text-white mb-8 shadow-2xl"
          >
            <Leaf size={18} className="text-agro-accent animate-pulse" />
            <span className="text-sm font-bold tracking-[0.2em] uppercase">Redefining Export</span>
          </motion.div>
          
          <motion.h1 
            variants={containerAnimation}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl font-black text-white font-heading leading-[1.1] mb-6 preserve-3d flex flex-wrap justify-center gap-4"
          >
            {['Rooted', 'in', 'Legacy,'].map((word, i) => (
              <motion.span key={i} variants={wordAnimation} className="inline-block">{word}</motion.span>
            ))}
            <br className="hidden md:block" />
            {['Scaling', 'Globally.'].map((word, i) => (
              <motion.span key={i} variants={wordAnimation} className="inline-block text-agro-accent">{word}</motion.span>
            ))}
          </motion.h1>
        </div>
      </section>

      {/* 2. 3D Floating Identity Section */}
      <section className="py-32 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            
            {/* Left Content with 3D Reveal */}
            <motion.div 
              initial={{ opacity: 0, x: -100, rotateY: -30 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:w-1/2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-12 bg-agro-primary rounded-full"></div>
                <h4 className="text-agro-primary font-black tracking-widest uppercase text-sm">Who We Are</h4>
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold text-gray-950 mb-8 font-heading leading-[1.1] tracking-tight">
                Architects of a <br/> Modern Supply Chain
              </h2>
              <p className="text-gray-600 mb-6 text-xl leading-relaxed font-light">
                AgroExport isn't just a trading house; it's a highly engineered physical and digital infrastructure bridging local Indian farms to international markets with zero friction.
              </p>
              <p className="text-gray-600 mb-10 text-xl leading-relaxed font-light">
                Through strict quality parameters and a deep understanding of global trade logistics, we ensure every container delivers absolute perfection.
              </p>
              <button className="group flex items-center gap-3 bg-gray-950 text-white px-8 py-4 rounded-full font-bold hover:bg-agro-primary transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-agro-primary/30">
                Explore Our Infrastructure 
                <ChevronRight className="group-hover:translate-x-1.5 transition-transform" />
              </button>
            </motion.div>
            
            {/* Right Image with intense 3D Tilt Effect */}
            <motion.div 
              className="lg:w-1/2 relative [perspective:1000px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                whileHover={{ rotateY: -15, rotateX: 10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] preserve-3d border border-white/50 bg-white p-2"
              >
                <img 
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfefcb0c?q=80&w=2070" 
                  alt="Agriculture" 
                  className="w-full h-[600px] object-cover rounded-[2rem]"
                />
                
                {/* 3D Floating Element */}
                <motion.div 
                  className="absolute bottom-10 -left-10 md:left-10 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white flex items-center gap-5"
                  style={{ transform: "translateZ(50px)" }} // Pops out in 3D
                >
                  <div className="bg-gradient-to-br from-agro-primary to-agro-dark p-4 rounded-2xl shadow-inner">
                    <Award className="text-white w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-950 text-2xl font-heading">ISO 9001</h4>
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Certified Export</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. High-Contrast 3D Stats Grid */}
      <section className="py-24 bg-gray-950 relative z-10 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-agro-primary/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-agro-accent/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 [perspective:1200px]">
          <motion.div 
            variants={containerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Clock, title: "Years Dominating", count: 25, suffix: "+" },
              { icon: Users, title: "Global Partners", count: 400, suffix: "+" },
              { icon: Globe, title: "Nations Reached", count: 50, suffix: "+" },
              { icon: ShieldCheck, title: "Quality Guarantee", count: 100, suffix: "%" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 50, rotateX: -45 },
                  visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", damping: 12 } }
                }}
                whileHover={{ y: -15, scale: 1.05, rotateX: 10, rotateY: -10 }}
                className="bg-white/5 backdrop-blur-lg p-10 rounded-[2rem] border border-white/10 hover:border-agro-accent/50 transition-colors flex flex-col items-center text-center group preserve-3d cursor-pointer"
              >
                <div className="bg-white/10 p-5 rounded-2xl mb-6 group-hover:bg-agro-accent transition-colors duration-500" style={{ transform: "translateZ(30px)" }}>
                  <stat.icon className="w-8 h-8 text-white group-hover:text-gray-950 transition-colors" />
                </div>
                <h3 className="text-5xl font-black text-white mb-2 font-heading tracking-tight" style={{ transform: "translateZ(20px)" }}>
                  <CountUp end={stat.count} duration={3} enableScrollSpy />{stat.suffix}
                </h3>
                <p className="text-gray-400 font-medium uppercase tracking-widest text-xs" style={{ transform: "translateZ(10px)" }}>{stat.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Glassmorphism Mission/Vision Cards */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 [perspective:1000px]">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-black text-gray-950 font-heading mb-6 tracking-tight">The Core Foundation</h2>
            <p className="text-xl text-gray-500 font-light">Built on uncompromising standards, driving the future of international trade.</p>
          </div>

          <motion.div 
            variants={containerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { icon: Target, title: 'Our Mission', desc: 'To architect a seamless pipeline between rich Indian agriculture and demanding global markets, ensuring absolute fairness and premium quality.' },
              { icon: Eye, title: 'Our Vision', desc: 'To stand as the absolute pinnacle of trust and sustainability in the global agricultural export sector.' },
              { icon: ShieldCheck, title: 'Core Values', desc: 'Driven by intense integrity, technological integration, sustainable methodologies, and a client-obsessed culture.' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, rotateY: 45 },
                  visible: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                whileHover={{ scale: 1.03, rotateY: 5, rotateX: 5 }}
                className="bg-[#f8fafc] p-12 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl hover:shadow-agro-primary/20 transition-all duration-500 preserve-3d"
              >
                <div className="bg-white w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-8 shadow-md" style={{ transform: "translateZ(40px)" }}>
                  <item.icon className="text-agro-primary w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black font-heading text-gray-950 mb-5" style={{ transform: "translateZ(30px)" }}>{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg font-light" style={{ transform: "translateZ(20px)" }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;