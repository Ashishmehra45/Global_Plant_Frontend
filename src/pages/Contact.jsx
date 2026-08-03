import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, Globe, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Query',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan API integrate hogi (e.g., Admin Panel ke Leads me data bhejne ke liye)
    console.log("Form Submitted: ", formData);
    alert("Thank you! Your query has been submitted successfully.");
    setFormData({ name: '', email: '', subject: 'General Query', message: '' });
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen pb-32 font-sans selection:bg-green-500 selection:text-white relative overflow-hidden">
      
      {/* Background Ambient Orbs */}
      {/* <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-green-50/50 to-transparent pointer-events-none"></div>
      <div className="absolute top-40 right-[-10%] w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-[120px] pointer-events-none"></div> */}

      {/* 1. Immersive Hero Banner */}
      <section className="relative min-h-[50vh] py-24 flex items-center justify-center overflow-hidden rounded-b-[3rem] mx-2 sm:mx-4 mt-4  ">
        {/* <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')" }}
        /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 z-10" /> */}
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 1.2 }}
            className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20 shadow-lg"
          >
            <Globe className="w-8 h-8 text-green-400" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-black font-heading mb-6 tracking-tight leading-tight"
          >
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Touch</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-black max-w-2xl mx-auto font-light leading-relaxed"
          >
            Whether you are looking to import premium commodities or have a general inquiry, our global team is ready to assist you.
          </motion.p>
        </div>
      </section>

      {/* 2. Contact Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Contact Information */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 space-y-6"
          >
            {/* Address Card */}
            <motion.div variants={fadeInUp} className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                <MapPin className="text-green-600 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Global Headquarters</h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                globalPlanet Exports Ltd.<br />
                Level 12, Business Horizon Tower,<br />
                Financial District,<br />
                Bhopal, Madhya Pradesh - 462001 (India)
              </p>
            </motion.div>

            {/* Email Card */}
            <motion.div variants={fadeInUp} className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors">
                <Mail className="text-teal-600 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                For general queries & partnerships:<br />
                <a href="mailto:info@globalplanet.com" className="text-teal-600 font-bold hover:underline mt-1 inline-block">info@globalplanet.com</a>
              </p>
            </motion.div>

            {/* Phone Card */}
            <motion.div variants={fadeInUp} className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                <Phone className="text-emerald-600 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                Mon-Fri from 9am to 6pm (IST)<br />
                <a href="tel:+911234567890" className="text-emerald-600 font-bold hover:underline mt-1 inline-block">+91 12345 67890</a>
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Query Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="lg:col-span-7"
          >
            <div className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden">
              
              {/* Form Decorative Element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="text-green-600" size={28} />
                <h2 className="text-3xl font-black text-gray-900 font-heading tracking-tight">Send a Query</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 font-medium rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all shadow-inner hover:bg-gray-100/50"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 font-medium rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all shadow-inner hover:bg-gray-100/50"
                    />
                  </div>
                </div>

                {/* Subject Dropdown */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Inquiry Type</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 font-medium rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all shadow-inner hover:bg-gray-100/50 cursor-pointer appearance-none"
                  >
                    <option value="General Query">General Query</option>
                    <option value="Product Sourcing">Product Sourcing & Export</option>
                    <option value="Partnership">Partnership / Vendor</option>
                    <option value="Quality Compliance">Quality & Compliance</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                  <textarea 
                    required
                    rows="5"
                    placeholder="How can we help you today?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 font-medium rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all shadow-inner hover:bg-gray-100/50 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full sm:w-auto bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-green-600 transition-all duration-300 shadow-xl hover:shadow-green-500/30 flex items-center justify-center gap-3 group"
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;