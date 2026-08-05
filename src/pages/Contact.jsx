import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  Globe,
  MessageSquare,
  Building2,
  Map,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    country: "",
    product: "Spices",
    quantity: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan API integrate hogi
    console.log("Form Submitted: ", formData);
    alert("Thank you! Your query has been submitted successfully.");
    setFormData({
      name: "",
      company: "",
      country: "",
      product: "Spices",
      quantity: "",
      message: "",
    });
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen pb-32 font-sans selection:bg-green-500 selection:text-white relative overflow-hidden">
      {/* Background Ambient Orbs */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-green-50/50 to-transparent pointer-events-none"></div>
      <div className="absolute top-40 right-[-10%] w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 1. Immersive Hero Banner */}
      <section className="relative min-h-[50vh] py-24 flex items-center justify-center overflow-hidden rounded-b-[3rem] mx-2 sm:mx-4 mt-4 ">
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
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              Us
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-black max-w-2xl mx-auto font-light leading-relaxed"
          >
            Speak with our trade team about sourcing, quotations, and shipment
            planning.
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
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                <MapPin
                  className="text-green-600 group-hover:text-white transition-colors"
                  size={28}
                />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">
                Registered Office
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                Global Planet Products Export Private Limited
                <br />
                10/18 Yeshwant Niwas Road, Ankur Hospital Ke Paas,
                <br />
                Indore, Madhya Pradesh 452003, India
              </p>
            </motion.div>

            {/* Email & Phone Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-6 mb-6">
                <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center group-hover:bg-teal-500 transition-colors shrink-0">
                  <Mail
                    className="text-teal-600 group-hover:text-white transition-colors"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900 mb-1">
                    Email Us
                  </h3>
                  <a
                    href="mailto:[Insert company email]"
                    className="text-gray-500 font-medium hover:text-teal-600 transition-colors break-all"
                  >
                    [Insert company email]
                  </a>
                </div>
              </div>

              <div className="flex gap-6 mb-6">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors shrink-0">
                  <Phone
                    className="text-emerald-600 group-hover:text-white transition-colors"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900 mb-1">
                    Call Us
                  </h3>
                  <a
                    href="tel:[Insert company phone number]"
                    className="text-gray-500 font-medium hover:text-emerald-600 transition-colors"
                  >
                    [Insert company phone number]
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">
                  Business Hours:
                </p>
                <p className="text-gray-700 font-medium mt-1">
                  [Insert business hours]
                </p>
              </div>
            </motion.div>

            {/* Google Map Embed */}
           <motion.div 
              variants={fadeInUp} 
              className="bg-white rounded-[2rem] p-4 shadow-lg border border-gray-100 h-64 relative overflow-hidden"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.55657335967!2d75.79380962383827!3d22.72411032333796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1.5rem' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Right Column: Complete Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="lg:col-span-7"
          >
            <div className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="text-green-600" size={28} />
                <h2 className="text-3xl font-black text-gray-900 font-heading tracking-tight">
                  Enquiry Form
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Row 1: Name & Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 font-medium rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all shadow-inner hover:bg-gray-100/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Company Ltd."
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 font-medium rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all shadow-inner hover:bg-gray-100/50"
                    />
                  </div>
                </div>

                {/* Row 2: Country & Quantity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Country
                    </label>
                    <div className="relative">
                      <Globe
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        type="text"
                        required
                        placeholder="e.g. United Arab Emirates"
                        value={formData.country}
                        onChange={(e) =>
                          setFormData({ ...formData, country: e.target.value })
                        }
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 font-medium rounded-2xl pl-11 pr-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all shadow-inner hover:bg-gray-100/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Indicative Order Quantity
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 100 Metric Tons"
                      value={formData.quantity}
                      onChange={(e) =>
                        setFormData({ ...formData, quantity: e.target.value })
                      }
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 font-medium rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all shadow-inner hover:bg-gray-100/50"
                    />
                  </div>
                </div>

                {/* Row 3: Product Interest Dropdown */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    Product(s) of Interest
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) =>
                      setFormData({ ...formData, product: e.target.value })
                    }
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 font-medium rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all shadow-inner hover:bg-gray-100/50 cursor-pointer appearance-none"
                  >
                    <option value="Spices">Spices</option>
                    <option value="Rice">Rice</option>
                    <option value="Soy Products">Soy Products</option>
                    <option value="Oilseeds">Oilseeds</option>
                    <option value="Other Products">Other Products</option>
                  </select>
                </div>

                {/* Row 4: Message Textarea */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    Message
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Provide additional details about your sourcing requirements..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 font-medium rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all shadow-inner hover:bg-gray-100/50 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-green-600 transition-all duration-300 shadow-xl hover:shadow-green-500/30 flex items-center justify-center gap-3 group"
                >
                  Submit Enquiry
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
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
