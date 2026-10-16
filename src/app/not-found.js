import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | AZ Sports',
};

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-gray-50 flex items-center justify-center px-4 font-sans">
      <div className="text-center max-w-md">
        <p className="text-xl font-black text-amber-500 mb-4 font-heading">404</p>
        <h1 className="text-base md:text-base font-black text-gray-900 mb-3 font-heading">Page not found</h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-[#241b14] text-white px-6 py-3 rounded-md font-bold transition-all"
          >
            Go to Homepage
          </Link>
          <Link
            href="/shop"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors"
          >
            Browse Carrom Boards
          </Link>
        </div>
      </div>
    </main>
  );
}
