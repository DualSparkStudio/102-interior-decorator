import { motion } from 'framer-motion';
import {
    BarChart3,
    Briefcase,
    Edit,
    Eye,
    Lock,
    LogOut,
    Palette,
    Plus,
    Settings,
    Trash2,
    X
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { initializeDemoData } from '../utils/demoData';

interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  image?: string;
}

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  designs: Design[];
}

interface Design {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
  features: string[];
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [services, setServices] = useState<Service[]>([]);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [editingPortfolio, setEditingPortfolio] = useState<PortfolioItem | null>(null);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [showPortfolioForm, setShowPortfolioForm] = useState(false);

  // Website demo data
  const websiteServices = [
    {
      id: 'website-1',
      title: 'Interior Design',
      description: 'Complete interior design solutions tailored to your style and budget.',
      price: 'From $2,500',
      duration: '4-8 weeks',
      image: '🏠',
      features: [
        'Initial consultation and space assessment',
        'Concept development and mood boards',
        'Space planning and furniture layout',
        'Color scheme and material selection',
        'Furniture and accessory sourcing',
        'Project management and installation',
        'Final styling and photography'
      ]
    },
    {
      id: 'website-2',
      title: 'Space Planning',
      description: 'Optimize your space for maximum functionality and visual appeal.',
      price: 'From $1,200',
      duration: '2-4 weeks',
      image: '📐',
      features: [
        'Detailed space analysis',
        'Traffic flow optimization',
        'Storage solutions design',
        'Multi-purpose space planning',
        'Furniture placement strategy',
        'Lighting layout design',
        '3D visualization'
      ]
    },
    {
      id: 'website-3',
      title: 'Color Consultation',
      description: 'Expert color guidance to create the perfect mood and atmosphere.',
      price: 'From $800',
      duration: '1-2 weeks',
      image: '🎨',
      features: [
        'Color psychology analysis',
        'Personal style assessment',
        'Custom color palette creation',
        'Material and texture coordination',
        'Lighting consideration',
        'Sample testing and approval',
        'Implementation guidance'
      ]
    },
    {
      id: 'website-4',
      title: 'Furniture Selection',
      description: 'Curated furniture pieces that complement your space and lifestyle.',
      price: 'From $1,500',
      duration: '3-6 weeks',
      image: '🪑',
      features: [
        'Style and budget assessment',
        'Custom furniture sourcing',
        'Quality and durability evaluation',
        'Size and proportion analysis',
        'Delivery and installation coordination',
        'Warranty and maintenance guidance',
        'Future expansion planning'
      ]
    },
    {
      id: 'website-5',
      title: 'Lighting Design',
      description: 'Create the perfect ambiance with strategic lighting solutions.',
      price: 'From $1,000',
      duration: '2-4 weeks',
      image: '💡',
      features: [
        'Lighting needs assessment',
        'Natural and artificial light optimization',
        'Fixture selection and placement',
        'Smart lighting integration',
        'Energy efficiency recommendations',
        'Installation coordination',
        'Lighting control systems'
      ]
    },
    {
      id: 'website-6',
      title: 'Staging & Photography',
      description: 'Professional staging and photography for real estate or portfolio.',
      price: 'From $1,800',
      duration: '1-3 days',
      image: '📸',
      features: [
        'Space preparation and cleaning',
        'Furniture and accessory staging',
        'Professional photography',
        'Virtual tour creation',
        'Marketing material preparation',
        'Social media optimization',
        'Portfolio enhancement'
      ]
    }
  ];

  const websitePortfolio = [
    {
      id: 'website-1',
      title: 'Modern Living Room',
      category: 'Living Room',
      description: 'Contemporary design with natural elements',
      designs: [
        {
          id: 'website-1-1',
          name: 'Minimalist Elegance',
          description: 'Clean lines with neutral tones and natural materials',
          image: '🏠',
          price: '$15,000',
          features: ['Open concept', 'Natural lighting', 'Custom furniture']
        },
        {
          id: 'website-1-2',
          name: 'Cozy Contemporary',
          description: 'Warm and inviting with modern comfort',
          image: '🛋️',
          price: '$18,000',
          features: ['Plush seating', 'Warm lighting', 'Textured fabrics']
        }
      ]
    },
    {
      id: 'website-2',
      title: 'Elegant Kitchen',
      category: 'Kitchen',
      description: 'Functional and beautiful kitchen design',
      designs: [
        {
          id: 'website-2-1',
          name: 'Modern Farmhouse',
          description: 'Rustic charm meets modern functionality',
          image: '🍳',
          price: '$25,000',
          features: ['Quartz countertops', 'Custom cabinetry', 'Island design']
        },
        {
          id: 'website-2-2',
          name: 'Contemporary Chef',
          description: 'Professional-grade kitchen for serious cooking',
          image: '👨‍🍳',
          price: '$35,000',
          features: ['Professional appliances', 'Ample storage', 'Workflow optimization']
        }
      ]
    },
    {
      id: 'website-3',
      title: 'Cozy Bedroom',
      category: 'Bedroom',
      description: 'Peaceful retreat with warm tones',
      designs: [
        {
          id: 'website-3-1',
          name: 'Serene Sanctuary',
          description: 'Calming colors and soft textures for restful sleep',
          image: '🛏️',
          price: '$8,000',
          features: ['Plush bedding', 'Accent lighting', 'Storage solutions']
        },
        {
          id: 'website-3-2',
          name: 'Modern Retreat',
          description: 'Contemporary comfort with smart features',
          image: '🌙',
          price: '$12,000',
          features: ['Smart lighting', 'Built-in storage', 'Comfortable seating']
        }
      ]
    },
    {
      id: 'website-4',
      title: 'Luxury Bathroom',
      category: 'Bathroom',
      description: 'Spa-like bathroom with premium finishes',
      designs: [
        {
          id: 'website-4-1',
          name: 'Modern Spa',
          description: 'Luxurious spa-like bathroom design',
          image: '🚿',
          price: '$20,000',
          features: ['Premium fixtures', 'Heated floors', 'Steam shower']
        }
      ]
    },
    {
      id: 'website-5',
      title: 'Home Office',
      category: 'Office',
      description: 'Productive workspace with style',
      designs: [
        {
          id: 'website-5-1',
          name: 'Executive Office',
          description: 'Professional workspace with modern amenities',
          image: '💼',
          price: '$12,000',
          features: ['Ergonomic furniture', 'Smart storage', 'Professional lighting']
        }
      ]
    },
    {
      id: 'website-6',
      title: 'Dining Area',
      category: 'Dining',
      description: 'Elegant dining space for gatherings',
      designs: [
        {
          id: 'website-6-1',
          name: 'Formal Dining',
          description: 'Elegant dining room for entertaining',
          image: '🍽️',
          price: '$16,000',
          features: ['Formal table setting', 'Ambient lighting', 'Storage solutions']
        }
      ]
    }
  ];

  // Load data from localStorage on component mount
  useEffect(() => {
    // Initialize demo data if none exists
    initializeDemoData();
    
    const savedServices = localStorage.getItem('admin-services');
    const savedPortfolio = localStorage.getItem('admin-portfolio');
    
    if (savedServices) {
      setServices(JSON.parse(savedServices));
    }
    if (savedPortfolio) {
      setPortfolio(JSON.parse(savedPortfolio));
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('admin-services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('admin-portfolio', JSON.stringify(portfolio));
  }, [portfolio]);

  const handleLogin = () => {
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Incorrect password. Try: admin123');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
  };

  // Service Management
  const addService = (service: Service) => {
    setServices([...services, service]);
    setShowServiceForm(false);
    setEditingService(null);
  };

  const updateService = (updatedService: Service) => {
    setServices(services.map(s => s.id === updatedService.id ? updatedService : s));
    setShowServiceForm(false);
    setEditingService(null);
  };

  const deleteService = (id: string) => {
    if (confirm('Are you sure you want to delete this service?')) {
      setServices(services.filter(s => s.id !== id));
    }
  };

  // Portfolio Management
  const addPortfolioItem = (item: PortfolioItem) => {
    setPortfolio([...portfolio, item]);
    setShowPortfolioForm(false);
    setEditingPortfolio(null);
  };

  const updatePortfolioItem = (updatedItem: PortfolioItem) => {
    setPortfolio(portfolio.map(p => p.id === updatedItem.id ? updatedItem : p));
    setShowPortfolioForm(false);
    setEditingPortfolio(null);
  };

  const deletePortfolioItem = (id: string) => {
    if (confirm('Are you sure you want to delete this portfolio item?')) {
      setPortfolio(portfolio.filter(p => p.id !== id));
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-xl max-w-md w-full"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock size={32} />
            </div>
            <h1 className="text-2xl font-bold text-primary-800 mb-2">Admin Login</h1>
            <p className="text-primary-600">Enter password to access admin panel</p>
          </div>
          
          <div className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:border-accent-500 focus:outline-none"
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            />
            <button
              onClick={handleLogin}
              className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Login
            </button>
          </div>
          
          <div className="mt-6 text-center text-sm text-primary-500">
            <p>Demo password: <strong>admin123</strong></p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-gradient">Elegance Interiors - Admin Panel</h1>
            <div className="flex items-center space-x-4">
              <a
                href="/"
                className="flex items-center space-x-2 text-primary-600 hover:text-accent-600 transition-colors"
              >
                <Eye size={20} />
                <span>Go to Website</span>
              </a>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-primary-600 hover:text-accent-600 transition-colors"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-lg shadow-sm p-4">
              <div className="space-y-2">
                {[
                  { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
                  { id: 'services', label: 'Services', icon: Briefcase },
                  { id: 'portfolio', label: 'Portfolio', icon: Palette },
                  { id: 'settings', label: 'Settings', icon: Settings },
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-accent-500 text-white'
                          : 'text-primary-600 hover:bg-primary-100'
                      }`}
                    >
                      <Icon size={20} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && (
              <DashboardTab 
                services={services} 
                portfolio={portfolio} 
                websiteServices={websiteServices}
                websitePortfolio={websitePortfolio}
              />
            )}
            
            {activeTab === 'services' && (
              <ServicesTab
                services={services}
                websiteServices={websiteServices}
                onAddService={addService}
                onUpdateService={updateService}
                onDeleteService={deleteService}
                editingService={editingService}
                setEditingService={setEditingService}
                showServiceForm={showServiceForm}
                setShowServiceForm={setShowServiceForm}
              />
            )}
            
            {activeTab === 'portfolio' && (
              <PortfolioTab
                portfolio={portfolio}
                websitePortfolio={websitePortfolio}
                onAddPortfolio={addPortfolioItem}
                onUpdatePortfolio={updatePortfolioItem}
                onDeletePortfolio={deletePortfolioItem}
                editingPortfolio={editingPortfolio}
                setEditingPortfolio={setEditingPortfolio}
                showPortfolioForm={showPortfolioForm}
                setShowPortfolioForm={setShowPortfolioForm}
              />
            )}
            
            {activeTab === 'settings' && (
              <SettingsTab />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard Tab Component
const DashboardTab = ({ services, portfolio, websiteServices, websitePortfolio }: { 
  services: Service[], 
  portfolio: PortfolioItem[],
  websiteServices: Service[],
  websitePortfolio: PortfolioItem[]
}) => {
  const totalDesigns = portfolio.reduce((sum, item) => sum + item.designs.length, 0);
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary-800">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
              <Briefcase size={24} />
            </div>
            <div>
              <p className="text-sm text-primary-500">Total Services</p>
              <p className="text-2xl font-bold text-primary-800">{services.length + websiteServices.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
              <Palette size={24} />
            </div>
            <div>
              <p className="text-sm text-primary-500">Portfolio Items</p>
              <p className="text-2xl font-bold text-primary-800">{portfolio.length + websitePortfolio.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
              <Eye size={24} />
            </div>
            <div>
              <p className="text-sm text-primary-500">Total Designs</p>
              <p className="text-2xl font-bold text-primary-800">{totalDesigns}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
              <BarChart3 size={24} />
            </div>
            <div>
              <p className="text-sm text-primary-500">Categories</p>
              <p className="text-2xl font-bold text-primary-800">{new Set([...portfolio, ...websitePortfolio].map(item => item.category)).size}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-primary-800 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-primary-100">
            <span className="text-primary-600">Services updated</span>
            <span className="text-sm text-primary-500">{services.length + websiteServices.length} active</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-primary-100">
            <span className="text-primary-600">Portfolio items</span>
            <span className="text-sm text-primary-500">{portfolio.length + websitePortfolio.length} published</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-primary-600">Design options</span>
            <span className="text-sm text-primary-500">{totalDesigns} available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Services Tab Component
const ServicesTab = ({
  services,
  websiteServices,
  onAddService,
  onUpdateService,
  onDeleteService,
  editingService,
  setEditingService,
  showServiceForm,
  setShowServiceForm
}: {
  services: Service[];
  websiteServices: Service[];
  onAddService: (service: Service) => void;
  onUpdateService: (service: Service) => void;
  onDeleteService: (id: string) => void;
  editingService: Service | null;
  setEditingService: (service: Service | null) => void;
  showServiceForm: boolean;
  setShowServiceForm: (show: boolean) => void;
}) => {
  const [formData, setFormData] = useState<Partial<Service>>({
    title: '',
    description: '',
    price: '',
    duration: '',
    image: '',
    features: []
  });
  const [newFeature, setNewFeature] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingService) {
      onUpdateService({ ...editingService, ...formData } as Service);
    } else {
      onAddService({ ...formData, id: Date.now().toString() } as Service);
    }
    setFormData({ title: '', description: '', price: '', duration: '', features: [] });
  };

  const addFeature = () => {
    if (newFeature.trim()) {
      setFormData(prev => ({
        ...prev,
        features: [...(prev.features || []), newFeature.trim()]
      }));
      setNewFeature('');
    }
  };

  const removeFeature = (index: number) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features?.filter((_, i) => i !== index) || []
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-primary-800">Services Management</h2>
        <button
          onClick={() => {
            setShowServiceForm(true);
            setEditingService(null);
            setFormData({ title: '', description: '', price: '', duration: '', features: [] });
          }}
          className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus size={20} />
          <span>Add Service</span>
        </button>
      </div>

      {/* Service Form */}
      {showServiceForm && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-primary-800">
              {editingService ? 'Edit Service' : 'Add New Service'}
            </h3>
            <button
              onClick={() => setShowServiceForm(false)}
              className="text-primary-500 hover:text-primary-700"
            >
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Service Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="px-4 py-2 border border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none"
                required
              />
              <input
                type="text"
                placeholder="Price (e.g., From $2,500)"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="px-4 py-2 border border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none"
                required
              />
            </div>
            
            <input
              type="text"
              placeholder="Duration (e.g., 4-8 weeks)"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none"
              required
            />
            
            <textarea
              placeholder="Service Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none"
              required
            />
            
            <input
              type="text"
              placeholder="Image URL or Emoji (e.g., 🏠, https://example.com/image.jpg)"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none"
            />

            {/* Features */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-primary-700">Features</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Add a feature"
                  value={newFeature}
                  onChange={(e) => setNewFeature(e.target.value)}
                  className="flex-1 px-4 py-2 border border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={addFeature}
                  className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 transition-colors"
                >
                  Add
                </button>
              </div>
              <div className="space-y-1">
                {formData.features?.map((feature, index) => (
                  <div key={index} className="flex items-center justify-between bg-primary-50 px-3 py-2 rounded">
                    <span className="text-sm text-primary-700">{feature}</span>
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                type="submit"
                className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                {editingService ? 'Update Service' : 'Add Service'}
              </button>
              <button
                type="button"
                onClick={() => setShowServiceForm(false)}
                className="px-6 py-2 border border-primary-300 text-primary-700 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* All Services Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-primary-800 mb-4 flex items-center">
          <span className="w-2 h-8 bg-accent-500 rounded mr-3"></span>
          All Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...websiteServices, ...services].map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-sm p-6">
                          <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                {service.image && (
                  <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-lg flex items-center justify-center text-2xl">
                    {service.image.startsWith('http') ? (
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover rounded-lg" />
                    ) : (
                      <span>{service.image}</span>
                    )}
                  </div>
                )}
                <h3 className="text-lg font-semibold text-primary-800">{service.title}</h3>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setEditingService(service);
                    setFormData(service);
                    setShowServiceForm(true);
                  }}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <Edit size={16} />
                </button>
                <button
                  onClick={() => onDeleteService(service.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
              
              <p className="text-primary-600 mb-3">{service.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-primary-500">Price:</span>
                  <span className="font-medium text-accent-600">{service.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-primary-500">Duration:</span>
                  <span className="font-medium text-primary-700">{service.duration}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-sm font-medium text-primary-700 mb-2">Features:</p>
                <ul className="space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-sm text-primary-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Portfolio Tab Component
const PortfolioTab = ({
  portfolio,
  websitePortfolio,
  onAddPortfolio,
  onUpdatePortfolio,
  onDeletePortfolio,
  editingPortfolio,
  setEditingPortfolio,
  showPortfolioForm,
  setShowPortfolioForm
}: {
  portfolio: PortfolioItem[];
  websitePortfolio: PortfolioItem[];
  onAddPortfolio: (item: PortfolioItem) => void;
  onUpdatePortfolio: (item: PortfolioItem) => void;
  onDeletePortfolio: (id: string) => void;
  editingPortfolio: PortfolioItem | null;
  setEditingPortfolio: (item: PortfolioItem | null) => void;
  showPortfolioForm: boolean;
  setShowPortfolioForm: (show: boolean) => void;
}) => {
  const [formData, setFormData] = useState<Partial<PortfolioItem>>({
    title: '',
    category: '',
    description: '',
    designs: []
  });
  const [newDesign, setNewDesign] = useState<Partial<Design>>({
    name: '',
    description: '',
    image: '',
    price: '',
    features: []
  });
  const [showDesignForm, setShowDesignForm] = useState(false);
  const [editingDesign, setEditingDesign] = useState<Design | null>(null);
  const [showDesignEditForm, setShowDesignEditForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPortfolio) {
      onUpdatePortfolio({ ...editingPortfolio, ...formData } as PortfolioItem);
    } else {
      onAddPortfolio({ ...formData, id: Date.now().toString() } as PortfolioItem);
    }
    setFormData({ title: '', category: '', description: '', designs: [] });
  };

  const addDesign = () => {
    if (newDesign.name && newDesign.description) {
      setFormData(prev => ({
        ...prev,
        designs: [...(prev.designs || []), { ...newDesign, id: Date.now().toString() } as Design]
      }));
      setNewDesign({ name: '', description: '', image: '', price: '', features: [] });
      setShowDesignForm(false);
    }
  };

  const removeDesign = (designId: string) => {
    setFormData(prev => ({
      ...prev,
      designs: prev.designs?.filter(d => d.id !== designId) || []
    }));
  };

  const editDesign = (design: Design) => {
    setEditingDesign(design);
    setShowDesignEditForm(true);
  };

  const updateDesign = () => {
    if (editingDesign) {
      setFormData(prev => ({
        ...prev,
        designs: prev.designs?.map(d => 
          d.id === editingDesign.id ? editingDesign : d
        ) || []
      }));
      setEditingDesign(null);
      setShowDesignEditForm(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-primary-800">Portfolio Management</h2>
        <button
          onClick={() => {
            setShowPortfolioForm(true);
            setEditingPortfolio(null);
            setFormData({ title: '', category: '', description: '', designs: [] });
          }}
          className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus size={20} />
          <span>Add Portfolio Item</span>
        </button>
      </div>

      {/* Portfolio Form */}
      {showPortfolioForm && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-primary-800">
              {editingPortfolio ? 'Edit Portfolio Item' : 'Add New Portfolio Item'}
            </h3>
            <button
              onClick={() => setShowPortfolioForm(false)}
              className="text-primary-500 hover:text-primary-700"
            >
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Project Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="px-4 py-2 border border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none"
                required
              />
              <input
                type="text"
                placeholder="Category (e.g., Living Room, Kitchen)"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="px-4 py-2 border border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none"
                required
              />
            </div>
            
            <textarea
              placeholder="Project Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none"
              required
            />

            {/* Design Options */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-primary-700">Design Options</label>
                <button
                  type="button"
                  onClick={() => setShowDesignForm(true)}
                  className="text-accent-600 hover:text-accent-700 text-sm font-medium"
                >
                  + Add Design Option
                </button>
              </div>
              
              {formData.designs?.map((design) => (
                <div key={design.id} className="bg-primary-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-medium text-primary-800">{design.name}</h4>
                      <p className="text-sm text-primary-600 mt-1">{design.description}</p>
                      {design.price && (
                        <p className="text-sm text-accent-600 mt-1">Price: {design.price}</p>
                      )}
                      {design.image && (
                        <p className="text-sm text-primary-500 mt-1">Image: {design.image}</p>
                      )}
                      {design.features && design.features.length > 0 && (
                        <div className="mt-2">
                          <p className="text-xs text-primary-500 mb-1">Features:</p>
                          <div className="flex flex-wrap gap-1">
                            {design.features.map((feature, index) => (
                              <span key={index} className="text-xs bg-accent-100 text-accent-700 px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex space-x-2 ml-2">
                      <button
                        type="button"
                        onClick={() => editDesign(design)}
                        className="text-blue-500 hover:text-blue-700"
                        title="Edit Design"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeDesign(design.id)}
                        className="text-red-500 hover:text-red-700"
                        title="Delete Design"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-3">
              <button
                type="submit"
                className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                {editingPortfolio ? 'Update Portfolio Item' : 'Add Portfolio Item'}
              </button>
              <button
                type="button"
                onClick={() => setShowPortfolioForm(false)}
                className="px-6 py-2 border border-primary-300 text-primary-700 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Design Form Modal */}
      {showDesignForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-primary-800">Add Design Option</h3>
              <button
                onClick={() => setShowDesignForm(false)}
                className="text-primary-500 hover:text-primary-700"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Design Name"
                value={newDesign.name}
                onChange={(e) => setNewDesign({ ...newDesign, name: e.target.value })}
                className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none"
              />
              
              <textarea
                placeholder="Design Description"
                value={newDesign.description}
                onChange={(e) => setNewDesign({ ...newDesign, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none"
              />
              
              <input
                type="text"
                placeholder="Image URL or Emoji (e.g., 🏠)"
                value={newDesign.image}
                onChange={(e) => setNewDesign({ ...newDesign, image: e.target.value })}
                className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none"
              />
              
              <input
                type="text"
                placeholder="Price (optional)"
                value={newDesign.price}
                onChange={(e) => setNewDesign({ ...newDesign, price: e.target.value })}
                className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none"
              />

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={addDesign}
                  className="flex-1 bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Add Design
                </button>
                <button
                  type="button"
                  onClick={() => setShowDesignForm(false)}
                  className="flex-1 px-4 py-2 border border-primary-300 text-primary-700 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Design Edit Form Modal */}
      {showDesignEditForm && editingDesign && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-primary-800">Edit Design Option</h3>
              <button
                onClick={() => {
                  setShowDesignEditForm(false);
                  setEditingDesign(null);
                }}
                className="text-primary-500 hover:text-primary-700"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Design Name"
                value={editingDesign.name}
                onChange={(e) => setEditingDesign({ ...editingDesign, name: e.target.value })}
                className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none"
              />
              
              <textarea
                placeholder="Design Description"
                value={editingDesign.description}
                onChange={(e) => setEditingDesign({ ...editingDesign, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none"
              />
              
              <input
                type="text"
                placeholder="Image URL or Emoji (e.g., 🏠)"
                value={editingDesign.image}
                onChange={(e) => setEditingDesign({ ...editingDesign, image: e.target.value })}
                className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none"
              />
              
              <input
                type="text"
                placeholder="Price (optional)"
                value={editingDesign.price || ''}
                onChange={(e) => setEditingDesign({ ...editingDesign, price: e.target.value })}
                className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none"
              />

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={updateDesign}
                  className="flex-1 bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Update Design
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowDesignEditForm(false);
                    setEditingDesign(null);
                  }}
                  className="flex-1 px-4 py-2 border border-primary-300 text-primary-700 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* All Portfolio Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-primary-800 mb-4 flex items-center">
          <span className="w-2 h-8 bg-accent-500 rounded mr-3"></span>
          All Portfolio Items
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...websitePortfolio, ...portfolio].map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary-800">{item.title}</h3>
                  <p className="text-sm text-accent-600">{item.category}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setEditingPortfolio(item);
                      setFormData(item);
                      setShowPortfolioForm(true);
                    }}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => onDeletePortfolio(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              
              <p className="text-primary-600 mb-4">{item.description}</p>
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-primary-700">
                  Design Options: {item.designs.length}
                </p>
                <div className="space-y-1">
                  {item.designs.map((design) => (
                    <div key={design.id} className="flex items-center justify-between bg-primary-50 px-3 py-2 rounded">
                      <span className="text-sm text-primary-700">{design.name}</span>
                      {design.price && (
                        <span className="text-xs text-accent-600">{design.price}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Settings Tab Component
const SettingsTab = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary-800">Settings</h2>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-primary-800 mb-4">Admin Panel Settings</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-primary-700 mb-2">
              Admin Password
            </label>
            <input
              type="password"
              placeholder="Change admin password"
              className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-primary-700 mb-2">
              Website Title
            </label>
            <input
              type="text"
              placeholder="Elegance Interiors"
              className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-primary-700 mb-2">
              Contact Email
            </label>
            <input
              type="email"
              placeholder="hello@eleganceinteriors.com"
              className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:border-accent-500 focus:outline-none"
            />
          </div>
          
          <button className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2 rounded-lg transition-colors">
            Save Settings
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-primary-800 mb-4">Data Management</h3>
        
        <div className="space-y-3">
          <button className="w-full text-left px-4 py-3 border border-primary-200 rounded-lg hover:bg-primary-50 transition-colors">
            Export Data (JSON)
          </button>
          <button className="w-full text-left px-4 py-3 border border-primary-200 rounded-lg hover:bg-primary-50 transition-colors">
            Import Data
          </button>
          <button className="w-full text-left px-4 py-3 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
            Reset All Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin; 