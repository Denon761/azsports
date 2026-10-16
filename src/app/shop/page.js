import ShopPageContent from './ShopPageContent';

const seriesTitles = {
  'Regular Series': 'Regular Series Carrom Boards',
  'Professional Series': 'Professional Series Carrom Boards',
  'Country Edition': 'Country Series Carrom Boards',
  'Special Edition': 'Special Series Carrom Boards',
};

export async function generateMetadata({ searchParams }) {
  const { type } = await searchParams;

  if (type && seriesTitles[type]) {
    return {
      title: `${seriesTitles[type]} | AZ Sports`,
      description: `Shop handmade ${seriesTitles[type].toLowerCase()} from AZ Sports, Sialkot, Pakistan.`,
    };
  }

  return {
    title: 'Shop Handmade Carrom Boards | AZ Sports',
    description: 'Browse handmade solid-wood carrom boards made in Sialkot, Pakistan. Regular, Professional, Country and Special series.',
  };
}

export default async function ShopPage({ searchParams }) {
  const { type } = await searchParams;

  return <ShopPageContent type={type || 'all'} />;
}
