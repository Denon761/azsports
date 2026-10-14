import ShopPageContent from './ShopPageContent';

const seriesTitles = {
  'Regular Series': 'Regular Series Carrom Boards',
  'Professional Series': 'Professional Series Carrom Boards',
  'Country Edition': 'Country Series Carrom Boards',
  'Special Edition': 'Special Series Carrom Boards',
};

export async function generateMetadata({ searchParams }) {
  const { type, category } = await searchParams;

  if (category === 'accessories') {
    return {
      title: 'Carrom Accessories – Strikers, Coins & Powder | AZ Sports',
      description: 'Carrom accessories from AZ Sports, Sialkot: carrom sets, strikers and boric powder.',
    };
  }

  if (type && seriesTitles[type]) {
    return {
      title: `${seriesTitles[type]} | AZ Sports`,
      description: `Shop handmade ${seriesTitles[type].toLowerCase()} from AZ Sports, Sialkot, Pakistan.`,
    };
  }

  return {
    title: 'Shop Handmade Carrom Boards | AZ Sports',
    description: 'Browse handmade solid-wood carrom boards and accessories made in Sialkot, Pakistan. Regular, Professional, Country and Special series.',
  };
}

export default async function ShopPage({ searchParams }) {
  const { type, category } = await searchParams;

  return <ShopPageContent type={type || 'all'} category={category || 'all'} />;
}
