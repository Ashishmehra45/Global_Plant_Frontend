import { motion } from 'framer-motion';
import { Leaf, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* 1. Final CTA Block */}
      <motion.div
        className="bg-gray-950/70 py-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6">
              Ready to Experience <span className="text-agro-accent">Premium Quality?</span>
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Connecting global markets with India's agricultural excellence. Get a quote or explore our catalogue today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/products" className="bg-white text-gray-950 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-3 shadow-xl hover:scale-105 text-base">
                    Browse Catalogue <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="bg-agro-primary text-white px-10 py-4 rounded-full font-bold hover:bg-agro-dark transition-all flex items-center justify-center gap-3 shadow-xl hover:scale-105 text-base">
                    Contact Us Today <ArrowRight size={20} />
                </Link>
            </div>
        </div>
      </motion.div>

      {/* 2. Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Leaf className="h-9 w-9  text-green-700" />
              <span className="text-3xl font-heading font-bold text-white">globalPlanet</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Sourcing India's agricultural excellence. Delivering with trust and global standards.
            </p>
            {/* Safe Social Links without buggy icons */}
            <div className="flex space-x-5 font-bold text-sm">
              <a href="#" className="hover:text-agro-accent transition-colors">FACEBOOK</a>
              <a href="#" className="hover:text-agro-accent transition-colors">TWITTER</a>
              <a href="#" className="hover:text-agro-accent transition-colors">LINKEDIN</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-agro-accent transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-agro-accent transition-colors">Products</Link></li>
              <li><Link to="/quality" className="hover:text-agro-accent transition-colors">Quality Assurance</Link></li>
              <li><Link to="/sustainability" className="hover:text-agro-accent transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          {/* Products Categories */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Top Commodities</h3>
            <ul className="space-y-3">
              <li><Link to="/products" className="hover:text-agro-accent transition-colors">Premium Basmati Rice</Link></li>
              <li><Link to="/products" className="hover:text-agro-accent transition-colors">Indian Spices</Link></li>
              <li><Link to="/products" className="hover:text-agro-accent transition-colors">Cereals & Pulses</Link></li>
              <li><Link to="/products" className="hover:text-agro-accent transition-colors">Soyabean Products</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Headquarters</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-agro-accent flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-400 text-sm">123 Export Hub, Global Trade Avenue, Mumbai, India 400001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-agro-accent flex-shrink-0" size={20} />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-agro-accent flex-shrink-0" size={20} />
                <span className="text-gray-400 text-sm">info@agroexport.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} AgroExport. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;