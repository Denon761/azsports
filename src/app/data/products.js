// src/data/products.js
import Image001 from '../assets/products/001.jpeg';
import Image002 from '../assets/products/002.jpeg';
import Image003 from '../assets/products/003.jpeg';
import ImageUSA from '../assets/products/usa.jpeg';
import ImageCanada from '../assets/products/canada.jpeg';
import ImagePK from '../assets/products/pk.jpeg';
import ImageAfgan from '../assets/products/afgan.jpeg';
import ImageNipal from '../assets/products/nipal.jpeg';
import ImageSirilanka from '../assets/products/sirilanka.jpeg';
import ImageBangladesh from '../assets/products/bangladesh.jpeg';
import ImageMaldive from '../assets/products/maldive.jpeg';
import ImageRed from '../assets/products/red.jpeg';
import ImageBlue from '../assets/products/blue.jpeg';
import ImageWhite from '../assets/products/white.jpeg';
import ImageBlack from '../assets/products/black.jpeg';
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

export const products = [
  // Regular Series
  {
    id: 1,
    slug: 'rs-01',
    name: 'RS-1',
    tag: 'Regular Series',
    type: 'Regular Series',
    seriesNumber: 'RS-1',
    image: Image001,
    description: 'Perfect for beginners and casual players. Lightweight design with smooth matte finish.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [9000, 11500],
      US: [90, 115],
    },
    sizes: [
      { size: '26', price: 9000, specs: { 'Playing Area': '23 × 23 inch', 'Border': '1½ × 1½ inch', 'Plywood': '3 mm', 'Wood': 'Sheesham' } },
      { size: '32', price: 11500, specs: { 'Playing Area': '29 × 29 inch', 'Border': '1½ × 1½ inch', 'Plywood': '3 mm', 'Wood': 'Sheesham' } },
    ],
    features: [
      'Lightweight design - easy to carry',
      'Rounded corners for safety',
      'Includes complete coin set',
      'Smooth matte playing surface',
      'Beginner-friendly rebound',
      '30-day warranty included'
    ],
    included: [
      '1 RS-1 Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Striker',
      'Board Cover'
    ]
  },
  {
    id: 2,
    slug: 'rs-02',
    name: 'RS-2',
    tag: 'Regular Series',
    type: 'Regular Series',
    seriesNumber: 'RS-2',
    image: Image002,
    description: 'Designed for intermediate players who want to take their game to the next level.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [9000, 11500],
      US: [90, 115],
    },
    sizes: [
      { size: '26', price: 9000, specs: { 'Playing Area': '23 × 23 inch', 'Border': '1½ × 1½ inch', 'Plywood': '3 mm', 'Wood': 'Sheesham' } },
      { size: '32', price: 11500, specs: { 'Playing Area': '29 × 29 inch', 'Border': '1½ × 1½ inch', 'Plywood': '3 mm', 'Wood': 'Sheesham' } },
    ],
    features: [
      'Water-resistant construction',
      'Reinforced backing for durability',
      'Includes premium striker',
      'High rebound for competitive play',
      'Polished satin finish',
      '30-day warranty included'
    ],
    included: [
      '1 RS-2 Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover',
      'Carrying Strap'
    ]
  },
  // Country Edition
  {
    id: 5,
    slug: 'usa-edition',
    name: 'USA Edition',
    tag: 'Country Edition',
    type: 'Country Edition',
    country: 'USA',
    image: ImageUSA,
    description: 'Special USA edition board featuring iconic American design with premium quality construction.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [17990, 22500, 28500, 35900],
      US: [180, 225, 285, 359],
    },
    sizes: [
      { size: '24"', price: 17990, specs: { size: '24" x 24"', ply: '8mm Premium', frame: '1.5" Hardwood', weight: '7kg', boardThickness: '12mm' } },
      { size: '32"', price: 22500, specs: { size: '32" x 32"', ply: '10mm Premium', frame: '2" Hardwood', weight: '11kg', boardThickness: '16mm' } },
      { size: '36"', price: 28500, specs: { size: '35" x 35"', ply: '10mm Premium', frame: '2" Hardwood', weight: '13kg', boardThickness: '18mm' } },
      { size: '42"', price: 35900, specs: { size: '42" x 42"', ply: '12mm Premium', frame: '2.5" Hardwood', weight: '17kg', boardThickness: '20mm' } },
    ],
    features: [
      'USA themed premium design',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Durable finish with patriotic accents',
      '30-day warranty included'
    ],
    included: [
      '1 USA Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ]
  },
  {
    id: 6,
    slug: 'canada-edition',
    name: 'Canada Edition',
    tag: 'Country Edition',
    type: 'Country Edition',
    country: 'Canada',
    image: ImageCanada,
    description: 'Special Canada edition board featuring iconic maple leaf design with premium quality.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [17990, 22500, 28500, 35900],
      US: [180, 225, 285, 359],
    },
    sizes: [
      { size: '24"', price: 17990, specs: { size: '24" x 24"', ply: '8mm Premium', frame: '1.5" Hardwood', weight: '7kg', boardThickness: '12mm' } },
      { size: '32"', price: 22500, specs: { size: '32" x 32"', ply: '10mm Premium', frame: '2" Hardwood', weight: '11kg', boardThickness: '16mm' } },
      { size: '36"', price: 28500, specs: { size: '35" x 35"', ply: '10mm Premium', frame: '2" Hardwood', weight: '13kg', boardThickness: '18mm' } },
      { size: '42"', price: 35900, specs: { size: '42" x 42"', ply: '12mm Premium', frame: '2.5" Hardwood', weight: '17kg', boardThickness: '20mm' } },
    ],
    features: [
      'Canada themed premium design',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Durable finish with maple leaf accents',
      '30-day warranty included'
    ],
    included: [
      '1 Canada Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ]
  },
  {
    id: 7,
    slug: 'pakistan-edition',
    name: 'Pakistan Edition',
    tag: 'Country Edition',
    type: 'Country Edition',
    country: 'Pakistan',
    image: ImagePK,
    description: 'Special Pakistan edition board featuring iconic crescent and star design with premium quality.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [17990, 22500, 28500, 35900],
      US: [180, 225, 285, 359],
    },
    sizes: [
      { size: '24"', price: 17990, specs: { size: '24" x 24"', ply: '8mm Premium', frame: '1.5" Hardwood', weight: '7kg', boardThickness: '12mm' } },
      { size: '32"', price: 22500, specs: { size: '32" x 32"', ply: '10mm Premium', frame: '2" Hardwood', weight: '11kg', boardThickness: '16mm' } },
      { size: '36"', price: 28500, specs: { size: '35" x 35"', ply: '10mm Premium', frame: '2" Hardwood', weight: '13kg', boardThickness: '18mm' } },
      { size: '42"', price: 35900, specs: { size: '42" x 42"', ply: '12mm Premium', frame: '2.5" Hardwood', weight: '17kg', boardThickness: '20mm' } },
    ],
    features: [
      'Pakistan themed premium design',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Durable finish with patriotic accents',
      '30-day warranty included'
    ],
    included: [
      '1 Pakistan Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ]
  },
  {
    id: 8,
    slug: 'afghanistan-edition',
    name: 'Afghanistan Edition',
    tag: 'Country Edition',
    type: 'Country Edition',
    country: 'Afghanistan',
    image: ImageAfgan,
    description: 'Special Afghanistan edition board featuring iconic national design with premium quality.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [17990, 22500, 28500, 35900],
      US: [180, 225, 285, 359],
    },
    sizes: [
      { size: '24"', price: 17990, specs: { size: '24" x 24"', ply: '8mm Premium', frame: '1.5" Hardwood', weight: '7kg', boardThickness: '12mm' } },
      { size: '32"', price: 22500, specs: { size: '32" x 32"', ply: '10mm Premium', frame: '2" Hardwood', weight: '11kg', boardThickness: '16mm' } },
      { size: '36"', price: 28500, specs: { size: '35" x 35"', ply: '10mm Premium', frame: '2" Hardwood', weight: '13kg', boardThickness: '18mm' } },
      { size: '42"', price: 35900, specs: { size: '42" x 42"', ply: '12mm Premium', frame: '2.5" Hardwood', weight: '17kg', boardThickness: '20mm' } },
    ],
    features: [
      'Afghanistan themed premium design',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Durable finish with patriotic accents',
      '30-day warranty included'
    ],
    included: [
      '1 Afghanistan Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ]
  },
  {
    id: 9,
    slug: 'nepal-edition',
    name: 'Nepal Edition',
    tag: 'Country Edition',
    type: 'Country Edition',
    country: 'Nepal',
    image: ImageNipal,
    description: 'Special Nepal edition board featuring iconic Himalayan design with premium quality.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [17990, 22500, 28500, 35900],
      US: [180, 225, 285, 359],
    },
    sizes: [
      { size: '24"', price: 17990, specs: { size: '24" x 24"', ply: '8mm Premium', frame: '1.5" Hardwood', weight: '7kg', boardThickness: '12mm' } },
      { size: '32"', price: 22500, specs: { size: '32" x 32"', ply: '10mm Premium', frame: '2" Hardwood', weight: '11kg', boardThickness: '16mm' } },
      { size: '36"', price: 28500, specs: { size: '35" x 35"', ply: '10mm Premium', frame: '2" Hardwood', weight: '13kg', boardThickness: '18mm' } },
      { size: '42"', price: 35900, specs: { size: '42" x 42"', ply: '12mm Premium', frame: '2.5" Hardwood', weight: '17kg', boardThickness: '20mm' } },
    ],
    features: [
      'Nepal themed premium design',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Durable finish with patriotic accents',
      '30-day warranty included'
    ],
    included: [
      '1 Nepal Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ]
  },
  {
    id: 10,
    slug: 'sri-lanka-edition',
    name: 'Sri Lanka Edition',
    tag: 'Country Edition',
    type: 'Country Edition',
    country: 'Sri Lanka',
    image: ImageSirilanka,
    description: 'Special Sri Lanka edition board featuring iconic lion design with premium quality.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [17990, 22500, 28500, 35900],
      US: [180, 225, 285, 359],
    },
    sizes: [
      { size: '24"', price: 17990, specs: { size: '24" x 24"', ply: '8mm Premium', frame: '1.5" Hardwood', weight: '7kg', boardThickness: '12mm' } },
      { size: '32"', price: 22500, specs: { size: '32" x 32"', ply: '10mm Premium', frame: '2" Hardwood', weight: '11kg', boardThickness: '16mm' } },
      { size: '36"', price: 28500, specs: { size: '35" x 35"', ply: '10mm Premium', frame: '2" Hardwood', weight: '13kg', boardThickness: '18mm' } },
      { size: '42"', price: 35900, specs: { size: '42" x 42"', ply: '12mm Premium', frame: '2.5" Hardwood', weight: '17kg', boardThickness: '20mm' } },
    ],
    features: [
      'Sri Lanka themed premium design',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Durable finish with patriotic accents',
      '30-day warranty included'
    ],
    included: [
      '1 Sri Lanka Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ]
  },
  {
    id: 11,
    slug: 'bangladesh-edition',
    name: 'Bangladesh Edition',
    tag: 'Country Edition',
    type: 'Country Edition',
    country: 'Bangladesh',
    image: ImageBangladesh,
    description: 'Special Bangladesh edition board featuring iconic design with premium quality.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [17990, 22500, 28500, 35900],
      US: [180, 225, 285, 359],
    },
    sizes: [
      { size: '24"', price: 17990, specs: { size: '24" x 24"', ply: '8mm Premium', frame: '1.5" Hardwood', weight: '7kg', boardThickness: '12mm' } },
      { size: '32"', price: 22500, specs: { size: '32" x 32"', ply: '10mm Premium', frame: '2" Hardwood', weight: '11kg', boardThickness: '16mm' } },
      { size: '36"', price: 28500, specs: { size: '35" x 35"', ply: '10mm Premium', frame: '2" Hardwood', weight: '13kg', boardThickness: '18mm' } },
      { size: '42"', price: 35900, specs: { size: '42" x 42"', ply: '12mm Premium', frame: '2.5" Hardwood', weight: '17kg', boardThickness: '20mm' } },
    ],
    features: [
      'Bangladesh themed premium design',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Durable finish with patriotic accents',
      '30-day warranty included'
    ],
    included: [
      '1 Bangladesh Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ]
  },
  {
    id: 12,
    slug: 'maldives-edition',
    name: 'Maldives Edition',
    tag: 'Country Edition',
    type: 'Country Edition',
    country: 'Maldives',
    image: ImageMaldive,
    description: 'Special Maldives edition board featuring iconic island design with premium quality.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [17990, 22500, 28500, 35900],
      US: [180, 225, 285, 359],
    },
    sizes: [
      { size: '24"', price: 17990, specs: { size: '24" x 24"', ply: '8mm Premium', frame: '1.5" Hardwood', weight: '7kg', boardThickness: '12mm' } },
      { size: '32"', price: 22500, specs: { size: '32" x 32"', ply: '10mm Premium', frame: '2" Hardwood', weight: '11kg', boardThickness: '16mm' } },
      { size: '36"', price: 28500, specs: { size: '35" x 35"', ply: '10mm Premium', frame: '2" Hardwood', weight: '13kg', boardThickness: '18mm' } },
      { size: '42"', price: 35900, specs: { size: '42" x 42"', ply: '12mm Premium', frame: '2.5" Hardwood', weight: '17kg', boardThickness: '20mm' } },
    ],
    features: [
      'Maldives themed premium design',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Durable finish with patriotic accents',
      '30-day warranty included'
    ],
    included: [
      '1 Maldives Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ]
  },
  // Special Edition - Colors
  {
    id: 13,
    slug: 'red-special-edition',
    name: 'Red Special Edition',
    tag: 'Special Edition',
    type: 'Special Edition',
    color: 'Red',
    image: ImageRed,
    description: 'Vibrant red special edition board with premium finish and bold design statement.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [15990, 19990, 24990, 31990],
      US: [160, 200, 250, 320],
    },
    sizes: [
      { size: '24"', price: 15990, specs: { size: '24" x 24"', ply: '6mm Water-Resistant', frame: '1.5" Hardwood', weight: '6kg', boardThickness: '10mm' } },
      { size: '32"', price: 19990, specs: { size: '32" x 32"', ply: '8mm Water-Resistant', frame: '2" Hardwood', weight: '10kg', boardThickness: '14mm' } },
      { size: '36"', price: 24990, specs: { size: '35" x 35"', ply: '8mm Water-Resistant', frame: '2" Hardwood', weight: '12kg', boardThickness: '16mm' } },
      { size: '42"', price: 31990, specs: { size: '42" x 42"', ply: '10mm Water-Resistant', frame: '2.5" Hardwood', weight: '16kg', boardThickness: '18mm' } },
    ],
    features: [
      'Bold red premium finish',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Metallic shine finish',
      '30-day warranty included'
    ],
    included: [
      '1 Red Special Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ]
  },
  {
    id: 14,
    slug: 'blue-special-edition',
    name: 'Blue Special Edition',
    tag: 'Special Edition',
    type: 'Special Edition',
    color: 'Blue',
    image: ImageBlue,
    description: 'Elegant blue special edition board with premium finish and sophisticated design.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [15990, 19990, 24990, 31990],
      US: [160, 200, 250, 320],
    },
    sizes: [
      { size: '24"', price: 15990, specs: { size: '24" x 24"', ply: '6mm Water-Resistant', frame: '1.5" Hardwood', weight: '6kg', boardThickness: '10mm' } },
      { size: '32"', price: 19990, specs: { size: '32" x 32"', ply: '8mm Water-Resistant', frame: '2" Hardwood', weight: '10kg', boardThickness: '14mm' } },
      { size: '36"', price: 24990, specs: { size: '35" x 35"', ply: '8mm Water-Resistant', frame: '2" Hardwood', weight: '12kg', boardThickness: '16mm' } },
      { size: '42"', price: 31990, specs: { size: '42" x 42"', ply: '10mm Water-Resistant', frame: '2.5" Hardwood', weight: '16kg', boardThickness: '18mm' } },
    ],
    features: [
      'Elegant blue premium finish',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Metallic shine finish',
      '30-day warranty included'
    ],
    included: [
      '1 Blue Special Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ]
  },
  {
    id: 15,
    slug: 'white-special-edition',
    name: 'White Special Edition',
    tag: 'Special Edition',
    type: 'Special Edition',
    color: 'White',
    image: ImageWhite,
    description: 'Clean white special edition board with premium finish and minimalist elegance.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [15990, 19990, 24990, 31990],
      US: [160, 200, 250, 320],
    },
    sizes: [
      { size: '24"', price: 15990, specs: { size: '24" x 24"', ply: '6mm Water-Resistant', frame: '1.5" Hardwood', weight: '6kg', boardThickness: '10mm' } },
      { size: '32"', price: 19990, specs: { size: '32" x 32"', ply: '8mm Water-Resistant', frame: '2" Hardwood', weight: '10kg', boardThickness: '14mm' } },
      { size: '36"', price: 24990, specs: { size: '35" x 35"', ply: '8mm Water-Resistant', frame: '2" Hardwood', weight: '12kg', boardThickness: '16mm' } },
      { size: '42"', price: 31990, specs: { size: '42" x 42"', ply: '10mm Water-Resistant', frame: '2.5" Hardwood', weight: '16kg', boardThickness: '18mm' } },
    ],
    features: [
      'Clean white premium finish',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Pearlescent shine finish',
      '30-day warranty included'
    ],
    included: [
      '1 White Special Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ]
  },
  {
    id: 16,
    slug: 'black-special-edition',
    name: 'Black Special Edition',
    tag: 'Special Edition',
    type: 'Special Edition',
    color: 'Black',
    image: ImageBlack,
    description: 'Sleek black special edition board with premium matte finish and modern design.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [15990, 19990, 24990, 31990],
      US: [160, 200, 250, 320],
    },
    sizes: [
      { size: '24"', price: 15990, specs: { size: '24" x 24"', ply: '6mm Water-Resistant', frame: '1.5" Hardwood', weight: '6kg', boardThickness: '10mm' } },
      { size: '32"', price: 19990, specs: { size: '32" x 32"', ply: '8mm Water-Resistant', frame: '2" Hardwood', weight: '10kg', boardThickness: '14mm' } },
      { size: '36"', price: 24990, specs: { size: '35" x 35"', ply: '8mm Water-Resistant', frame: '2" Hardwood', weight: '12kg', boardThickness: '16mm' } },
      { size: '42"', price: 31990, specs: { size: '42" x 42"', ply: '10mm Water-Resistant', frame: '2.5" Hardwood', weight: '16kg', boardThickness: '18mm' } },
    ],
    features: [
      'Sleek black matte finish',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Premium matte coating',
      '30-day warranty included'
    ],
    included: [
      '1 Black Special Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ]
  },
  {
    id: 17,
    slug: 'ps-01',
    name: 'PS-1',
    tag: 'Professional Series',
    type: 'Professional Series',
    seriesNumber: 'PS-1',
    image: Image001,
    description: 'Official tournament-grade board designed for competitive play. Features superior cushion and precise pocket placement.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [19990, 25990, 32990],
      US: [200, 260, 330],
    },
    sizes: [
      { size: '34', price: 19990, specs: { 'Playing Area': '29 × 29 inch', 'Border': '3½ × 3½ inch', 'Plywood': '6 mm', 'Wood': 'Sheesham' } },
      { size: '41', price: 25990, specs: { 'Playing Area': '35 × 35 inch', 'Border': '3½ × 3½ inch', 'Plywood': '6 mm', 'Wood': 'Sheesham' } },
      { size: '46', price: 32990, specs: { 'Playing Area': '41 × 41 inch', 'Border': '3½ × 3½ inch', 'Plywood': '6 mm', 'Wood': 'Sheesham' } },
    ],
    features: [
      'Official tournament specifications',
      'Premium Sheesham wood frame',
      'Superior cushion for precise rebounds',
      'Professional playing surface',
      'FIA-approved design',
      '30-day warranty included'
    ],
    included: [
      '1 PS-1 Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '2 Pro Strikers',
      'Premium Carrying Case'
    ]
  },
  {
    id: 18,
    slug: 'ps-02',
    name: 'PS-2',
    tag: 'Professional Series',
    type: 'Professional Series',
    seriesNumber: 'PS-2',
    image: Image002,
    description: 'The ultimate championship board for professional tournaments. Features hand-carved details and tournament-grade cushion.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [19990, 25990, 32990],
      US: [200, 260, 330],
    },
    sizes: [
      { size: '34', price: 19990, specs: { 'Playing Area': '29 × 29 inch', 'Border': '3½ × 3½ inch', 'Plywood': '6 mm', 'Wood': 'Sheesham' } },
      { size: '41', price: 25990, specs: { 'Playing Area': '35 × 35 inch', 'Border': '3½ × 3½ inch', 'Plywood': '6 mm', 'Wood': 'Sheesham' } },
      { size: '46', price: 32990, specs: { 'Playing Area': '41 × 41 inch', 'Border': '3½ × 3½ inch', 'Plywood': '6 mm', 'Wood': 'Sheesham' } },
    ],
    features: [
      'Hand-carved traditional patterns',
      'Tournament-grade cushion system',
      'Premium Sheesham wood construction',
      'Anti-warp technology',
      'Professional coin set included',
      '30-day warranty included'
    ],
    included: [
      '1 PS-2 Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '2 Championship Strikers',
      'Velvet Lined Carrying Case',
      'Professional Score Sheet'
    ]
  },
  {
    id: 19,
    slug: 'ps-03',
    name: 'PS-3',
    tag: 'Professional Series',
    type: 'Professional Series',
    seriesNumber: 'PS-3',
    image: Image003,
    description: 'Master craftsmanship meets modern engineering. The PS-3 is built for serious players who demand the best.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [19990, 25990, 32990],
      US: [200, 260, 330],
    },
    sizes: [
      { size: '34', price: 19990, specs: { 'Playing Area': '29 × 29 inch', 'Border': '3½ × 3½ inch', 'Plywood': '6 mm', 'Wood': 'Sheesham' } },
      { size: '41', price: 25990, specs: { 'Playing Area': '35 × 35 inch', 'Border': '3½ × 3½ inch', 'Plywood': '6 mm', 'Wood': 'Sheesham' } },
      { size: '46', price: 32990, specs: { 'Playing Area': '41 × 41 inch', 'Border': '3½ × 3½ inch', 'Plywood': '6 mm', 'Wood': 'Sheesham' } },
    ],
    features: [
      'Master craftsmanship',
      'Tournament-approved specifications',
      'Multi-layer cushion system',
      'Hand-polished playing surface',
      'Precision pocket alignment',
      '30-day warranty included'
    ],
    included: [
      '1 PS-3 Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '2 Master Series Strikers',
      'Deluxe Carrying Case',
      'Premium Cleaning Kit',
      'Certificate of Authenticity'
    ]
  },
  standProduct,
];

export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug);
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id) || product.id === id);
};

export const getProductsByCategory = (category) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};
