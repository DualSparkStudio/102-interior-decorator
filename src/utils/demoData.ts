export const demoServices = [
  {
    id: '1',
    title: 'Interior Design',
    description: 'Complete interior design solutions tailored to your style and budget.',
    price: 'From $2,500',
    duration: '4-8 weeks',
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
    id: '2',
    title: 'Space Planning',
    description: 'Optimize your space for maximum functionality and visual appeal.',
    price: 'From $1,200',
    duration: '2-4 weeks',
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
    id: '3',
    title: 'Color Consultation',
    description: 'Expert color guidance to create the perfect mood and atmosphere.',
    price: 'From $800',
    duration: '1-2 weeks',
    features: [
      'Color psychology analysis',
      'Personal style assessment',
      'Custom color palette creation',
      'Material and texture coordination',
      'Lighting consideration',
      'Sample testing and approval',
      'Implementation guidance'
    ]
  }
];

export const demoPortfolio = [
  {
    id: '1',
    title: 'Modern Living Room',
    category: 'Living Room',
    description: 'Contemporary design with natural elements and clean lines.',
    designs: [
      {
        id: '1-1',
        name: 'Minimalist Elegance',
        description: 'Clean lines with neutral tones and natural materials',
        image: '🏠',
        price: '$15,000',
        features: ['Open concept', 'Natural lighting', 'Custom furniture']
      },
      {
        id: '1-2',
        name: 'Cozy Contemporary',
        description: 'Warm and inviting with modern comfort',
        image: '🛋️',
        price: '$18,000',
        features: ['Plush seating', 'Warm lighting', 'Textured fabrics']
      },
      {
        id: '1-3',
        name: 'Urban Sophistication',
        description: 'City living with luxury finishes',
        image: '🏙️',
        price: '$22,000',
        features: ['Premium materials', 'Smart home integration', 'Art curation']
      }
    ]
  },
  {
    id: '2',
    title: 'Elegant Kitchen',
    category: 'Kitchen',
    description: 'Functional and beautiful kitchen design with premium appliances.',
    designs: [
      {
        id: '2-1',
        name: 'Modern Farmhouse',
        description: 'Rustic charm meets modern functionality',
        image: '🍳',
        price: '$25,000',
        features: ['Quartz countertops', 'Custom cabinetry', 'Island design']
      },
      {
        id: '2-2',
        name: 'Contemporary Chef',
        description: 'Professional-grade kitchen for serious cooking',
        image: '👨‍🍳',
        price: '$35,000',
        features: ['Professional appliances', 'Ample storage', 'Workflow optimization']
      },
      {
        id: '2-3',
        name: 'Minimalist Kitchen',
        description: 'Clean and uncluttered with hidden storage',
        image: '🧹',
        price: '$20,000',
        features: ['Hidden storage', 'Integrated appliances', 'Clean lines']
      }
    ]
  },
  {
    id: '3',
    title: 'Cozy Bedroom',
    category: 'Bedroom',
    description: 'Peaceful retreat with warm tones and comfortable furnishings.',
    designs: [
      {
        id: '3-1',
        name: 'Serene Sanctuary',
        description: 'Calming colors and soft textures for restful sleep',
        image: '🛏️',
        price: '$8,000',
        features: ['Plush bedding', 'Accent lighting', 'Storage solutions']
      },
      {
        id: '3-2',
        name: 'Modern Retreat',
        description: 'Contemporary comfort with smart features',
        image: '🌙',
        price: '$12,000',
        features: ['Smart lighting', 'Built-in storage', 'Comfortable seating']
      },
      {
        id: '3-3',
        name: 'Luxury Suite',
        description: 'High-end finishes and premium amenities',
        image: '👑',
        price: '$18,000',
        features: ['Walk-in closet', 'Ensuite bathroom', 'Sitting area']
      }
    ]
  },
  {
    id: '4',
    title: 'Luxury Kitchen',
    category: 'Kitchen',
    description: 'High-end kitchen with premium finishes and smart technology.',
    designs: [
      {
        id: '4-1',
        name: 'Smart Kitchen',
        description: 'Technology-driven kitchen with automation',
        image: '🤖',
        price: '$45,000',
        features: ['Smart appliances', 'Voice control', 'Automated lighting']
      },
      {
        id: '4-2',
        name: 'European Style',
        description: 'Sophisticated European-inspired design',
        image: '🏛️',
        price: '$40,000',
        features: ['Marble countertops', 'Custom woodwork', 'Wine storage']
      },
      {
        id: '4-3',
        name: 'Open Concept Kitchen',
        description: 'Seamless integration with living spaces',
        image: '🏡',
        price: '$30,000',
        features: ['Open layout', 'Breakfast bar', 'Entertainment area']
      }
    ]
  },
  {
    id: '5',
    title: 'Compact Kitchen',
    category: 'Kitchen',
    description: 'Efficient small kitchen designs that maximize space.',
    designs: [
      {
        id: '5-1',
        name: 'Space Saver',
        description: 'Maximized storage in minimal space',
        image: '📦',
        price: '$15,000',
        features: ['Pull-out storage', 'Fold-down tables', 'Vertical organization']
      },
      {
        id: '5-2',
        name: 'Studio Kitchen',
        description: 'Perfect for studio apartments',
        image: '🏢',
        price: '$12,000',
        features: ['Compact appliances', 'Multi-functional furniture', 'Smart storage']
      }
    ]
  },
  {
    id: '6',
    title: 'Master Bedroom',
    category: 'Bedroom',
    description: 'Luxurious master bedroom with premium amenities.',
    designs: [
      {
        id: '6-1',
        name: 'Executive Suite',
        description: 'Corporate luxury meets home comfort',
        image: '💼',
        price: '$25,000',
        features: ['Home office area', 'Premium bedding', 'Smart climate control']
      },
      {
        id: '6-2',
        name: 'Romantic Retreat',
        description: 'Intimate and romantic atmosphere',
        image: '💕',
        price: '$20,000',
        features: ['Soft lighting', 'Plush fabrics', 'Private balcony']
      }
    ]
  }
];

export const initializeDemoData = () => {
  // Only initialize if no data exists
  if (!localStorage.getItem('admin-services')) {
    localStorage.setItem('admin-services', JSON.stringify(demoServices));
  }
  
  if (!localStorage.getItem('admin-portfolio')) {
    localStorage.setItem('admin-portfolio', JSON.stringify(demoPortfolio));
  }
}; 