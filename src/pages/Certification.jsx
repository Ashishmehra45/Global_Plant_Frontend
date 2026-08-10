import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, FileCheck, FileText, FileDigit, Award, AlertCircle, ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const mainRef = useRef(null);

  const certifications = [
    {
      icon: FileDigit,
      title: "Importer-Exporter Code (IEC)",
      content: "IEC AAMCG9975F, issued by the Office of the Joint Director General of Foreign Trade, Indore, under the Directorate General of Foreign Trade (DGFT), Ministry of Commerce and Industry, Government of India.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      shadow: "hover:shadow-blue-500/20"
    },
    {
      icon: FileText,
      title: "GST Registration",
      content: "GSTIN 23AAMCG9975F1Z4, registered in Madhya Pradesh.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      shadow: "hover:shadow-emerald-500/20"
    },
    {
      icon: Shield,
      title: "APEDA Registration (RCMC)",
      content: "Registered with the Agricultural and Processed Food Products Export Development Authority (APEDA) under the Registration-cum-Membership Certificate (RCMC) scheme.",
      // placeholder: "[Insert RCMC registration number]",
      // note: "Insert the RCMC certificate/registration number once available for a verifiable, specific claim rather than a general statement.",
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-200",
      shadow: "hover:shadow-orange-500/20"
    },
    {
      icon: FileCheck,
      title: "FSSAI License",
      content: "Operations are covered under a Food Safety and Standards Authority of India (FSSAI) license, reflecting compliance with India's food-safety regulatory framework for export-grade food products.",
      // placeholder: "[Insert FSSAI license number]",
      // note: "Insert the exact FSSAI license number and licence category (e.g., Central License for exporters) before publishing.",
      color: "text-teal-600",
      bg: "bg-teal-50",
      border: "border-teal-200",
      shadow: "hover:shadow-teal-500/20"
    },
    {
      icon: Award,
      title: "Quality Management",
      content: "Global Planet Products Export Private Limited is working toward ISO 9001:2015 Quality Management System certification, reflecting our commitment to consistent process discipline across sourcing, quality verification and dispatch.",
      // note: "Do not state ISO 9001:2015 as an achieved certification unless a valid certificate and certification body are confirmed — the copy above intentionally frames it as a commitment in progress. Replace with the certificate number once issued.",
      isProgress: true,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      shadow: "hover:shadow-indigo-500/20"
    }
  ];

  useGSAP(() => {
    // 1. Hero Image Expanding Mask Effect
    // Ye delete kar dena
    gsap.to('.hero-img-container', {
      width: '100%',
      borderRadius: '0px',
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom center',
        scrub: true,
      }
    });

    gsap.to('.hero-bg', {
      yPercent: 30,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    // 2. Sticky Scroll & Focus Effect for Cards
    const cards = gsap.utils.toArray('.cert-card');
    cards.forEach((card, i) => {
      // Entry Animation
      gsap.from(card, {
        y: 100,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
        }
      });

      // Scroll Focus Effect (Dims cards that are not in center)
      gsap.to(card, {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: card,
          start: 'top 60%',
          end: 'bottom 40%',
          toggleClass: 'card-active',
          scrub: true,
        }
      });
    });

  }, { scope: mainRef });

  return (
    <div ref={mainRef} className="w-full bg-[#f4f7f6] font-sans selection:bg-blue-900 selection:text-white min-h-screen">
      
      {/* ================= HERO SECTION (Dynamic Mask) ================= */}
      {/* ================= HERO SECTION (Full Background Image) ================= */}
      <section className="hero-section relative min-h-[100vh] w-full flex flex-col items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Full Screen Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <div className="hero-bg w-full h-[200%] bg-cover bg-center absolute top-[-15%]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070')" }}></div>
          
          {/* Dark overlay to make text readable */}
          <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply"></div>
          
          {/* Gradient fade at the bottom to merge smoothly with the next section */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f4f7f6]"></div> */}
        </div>

        {/* Central Content */}
        <div className="relative z-20 text-center flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm mb-6"
          >
            {/* <Shield className="w-4 h-4 text-blue-400" /> */}
            <span className="text-xs font-bold tracking-widest uppercase text-white">Verified Standards</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black text-white font-heading mb-6 tracking-tighter leading-[0.9]"
          >
            Global <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300">
              Compliance
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/90 text-lg md:text-2xl font-light max-w-3xl leading-relaxed drop-shadow-md mt-4"
          >
            The registrations and standards below underpin every consignment we ship across the globe.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 z-20 text-white/60 flex flex-col items-center gap-2"
        >
          <span className="uppercase tracking-widest text-[10px] font-bold">Explore</span>
          <ArrowDown size={16} />
        </motion.div>
      </section>

      {/* ================= STICKY SCROLL SECTION ================= */}
      <section className="py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column: Sticky Title */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
                  Our Formal <br/> Trade Framework
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
                  We operate strictly within India's formal regulatory frameworks. These certifications are our commitment to quality, transparency, and global standards.
                </p>
                <div className="hidden lg:block w-full h-[1px] bg-gradient-to-r from-gray-300 to-transparent"></div>
              </div>
            </div>

            {/* Right Column: Scrolling Cards */}
            <div className="lg:col-span-7 space-y-8 pb-32">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div 
                    key={index} 
                    className={`cert-card bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 shadow-lg border ${cert.border} transition-all duration-500 ${cert.shadow} hover:-translate-y-2 group`}
                    style={{ opacity: 0.4 }} // Initial state for scroll focus effect
                  >
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                      
                      {/* Icon Box with Pulse Effect */}
                      <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center ${cert.bg} border ${cert.border} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                        <Icon className={`w-8 h-8 ${cert.color} relative z-10 group-hover:scale-110 transition-transform duration-500`} />
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <h3 className="text-2xl font-black text-gray-900 font-heading tracking-tight group-hover:text-blue-900 transition-colors">
                            {cert.title}
                          </h3>
                          {cert.isProgress && (
                            <span className="bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                              In Progress
                            </span>
                          )}
                        </div>
                        
                        <p className="text-gray-600 font-medium leading-relaxed mb-6 text-[1.05rem]">
                          {cert.content}
                        </p>

                        {/* Placeholders (Uncommented for structural styling) */}
                        {cert.placeholder && (
                          <div className="inline-block bg-gray-50 border border-dashed border-gray-300 text-gray-500 font-mono px-4 py-2 rounded-xl mb-4 text-sm">
                            {cert.placeholder}
                          </div>
                        )}

                        {/* Editorial Note Highlight */}
                        {cert.note && (
                          <div className="bg-orange-50/50 rounded-2xl p-4 flex gap-4 border border-orange-100">
                            <AlertCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                            <div>
                              <span className="text-[10px] font-black text-orange-800 uppercase tracking-widest block mb-1">Editor Note</span>
                              <p className="text-sm text-orange-900/70 font-medium leading-relaxed">
                                {cert.note}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                      
                    </div>
                  </div>
                );
              })}
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
};

export default Certifications;