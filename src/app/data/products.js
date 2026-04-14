// src/data/products.js
import Image001 from '../assets/products/001.jpeg';
import Image002 from '../assets/products/002.jpeg';
import Image003 from '../assets/products/003.jpeg';
import Image004 from '../assets/products/004.jpeg';
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
    image: Image004,
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
  // Regular Series
  {
    id: 1,
    slug: 'rs-01',
    name: 'RS-01',
    tag: 'Regular Series',
    type: 'Regular Series',
    seriesNumber: 'RS-01',
    image: Image001,
    description: 'Perfect for beginners and casual players. Lightweight design with smooth matte finish.',
    category: 'boards',
    inStock: true,
    sizes: [
      { size: '24"', price: 9990, specs: { size: '24" x 24"', ply: '4mm Standard', frame: '1" Softwood', weight: '5kg', boardThickness: '10mm' } },
      { size: '32"', price: 12990, specs: { size: '29" x 29"', ply: '4mm Standard', frame: '1.5" Softwood', weight: '8kg', boardThickness: '12mm' } },
      { size: '36"', price: 15990, specs: { size: '32" x 32"', ply: '6mm Standard', frame: '1.5" Softwood', weight: '10kg', boardThickness: '14mm' } },
      { size: '42"', price: 19990, specs: { size: '36" x 36"', ply: '8mm Standard', frame: '2" Softwood', weight: '14kg', boardThickness: '16mm' } },
    ],
    features: [
      'Lightweight design - easy to carry',
      'Rounded corners for safety',
      'Includes complete coin set',
      'Smooth matte playing surface',
      'Beginner-friendly rebound',
      '1-year warranty included'
    ],
    included: [
      '1 RS-01 Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Striker',
      'Board Cover'
    ]
  },
  {
    id: 2,
    slug: 'rs-02',
    name: 'RS-02',
    tag: 'Regular Series',
    type: 'Regular Series',
    seriesNumber: 'RS-02',
    image: Image002,
    description: 'Designed for intermediate players who want to take their game to the next level.',
    category: 'boards',
    inStock: true,
    sizes: [
      { size: '24"', price: 12990, specs: { size: '24" x 24"', ply: '6mm Water-Resistant', frame: '1.5" Hardwood', weight: '7kg', boardThickness: '12mm' } },
      { size: '32"', price: 17990, specs: { size: '32" x 32"', ply: '8mm Water-Resistant', frame: '2" Hardwood', weight: '10kg', boardThickness: '14mm' } },
      { size: '36"', price: 21990, specs: { size: '32" x 32"', ply: '8mm Water-Resistant', frame: '2" Hardwood', weight: '12kg', boardThickness: '16mm' } },
      { size: '42"', price: 27990, specs: { size: '42" x 42"', ply: '10mm Water-Resistant', frame: '2.5" Hardwood', weight: '16kg', boardThickness: '18mm' } },
    ],
    features: [
      'Water-resistant construction',
      'Reinforced backing for durability',
      'Includes premium striker',
      'High rebound for competitive play',
      'Polished satin finish',
      '2-year warranty included'
    ],
    included: [
      '1 RS-02 Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover',
      'Carrying Strap'
    ]
  },
  {
    id: 3,
    slug: 'rs-03',
    name: 'RS-03',
    tag: 'Regular Series',
    type: 'Regular Series',
    seriesNumber: 'RS-03',
    image: Image003,
    description: 'Professional tournament-grade board used by champions worldwide.',
    category: 'boards',
    inStock: true,
    sizes: [
      { size: '24"', price: 22990, specs: { size: '24" x 24"', ply: '12mm English Birch', frame: '2" Kikar Wood', weight: '10kg', boardThickness: '16mm' } },
      { size: '32"', price: 29990, specs: { size: '32" x 32"', ply: '14mm English Birch', frame: '2.5" Kikar Wood', weight: '15kg', boardThickness: '20mm' } },
      { size: '36"', price: 34990, specs: { size: '35" x 35"', ply: '16mm English Birch', frame: '3" Kikar Wood', weight: '18kg', boardThickness: '22mm' } },
      { size: '42"', price: 42990, specs: { size: '42" x 42"', ply: '18mm English Birch', frame: '3.5" Teak Wood', weight: '22kg', boardThickness: '25mm' } },
    ],
    features: [
      'Federation approved specifications',
      'Zero vibration technology',
      'Heavy-duty construction',
      'Glass-like glazed surface',
      'Professional 5x rebound',
      '5-year warranty included'
    ],
    included: [
      '1 RS-03 Board',
      '19 Premium Carrom Men',
      '1 Queen (Red)',
      '2 Pro Strikers',
      'Deluxe Board Cover',
      'Premium Carrying Case',
      'Official Rule Book'
    ]
  },
  {
    id: 4,
    slug: 'rs-04',
    name: 'RS-04',
    tag: 'Regular Series',
    type: 'Regular Series',
    seriesNumber: 'RS-04',
    image: Image004,
    description: 'Elite professional board for serious competitive players seeking maximum performance.',
    category: 'boards',
    inStock: true,
    sizes: [
      { size: '24"', price: 29990, specs: { size: '24" x 24"', ply: '14mm Premium Birch', frame: '2.5" Teak Wood', weight: '12kg', boardThickness: '18mm' } },
      { size: '32"', price: 34990, specs: { size: '32" x 32"', ply: '16mm Premium Birch', frame: '3" Teak Wood', weight: '16kg', boardThickness: '20mm' } },
      { size: '36"', price: 39990, specs: { size: '36" x 36"', ply: '16mm Premium Birch', frame: '3" Teak Wood', weight: '18kg', boardThickness: '22mm' } },
      { size: '42"', price: 45990, specs: { size: '42" x 42"', ply: '18mm Premium Birch', frame: '3.5" Teak Wood', weight: '22kg', boardThickness: '25mm' } },
    ],
    features: [
      'Premium engineered wood construction',
      'Ultra-smooth playing surface',
      'Enhanced sound quality',
      'Superior rebound control',
      'Professional tournament specifications',
      '5-year warranty included'
    ],
    included: [
      '1 RS-04 Board',
      '19 Premium Carrom Men',
      '1 Queen (Red)',
      '2 Pro Strikers',
      'Deluxe Board Cover',
      'Premium Carrying Case',
      'Official Rule Book',
      'Professional Coin Set'
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
    sizes: [
      { size: '24"', price: 17990, specs: { size: '24" x 24"', ply: '8mm Premium', frame: '1.5" Hardwood', weight: '7kg', boardThickness: '12mm' } },
      { size: '32"', price: 24990, specs: { size: '32" x 32"', ply: '10mm Premium', frame: '2" Hardwood', weight: '11kg', boardThickness: '16mm' } },
      { size: '36"', price: 27990, specs: { size: '35" x 35"', ply: '10mm Premium', frame: '2" Hardwood', weight: '13kg', boardThickness: '18mm' } },
      { size: '42"', price: 34990, specs: { size: '42" x 42"', ply: '12mm Premium', frame: '2.5" Hardwood', weight: '17kg', boardThickness: '20mm' } },
    ],
    features: [
      'USA themed premium design',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Durable finish with patriotic accents',
      '2-year warranty included'
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
    sizes: [
      { size: '24"', price: 17990, specs: { size: '24" x 24"', ply: '8mm Premium', frame: '1.5" Hardwood', weight: '7kg', boardThickness: '12mm' } },
      { size: '32"', price: 24990, specs: { size: '32" x 32"', ply: '10mm Premium', frame: '2" Hardwood', weight: '11kg', boardThickness: '16mm' } },
      { size: '36"', price: 27990, specs: { size: '35" x 35"', ply: '10mm Premium', frame: '2" Hardwood', weight: '13kg', boardThickness: '18mm' } },
      { size: '42"', price: 34990, specs: { size: '42" x 42"', ply: '12mm Premium', frame: '2.5" Hardwood', weight: '17kg', boardThickness: '20mm' } },
    ],
    features: [
      'Canada themed premium design',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Durable finish with maple leaf accents',
      '2-year warranty included'
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
    sizes: [
      { size: '24"', price: 17990, specs: { size: '24" x 24"', ply: '8mm Premium', frame: '1.5" Hardwood', weight: '7kg', boardThickness: '12mm' } },
      { size: '32"', price: 24990, specs: { size: '32" x 32"', ply: '10mm Premium', frame: '2" Hardwood', weight: '11kg', boardThickness: '16mm' } },
      { size: '36"', price: 27990, specs: { size: '35" x 35"', ply: '10mm Premium', frame: '2" Hardwood', weight: '13kg', boardThickness: '18mm' } },
      { size: '42"', price: 34990, specs: { size: '42" x 42"', ply: '12mm Premium', frame: '2.5" Hardwood', weight: '17kg', boardThickness: '20mm' } },
    ],
    features: [
      'Pakistan themed premium design',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Durable finish with patriotic accents',
      '2-year warranty included'
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
    sizes: [
      { size: '24"', price: 17990, specs: { size: '24" x 24"', ply: '8mm Premium', frame: '1.5" Hardwood', weight: '7kg', boardThickness: '12mm' } },
      { size: '32"', price: 24990, specs: { size: '32" x 32"', ply: '10mm Premium', frame: '2" Hardwood', weight: '11kg', boardThickness: '16mm' } },
      { size: '36"', price: 27990, specs: { size: '35" x 35"', ply: '10mm Premium', frame: '2" Hardwood', weight: '13kg', boardThickness: '18mm' } },
      { size: '42"', price: 34990, specs: { size: '42" x 42"', ply: '12mm Premium', frame: '2.5" Hardwood', weight: '17kg', boardThickness: '20mm' } },
    ],
    features: [
      'Afghanistan themed premium design',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Durable finish with patriotic accents',
      '2-year warranty included'
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
    sizes: [
      { size: '24"', price: 17990, specs: { size: '24" x 24"', ply: '8mm Premium', frame: '1.5" Hardwood', weight: '7kg', boardThickness: '12mm' } },
      { size: '32"', price: 24990, specs: { size: '32" x 32"', ply: '10mm Premium', frame: '2" Hardwood', weight: '11kg', boardThickness: '16mm' } },
      { size: '36"', price: 27990, specs: { size: '35" x 35"', ply: '10mm Premium', frame: '2" Hardwood', weight: '13kg', boardThickness: '18mm' } },
      { size: '42"', price: 34990, specs: { size: '42" x 42"', ply: '12mm Premium', frame: '2.5" Hardwood', weight: '17kg', boardThickness: '20mm' } },
    ],
    features: [
      'Nepal themed premium design',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Durable finish with patriotic accents',
      '2-year warranty included'
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
    sizes: [
      { size: '24"', price: 17990, specs: { size: '24" x 24"', ply: '8mm Premium', frame: '1.5" Hardwood', weight: '7kg', boardThickness: '12mm' } },
      { size: '32"', price: 24990, specs: { size: '32" x 32"', ply: '10mm Premium', frame: '2" Hardwood', weight: '11kg', boardThickness: '16mm' } },
      { size: '36"', price: 27990, specs: { size: '35" x 35"', ply: '10mm Premium', frame: '2" Hardwood', weight: '13kg', boardThickness: '18mm' } },
      { size: '42"', price: 34990, specs: { size: '42" x 42"', ply: '12mm Premium', frame: '2.5" Hardwood', weight: '17kg', boardThickness: '20mm' } },
    ],
    features: [
      'Sri Lanka themed premium design',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Durable finish with patriotic accents',
      '2-year warranty included'
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
    sizes: [
      { size: '24"', price: 17990, specs: { size: '24" x 24"', ply: '8mm Premium', frame: '1.5" Hardwood', weight: '7kg', boardThickness: '12mm' } },
      { size: '32"', price: 24990, specs: { size: '32" x 32"', ply: '10mm Premium', frame: '2" Hardwood', weight: '11kg', boardThickness: '16mm' } },
      { size: '36"', price: 27990, specs: { size: '35" x 35"', ply: '10mm Premium', frame: '2" Hardwood', weight: '13kg', boardThickness: '18mm' } },
      { size: '42"', price: 34990, specs: { size: '42" x 42"', ply: '12mm Premium', frame: '2.5" Hardwood', weight: '17kg', boardThickness: '20mm' } },
    ],
    features: [
      'Bangladesh themed premium design',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Durable finish with patriotic accents',
      '2-year warranty included'
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
    sizes: [
      { size: '24"', price: 17990, specs: { size: '24" x 24"', ply: '8mm Premium', frame: '1.5" Hardwood', weight: '7kg', boardThickness: '12mm' } },
      { size: '32"', price: 24990, specs: { size: '32" x 32"', ply: '10mm Premium', frame: '2" Hardwood', weight: '11kg', boardThickness: '16mm' } },
      { size: '36"', price: 27990, specs: { size: '35" x 35"', ply: '10mm Premium', frame: '2" Hardwood', weight: '13kg', boardThickness: '18mm' } },
      { size: '42"', price: 34990, specs: { size: '42" x 42"', ply: '12mm Premium', frame: '2.5" Hardwood', weight: '17kg', boardThickness: '20mm' } },
    ],
    features: [
      'Maldives themed premium design',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Durable finish with patriotic accents',
      '2-year warranty included'
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
    sizes: [
      { size: '24"', price: 15990, specs: { size: '24" x 24"', ply: '6mm Water-Resistant', frame: '1.5" Hardwood', weight: '6kg', boardThickness: '10mm' } },
      { size: '32"', price: 21990, specs: { size: '32" x 32"', ply: '8mm Water-Resistant', frame: '2" Hardwood', weight: '10kg', boardThickness: '14mm' } },
      { size: '36"', price: 24990, specs: { size: '35" x 35"', ply: '8mm Water-Resistant', frame: '2" Hardwood', weight: '12kg', boardThickness: '16mm' } },
      { size: '42"', price: 31990, specs: { size: '42" x 42"', ply: '10mm Water-Resistant', frame: '2.5" Hardwood', weight: '16kg', boardThickness: '18mm' } },
    ],
    features: [
      'Bold red premium finish',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Metallic shine finish',
      '2-year warranty included'
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
    sizes: [
      { size: '24"', price: 15990, specs: { size: '24" x 24"', ply: '6mm Water-Resistant', frame: '1.5" Hardwood', weight: '6kg', boardThickness: '10mm' } },
      { size: '32"', price: 21990, specs: { size: '32" x 32"', ply: '8mm Water-Resistant', frame: '2" Hardwood', weight: '10kg', boardThickness: '14mm' } },
      { size: '36"', price: 24990, specs: { size: '35" x 35"', ply: '8mm Water-Resistant', frame: '2" Hardwood', weight: '12kg', boardThickness: '16mm' } },
      { size: '42"', price: 31990, specs: { size: '42" x 42"', ply: '10mm Water-Resistant', frame: '2.5" Hardwood', weight: '16kg', boardThickness: '18mm' } },
    ],
    features: [
      'Elegant blue premium finish',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Metallic shine finish',
      '2-year warranty included'
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
    sizes: [
      { size: '24"', price: 15990, specs: { size: '24" x 24"', ply: '6mm Water-Resistant', frame: '1.5" Hardwood', weight: '6kg', boardThickness: '10mm' } },
      { size: '32"', price: 21990, specs: { size: '32" x 32"', ply: '8mm Water-Resistant', frame: '2" Hardwood', weight: '10kg', boardThickness: '14mm' } },
      { size: '36"', price: 24990, specs: { size: '35" x 35"', ply: '8mm Water-Resistant', frame: '2" Hardwood', weight: '12kg', boardThickness: '16mm' } },
      { size: '42"', price: 31990, specs: { size: '42" x 42"', ply: '10mm Water-Resistant', frame: '2.5" Hardwood', weight: '16kg', boardThickness: '18mm' } },
    ],
    features: [
      'Clean white premium finish',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Pearlescent shine finish',
      '2-year warranty included'
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
    sizes: [
      { size: '24"', price: 15990, specs: { size: '24" x 24"', ply: '6mm Water-Resistant', frame: '1.5" Hardwood', weight: '6kg', boardThickness: '10mm' } },
      { size: '32"', price: 21990, specs: { size: '32" x 32"', ply: '8mm Water-Resistant', frame: '2" Hardwood', weight: '10kg', boardThickness: '14mm' } },
      { size: '36"', price: 24990, specs: { size: '35" x 35"', ply: '8mm Water-Resistant', frame: '2" Hardwood', weight: '12kg', boardThickness: '16mm' } },
      { size: '42"', price: 31990, specs: { size: '42" x 42"', ply: '10mm Water-Resistant', frame: '2.5" Hardwood', weight: '16kg', boardThickness: '18mm' } },
    ],
    features: [
      'Sleek black matte finish',
      'High-quality wood construction',
      'Professional playing surface',
      'Includes complete coin set',
      'Premium matte coating',
      '2-year warranty included'
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
    name: 'PS-01',
    tag: 'Professional Series',
    type: 'Professional Series',
    seriesNumber: 'PS-01',
    image: Image001,
    description: 'Official tournament-grade board designed for competitive play. Features superior cushion and precise pocket placement.',
    category: 'boards',
    inStock: true,
    sizes: [
      { size: '24"', price: 14990, specs: { size: '24" x 24"', ply: '8mm Premium', frame: '2" Indian Rosewood', weight: '7kg', boardThickness: '12mm' } },
      { size: '32"', price: 19990, specs: { size: '29" x 29"', ply: '10mm Premium', frame: '2" Indian Rosewood', weight: '11kg', boardThickness: '14mm' } },
      { size: '36"', price: 24990, specs: { size: '32" x 32"', ply: '12mm Premium', frame: '2.5" Indian Rosewood', weight: '13kg', boardThickness: '16mm' } },
      { size: '42"', price: 32990, specs: { size: '36" x 36"', ply: '14mm Premium', frame: '3" Indian Rosewood', weight: '18kg', boardThickness: '18mm' } },
    ],
    features: [
      'Official tournament specifications',
      'Premium Indian Rosewood frame',
      'Superior cushion for precise rebounds',
      'Professional playing surface',
      'FIA-approved design',
      '3-year warranty included'
    ],
    included: [
      '1 PS-01 Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '2 Pro Strikers',
      'Premium Carrying Case'
    ]
  },
  {
    id: 18,
    slug: 'ps-02',
    name: 'PS-02',
    tag: 'Professional Series',
    type: 'Professional Series',
    seriesNumber: 'PS-02',
    image: Image002,
    description: 'The ultimate championship board for professional tournaments. Features hand-carved details and tournament-grade cushion.',
    category: 'boards',
    inStock: true,
    sizes: [
      { size: '24"', price: 18990, specs: { size: '24" x 24"', ply: '10mm Premium', frame: '2" Sheesham Wood', weight: '8kg', boardThickness: '14mm' } },
      { size: '32"', price: 25990, specs: { size: '29" x 29"', ply: '12mm Premium', frame: '2.5" Sheesham Wood', weight: '12kg', boardThickness: '16mm' } },
      { size: '36"', price: 32990, specs: { size: '32" x 32"', ply: '14mm Premium', frame: '2.5" Sheesham Wood', weight: '15kg', boardThickness: '18mm' } },
      { size: '42"', price: 42990, specs: { size: '36" x 36"', ply: '16mm Premium', frame: '3" Sheesham Wood', weight: '20kg', boardThickness: '20mm' } },
    ],
    features: [
      'Hand-carved traditional patterns',
      'Tournament-grade cushion system',
      'Premium Sheesham wood construction',
      'Anti-warp technology',
      'Professional coin set included',
      '5-year warranty included'
    ],
    included: [
      '1 PS-02 Board',
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
    name: 'PS-03',
    tag: 'Professional Series',
    type: 'Professional Series',
    seriesNumber: 'PS-03',
    image: Image003,
    description: 'Master craftsmanship meets modern engineering. The PS-03 is built for serious players who demand the best.',
    category: 'boards',
    inStock: true,
    sizes: [
      { size: '24"', price: 21990, specs: { size: '24" x 24"', ply: '12mm Tournament', frame: '2.5" Premium Hardwood', weight: '9kg', boardThickness: '16mm' } },
      { size: '32"', price: 29990, specs: { size: '29" x 29"', ply: '14mm Tournament', frame: '2.5" Premium Hardwood', weight: '14kg', boardThickness: '18mm' } },
      { size: '36"', price: 38990, specs: { size: '32" x 32"', ply: '16mm Tournament', frame: '3" Premium Hardwood', weight: '17kg', boardThickness: '20mm' } },
      { size: '42"', price: 49990, specs: { size: '36" x 36"', ply: '18mm Tournament', frame: '3.5" Premium Hardwood', weight: '22kg', boardThickness: '22mm' } },
    ],
    features: [
      'Master craftsmanship',
      'Tournament-approved specifications',
      'Multi-layer cushion system',
      'Hand-polished playing surface',
      'Precision pocket alignment',
      'Lifetime warranty included'
    ],
    included: [
      '1 PS-03 Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '2 Master Series Strikers',
      'Deluxe Carrying Case',
      'Premium Cleaning Kit',
      'Certificate of Authenticity'
    ]
  },
  {
    id: 20,
    slug: 'ps-04',
    name: 'PS-04',
    tag: 'Professional Series',
    type: 'Professional Series',
    seriesNumber: 'PS-04',
    image: Image004,
    description: 'The pinnacle of carrom board craftsmanship. PS-04 features intricate inlay work and the finest materials.',
    category: 'boards',
    inStock: true,
    sizes: [
      { size: '24"', price: 27990, specs: { size: '24" x 24"', ply: '14mm Elite', frame: '3" Royal Teak', weight: '10kg', boardThickness: '18mm' } },
      { size: '32"', price: 37990, specs: { size: '29" x 29"', ply: '16mm Elite', frame: '3" Royal Teak', weight: '15kg', boardThickness: '20mm' } },
      { size: '36"', price: 47990, specs: { size: '32" x 32"', ply: '18mm Elite', frame: '3.5" Royal Teak', weight: '19kg', boardThickness: '22mm' } },
      { size: '42"', price: 59990, specs: { size: '36" x 36"', ply: '20mm Elite', frame: '4" Royal Teak', weight: '25kg', boardThickness: '24mm' } },
    ],
    features: [
      'Royal Teak wood construction',
      'Intricate hand-inlay designs',
      'Elite-grade cushion system',
      'Museum-quality finish',
      'Collectors item',
      'Lifetime warranty with priority service'
    ],
    included: [
      '1 PS-04 Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '2 Royal Series Strikers',
      'Mahogany Display Stand',
      'Premium Leather Carrying Case',
      'Engraved Certificate of Authenticity',
      'Complimentary Annual Maintenance'
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
