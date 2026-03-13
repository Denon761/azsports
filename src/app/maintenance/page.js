export const metadata = {
  title: 'Board Maintenance - AZSports',
  description: 'Learn how to maintain your carrom board',
};

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-black font-sans">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none translate-x-1/4 translate-y-1/4"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
            Board <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500">Maintenance</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg">Keep your carrom board in top condition</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-xl md:text-2xl font-black text-white mb-4">Daily Care</h2>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li>Keep the board surface dry and clean</li>
                <li>Wipe down with a soft, dry cloth after each game</li>
                <li>Avoid exposing the board to direct sunlight</li>
                <li>Store pieces and striker in a safe container</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-xl md:text-2xl font-black text-white mb-4">Regular Maintenance</h2>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li>Apply carrom powder or boric acid for smooth play</li>
                <li>Use only a fine, soft cloth for cleaning</li>
                <li>Check for any surface irregularities monthly</li>
                <li>Ensure pockets are free of debris</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-xl md:text-2xl font-black text-white mb-4">Striker and Pieces Care</h2>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li>Keep pieces clean and dry</li>
                <li>Inspect striker regularly for wear</li>
                <li>Replace worn pieces to maintain game quality</li>
                <li>Store in a protective case or container</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-xl md:text-2xl font-black text-white mb-4">Storage Tips</h2>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li>Store in a cool, dry place</li>
                <li>Avoid extreme humidity or temperature changes</li>
                <li>Keep away from moisture and direct sunlight</li>
                <li>Use a protective cover when not in use</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8">
              <h2 className="text-xl md:text-2xl font-black text-white mb-4">Need Help?</h2>
              <p className="text-white/80 mb-4">
                If your board needs professional maintenance or repairs, contact our support team.
              </p>
              <a href="mailto:support@azsports.com" className="inline-block bg-white text-amber-600 px-6 py-2 rounded-full font-bold hover:bg-zinc-100 transition-colors">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
