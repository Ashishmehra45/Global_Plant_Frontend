import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Package,
  PlusCircle,
  MessageSquare,
  LayoutDashboard,
  LogOut,
  Search,
  MoreVertical,
  Eye,
  Loader2,
  Image as ImageIcon,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import api from "../api/api";

// --- MOCK DATA FOR QUERIES ---
const initialQueries = [
  {
    id: 101,
    customer: "John Doe (UK)",
    email: "john@eurofoods.com",
    product: "Premium Basmati Rice",
    status: "New",
    date: "2026-07-30",
  },
  {
    id: 102,
    customer: "Alisha Traders (UAE)",
    email: "contact@alishatrade.ae",
    product: "Organic Black Pepper",
    status: "In Progress",
    date: "2026-07-29",
  },
  {
    id: 103,
    customer: "Green Earth Inc (USA)",
    email: "sourcing@greenearth.us",
    product: "Bulk Spices",
    status: "Resolved",
    date: "2026-07-25",
  },
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [imagePreview, setImagePreview] = useState(null);

  // Data States
  const [products, setProducts] = useState([]);
  const [queries, setQueries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State matched exactly with Mongoose Schema
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "Spices",
    image: "",
    desc: "",
  });

  // --- API CALLS ---
  useEffect(() => {
    fetchProducts();
    fetchQueries();
  }, []);

  const fetchProducts = async () => {
    const loadingToast = toast.loading("Loading products...");

    try {
      setIsLoading(true);

      const response = await api.get("/products/getAllProducts");
      setProducts(response.data);

      toast.dismiss(loadingToast);
      toast.success("Products loaded successfully! 🎉");
    } catch (error) {
      console.error("Error fetching products:", error);

      toast.dismiss(loadingToast);
      toast.error(error.response?.data?.message || "Failed to fetch products!");

      setProducts([
        {
          _id: "1a2b",
          name: "Premium Basmati Rice",
          category: "Rice",
          image:
            "https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=200",
          desc: "High quality rice",
        },
        {
          _id: "3c4d",
          name: "Organic Black Pepper",
          category: "Spices",
          image:
            "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=200",
          desc: "Fresh organic pepper",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchQueries = async () => {
    const loadingToast = toast.loading("Loading queries...");

    try {
      setIsLoading(true);

      const response = await api.get("/products/product/inquiries");

      setQueries(response.data);

      toast.dismiss(loadingToast);
      toast.success("Queries loaded successfully! 📩");
    } catch (error) {
      console.error("Error fetching queries:", error);

      toast.dismiss(loadingToast);
      toast.error(error.response?.data?.message || "Failed to fetch queries!");
    } finally {
      setIsLoading(false);
    }
  };

  // --- FORM SUBMIT HANDLER ---
  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (
      !newProduct.name ||
      !newProduct.category ||
      !newProduct.image ||
      !newProduct.desc
    ) {
      toast.error("Please fill all fields!");
      return;
    }

    const loadingToast = toast.loading("Publishing product...");

    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("name", newProduct.name);
      formData.append("category", newProduct.category);
      formData.append("desc", newProduct.desc);
      formData.append("image", newProduct.image);

      const response = await api.post("/products/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.dismiss(loadingToast);
      toast.success("🎉 Product added successfully!");

      setProducts([...products, response.data.product]);

      // Form reset
      setNewProduct({
        name: "",
        category: "Spices",
        image: "",
        desc: "",
      });

      setImagePreview(null);
      setActiveTab("products");
    } catch (error) {
      console.error("Error adding product:", error);

      toast.dismiss(loadingToast);

      toast.error(error.response?.data?.message || "❌ Failed to add product!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProduct((prev) => ({ ...prev, image: file })); // File object ko state me save kiya
      setImagePreview(URL.createObjectURL(file)); // Preview dikhane ke liye local URL banaya
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden selection:bg-green-500 selection:text-white">
      {/* --- SIDEBAR --- */}
      <Toaster position="top-right" reverseOrder={false} />

      <aside className="w-72 bg-gray-950 text-gray-300 flex flex-col shadow-2xl relative z-20">
        <div className="h-24 flex items-center px-8 border-b border-gray-800">
          <span className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center text-gray-950">
              <LayoutDashboard size={18} />
            </div>
            AdminPanel
          </span>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2">
          <SidebarButton
            icon={Package}
            label="My Products"
            isActive={activeTab === "products"}
            onClick={() => setActiveTab("products")}
          />
          <SidebarButton
            icon={PlusCircle}
            label="Create Product"
            isActive={activeTab === "create"}
            onClick={() => setActiveTab("create")}
          />
          <SidebarButton
            icon={MessageSquare}
            label="Queries & Leads"
            isActive={activeTab === "queries"}
            onClick={() => setActiveTab("queries")}
          />
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-bold text-gray-400 hover:text-white hover:bg-red-500/10 rounded-xl transition-all">
            <LogOut size={18} />
            Secure Logout
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 flex flex-col relative overflow-y-auto">
        {/* Top Header */}
        <header className="h-24 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-10 sticky top-0 z-10">
          <h2 className="text-2xl font-black text-gray-800 capitalize tracking-tight">
            {activeTab.replace("-", " ")}
          </h2>
          <div className="flex items-center gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search database..."
                className="bg-gray-100 border-none text-sm rounded-full py-2.5 pl-10 pr-6 w-64 focus:ring-2 focus:ring-green-500/50 outline-none transition-all"
              />
              <Search className="absolute left-4 top-2.5 text-gray-400 w-4 h-4" />
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-600 to-teal-600 border-2 border-white shadow-md cursor-pointer"></div>
          </div>
        </header>

        {/* Dynamic Views */}
        <div className="p-10 max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            {/* VIEW 1: MY PRODUCTS */}
            {activeTab === "products" && (
              <motion.div
                key="products"
                variants={pageVariants}
                initial="initial"
                animate="in"
                exit="out"
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <h3 className="font-bold text-lg text-gray-800">
                      Active Catalogue
                    </h3>
                    <button
                      onClick={() => setActiveTab("create")}
                      className="text-sm bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-bold transition-colors"
                    >
                      + Add New
                    </button>
                  </div>

                  {isLoading ? (
                    <div className="p-10 flex justify-center text-gray-400">
                      Loading products...
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-white border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500 font-bold">
                            <th className="p-4 pl-6 w-16">Image</th>
                            <th className="p-4">Commodity Name</th>
                            <th className="p-4">Category</th>
                            <th className="p-4 text-right pr-6">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.map((item) => (
                            <tr
                              key={item.id || item._id}
                              className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group"
                            >
                              <td className="p-4 pl-6 text-gray-400 text-sm font-medium">
                                {item.image ? (
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-10 h-10 rounded-lg object-cover border border-gray-200 shadow-sm"
                                  />
                                ) : (
                                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center border border-gray-200">
                                    <ImageIcon
                                      size={16}
                                      className="text-gray-400"
                                    />
                                  </div>
                                )}
                              </td>
                              <td className="p-4 text-gray-900 font-bold">
                                {item.name}
                                <span className="block text-xs font-normal text-gray-400 truncate w-48 mt-0.5">
                                  {item.desc}
                                </span>
                              </td>
                              <td className="p-4">
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100">
                                  {item.category}
                                </span>
                              </td>
                              <td className="p-4 text-right pr-6">
                                <button className="text-gray-400 hover:text-green-600 p-2 transition-colors">
                                  <MoreVertical size={18} />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* VIEW 2: CREATE PRODUCT */}
            {activeTab === "create" && (
              <motion.div
                key="create"
                variants={pageVariants}
                initial="initial"
                animate="in"
                exit="out"
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 max-w-3xl">
                  <h3 className="font-black text-2xl text-gray-900 mb-6 font-heading">
                    Add New Commodity
                  </h3>

                  <form className="space-y-6" onSubmit={handleAddProduct}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">
                          Product Name
                        </label>
                        <input
                          required
                          name="name"
                          value={newProduct.name}
                          onChange={handleInputChange}
                          type="text"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                          placeholder="e.g., Premium Saffron"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">
                          Category
                        </label>
                        <select
                          required
                          name="category"
                          value={newProduct.category}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50 text-gray-600 transition-all"
                        >
                          <option value="Spices">Spices</option>
                          <option value="Rice">Rice</option>
                          <option value="Soy Products">Soy Products</option>
                          <option value="Oilseeds">Oilseeds</option>
                          <option value="Other">Other Products</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">
                        Upload Product Image
                      </label>
                      <div className="flex items-center gap-4">
                        {/* Image Preview Box */}
                        {imagePreview ? (
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-16 h-16 rounded-xl object-cover border border-gray-200 shadow-sm shrink-0"
                          />
                        ) : (
                          <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center border border-dashed border-gray-300 shrink-0 text-gray-400">
                            <ImageIcon size={24} />
                          </div>
                        )}

                        {/* File Input */}
                        <input
                          required
                          name="image"
                          onChange={handleImageChange}
                          type="file"
                          accept="image/*" // Sirf images allow karega
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">
                        Description (Desc)
                      </label>
                      <textarea
                        required
                        name="desc"
                        value={newProduct.desc}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all resize-none"
                        placeholder="Enter product details..."
                      ></textarea>
                    </div>

                    <div className="pt-4 flex justify-end gap-4">
                      <button
                        type="button"
                        onClick={() => setActiveTab("products")}
                        className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-lg disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : null}
                        {isSubmitting ? "Publishing..." : "Publish Product"}
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}

         {/* VIEW 3: QUERIES & LEADS */}
            {activeTab === "queries" && (
              <motion.div
                key="queries"
                variants={pageVariants}
                initial="initial"
                animate="in"
                exit="out"
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col gap-4">
                  {isLoading ? (
                    <div className="text-center p-10 text-gray-500">
                      Loading queries...
                    </div>
                  ) : queries.length === 0 ? (
                    <div className="text-center p-10 text-gray-500">
                      No queries found.
                    </div>
                  ) : (
                    queries.map((query) => (
                      <div
                        key={query._id}
                        className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"
                      >
                        {/* Top Row: Name, Email & Status */}
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-lg font-bold text-gray-900">
                              {query.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {query.email} 
                              {query.company && (
                                <span className="ml-2 text-gray-400">| {query.company}</span>
                              )}
                            </p>
                          </div>
                          <div className="text-right">
                            <span
                              className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-1 ${
                                query.status === "New"
                                  ? "bg-blue-100 text-blue-700"
                                  : query.status === "In Progress"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {query.status || "NEW"}
                            </span>
                            <div className="text-xs text-gray-400 mt-1">
                              {new Date(query.createdAt).toLocaleDateString("en-IN", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Middle Row: Product Details */}
                        <div className="bg-gray-50 rounded-lg p-3 mb-4 border border-gray-100">
                          <p className="text-sm text-gray-800">
                            <span className="font-semibold text-gray-500 mr-2">Interested in:</span>
                            <span className="font-bold text-green-700">{query.productName}</span>
                            <span className="text-gray-400 text-xs ml-2">({query.productCategory})</span>
                          </p>
                        </div>

                        {/* Bottom Row: Message */}
                        <div>
                          <p className="text-sm text-gray-700 whitespace-pre-wrap">
                            <span className="font-semibold text-gray-900 block mb-1">Message:</span>
                            {query.message}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

// Reusable Sidebar Button Component
const SidebarButton = ({ icon: Icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-green-500/10 to-teal-500/5 text-green-400 border border-green-500/20"
        : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
    }`}
  >
    <Icon size={20} className={isActive ? "text-green-400" : "text-gray-500"} />
    {label}
  </button>
);

export default AdminDashboard;
