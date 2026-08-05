import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { ArrowRight, Leaf, Users, Globe, ShieldCheck } from 'lucide-react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const mainRef = useRef(null);

  const heroSlides = [
    { image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070' },
    { image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2089' },
  ];

  const complexStatsData = [
    { icon: Leaf, end: 15, suffix: "+", title: "Years Experience", desc: "Advised by a trade specialist with 15+ years of international trade and investment advisory experience.", color: "from-emerald-50 to-teal-100 text-teal-900 border-teal-200", iconColor: "text-teal-600" },
    { icon: Users, end: 100, suffix: "%", title: "Direct Sourcing", desc: "We work directly with farmers and processing units rather than through layers of intermediaries.", color: "from-amber-50 to-orange-100 text-orange-900 border-orange-200", iconColor: "text-orange-600" },
    { icon: Globe, end: 360, suffix: "°", title: "Global Reach", desc: "We are structured to trade with any market, not a fixed set of regions.", color: "from-blue-50 to-indigo-100 text-indigo-900 border-indigo-200", iconColor: "text-indigo-600" },
    { icon: ShieldCheck, end: 100, suffix: "%", title: "Grading Control", desc: "Fewer hand-offs mean tighter control over grading and a shorter path from origin to port.", color: "from-rose-50 to-pink-100 text-pink-900 border-pink-200", iconColor: "text-pink-600" }
  ];

  // GSAP Smooth Animations
  useGSAP(() => {
    gsap.from('.stat-card', {
      y: 80,
      opacity: 0,
      rotateX: -10,
      stagger: 0.15,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.stats-container',
        start: 'top 85%',
      }
    });

    gsap.to('.stat-card', {
      y: -12,
      duration: 2.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      stagger: { amount: 1.2, from: "start" }
    });

    gsap.from('.parallax-img', {
      scale: 1.2,
      y: 40,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.parallax-container',
        start: 'top 85%',
      }
    });
  }, { scope: mainRef });

  // Framer Motion Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <div ref={mainRef} className="w-full bg-white selection:bg-green-500 selection:text-white overflow-hidden">
      
      {/* 1. Ultra-Premium Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        
        {/* ABSOLUTE BACKGROUND WRAPPER */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            speed={1500}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="h-full w-full"
          >
            {heroSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="w-full h-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 10, ease: "linear" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/60 to-gray-950/90" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RELATIVE CONTENT WRAPPER */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-48 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-white mb-8 border border-white/20 shadow-lg"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Global Planet Products Export</span>
          </motion.div>
          
          <motion.h1
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white font-heading leading-tight md:leading-[1.05] mb-8 tracking-tight"
          >
            <motion.span variants={fadeInUp} className="block">Bringing India's Agricultural</motion.span>
            <motion.span variants={fadeInUp} className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 pb-2">
              Strength to the World
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            An export partner for spices, rice, soy products and oilseeds, built on direct relationships with farmers and processors, and advised by a trade specialist with 15+ years of international trade experience.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto justify-center"
          >
            <Link to="/contact" className="bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-500 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_-5px_rgba(22,163,74,0.4)] hover:shadow-[0_0_40px_-5px_rgba(22,163,74,0.6)] hover:-translate-y-1 w-full sm:w-auto text-lg">
              Request a Quotation <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
            <Link to="/products" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center hover:-translate-y-1 w-full sm:w-auto text-lg">
              Download Product Catalogue
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Perfectly Aligned Stats Section */}
      <section className="bg-gray-50 relative z-20 pb-24">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent opacity-50 pointer-events-none"></div>

        <div className="stats-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10 [perspective:1000px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {complexStatsData.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`stat-card bg-gradient-to-br ${stat.color} p-8 lg:p-10 rounded-[2rem] shadow-xl border flex flex-col justify-between group hover:shadow-2xl transition-shadow duration-500`}
                >
                  <div className="relative z-10 flex flex-col h-full items-start">
                    <div className="icon-box mb-8 p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className={`w-8 h-8 ${stat.iconColor}`} />
                    </div>
                    <div className="w-full">
                      <h2 className="text-5xl font-black mb-2 font-heading tracking-tight text-gray-900">
                        <CountUp end={stat.end} duration={3.5} enableScrollSpy scrollSpyOnce />
                        <span className={stat.iconColor}>{stat.suffix}</span>
                      </h2>
                      <h3 className="font-bold text-lg mb-2 tracking-tight text-gray-800">{stat.title}</h3>
                      <p className="text-sm leading-relaxed font-medium opacity-75">{stat.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Mathematical Masonry Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-16"
          >
            <h4 className="text-green-600 font-bold tracking-[0.2em] uppercase mb-4 text-sm">Our Verticals</h4>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 font-heading tracking-tight max-w-3xl">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">Commodities</span>
            </h2>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { title: "Rice (Basmati & Non-Basmati)", img: "https://plus.unsplash.com/premium_photo-1723726831918-9a8542e705cb?q=80&w=1089&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: "md:col-span-2 md:row-span-2" },
              { title: "Spices", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070", span: "md:col-span-1 md:row-span-1" },
              { title: "Soy Products & Oilseeds", img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2089", span: "md:col-span-1 md:row-span-1" }
            ].map((prod, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`${prod.span} relative group overflow-hidden rounded-[2rem] shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer`}
              >
                <img src={prod.img} alt={prod.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                  <h4 className="text-2xl font-bold text-white font-heading tracking-wide translate-y-2 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-300">{prod.title}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Balanced Parallax Text-Image Split */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-start"
            >
                <div className="w-16 h-1.5 bg-green-500 mb-8 rounded-full"></div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 font-heading leading-[1.1] tracking-tight">
                  Direct From <br/> <span className="text-green-600">Origin</span>
                </h2>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  Global Planet Products Export Private Limited is an Indore-based export house connecting India's farms and processing units with buyers around the world. We work directly with farmers and processing units, keeping the path from origin to destination short and transparent.
                </p>
                <Link to="/contact" className="group bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-colors inline-flex items-center gap-3 shadow-lg">
                    Get in Touch <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>
            </motion.div>

            <div className="parallax-container relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop" 
                    className="parallax-img w-full h-[115%] object-cover absolute top-[-7.5%]" 
                    alt="Agriculture Infrastructure" 
                 />
                 <div className="absolute inset-0 bg-black/10 transition-colors duration-500 hover:bg-transparent"></div>
                 <div className="absolute bottom-8 left-8 right-8 sm:right-auto bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-center gap-5 border border-white/50">
                    <div className="bg-green-100 p-3 rounded-xl">
                      <ShieldCheck className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-black text-xl font-heading">100% Certified</h4>
                      <p className="text-gray-600 text-sm font-medium">Export Grade Quality</p>
                    </div>
                 </div>
            </div>

        </div>
      </section>
    </div>
  );
};

export default Home;