import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Send, Loader2, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '../api/api';

const ProductDetail = () => {
  const { id } = useParams(); // URL se Product ki ID nikal li
  const navigate = useNavigate();
  
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  // Backend se specific product ka data lao
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await api.get(`/products/${id}`); 
        // Note: Backend me aapko router.get('/:id', getProductById) banana hoga
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        toast.error("Product not found!");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProductDetails();
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Backend ko query bhejo (Sath me product ka naam bhi attach kar diya)
      const queryPayload = {
        ...formData,
        productName: product.name,
        productId: product._id
      };
      
      await api.post('/queries', queryPayload); // API to save query
      
      setIsSubmitted(true);
      toast.success("Query sent successfully! We will contact you soon.");
      
    } catch (error) {
      toast.error("Failed to send query. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-12 h-12 text-green-500 animate-spin" />
      </div>
    );
  }

  if (!product) return <div className="min-h-screen flex items-center justify-center">Product not found.</div>;

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 pb-20 font-sans selection:bg-green-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-green-600 font-bold mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT SECTION: PRODUCT DETAILS */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 p-2"
            >
              <div className="relative h-[400px] rounded-[1.5rem] overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-black tracking-widest uppercase text-green-600 shadow-lg">
                  {product.category}
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 font-heading mb-6 tracking-tight">
                {product.name}
              </h1>
              
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed mb-8">
                <p>{product.desc}</p>
              </div>

              {/* Download Brochure Button */}
              <button className="flex items-center gap-3 bg-gray-900 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-green-500/30 w-full sm:w-auto justify-center">
                <Download size={20} />
                Download Brochure (PDF)
              </button>
            </motion.div>
          </div>

          {/* RIGHT SECTION: QUERY FORM */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 sticky top-32"
            >
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Request Received!</h3>
                  <p className="text-gray-500 font-medium">Our team will get back to you regarding <strong>{product.name}</strong> shortly.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 font-heading">Enquire About This Product</h3>
                  <p className="text-gray-500 text-sm mb-8 font-medium">Fill out the form below to get latest pricing and export details for {product.name}.</p>
                  
                  <form onSubmit={handleQuerySubmit} className="space-y-5">
                    
                    {/* Read-only Product Name field */}
                    <div>
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Product of Interest</label>
                      <input type="text" value={product.name} readOnly className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-600 font-bold cursor-not-allowed mt-1" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input required name="name" value={formData.name} onChange={handleInputChange} type="text" placeholder="Your Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50" />
                      </div>
                      <div>
                        <input required name="company" value={formData.company} onChange={handleInputChange} type="text" placeholder="Company Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50" />
                      </div>
                    </div>

                    <div>
                      <input required name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50" />
                    </div>

                    <div>
                      <input name="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="Phone Number (Optional)" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50" />
                    </div>

                    <div>
                      <textarea required name="message" value={formData.message} onChange={handleInputChange} rows="4" placeholder="Specific requirements (quantity, destination port, etc.)" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50 resize-none"></textarea>
                    </div>

                    <button 
                      type="submit" disabled={isSubmitting} 
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-70 shadow-lg shadow-green-500/30"
                    >
                      {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send size={18} />}
                      {isSubmitting ? 'Sending Request...' : 'Submit Request'}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;