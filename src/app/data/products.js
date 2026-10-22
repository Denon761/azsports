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
    description: 'The AZ Sports® RS-01 Regular Series Carrom Board is designed for home use, schools, recreational clubs, beginners, and casual players. Available in two sizes, it combines traditional craftsmanship with carefully prepared materials for everyday carrom play.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [9000, 11500],
      US: [90, 115],
    },
    sizes: [
      { size: '26', price: 9000 },
      { size: '32', price: 11500 },
    ],
    included: [
      '1 RS-01 Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Striker',
      'Board Cover'
    ],
    detailSections: [
      {
        title: 'Carrom-Specific Plywood Preparation',
        body: 'AZ Sports prepares its single-ply plywood specifically for carrom board manufacturing. This preparation is intended to support durability and maintain the playing surface with proper care and storage.'
      },
      {
        title: 'Seasoned Indian Rosewood Frame',
        body: 'The frame is made from seasoned Indian Rosewood, with approximate dimensions of 1½ × 1½ inches. Proper seasoning helps improve dimensional stability and reduce the risk of warping or twisting.'
      },
      {
        title: 'Hand-Applied Artistic Design',
        body: 'The playing-surface design is applied by hand by a skilled worker rather than through screen printing, giving the board a distinctive artistic finish.'
      },
      {
        title: 'Shellac-Based Polish',
        body: 'AZ Sports uses a shellac-based polish developed through its manufacturing experience and research and development efforts. The finishing process focuses on the playing surface and smooth striker movement when the board is properly maintained.'
      }
    ],
    availableSizesList: [
      { label: 'Size 1', items: ['Overall Size: 26 × 26 inches', 'Playing Surface: 23 × 23 inches'] },
      { label: 'Size 2', items: ['Overall Size: 32 × 32 inches', 'Playing Surface: 29 × 29 inches'] },
    ],
    specTable: [
      { label: 'Brand', value: 'AZ Sports®' },
      { label: 'Model', value: 'RS-01' },
      { label: 'Series', value: 'Regular Series' },
      { label: 'Product Type', value: 'Carrom Board' },
      { label: 'Overall Board Sizes', value: '26 × 26 and 32 × 32 inches' },
      { label: 'Playing Surface Sizes', value: '23 × 23 and 29 × 29 inches' },
      { label: 'Plywood Construction', value: 'Single-Ply Plywood' },
      { label: 'Frame Material', value: 'Seasoned Indian Rosewood (Sheesham)' },
      { label: 'Frame Dimensions', value: 'Approx. 1½ × 1½ inches' },
      { label: 'Playing-Surface Design', value: 'Hand-applied artistic design' },
      { label: 'Recommended Use', value: 'Home, schools, recreational clubs, beginners and casual players' },
      { label: 'Country of Origin', value: 'Pakistan' },
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
    description: 'The AZ Sports® RS-02 Regular Series Carrom Board is designed for home use, schools, recreational clubs, beginners, and casual players. Available in two sizes, it combines traditional craftsmanship with carefully prepared materials for everyday carrom play.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [9000, 11500],
      US: [90, 115],
    },
    sizes: [
      { size: '26', price: 9000 },
      { size: '32', price: 11500 },
    ],
    included: [
      '1 RS-02 Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover',
      'Carrying Strap'
    ],
    detailSections: [
      {
        title: 'Carrom-Specific Plywood Preparation',
        body: 'AZ Sports prepares its single-ply plywood specifically for carrom board manufacturing. This preparation is intended to support durability and maintain the playing surface with proper care and storage.'
      },
      {
        title: 'Seasoned Indian Rosewood Frame',
        body: 'The frame is made from seasoned Indian Rosewood, with approximate dimensions of 1½ × 1½ inches. Proper seasoning helps improve dimensional stability and reduce the risk of warping or twisting.'
      },
      {
        title: 'Hand-Applied Artistic Design',
        body: 'The playing-surface design is applied by hand by a skilled worker rather than through screen printing, giving the board a distinctive artistic finish.'
      },
      {
        title: 'Shellac-Based Polish',
        body: 'AZ Sports uses a shellac-based polish developed through its manufacturing experience and research and development efforts. The finishing process focuses on the playing surface and smooth striker movement when the board is properly maintained.'
      }
    ],
    availableSizesList: [
      { label: 'Size 1', items: ['Overall Size: 26 × 26 inches', 'Playing Surface: 23 × 23 inches'] },
      { label: 'Size 2', items: ['Overall Size: 32 × 32 inches', 'Playing Surface: 29 × 29 inches'] },
    ],
    specTable: [
      { label: 'Brand', value: 'AZ Sports®' },
      { label: 'Model', value: 'RS-02' },
      { label: 'Series', value: 'Regular Series' },
      { label: 'Product Type', value: 'Carrom Board' },
      { label: 'Overall Board Sizes', value: '26 × 26 and 32 × 32 inches' },
      { label: 'Playing Surface Sizes', value: '23 × 23 and 29 × 29 inches' },
      { label: 'Plywood Construction', value: 'Single-Ply Plywood' },
      { label: 'Frame Material', value: 'Seasoned Indian Rosewood (Sheesham)' },
      { label: 'Frame Dimensions', value: 'Approx. 1½ × 1½ inches' },
      { label: 'Playing-Surface Design', value: 'Hand-applied artistic design' },
      { label: 'Recommended Use', value: 'Home, schools, recreational clubs, beginners and casual players' },
      { label: 'Country of Origin', value: 'Pakistan' },
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
    description: 'The AZ Sports® USA Edition Carrom Board features an American-inspired design that brings a distinctive patriotic look to traditional carrom. Designed for home use, schools, recreational clubs, beginners, and casual players, it combines a country-themed appearance with practical functionality for everyday carrom play.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [17990, 22500, 28500],
      US: [180, 225, 285],
    },
    sizes: [
      { size: '26"', price: 17990 },
      { size: '32"', price: 22500 },
      { size: '41"', price: 28500 },
    ],
    included: [
      '1 USA Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ],
    detailSections: [
      {
        title: 'Iconic USA-Inspired Design',
        body: 'The USA Edition features an American-inspired design with patriotic accents. Its distinctive appearance makes it an attractive choice for carrom enthusiasts looking for a unique board design.'
      },
      {
        title: 'Carrom-Specific Plywood Preparation',
        body: 'AZ Sports prepares its single-ply plywood specifically for carrom board manufacturing. This preparation is intended to support durability and maintain the playing surface with proper care and storage.'
      },
      {
        title: 'Seasoned Indian Rosewood Frame',
        body: 'The board features a hardwood frame that provides structural support and complements its USA-inspired design. The 41 × 41-inch model features an approximately 3½ × 3½-inch frame.'
      },
      {
        title: 'Distinctive Design and Finishing',
        body: 'The USA Edition combines its American-inspired appearance with a carefully finished playing surface, bringing together visual appeal and practical functionality for carrom enthusiasts. Indian Rosewood, with approximate dimensions of 1½ × 1½ inches. The 41 × 41-inch model features an approximately 3½ × 3½-inch frame.'
      }
    ],
    availableSizesList: [
      { label: 'Size 1', items: ['Overall Size: 26 × 26 inches', 'Playing Surface: 23 × 23 inches'] },
      { label: 'Size 2', items: ['Overall Size: 32 × 32 inches', 'Playing Surface: 29 × 29 inches'] },
      { label: 'Size 3', items: ['Overall Size: 41 × 41 inches', 'Playing Surface: 35 × 35 inches', 'Frame Dimensions: Approximately 3½ × 3½ inches'] },
    ],
    specTable: [
      { label: 'Brand', value: 'AZ Sports®' },
      { label: 'Model', value: 'USA Edition' },
      { label: 'Series', value: 'Country Edition' },
      { label: 'Product Type', value: 'Carrom Board' },
      { label: 'Overall Board Sizes', value: '26 × 26, 32 × 32 and 41 × 41 inches' },
      { label: 'Playing Surface Sizes', value: '23 × 23, 29 × 29 and 35 × 35 inches' },
      { label: 'Plywood Construction', value: 'Single-ply Plywood' },
      { label: 'Frame Material', value: 'Seasoned Indian Rosewood (Sheesham)' },
      { label: 'Frame Dimensions', value: ['Approx. 1½ × 1½ inches,', 'Approx. 3½ × 3½ inches (41-inch model)'] },
      { label: 'Playing-Surface Design', value: 'USA Edition design' },
      { label: 'Recommended Use', value: 'Home, schools, recreational clubs, beginners and casual players' },
      { label: 'Country of Origin', value: 'Pakistan' },
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
    description: 'The AZ Sports® Canada Edition Carrom Board features a Canada-inspired design that brings a distinctive patriotic look to traditional carrom. Designed for home use, schools, recreational clubs, beginners, and casual players, it combines a country-themed appearance with practical functionality for everyday carrom play.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [17990, 22500, 28500],
      US: [180, 225, 285],
    },
    sizes: [
      { size: '26"', price: 17990 },
      { size: '32"', price: 22500 },
      { size: '41"', price: 28500 },
    ],
    included: [
      '1 Canada Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ],
    detailSections: [
      {
        title: 'Iconic Canada-Inspired Design',
        body: 'The Canada Edition features a Canada-inspired design with patriotic accents. Its distinctive appearance makes it an attractive choice for carrom enthusiasts looking for a unique board design.'
      },
      {
        title: 'Carrom-Specific Plywood Preparation',
        body: 'AZ Sports prepares its single-ply plywood specifically for carrom board manufacturing. This preparation is intended to support durability and maintain the playing surface with proper care and storage.'
      },
      {
        title: 'Seasoned Indian Rosewood Frame',
        body: 'The board features a hardwood frame that provides structural support and complements its USA-inspired design. The 41 × 41-inch model features an approximately 3½ × 3½-inch frame.'
      },
      {
        title: 'Distinctive Design and Finishing',
        body: 'The Canada Edition combines its Canada-inspired appearance with a carefully finished playing surface, bringing together visual appeal and practical functionality for carrom enthusiasts. Indian Rosewood, with approximate dimensions of 1½ × 1½ inches. The 41 × 41-inch model features an approximately 3½ × 3½-inch frame.'
      }
    ],
    availableSizesList: [
      { label: 'Size 1', items: ['Overall Size: 26 × 26 inches', 'Playing Surface: 23 × 23 inches'] },
      { label: 'Size 2', items: ['Overall Size: 32 × 32 inches', 'Playing Surface: 29 × 29 inches'] },
      { label: 'Size 3', items: ['Overall Size: 41 × 41 inches', 'Playing Surface: 35 × 35 inches', 'Frame Dimensions: Approximately 3½ × 3½ inches'] },
    ],
    specTable: [
      { label: 'Brand', value: 'AZ Sports®' },
      { label: 'Model', value: 'Canada Edition' },
      { label: 'Series', value: 'Country Edition' },
      { label: 'Product Type', value: 'Carrom Board' },
      { label: 'Overall Board Sizes', value: '26 × 26, 32 × 32 and 41 × 41 inches' },
      { label: 'Playing Surface Sizes', value: '23 × 23, 29 × 29 and 35 × 35 inches' },
      { label: 'Plywood Construction', value: 'Single-ply Plywood' },
      { label: 'Frame Material', value: 'Seasoned Indian Rosewood (Sheesham)' },
      { label: 'Frame Dimensions', value: ['Approx. 1½ × 1½ inches,', 'Approx. 3½ × 3½ inches (41-inch model)'] },
      { label: 'Playing-Surface Design', value: 'Canada Edition design' },
      { label: 'Recommended Use', value: 'Home, schools, recreational clubs, beginners and casual players' },
      { label: 'Country of Origin', value: 'Pakistan' },
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
    description: 'The AZ Sports® Pakistan Edition Carrom Board features a Pakistan-inspired design that brings a distinctive patriotic look to traditional carrom. Designed for home use, schools, recreational clubs, beginners, and casual players, it combines a country-themed appearance with practical functionality for everyday carrom play.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [17990, 22500, 28500],
      US: [180, 225, 285],
    },
    sizes: [
      { size: '26"', price: 17990 },
      { size: '32"', price: 22500 },
      { size: '41"', price: 28500 },
    ],
    included: [
      '1 Pakistan Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ],
    detailSections: [
      {
        title: 'Iconic Pakistan-Inspired Design',
        body: 'The Pakistan Edition features a Pakistan-inspired design with patriotic accents. Its distinctive appearance makes it an attractive choice for carrom enthusiasts looking for a unique board design.'
      },
      {
        title: 'Carrom-Specific Plywood Preparation',
        body: 'AZ Sports prepares its single-ply plywood specifically for carrom board manufacturing. This preparation is intended to support durability and maintain the playing surface with proper care and storage.'
      },
      {
        title: 'Seasoned Indian Rosewood Frame',
        body: 'The board features a hardwood frame that provides structural support and complements its USA-inspired design. The 41 × 41-inch model features an approximately 3½ × 3½-inch frame.'
      },
      {
        title: 'Distinctive Design and Finishing',
        body: 'The Pakistan Edition combines its Pakistan-inspired appearance with a carefully finished playing surface, bringing together visual appeal and practical functionality for carrom enthusiasts. Indian Rosewood, with approximate dimensions of 1½ × 1½ inches. The 41 × 41-inch model features an approximately 3½ × 3½-inch frame.'
      }
    ],
    availableSizesList: [
      { label: 'Size 1', items: ['Overall Size: 26 × 26 inches', 'Playing Surface: 23 × 23 inches'] },
      { label: 'Size 2', items: ['Overall Size: 32 × 32 inches', 'Playing Surface: 29 × 29 inches'] },
      { label: 'Size 3', items: ['Overall Size: 41 × 41 inches', 'Playing Surface: 35 × 35 inches', 'Frame Dimensions: Approximately 3½ × 3½ inches'] },
    ],
    specTable: [
      { label: 'Brand', value: 'AZ Sports®' },
      { label: 'Model', value: 'Pakistan Edition' },
      { label: 'Series', value: 'Country Edition' },
      { label: 'Product Type', value: 'Carrom Board' },
      { label: 'Overall Board Sizes', value: '26 × 26, 32 × 32 and 41 × 41 inches' },
      { label: 'Playing Surface Sizes', value: '23 × 23, 29 × 29 and 35 × 35 inches' },
      { label: 'Plywood Construction', value: 'Single-ply Plywood' },
      { label: 'Frame Material', value: 'Seasoned Indian Rosewood (Sheesham)' },
      { label: 'Frame Dimensions', value: ['Approx. 1½ × 1½ inches,', 'Approx. 3½ × 3½ inches (41-inch model)'] },
      { label: 'Playing-Surface Design', value: 'Pakistan Edition design' },
      { label: 'Recommended Use', value: 'Home, schools, recreational clubs, beginners and casual players' },
      { label: 'Country of Origin', value: 'Pakistan' },
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
    description: 'The AZ Sports® Afghanistan Edition Carrom Board features an Afghanistan-inspired design that brings a distinctive patriotic look to traditional carrom. Designed for home use, schools, recreational clubs, beginners, and casual players, it combines a country-themed appearance with practical functionality for everyday carrom play.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [17990, 22500, 28500],
      US: [180, 225, 285],
    },
    sizes: [
      { size: '26"', price: 17990 },
      { size: '32"', price: 22500 },
      { size: '41"', price: 28500 },
    ],
    included: [
      '1 Afghanistan Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ],
    detailSections: [
      {
        title: 'Iconic Afghanistan-Inspired Design',
        body: 'The Afghanistan Edition features an Afghanistan-inspired design with patriotic accents. Its distinctive appearance makes it an attractive choice for carrom enthusiasts looking for a unique board design.'
      },
      {
        title: 'Carrom-Specific Plywood Preparation',
        body: 'AZ Sports prepares its single-ply plywood specifically for carrom board manufacturing. This preparation is intended to support durability and maintain the playing surface with proper care and storage.'
      },
      {
        title: 'Seasoned Indian Rosewood Frame',
        body: 'The board features a hardwood frame that provides structural support and complements its USA-inspired design. The 41 × 41-inch model features an approximately 3½ × 3½-inch frame.'
      },
      {
        title: 'Distinctive Design and Finishing',
        body: 'The Afghanistan Edition combines its Afghanistan-inspired appearance with a carefully finished playing surface, bringing together visual appeal and practical functionality for carrom enthusiasts. Indian Rosewood, with approximate dimensions of 1½ × 1½ inches. The 41 × 41-inch model features an approximately 3½ × 3½-inch frame.'
      }
    ],
    availableSizesList: [
      { label: 'Size 1', items: ['Overall Size: 26 × 26 inches', 'Playing Surface: 23 × 23 inches'] },
      { label: 'Size 2', items: ['Overall Size: 32 × 32 inches', 'Playing Surface: 29 × 29 inches'] },
      { label: 'Size 3', items: ['Overall Size: 41 × 41 inches', 'Playing Surface: 35 × 35 inches', 'Frame Dimensions: Approximately 3½ × 3½ inches'] },
    ],
    specTable: [
      { label: 'Brand', value: 'AZ Sports®' },
      { label: 'Model', value: 'Afghanistan Edition' },
      { label: 'Series', value: 'Country Edition' },
      { label: 'Product Type', value: 'Carrom Board' },
      { label: 'Overall Board Sizes', value: '26 × 26, 32 × 32 and 41 × 41 inches' },
      { label: 'Playing Surface Sizes', value: '23 × 23, 29 × 29 and 35 × 35 inches' },
      { label: 'Plywood Construction', value: 'Single-ply Plywood' },
      { label: 'Frame Material', value: 'Seasoned Indian Rosewood (Sheesham)' },
      { label: 'Frame Dimensions', value: ['Approx. 1½ × 1½ inches,', 'Approx. 3½ × 3½ inches (41-inch model)'] },
      { label: 'Playing-Surface Design', value: 'Afghanistan Edition design' },
      { label: 'Recommended Use', value: 'Home, schools, recreational clubs, beginners and casual players' },
      { label: 'Country of Origin', value: 'Pakistan' },
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
    description: 'The AZ Sports® Nepal Edition Carrom Board features a Nepal-inspired design that brings a distinctive patriotic look to traditional carrom. Designed for home use, schools, recreational clubs, beginners, and casual players, it combines a country-themed appearance with practical functionality for everyday carrom play.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [17990, 22500, 28500],
      US: [180, 225, 285],
    },
    sizes: [
      { size: '26"', price: 17990 },
      { size: '32"', price: 22500 },
      { size: '41"', price: 28500 },
    ],
    included: [
      '1 Nepal Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ],
    detailSections: [
      {
        title: 'Iconic Nepal-Inspired Design',
        body: 'The Nepal Edition features a Nepal-inspired design with patriotic accents. Its distinctive appearance makes it an attractive choice for carrom enthusiasts looking for a unique board design.'
      },
      {
        title: 'Carrom-Specific Plywood Preparation',
        body: 'AZ Sports prepares its single-ply plywood specifically for carrom board manufacturing. This preparation is intended to support durability and maintain the playing surface with proper care and storage.'
      },
      {
        title: 'Seasoned Indian Rosewood Frame',
        body: 'The board features a hardwood frame that provides structural support and complements its USA-inspired design. The 41 × 41-inch model features an approximately 3½ × 3½-inch frame.'
      },
      {
        title: 'Distinctive Design and Finishing',
        body: 'The Nepal Edition combines its Nepal-inspired appearance with a carefully finished playing surface, bringing together visual appeal and practical functionality for carrom enthusiasts. Indian Rosewood, with approximate dimensions of 1½ × 1½ inches. The 41 × 41-inch model features an approximately 3½ × 3½-inch frame.'
      }
    ],
    availableSizesList: [
      { label: 'Size 1', items: ['Overall Size: 26 × 26 inches', 'Playing Surface: 23 × 23 inches'] },
      { label: 'Size 2', items: ['Overall Size: 32 × 32 inches', 'Playing Surface: 29 × 29 inches'] },
      { label: 'Size 3', items: ['Overall Size: 41 × 41 inches', 'Playing Surface: 35 × 35 inches', 'Frame Dimensions: Approximately 3½ × 3½ inches'] },
    ],
    specTable: [
      { label: 'Brand', value: 'AZ Sports®' },
      { label: 'Model', value: 'Nepal Edition' },
      { label: 'Series', value: 'Country Edition' },
      { label: 'Product Type', value: 'Carrom Board' },
      { label: 'Overall Board Sizes', value: '26 × 26, 32 × 32 and 41 × 41 inches' },
      { label: 'Playing Surface Sizes', value: '23 × 23, 29 × 29 and 35 × 35 inches' },
      { label: 'Plywood Construction', value: 'Single-ply Plywood' },
      { label: 'Frame Material', value: 'Seasoned Indian Rosewood (Sheesham)' },
      { label: 'Frame Dimensions', value: ['Approx. 1½ × 1½ inches,', 'Approx. 3½ × 3½ inches (41-inch model)'] },
      { label: 'Playing-Surface Design', value: 'Nepal Edition design' },
      { label: 'Recommended Use', value: 'Home, schools, recreational clubs, beginners and casual players' },
      { label: 'Country of Origin', value: 'Pakistan' },
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
    description: 'The AZ Sports® Sri Lanka Edition Carrom Board features a Sri Lanka-inspired design that brings a distinctive patriotic look to traditional carrom. Designed for home use, schools, recreational clubs, beginners, and casual players, it combines a country-themed appearance with practical functionality for everyday carrom play.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [17990, 22500, 28500],
      US: [180, 225, 285],
    },
    sizes: [
      { size: '26"', price: 17990 },
      { size: '32"', price: 22500 },
      { size: '41"', price: 28500 },
    ],
    included: [
      '1 Sri Lanka Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ],
    detailSections: [
      {
        title: 'Iconic Sri Lanka-Inspired Design',
        body: 'The Sri Lanka Edition features a Sri Lanka-inspired design with patriotic accents. Its distinctive appearance makes it an attractive choice for carrom enthusiasts looking for a unique board design.'
      },
      {
        title: 'Carrom-Specific Plywood Preparation',
        body: 'AZ Sports prepares its single-ply plywood specifically for carrom board manufacturing. This preparation is intended to support durability and maintain the playing surface with proper care and storage.'
      },
      {
        title: 'Seasoned Indian Rosewood Frame',
        body: 'The board features a hardwood frame that provides structural support and complements its USA-inspired design. The 41 × 41-inch model features an approximately 3½ × 3½-inch frame.'
      },
      {
        title: 'Distinctive Design and Finishing',
        body: 'The Sri Lanka Edition combines its Sri Lanka-inspired appearance with a carefully finished playing surface, bringing together visual appeal and practical functionality for carrom enthusiasts. Indian Rosewood, with approximate dimensions of 1½ × 1½ inches. The 41 × 41-inch model features an approximately 3½ × 3½-inch frame.'
      }
    ],
    availableSizesList: [
      { label: 'Size 1', items: ['Overall Size: 26 × 26 inches', 'Playing Surface: 23 × 23 inches'] },
      { label: 'Size 2', items: ['Overall Size: 32 × 32 inches', 'Playing Surface: 29 × 29 inches'] },
      { label: 'Size 3', items: ['Overall Size: 41 × 41 inches', 'Playing Surface: 35 × 35 inches', 'Frame Dimensions: Approximately 3½ × 3½ inches'] },
    ],
    specTable: [
      { label: 'Brand', value: 'AZ Sports®' },
      { label: 'Model', value: 'Sri Lanka Edition' },
      { label: 'Series', value: 'Country Edition' },
      { label: 'Product Type', value: 'Carrom Board' },
      { label: 'Overall Board Sizes', value: '26 × 26, 32 × 32 and 41 × 41 inches' },
      { label: 'Playing Surface Sizes', value: '23 × 23, 29 × 29 and 35 × 35 inches' },
      { label: 'Plywood Construction', value: 'Single-ply Plywood' },
      { label: 'Frame Material', value: 'Seasoned Indian Rosewood (Sheesham)' },
      { label: 'Frame Dimensions', value: ['Approx. 1½ × 1½ inches,', 'Approx. 3½ × 3½ inches (41-inch model)'] },
      { label: 'Playing-Surface Design', value: 'Sri Lanka Edition design' },
      { label: 'Recommended Use', value: 'Home, schools, recreational clubs, beginners and casual players' },
      { label: 'Country of Origin', value: 'Pakistan' },
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
    description: 'The AZ Sports® Bangladesh Edition Carrom Board features a Bangladesh-inspired design that brings a distinctive patriotic look to traditional carrom. Designed for home use, schools, recreational clubs, beginners, and casual players, it combines a country-themed appearance with practical functionality for everyday carrom play.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [17990, 22500, 28500],
      US: [180, 225, 285],
    },
    sizes: [
      { size: '26"', price: 17990 },
      { size: '32"', price: 22500 },
      { size: '41"', price: 28500 },
    ],
    included: [
      '1 Bangladesh Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ],
    detailSections: [
      {
        title: 'Iconic Bangladesh-Inspired Design',
        body: 'The Bangladesh Edition features a Bangladesh-inspired design with patriotic accents. Its distinctive appearance makes it an attractive choice for carrom enthusiasts looking for a unique board design.'
      },
      {
        title: 'Carrom-Specific Plywood Preparation',
        body: 'AZ Sports prepares its single-ply plywood specifically for carrom board manufacturing. This preparation is intended to support durability and maintain the playing surface with proper care and storage.'
      },
      {
        title: 'Seasoned Indian Rosewood Frame',
        body: 'The board features a hardwood frame that provides structural support and complements its USA-inspired design. The 41 × 41-inch model features an approximately 3½ × 3½-inch frame.'
      },
      {
        title: 'Distinctive Design and Finishing',
        body: 'The Bangladesh Edition combines its Bangladesh-inspired appearance with a carefully finished playing surface, bringing together visual appeal and practical functionality for carrom enthusiasts. Indian Rosewood, with approximate dimensions of 1½ × 1½ inches. The 41 × 41-inch model features an approximately 3½ × 3½-inch frame.'
      }
    ],
    availableSizesList: [
      { label: 'Size 1', items: ['Overall Size: 26 × 26 inches', 'Playing Surface: 23 × 23 inches'] },
      { label: 'Size 2', items: ['Overall Size: 32 × 32 inches', 'Playing Surface: 29 × 29 inches'] },
      { label: 'Size 3', items: ['Overall Size: 41 × 41 inches', 'Playing Surface: 35 × 35 inches', 'Frame Dimensions: Approximately 3½ × 3½ inches'] },
    ],
    specTable: [
      { label: 'Brand', value: 'AZ Sports®' },
      { label: 'Model', value: 'Bangladesh Edition' },
      { label: 'Series', value: 'Country Edition' },
      { label: 'Product Type', value: 'Carrom Board' },
      { label: 'Overall Board Sizes', value: '26 × 26, 32 × 32 and 41 × 41 inches' },
      { label: 'Playing Surface Sizes', value: '23 × 23, 29 × 29 and 35 × 35 inches' },
      { label: 'Plywood Construction', value: 'Single-ply Plywood' },
      { label: 'Frame Material', value: 'Seasoned Indian Rosewood (Sheesham)' },
      { label: 'Frame Dimensions', value: ['Approx. 1½ × 1½ inches,', 'Approx. 3½ × 3½ inches (41-inch model)'] },
      { label: 'Playing-Surface Design', value: 'Bangladesh Edition design' },
      { label: 'Recommended Use', value: 'Home, schools, recreational clubs, beginners and casual players' },
      { label: 'Country of Origin', value: 'Pakistan' },
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
    description: 'The AZ Sports® Maldives Edition Carrom Board features a Maldives-inspired design that brings a distinctive patriotic look to traditional carrom. Designed for home use, schools, recreational clubs, beginners, and casual players, it combines a country-themed appearance with practical functionality for everyday carrom play.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [17990, 22500, 28500],
      US: [180, 225, 285],
    },
    sizes: [
      { size: '26"', price: 17990 },
      { size: '32"', price: 22500 },
      { size: '41"', price: 28500 },
    ],
    included: [
      '1 Maldives Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ],
    detailSections: [
      {
        title: 'Iconic Maldives-Inspired Design',
        body: 'The Maldives Edition features a Maldives-inspired design with patriotic accents. Its distinctive appearance makes it an attractive choice for carrom enthusiasts looking for a unique board design.'
      },
      {
        title: 'Carrom-Specific Plywood Preparation',
        body: 'AZ Sports prepares its single-ply plywood specifically for carrom board manufacturing. This preparation is intended to support durability and maintain the playing surface with proper care and storage.'
      },
      {
        title: 'Seasoned Indian Rosewood Frame',
        body: 'The board features a hardwood frame that provides structural support and complements its USA-inspired design. The 41 × 41-inch model features an approximately 3½ × 3½-inch frame.'
      },
      {
        title: 'Distinctive Design and Finishing',
        body: 'The Maldives Edition combines its Maldives-inspired appearance with a carefully finished playing surface, bringing together visual appeal and practical functionality for carrom enthusiasts. Indian Rosewood, with approximate dimensions of 1½ × 1½ inches. The 41 × 41-inch model features an approximately 3½ × 3½-inch frame.'
      }
    ],
    availableSizesList: [
      { label: 'Size 1', items: ['Overall Size: 26 × 26 inches', 'Playing Surface: 23 × 23 inches'] },
      { label: 'Size 2', items: ['Overall Size: 32 × 32 inches', 'Playing Surface: 29 × 29 inches'] },
      { label: 'Size 3', items: ['Overall Size: 41 × 41 inches', 'Playing Surface: 35 × 35 inches', 'Frame Dimensions: Approximately 3½ × 3½ inches'] },
    ],
    specTable: [
      { label: 'Brand', value: 'AZ Sports®' },
      { label: 'Model', value: 'Maldives Edition' },
      { label: 'Series', value: 'Country Edition' },
      { label: 'Product Type', value: 'Carrom Board' },
      { label: 'Overall Board Sizes', value: '26 × 26, 32 × 32 and 41 × 41 inches' },
      { label: 'Playing Surface Sizes', value: '23 × 23, 29 × 29 and 35 × 35 inches' },
      { label: 'Plywood Construction', value: 'Single-ply Plywood' },
      { label: 'Frame Material', value: 'Seasoned Indian Rosewood (Sheesham)' },
      { label: 'Frame Dimensions', value: ['Approx. 1½ × 1½ inches,', 'Approx. 3½ × 3½ inches (41-inch model)'] },
      { label: 'Playing-Surface Design', value: 'Maldives Edition design' },
      { label: 'Recommended Use', value: 'Home, schools, recreational clubs, beginners and casual players' },
      { label: 'Country of Origin', value: 'Pakistan' },
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
    description: 'The AZ Sports® Red Special Edition Carrom Board features a vibrant red finish and a distinctive design for home use, schools, recreational clubs, beginners, and casual players. Available in three sizes, it combines traditional craftsmanship with an eye-catching appearance for everyday carrom play.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [15990, 19990, 24990],
      US: [160, 200, 250],
    },
    sizes: [
      { size: '26"', price: 15990 },
      { size: '32"', price: 19990 },
      { size: '41"', price: 24990 },
    ],
    included: [
      '1 Red Special Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ],
    detailSections: [
      {
        title: 'Bold Red Special Edition Finish',
        body: 'The Red Special Edition features a vibrant red finish that gives the board a distinctive appearance. Its bold design makes it an attractive choice for carrom enthusiasts.'
      },
      {
        title: 'Carrom-Specific Plywood Preparation',
        body: 'AZ Sports prepares its single-ply plywood specifically for carrom board manufacturing. This preparation is intended to support durability and maintain the playing surface with proper care and storage.'
      },
      {
        title: 'Seasoned Indian Rosewood Frame',
        body: 'The frame is made from seasoned Indian Rosewood, with approximate dimensions of 1½ × 1½ inches. Proper seasoning helps improve dimensional stability and reduce the risk of warping or twisting. The 41 × 41-inch model features an approximately 3½ × 3½-inch frame.'
      },
      {
        title: 'Artistic Design and Finishing',
        body: 'The Red Special Edition combines its distinctive red appearance with a carefully finished playing surface, bringing together visual appeal and practical functionality.'
      }
    ],
    availableSizesList: [
      { label: 'Size 1', items: ['Overall Size: 26 × 26 inches', 'Playing Surface: 23 × 23 inches'] },
      { label: 'Size 2', items: ['Overall Size: 32 × 32 inches', 'Playing Surface: 29 × 29 inches'] },
      { label: 'Size 3', items: ['Overall Size: 41 × 41 inches', 'Playing Surface: 35 × 35 inches', 'Frame Dimensions: Approximately 3½ × 3½ inches'] },
    ],
    specTable: [
      { label: 'Brand', value: 'AZ Sports®' },
      { label: 'Model', value: 'Red Special Edition' },
      { label: 'Series', value: 'Special Edition' },
      { label: 'Product Type', value: 'Carrom Board' },
      { label: 'Overall Board Sizes', value: '26 × 26, 32 × 32 and 41 × 41 inches' },
      { label: 'Playing Surface Sizes', value: '23 × 23, 29 × 29 and 35 × 35 inches' },
      { label: 'Plywood Construction', value: 'Single-Ply Plywood' },
      { label: 'Frame Material', value: 'Seasoned Indian Rosewood (Sheesham)' },
      { label: 'Frame Dimensions', value: ['Approx. 1½ × 1½ inches,', 'Approx. 3½ × 3½ inches (41-inch model)'] },
      { label: 'Playing-Surface Design', value: 'Red Special Edition design' },
      { label: 'Recommended Use', value: 'Home, schools, recreational clubs, beginners and casual players' },
      { label: 'Country of Origin', value: 'Pakistan' },
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
    description: 'The AZ Sports® Blue Special Edition Carrom Board features a vibrant blue finish and a distinctive design for home use, schools, recreational clubs, beginners, and casual players. Available in three sizes, it combines traditional craftsmanship with an eye-catching appearance for everyday carrom play.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [15990, 19990, 24990],
      US: [160, 200, 250],
    },
    sizes: [
      { size: '26"', price: 15990 },
      { size: '32"', price: 19990 },
      { size: '41"', price: 24990 },
    ],
    included: [
      '1 Blue Special Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ],
    detailSections: [
      {
        title: 'Bold Blue Special Edition Finish',
        body: 'The Blue Special Edition features a vibrant blue finish that gives the board a distinctive appearance. Its bold design makes it an attractive choice for carrom enthusiasts.'
      },
      {
        title: 'Carrom-Specific Plywood Preparation',
        body: 'AZ Sports prepares its single-ply plywood specifically for carrom board manufacturing. This preparation is intended to support durability and maintain the playing surface with proper care and storage.'
      },
      {
        title: 'Seasoned Indian Rosewood Frame',
        body: 'The frame is made from seasoned Indian Rosewood, with approximate dimensions of 1½ × 1½ inches. Proper seasoning helps improve dimensional stability and reduce the risk of warping or twisting. The 41 × 41-inch model features an approximately 3½ × 3½-inch frame.'
      },
      {
        title: 'Artistic Design and Finishing',
        body: 'The Blue Special Edition combines its distinctive blue appearance with a carefully finished playing surface, bringing together visual appeal and practical functionality.'
      }
    ],
    availableSizesList: [
      { label: 'Size 1', items: ['Overall Size: 26 × 26 inches', 'Playing Surface: 23 × 23 inches'] },
      { label: 'Size 2', items: ['Overall Size: 32 × 32 inches', 'Playing Surface: 29 × 29 inches'] },
      { label: 'Size 3', items: ['Overall Size: 41 × 41 inches', 'Playing Surface: 35 × 35 inches', 'Frame Dimensions: Approximately 3½ × 3½ inches'] },
    ],
    specTable: [
      { label: 'Brand', value: 'AZ Sports®' },
      { label: 'Model', value: 'Blue Special Edition' },
      { label: 'Series', value: 'Special Edition' },
      { label: 'Product Type', value: 'Carrom Board' },
      { label: 'Overall Board Sizes', value: '26 × 26, 32 × 32 and 41 × 41 inches' },
      { label: 'Playing Surface Sizes', value: '23 × 23, 29 × 29 and 35 × 35 inches' },
      { label: 'Plywood Construction', value: 'Single-Ply Plywood' },
      { label: 'Frame Material', value: 'Seasoned Indian Rosewood (Sheesham)' },
      { label: 'Frame Dimensions', value: ['Approx. 1½ × 1½ inches,', 'Approx. 3½ × 3½ inches (41-inch model)'] },
      { label: 'Playing-Surface Design', value: 'Blue Special Edition design' },
      { label: 'Recommended Use', value: 'Home, schools, recreational clubs, beginners and casual players' },
      { label: 'Country of Origin', value: 'Pakistan' },
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
    description: 'The AZ Sports® White Special Edition Carrom Board features a vibrant white finish and a distinctive design for home use, schools, recreational clubs, beginners, and casual players. Available in three sizes, it combines traditional craftsmanship with an eye-catching appearance for everyday carrom play.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [15990, 19990, 24990],
      US: [160, 200, 250],
    },
    sizes: [
      { size: '26"', price: 15990 },
      { size: '32"', price: 19990 },
      { size: '41"', price: 24990 },
    ],
    included: [
      '1 White Special Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ],
    detailSections: [
      {
        title: 'Bold White Special Edition Finish',
        body: 'The White Special Edition features a vibrant white finish that gives the board a distinctive appearance. Its bold design makes it an attractive choice for carrom enthusiasts.'
      },
      {
        title: 'Carrom-Specific Plywood Preparation',
        body: 'AZ Sports prepares its single-ply plywood specifically for carrom board manufacturing. This preparation is intended to support durability and maintain the playing surface with proper care and storage.'
      },
      {
        title: 'Seasoned Indian Rosewood Frame',
        body: 'The frame is made from seasoned Indian Rosewood, with approximate dimensions of 1½ × 1½ inches. Proper seasoning helps improve dimensional stability and reduce the risk of warping or twisting. The 41 × 41-inch model features an approximately 3½ × 3½-inch frame.'
      },
      {
        title: 'Artistic Design and Finishing',
        body: 'The White Special Edition combines its distinctive white appearance with a carefully finished playing surface, bringing together visual appeal and practical functionality.'
      }
    ],
    availableSizesList: [
      { label: 'Size 1', items: ['Overall Size: 26 × 26 inches', 'Playing Surface: 23 × 23 inches'] },
      { label: 'Size 2', items: ['Overall Size: 32 × 32 inches', 'Playing Surface: 29 × 29 inches'] },
      { label: 'Size 3', items: ['Overall Size: 41 × 41 inches', 'Playing Surface: 35 × 35 inches', 'Frame Dimensions: Approximately 3½ × 3½ inches'] },
    ],
    specTable: [
      { label: 'Brand', value: 'AZ Sports®' },
      { label: 'Model', value: 'White Special Edition' },
      { label: 'Series', value: 'Special Edition' },
      { label: 'Product Type', value: 'Carrom Board' },
      { label: 'Overall Board Sizes', value: '26 × 26, 32 × 32 and 41 × 41 inches' },
      { label: 'Playing Surface Sizes', value: '23 × 23, 29 × 29 and 35 × 35 inches' },
      { label: 'Plywood Construction', value: 'Single-Ply Plywood' },
      { label: 'Frame Material', value: 'Seasoned Indian Rosewood (Sheesham)' },
      { label: 'Frame Dimensions', value: ['Approx. 1½ × 1½ inches,', 'Approx. 3½ × 3½ inches (41-inch model)'] },
      { label: 'Playing-Surface Design', value: 'White Special Edition design' },
      { label: 'Recommended Use', value: 'Home, schools, recreational clubs, beginners and casual players' },
      { label: 'Country of Origin', value: 'Pakistan' },
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
    description: 'The AZ Sports® Black Special Edition Carrom Board features a vibrant black finish and a distinctive design for home use, schools, recreational clubs, beginners, and casual players. Available in three sizes, it combines traditional craftsmanship with an eye-catching appearance for everyday carrom play.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [15990, 19990, 24990],
      US: [160, 200, 250],
    },
    sizes: [
      { size: '26"', price: 15990 },
      { size: '32"', price: 19990 },
      { size: '41"', price: 24990 },
    ],
    included: [
      '1 Black Special Edition Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '1 Pro Striker',
      'Premium Board Cover'
    ],
    detailSections: [
      {
        title: 'Bold Black Special Edition Finish',
        body: 'The Black Special Edition features a vibrant black finish that gives the board a distinctive appearance. Its bold design makes it an attractive choice for carrom enthusiasts.'
      },
      {
        title: 'Carrom-Specific Plywood Preparation',
        body: 'AZ Sports prepares its single-ply plywood specifically for carrom board manufacturing. This preparation is intended to support durability and maintain the playing surface with proper care and storage.'
      },
      {
        title: 'Seasoned Indian Rosewood Frame',
        body: 'The frame is made from seasoned Indian Rosewood, with approximate dimensions of 1½ × 1½ inches. Proper seasoning helps improve dimensional stability and reduce the risk of warping or twisting. The 41 × 41-inch model features an approximately 3½ × 3½-inch frame.'
      },
      {
        title: 'Artistic Design and Finishing',
        body: 'The Black Special Edition combines its distinctive black appearance with a carefully finished playing surface, bringing together visual appeal and practical functionality.'
      }
    ],
    availableSizesList: [
      { label: 'Size 1', items: ['Overall Size: 26 × 26 inches', 'Playing Surface: 23 × 23 inches'] },
      { label: 'Size 2', items: ['Overall Size: 32 × 32 inches', 'Playing Surface: 29 × 29 inches'] },
      { label: 'Size 3', items: ['Overall Size: 41 × 41 inches', 'Playing Surface: 35 × 35 inches', 'Frame Dimensions: Approximately 3½ × 3½ inches'] },
    ],
    specTable: [
      { label: 'Brand', value: 'AZ Sports®' },
      { label: 'Model', value: 'Black Special Edition' },
      { label: 'Series', value: 'Special Edition' },
      { label: 'Product Type', value: 'Carrom Board' },
      { label: 'Overall Board Sizes', value: '26 × 26, 32 × 32 and 41 × 41 inches' },
      { label: 'Playing Surface Sizes', value: '23 × 23, 29 × 29 and 35 × 35 inches' },
      { label: 'Plywood Construction', value: 'Single-Ply Plywood' },
      { label: 'Frame Material', value: 'Seasoned Indian Rosewood (Sheesham)' },
      { label: 'Frame Dimensions', value: ['Approx. 1½ × 1½ inches,', 'Approx. 3½ × 3½ inches (41-inch model)'] },
      { label: 'Playing-Surface Design', value: 'Black Special Edition design' },
      { label: 'Recommended Use', value: 'Home, schools, recreational clubs, beginners and casual players' },
      { label: 'Country of Origin', value: 'Pakistan' },
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
    description: 'The AZ Sports® PS-01 Professional Series Carrom Board is designed for competitive play, tournaments, carrom clubs, and experienced players. Available in three sizes, it combines double-ply plywood construction, a Sheesham wood frame, and a superior cushion designed for precise rebounds.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [19990, 25990, 32990],
      US: [200, 260, 330],
    },
    sizes: [
      { size: '35', price: 19990 },
      { size: '41', price: 25990 },
      { size: '46', price: 32990 },
    ],
    included: [
      '1 PS-01 Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '2 Pro Strikers',
      'Premium Carrying Case'
    ],
    detailSections: [
      {
        title: 'Double-Ply Plywood Construction',
        body: 'The PS-01 features a double-ply plywood playing surface designed for professional carrom play. This construction supports the board\'s playing surface and is intended for players who value control, precision, and consistency.'
      },
      {
        title: 'Seasoned Indian Rosewood Frame',
        body: 'The frame is made from seasoned Indian Rosewood, with approximate dimensions of 3½ × 3½ inches. Proper seasoning helps improve dimensional stability and reduce the risk of warping or twisting. This substantial wooden frame provides structural support for the board.'
      },
      {
        title: 'Superior Cushion and Precise Rebounds',
        body: 'The Professional Series features a superior cushion designed to support precise rebounds during play. The board\'s construction is intended for players seeking consistent playing performance.'
      },
      {
        title: 'Shellac-Based Polish',
        body: 'AZ Sports uses a shellac-based polish developed through its manufacturing experience and research and development efforts. The finishing process focuses on the playing surface and smooth striker movement when the board is properly maintained.'
      },
      {
        title: 'Tournament-Oriented Design',
        body: 'The AZ Sports® PS-01 is designed for competitive carrom play, with a professional playing surface and tournament-oriented construction as per International Carrom Federation (ICF).'
      }
    ],
    availableSizesList: [
      { label: 'Size 1', items: ['Overall Size: 35 × 35 inches', 'Playing Surface: 29 × 29 inches'] },
      { label: 'Size 2', items: ['Overall Size: 41 × 41 inches', 'Playing Surface: 35 × 35 inches'] },
      { label: 'Size 3', items: ['Overall Size: 46 × 46 inches', 'Playing Surface: 40 × 40 inches'] },
    ],
    specTable: [
      { label: 'Brand', value: 'AZ Sports®' },
      { label: 'Model', value: 'PS-01' },
      { label: 'Series', value: 'Professional Series' },
      { label: 'Product Type', value: 'Carrom Board' },
      { label: 'Overall Board Sizes', value: '35 × 35, 41 × 41 and 46 × 46 inches' },
      { label: 'Playing Surface Sizes', value: '29 × 29, 35 × 35 and 40 × 40 inches' },
      { label: 'Plywood Construction', value: 'Double-Ply Plywood' },
      { label: 'Frame Material', value: 'Seasoned Indian Rosewood (Sheesham)' },
      { label: 'Frame Dimensions', value: 'Approx. 3½ × 3½ inches' },
      { label: 'Playing-Surface Design', value: 'Hand-applied artistic design' },
      { label: 'Recommended Use', value: 'Competitive play, tournaments, clubs and experienced players' },
      { label: 'Country of Origin', value: 'Pakistan' },
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
    description: 'The AZ Sports® PS-02 Professional Series Carrom Board is designed for competitive play, tournaments, carrom clubs, and experienced players. Available in three sizes, it combines double-ply plywood construction, a Sheesham wood frame, and a superior cushion designed for precise rebounds.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [19990, 25990, 32990],
      US: [200, 260, 330],
    },
    sizes: [
      { size: '35', price: 19990 },
      { size: '41', price: 25990 },
      { size: '46', price: 32990 },
    ],
    included: [
      '1 PS-02 Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '2 Championship Strikers',
      'Velvet Lined Carrying Case',
      'Professional Score Sheet'
    ],
    detailSections: [
      {
        title: 'Double-Ply Plywood Construction',
        body: 'The PS-02 features a double-ply plywood playing surface designed for professional carrom play. This construction supports the board\'s playing surface and is intended for players who value control, precision, and consistency.'
      },
      {
        title: 'Seasoned Indian Rosewood Frame',
        body: 'The frame is made from seasoned Indian Rosewood, with approximate dimensions of 3½ × 3½ inches. Proper seasoning helps improve dimensional stability and reduce the risk of warping or twisting. This substantial wooden frame provides structural support for the board.'
      },
      {
        title: 'Superior Cushion and Precise Rebounds',
        body: 'The Professional Series features a superior cushion designed to support precise rebounds during play. The board\'s construction is intended for players seeking consistent playing performance.'
      },
      {
        title: 'Shellac-Based Polish',
        body: 'AZ Sports uses a shellac-based polish developed through its manufacturing experience and research and development efforts. The finishing process focuses on the playing surface and smooth striker movement when the board is properly maintained.'
      },
      {
        title: 'Tournament-Oriented Design',
        body: 'The AZ Sports® PS-02 is designed for competitive carrom play, with a professional playing surface and tournament-oriented construction as per International Carrom Federation (ICF).'
      }
    ],
    availableSizesList: [
      { label: 'Size 1', items: ['Overall Size: 35 × 35 inches', 'Playing Surface: 29 × 29 inches'] },
      { label: 'Size 2', items: ['Overall Size: 41 × 41 inches', 'Playing Surface: 35 × 35 inches'] },
      { label: 'Size 3', items: ['Overall Size: 46 × 46 inches', 'Playing Surface: 40 × 40 inches'] },
    ],
    specTable: [
      { label: 'Brand', value: 'AZ Sports®' },
      { label: 'Model', value: 'PS-02' },
      { label: 'Series', value: 'Professional Series' },
      { label: 'Product Type', value: 'Carrom Board' },
      { label: 'Overall Board Sizes', value: '35 × 35, 41 × 41 and 46 × 46 inches' },
      { label: 'Playing Surface Sizes', value: '29 × 29, 35 × 35 and 40 × 40 inches' },
      { label: 'Plywood Construction', value: 'Double-Ply Plywood' },
      { label: 'Frame Material', value: 'Seasoned Indian Rosewood (Sheesham)' },
      { label: 'Frame Dimensions', value: 'Approx. 3½ × 3½ inches' },
      { label: 'Playing-Surface Design', value: 'Hand-applied artistic design' },
      { label: 'Recommended Use', value: 'Competitive play, tournaments, clubs and experienced players' },
      { label: 'Country of Origin', value: 'Pakistan' },
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
    description: 'The AZ Sports® PS-03 Professional Series Carrom Board is designed for competitive play, tournaments, carrom clubs, and experienced players. Available in three sizes, it combines double-ply plywood construction, a Sheesham wood frame, and a superior cushion designed for precise rebounds.',
    category: 'boards',
    inStock: true,
    prices: {
      PK: [19990, 25990, 32990],
      US: [200, 260, 330],
    },
    sizes: [
      { size: '35', price: 19990 },
      { size: '41', price: 25990 },
      { size: '46', price: 32990 },
    ],
    included: [
      '1 PS-03 Board',
      '19 Carrom Men (Black & White)',
      '1 Queen (Red)',
      '2 Master Series Strikers',
      'Deluxe Carrying Case',
      'Premium Cleaning Kit',
      'Certificate of Authenticity'
    ],
    detailSections: [
      {
        title: 'Double-Ply Plywood Construction',
        body: 'The PS-03 features a double-ply plywood playing surface designed for professional carrom play. This construction supports the board\'s playing surface and is intended for players who value control, precision, and consistency.'
      },
      {
        title: 'Seasoned Indian Rosewood Frame',
        body: 'The frame is made from seasoned Indian Rosewood, with approximate dimensions of 3½ × 3½ inches. Proper seasoning helps improve dimensional stability and reduce the risk of warping or twisting. This substantial wooden frame provides structural support for the board.'
      },
      {
        title: 'Superior Cushion and Precise Rebounds',
        body: 'The Professional Series features a superior cushion designed to support precise rebounds during play. The board\'s construction is intended for players seeking consistent playing performance.'
      },
      {
        title: 'Shellac-Based Polish',
        body: 'AZ Sports uses a shellac-based polish developed through its manufacturing experience and research and development efforts. The finishing process focuses on the playing surface and smooth striker movement when the board is properly maintained.'
      },
      {
        title: 'Tournament-Oriented Design',
        body: 'The AZ Sports® PS-03 is designed for competitive carrom play, with a professional playing surface and tournament-oriented construction as per International Carrom Federation (ICF).'
      }
    ],
    availableSizesList: [
      { label: 'Size 1', items: ['Overall Size: 35 × 35 inches', 'Playing Surface: 29 × 29 inches'] },
      { label: 'Size 2', items: ['Overall Size: 41 × 41 inches', 'Playing Surface: 35 × 35 inches'] },
      { label: 'Size 3', items: ['Overall Size: 46 × 46 inches', 'Playing Surface: 40 × 40 inches'] },
    ],
    specTable: [
      { label: 'Brand', value: 'AZ Sports®' },
      { label: 'Model', value: 'PS-03' },
      { label: 'Series', value: 'Professional Series' },
      { label: 'Product Type', value: 'Carrom Board' },
      { label: 'Overall Board Sizes', value: '35 × 35, 41 × 41 and 46 × 46 inches' },
      { label: 'Playing Surface Sizes', value: '29 × 29, 35 × 35 and 40 × 40 inches' },
      { label: 'Plywood Construction', value: 'Double-Ply Plywood' },
      { label: 'Frame Material', value: 'Seasoned Indian Rosewood (Sheesham)' },
      { label: 'Frame Dimensions', value: 'Approx. 3½ × 3½ inches' },
      { label: 'Playing-Surface Design', value: 'Hand-applied artistic design' },
      { label: 'Recommended Use', value: 'Competitive play, tournaments, clubs and experienced players' },
      { label: 'Country of Origin', value: 'Pakistan' },
    ]
  },
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
