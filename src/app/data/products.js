// src/data/products.js
import Image001 from '../assets/products/001.png';
import Image002 from '../assets/products/002.png';
import Image003 from '../assets/products/003.png';
import ImageStand from '../assets/products/stand.png';

export const standProduct = {
  id: 'stand-01',
  slug: 'foldable-metal-stand',
  name: 'Foldable Metal Stand',
  price: 6500,
  image: ImageStand,
  description: 'Premium foldable metal stand for easy storage and gameplay at the perfect height.',
  features: [
    'Foldable design for easy storage',
    'Adjustable height settings',
    'Non-slip rubber feet',
    'Sturdy steel construction',
    'Quick assembly required'
  ],
  specs: {
    material: 'Steel',
    weight: '3.5kg',
    height: '24-32 inches',
    foldable: 'Yes'
  }
};

export const accessories = [
  {
    id: 101,
    slug: 'premium-carrom-set',
    name: 'Premium Carrom Set',
    tag: 'Complete Set',
    price: 5500,
    image: Image003,
    description: 'Complete carrom set with all pieces needed for a full game.',
    category: 'accessories',
    features: [
      '19mm Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Striker',
      '4 Corner Pockets',
      'Printed Board Lines'
    ],
    specs: {
      pieces: '21 pieces',
      material: 'Plastic',
      weight: '500g'
    }
  },
  {
    id: 102,
    slug: 'pro-striker-set',
    name: 'Pro Striker Set',
    tag: 'Pro Series',
    price: 3500,
    image: Image001,
    description: 'Professional grade strikers for ultimate control and power.',
    category: 'accessories',
    features: [
      'Balanced weight distribution',
      'Smooth gliding surface',
      'Durable construction',
      'Available in multiple weights'
    ],
    specs: {
      weight: '15g each',
      quantity: '2 strikers',
      material: 'ABS Plastic'
    }
  },
  {
    id: 103,
    slug: 'boric-powder-500g',
    name: 'Boric Powder 500g',
    tag: 'Essential',
    price: 1500,
    image: Image002,
    description: 'High-quality boric powder for smooth board surface.',
    category: 'accessories',
    features: [
      'Fine grain consistency',
      'Non-toxic formula',
      'Long-lasting effect',
      'Protects board surface'
    ],
    specs: {
      weight: '500g',
      type: 'Food grade boric acid'
    }
  }
];

export const products = [
  {
    id: 1,
    slug: 'rookie-gen-1',
    name: 'Rookie Gen-1',
    tag: 'Beginner',
    price: 12990,
    image: Image001,
    description: 'Perfect for beginners and casual players. Lightweight design with smooth matte finish.',
    category: 'boards',
    inStock: true,
    features: [
      'Lightweight design - easy to carry',
      'Rounded corners for safety',
      'Includes complete coin set',
      'Smooth matte playing surface',
      'Beginner-friendly rebound',
      '1-year warranty included'
    ],
    specs: {
      size: '29" x 29"',
      ply: '4mm Standard',
      frame: '1.5" Softwood',
      surface: 'Smooth Matte',
      rebound: 'Standard',
      weight: '8kg',
      boardThickness: '12mm'
    },
    included: [
      '1 Rookie Gen-1 Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Striker',
      'Board Cover'
    ]
  },
  {
    id: 2,
    slug: 'club-pro',
    name: 'Club Pro',
    tag: 'Intermediate',
    price: 21990,
    image: Image002,
    description: 'Designed for intermediate players who want to take their game to the next level.',
    category: 'boards',
    inStock: true,
    features: [
      'Water-resistant construction',
      'Reinforced backing for durability',
      'Includes premium striker',
      'High rebound for competitive play',
      'Polished satin finish',
      '2-year warranty included'
    ],
    specs: {
      size: '32" x 32"',
      ply: '8mm Water-Resistant',
      frame: '2" Hardwood',
      surface: 'Polished Satin',
      rebound: 'High',
      weight: '12kg',
      boardThickness: '16mm'
    },
    included: [
      '1 Club Pro Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover',
      'Carrying Strap'
    ]
  },
  {
    id: 3,
    slug: 'champion-series',
    name: 'Champion Series',
    tag: 'Tournament Grade',
    price: 34990,
    image: Image003,
    description: 'Professional tournament-grade board used by champions worldwide.',
    category: 'boards',
    inStock: true,
    features: [
      'Federation approved specifications',
      'Zero vibration technology',
      'Heavy-duty construction',
      'Glass-like glazed surface',
      'Professional 5x rebound',
      '5-year warranty included'
    ],
    specs: {
      size: '35" x 35"',
      ply: '16mm English Birch',
      frame: '3" Kikar Wood',
      surface: 'Glass-like Glaze',
      rebound: 'Professional (5x)',
      weight: '18kg',
      boardThickness: '22mm'
    },
    included: [
      '1 Champion Series Board',
      '19 Premium Carrom Men',
      '1 Queen (Red)',
      '2 Pro Strikers',
      'Deluxe Board Cover',
      'Premium Carrying Case',
      'Official Rule Book'
    ]
  }
];

export const getProductBySlug = (slug) => {
  const allProducts = [...products, ...accessories, standProduct];
  return allProducts.find(product => product.slug === slug);
};

export const getProductById = (id) => {
  const allProducts = [...products, ...accessories, standProduct];
  return allProducts.find(product => product.id === parseInt(id) || product.id === id);
};

export const getProductsByCategory = (category) => {
  if (category === 'all') return products;
  if (category === 'accessories') return accessories;
  return products.filter(product => product.category === category);
};
