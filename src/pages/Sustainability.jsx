import { motion } from 'framer-motion';
import { Sprout, Droplets, Wind, Package, Users } from 'lucide-react';

const Sustainability = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const initiatives = [
    {
      icon: Sprout,
      title: "Responsible Sourcing",
      desc: "We procure exclusively from certified farms that practice crop rotation, organic fertilization, and soil health management to ensure long-term agricultural viability.",
      image: "https://images.unsplash.com/photo-1628183204987-a2f260bc4b84?q=80&w=2070"
    },
    {
      icon: Users,
      title: "Farmer Development",
      desc: "We conduct regular workshops, provide modern farming equipment subsidies, and ensure fair-trade pricing to uplift the socio-economic status of our farming partners.",
      image: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=2070"
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      desc: "Our partnered farms utilize smart drip irrigation and rainwater harvesting systems, reducing water wastage by up to 40% compared to traditional farming methods.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013"
    },
    {
      icon: Package,
      title: "Eco-Friendly Packaging",
      desc: "We are actively transitioning to biodegradable and recyclable packaging materials for bulk exports, minimizing single-use plastics in our supply chain.",
      image: "https://images.unsplash.com/photo-1611078712351-403d526e0689?q=80&w=2070"
    },
    {
      icon: Wind,
      title: "Carbon Footprint Reduction",
      desc: "Optimized logistics routes, solar-powered processing units, and localized sourcing hubs help us significantly cut down greenhouse gas emissions annually.",
      image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041"
    }
  ];

  return (
    <div className="w-full bg-agro-light/30">
      {/* 1. Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-agro-dark/80 to-agro-primary/90" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-md"
          >
            <Sprout className="w-10 h-10 text-agro-accent" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-white font-heading mb-6"
          >
            Nurturing Nature for a <br />
            <span className="text-agro-accent">Sustainable Future</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-green-50 max-w-3xl mx-auto"
          >
            Our commitment goes beyond exports. We are dedicated to protecting the earth, empowering communities, and building a resilient agricultural ecosystem.
          </motion.p>
        </div>
      </section>

      {/* 2. Image + Text Alternate Layouts (Initiatives) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {initiatives.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 mb-24 last:mb-0`}
              >
                {/* Image Side */}
                <motion.div 
                  variants={fadeInUp}
                  className="lg:w-1/2 w-full"
                >
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] group">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-agro-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div 
                  variants={fadeInUp}
                  className="lg:w-1/2 w-full"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white p-4 rounded-2xl shadow-md text-agro-primary">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-4xl font-extrabold text-gray-900 font-heading">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    {item.desc}
                  </p>
                  <ul className="space-y-4">
                    {[1, 2, 3].map((_, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                        <span className="w-2 h-2 rounded-full bg-agro-accent"></span>
                        Monitored metrics and continuous improvement practices.
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Bottom Green CTA Banner */}
      <section className="bg-agro-primary py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-agro-dark rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-6">Partner With a Greener Supply Chain</h2>
          <p className="text-xl mb-10 text-green-100">Join hands with us to promote environmentally conscious agricultural trade across borders.</p>
          <button className="bg-agro-accent text-agro-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all shadow-xl">
            Download Sustainability Report
          </button>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;