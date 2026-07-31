import { motion, useScroll, useTransform } from "framer-motion";
import {
  Target,
  Eye,
  ShieldCheck,
  Award,
  Globe,
  Users,
  Clock,
  Leaf,
  ChevronRight,
} from "lucide-react";
import CountUp from "react-countup";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 3D Staggered text variants
  const wordAnimation = {
    hidden: { opacity: 0, rotateX: -90, y: 50 },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#f8fafc] overflow-hidden selection:bg-agro-accent selection:text-agro-dark"
    >
      {/* 1. Immersive 3D Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center [perspective:1000px]">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/1200x/76/ba/9d/76ba9d7f368379e839faa110653a0c2c.jpg')",
            y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]), // Smooth Parallax
          }}
        >
          <div className="absolute " />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20 preserve-3d">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, translateZ: -100 }}
            animate={{ opacity: 1, scale: 1, translateZ: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-2.5 rounded-full text-white mb-8 shadow-2xl"
          >
            <Leaf size={18} className="text-agro-accent animate-pulse" />
            <span className="text-sm font-bold tracking-[0.2em] uppercase">
              Redefining Export
            </span>
          </motion.div>

          <motion.h1
            variants={containerAnimation}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl font-black text-white font-heading leading-[1.1] mb-6 preserve-3d flex flex-wrap justify-center gap-4"
          >
            {["Rooted", "in", "Legacy,"].map((word, i) => (
              <motion.span
                key={i}
                variants={wordAnimation}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
            <br className="hidden md:block" />
            {["Scaling", "Globally."].map((word, i) => (
              <motion.span
                key={i}
                variants={wordAnimation}
                className="inline-block text-agro-accent"
              >
                {word}
              </motion.span>
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
                <h4 className="text-agro-primary font-black tracking-widest uppercase text-sm">
                  Who We Are
                </h4>
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold text-gray-950 mb-8 font-heading leading-[1.1] tracking-tight">
                Architects of a <br /> Modern Supply Chain
              </h2>
              <p className="text-gray-600 mb-6 text-xl leading-relaxed font-light">
                AgroExport isn't just a trading house; it's a highly engineered
                physical and digital infrastructure bridging local Indian farms
                to international markets with zero friction.
              </p>
              <p className="text-gray-600 mb-10 text-xl leading-relaxed font-light">
                Through strict quality parameters and a deep understanding of
                global trade logistics, we ensure every container delivers
                absolute perfection.
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
                  src="https://i.pinimg.com/736x/06/e7/65/06e765a03d33b72411eee6c18564e224.jpg"
                  alt="Agriculture"
                  className="w-full h-[600px] object-cover rounded-[2rem]"
                />

                {/* 3D Floating Element */}
                <motion.div
                  className="absolute bottom-10 -left-10 md:left-10 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white flex items-center gap-5"
                  style={{
                    transform:
                      "translateZ(50px), rotateY: 15deg, rotateX: 10deg",
                  }} // Pops out in 3D
                >
                  <div className="bg-gradient-to-br from-agro-primary to-agro-dark p-4 rounded-2xl shadow-inner bg-green-500">
                    <Award className="text-white w-10 h-10 " />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-950 text-2xl font-heading">
                      ISO 9001
                    </h4>
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">
                      Certified Export
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. High-Contrast 3D Stats Grid */}
      <section className="py-24 bg-[#edebeb7e] relative z-10 overflow-hidden">
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
              // 🎨 Cute Light Pastel Themes
              {
                icon: Clock,
                title: "Years Dominating",
                count: 25,
                suffix: "+",
                color: "from-emerald-50 to-teal-100",
                textColor: "text-teal-950",
                iconColor: "text-teal-600",
                border: "border-teal-200",
              },
              {
                icon: Users,
                title: "Global Partners",
                count: 400,
                suffix: "+",
                color: "from-amber-50 to-orange-100",
                textColor: "text-orange-950",
                iconColor: "text-orange-600",
                border: "border-orange-200",
              },
              {
                icon: Globe,
                title: "Nations Reached",
                count: 50,
                suffix: "+",
                color: "from-blue-50 to-indigo-100",
                textColor: "text-indigo-950",
                iconColor: "text-indigo-600",
                border: "border-indigo-200",
              },
              {
                icon: ShieldCheck,
                title: "Quality Guarantee",
                count: 100,
                suffix: "%",
                color: "from-rose-50 to-pink-100",
                textColor: "text-pink-950",
                iconColor: "text-pink-600",
                border: "border-pink-200",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                // 1. Entry Animation (Aate waqt mast Spring Bounce)
                variants={{
                  hidden: { opacity: 0, y: 60, rotateX: -30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { type: "spring", bounce: 0.5, duration: 1.2 },
                  },
                }}
                className="preserve-3d"
              >
                <motion.div
                  // 2. Continuous Moving/Floating Animation (Hawa mein tairta rahega)
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.2,
                  }} // Delay se 'wave' effect aayega
                  // 3. Hover pe 3D Bounce Effect
                  whileHover={{
                    scale: 1.05,
                    rotateX: 10,
                    rotateY: -10,
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                  className={`bg-gradient-to-br ${stat.color} p-10 rounded-[2.5rem] border ${stat.border} shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] flex flex-col items-center text-center group cursor-pointer relative overflow-hidden h-full`}
                >
                  {/* Soft Hover Glow overlay */}
                  <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Floating Icon Box */}
                  <div
                    className="bg-white/70 backdrop-blur-md p-5 rounded-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <stat.icon
                      className={`w-8 h-8 ${stat.iconColor} group-hover:rotate-12 transition-transform duration-300`}
                    />
                  </div>

                  {/* 3D Content (Numbers & Text) */}
                  <h3
                    className={`text-5xl font-black mb-2 font-heading tracking-tight ${stat.textColor}`}
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <CountUp end={stat.count} duration={3} enableScrollSpy />
                    {stat.suffix}
                  </h3>
                  <p
                    className={`${stat.iconColor} font-bold uppercase tracking-widest text-xs`}
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {stat.title}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     {/* 4. Glassmorphism Mission/Vision Cards (Ultra-Animated Premium Pastel Theme) */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Subtle background glow - Floating Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-100/30 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/30 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 [perspective:2000px]">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 relative">
            <motion.h2 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl font-black text-gray-950 font-heading mb-6 tracking-tight relative z-10"
            >
              The Core Foundation
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl text-gray-500 font-light"
            >
              Built on uncompromising standards, driving the future of international trade.
            </motion.p>
          </div>

          {/* Grid Container */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          >
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To architect a seamless pipeline between rich Indian agriculture and demanding global markets, ensuring absolute fairness and premium quality.",
                color: "from-emerald-50 via-teal-50 to-teal-100",
                textColor: "text-teal-950",
                iconColor: "text-teal-600",
                border: "border-teal-200/60"
              },
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To stand as the absolute pinnacle of trust and sustainability in the global agricultural export sector.",
                color: "from-blue-50 via-indigo-50 to-indigo-100",
                textColor: "text-indigo-950",
                iconColor: "text-indigo-600",
                border: "border-indigo-200/60"
              },
              {
                icon: ShieldCheck,
                title: "Core Values",
                desc: "Driven by intense integrity, technological integration, sustainable methodologies, and a client-obsessed culture.",
                color: "from-rose-50 via-pink-50 to-pink-100",
                textColor: "text-pink-950",
                iconColor: "text-pink-600",
                border: "border-pink-200/60"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                // 1. Grand Entry Animation (Pop + Twist)
                variants={{
                  hidden: { opacity: 0, y: 100, rotateX: -20, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 80, damping: 15, mass: 1 },
                  },
                }}
                className="preserve-3d h-full"
              >
                <motion.div
                  // 2. Fully Animated Continuous Float (Up & Down + Slight Rotate)
                  animate={{ 
                    y: [0, -15, 0],
                    rotateZ: [0, index % 2 === 0 ? 1 : -1, 0] // Halka sa left/right jhulna
                  }}
                  transition={{ 
                    duration: 5 + (index * 0.5), // Sab alag-alag speed pe float karenge
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                  
                  // 3. Magnetic Hover Effect
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 10, 
                    rotateX: -10, 
                    y: -10,
                    transition: { type: "spring", stiffness: 400, damping: 20 } 
                  }}
                  
                  className={`bg-gradient-to-br ${item.color} p-12 rounded-[2.5rem] shadow-xl border ${item.border} hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-shadow duration-500 flex flex-col h-full group cursor-pointer relative overflow-hidden`}
                >
                  
                  {/* Subtle Shimmer Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>

                  {/* Floating Icon Box (Deeper 3D pop) */}
                  <div
                    className="bg-white/90 backdrop-blur-md w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-8 shadow-sm group-hover:shadow-md group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-500"
                    style={{ transform: "translateZ(60px)" }}
                  >
                    <item.icon className={`${item.iconColor} w-10 h-10 group-hover:rotate-12 transition-transform duration-500`} />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-grow relative z-10">
                    <h3
                      className={`text-3xl font-black font-heading ${item.textColor} mb-5 tracking-tight`}
                      style={{ transform: "translateZ(40px)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-gray-700 leading-relaxed text-lg font-medium opacity-90"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      {item.desc}
                    </p>
                  </div>

                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Global CSS for Shimmer (Add to your global.css or tailwind config if not working) */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes shimmer {
            100% { transform: translateX(100%); }
          }
        `}} />
      </section>
    </div>
  );
};

export default About;
