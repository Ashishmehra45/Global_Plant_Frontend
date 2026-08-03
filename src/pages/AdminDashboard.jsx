import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Package, 
  PlusCircle, 
  MessageSquare, 
  LayoutDashboard, 
  LogOut, 
  Search, 
  MoreVertical, 
  CheckCircle,
  Eye
} from 'lucide-react';

// --- MOCK DATA ---
const initialProducts = [
  { id: 1, name: "Premium Basmati Rice", category: "Rice", price: "$1200/MT", stock: "In Stock" },
  { id: 2, name: "Organic Black Pepper", category: "Spices", price: "$4500/MT", stock: "Low Stock" },
  { id: 3, name: "Sorghum (Jowar)", category: "Cereals", price: "$800/MT", stock: "In Stock" },
];

const initialQueries = [
  { id: 101, customer: "John Doe (UK)", email: "john@eurofoods.com", product: "Premium Basmati Rice", status: "New", date: "2026-07-30" },
  { id: 102, customer: "Alisha Traders (UAE)", email: "contact@alishatrade.ae", product: "Organic Black Pepper", status: "In Progress", date: "2026-07-29" },
  { id: 103, customer: "Green Earth Inc (USA)", email: "sourcing@greenearth.us", product: "Bulk Spices", status: "Resolved", date: "2026-07-25" },
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [products] = useState(initialProducts);
  const [queries] = useState(initialQueries);

  // Animation variants for smooth tab switching
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden selection:bg-green-500 selection:text-white">
      
      {/* --- SIDEBAR --- */}
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
            icon={Package} label="My Products" 
            isActive={activeTab === 'products'} 
            onClick={() => setActiveTab('products')} 
          />
          <SidebarButton 
            icon={PlusCircle} label="Create Product" 
            isActive={activeTab === 'create'} 
            onClick={() => setActiveTab('create')} 
          />
          <SidebarButton 
            icon={MessageSquare} label="Queries & Leads" 
            isActive={activeTab === 'queries'} 
            onClick={() => setActiveTab('queries')} 
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
            {activeTab.replace('-', ' ')}
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
            {activeTab === 'products' && (
              <motion.div key="products" variants={pageVariants} initial="initial" animate="in" exit="out" transition={{ duration: 0.3 }}>
                <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <h3 className="font-bold text-lg text-gray-800">Active Catalogue</h3>
                    <button onClick={() => setActiveTab('create')} className="text-sm bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-bold transition-colors">
                      + Add New
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-white border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500 font-bold">
                          <th className="p-4 pl-6">ID</th>
                          <th className="p-4">Commodity Name</th>
                          <th className="p-4">Category</th>
                          <th className="p-4">Price Est.</th>
                          <th className="p-4">Status</th>
                          <th className="p-4 text-right pr-6">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((item) => (
                          <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group">
                            <td className="p-4 pl-6 text-gray-400 text-sm font-medium">#{item.id}</td>
                            <td className="p-4 text-gray-900 font-bold">{item.name}</td>
                            <td className="p-4 text-gray-500 text-sm">{item.category}</td>
                            <td className="p-4 text-gray-700 font-medium">{item.price}</td>
                            <td className="p-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.stock === 'In Stock' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                                {item.stock}
                              </span>
                            </td>
                            <td className="p-4 text-right pr-6">
                              <button className="text-gray-400 hover:text-green-600 p-2"><MoreVertical size={18} /></button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {/* VIEW 2: CREATE PRODUCT */}
            {activeTab === 'create' && (
              <motion.div key="create" variants={pageVariants} initial="initial" animate="in" exit="out" transition={{ duration: 0.3 }}>
                <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 max-w-3xl">
                  <h3 className="font-black text-2xl text-gray-900 mb-6 font-heading">Add New Commodity</h3>
                  
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Product Name</label>
                        <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50" placeholder="e.g., Premium Saffron" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Category</label>
                        <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50 text-gray-600">
                          <option>Spices</option>
                          <option>Rice</option>
                          <option>Pulses</option>
                          <option>Cereals</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Image URL</label>
                      <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50" placeholder="https://..." />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Description / Specifications</label>
                      <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50" placeholder="Enter product details..."></textarea>
                    </div>

                    <div className="pt-4 flex justify-end gap-4">
                      <button type="button" onClick={() => setActiveTab('products')} className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors">Cancel</button>
                      <button type="submit" className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-lg">Publish Product</button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}

            {/* VIEW 3: QUERIES & LEADS */}
            {activeTab === 'queries' && (
              <motion.div key="queries" variants={pageVariants} initial="initial" animate="in" exit="out" transition={{ duration: 0.3 }}>
                <div className="grid gap-4">
                  {queries.map((query) => (
                    <div key={query.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:border-green-200 hover:shadow-md transition-all cursor-pointer">
                      
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3">
                          <h4 className="text-lg font-black text-gray-900">{query.customer}</h4>
                          <span className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md ${
                            query.status === 'New' ? 'bg-blue-100 text-blue-700' : 
                            query.status === 'In Progress' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-500'
                          }`}>
                            {query.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 font-medium">{query.email}</p>
                      </div>

                      <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 border border-gray-100">
                        <Package size={14} className="text-green-600" /> {query.product}
                      </div>

                      <div className="flex items-center gap-4 text-sm font-medium text-gray-400">
                        <span>{query.date}</span>
                        <button className="bg-white border border-gray-200 text-gray-700 p-2 rounded-lg hover:bg-green-50 hover:text-green-600 hover:border-green-200 transition-all shadow-sm">
                          <Eye size={16} />
                        </button>
                      </div>

                    </div>
                  ))}
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
        ? 'bg-gradient-to-r from-green-500/10 to-teal-500/5 text-green-400 border border-green-500/20' 
        : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
    }`}
  >
    <Icon size={20} className={isActive ? 'text-green-400' : 'text-gray-500'} />
    {label}
  </button>
);

export default AdminDashboard;