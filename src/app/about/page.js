import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | AZ Sports – Amjad Zahoor Sports',
  description: 'AZ Sports is a leading handmade carrom board manufacturer in Sialkot, Pakistan, producing professional and export-quality wooden carrom boards since 1940.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black font-sans">
      {/* Hero Section - Matching Home Page Style */}
      <section className="relative w-full py-20 lg:py-28 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none translate-x-1/4 translate-y-1/4"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
            AZ <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500">SPORTS</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
            Handmade Carrom Board Manufacturer in Sialkot, Pakistan Since 1940
          </p>
        </div>
      </section>

      {/* Origin & Overview Section */}
      <section className="py-16 lg:py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-6">Our Origin & Foundation</h2>
              <p className="text-zinc-400 text-sm md:text-base mb-4 leading-relaxed">
                AZ Sports was founded in 1940 by the <strong className="text-white">Late Mirza Zahoor Ellahi</strong>, a pioneer of Pakistan's sports manufacturing industry and a founding member of The Pakistan Sports Cooperative Industrial Society Limited. 
              </p>
              <p className="text-zinc-400 text-sm md:text-base mb-4 leading-relaxed">
                After returning from the United States, <strong className="text-white">Mirza Muhammad Amjad</strong> continued his father's mission. Today, AZ Sports operates exclusively as a family-run company from our in-house facility in Sialkot, maintaining an uncompromised dedication to authentic, handmade manufacturing.
              </p>
              <ul className="text-zinc-400 text-sm md:text-base space-y-3 mt-6">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span><strong className="text-white">100% In-House & Handmade</strong> production</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span><strong className="text-white">Exclusively focused</strong> on wooden carrom boards</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span><strong className="text-white">Zero outsourcing</strong> or private labeling</span>
                </li>
              </ul>
            </div>
            <div className="bg-zinc-900 rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-zinc-800">
               <div className="relative w-full aspect-square max-w-md rounded-2xl overflow-hidden mb-6">
                <Image 
                  src="/assets/products/003.png"
                  alt="AZ Sports Manufacturing Heritage"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-amber-500 font-bold text-sm italic">
                A recognized legacy in Pakistan's sports goods heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Manufacturing Values Section */}
      <section className="py-16 lg:py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4 text-center">Why Handmade Matters Today</h2>
          <p className="text-center text-zinc-400 text-sm mb-12 max-w-2xl mx-auto">
            Unlike industrial factories that prioritize mass output, our traditional craftsmanship emphasizes balance, durability, and long-term professional performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Premium Materials',
                description: 'We carefully select full solid wood (no recycled/jointed waste). Woods undergo natural seasoning to resist humidity and prevent warping.'
              },
              {
                title: 'Authentic Craftsmanship',
                description: 'Precision cutting utilizes original England-imported machines. Experienced craftsmen accurately apply hand-painted playing lines.'
              },
              {
                title: 'Quality & Sustainability',
                description: 'Each board goes through rigorous quality control for surface smoothness and rebound consistency.'
              }
            ].map((value, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 lg:p-8 text-center hover:border-amber-500/50 transition-colors">
                <h3 className="text-lg md:text-xl font-black text-white mb-4">{value.title}</h3>
                <p className="text-zinc-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy & Timeline Section */}
      <section className="py-16 lg:py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-12 text-center">Manufacturing Legacy Timeline</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: '1940', text: 'Foundation of AZ Sports by Late Mirza Zahoor Ellahi in Sialkot.' },
              { year: '1950s-1980s', text: 'Decades spent strictly refining handmade carrom board craftsmanship.' },
              { year: '1990s-2000s', text: 'Expansion of facilities into professional and globally-exported production.' },
              { year: 'Present Day', text: 'Family-run in-house operations merging tradition with modern quality standards.' }
            ].map((milestone, i) => (
              <div key={i} className="text-center flex flex-col items-center">
                <div className="mb-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto overflow-hidden shadow-lg">
                   <span className="font-black text-white text-sm">{milestone.year}</span>
                </div>
                <h3 className="text-md font-bold text-white mb-2">{milestone.year}</h3>
                <p className="text-zinc-400 text-xs">{milestone.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts & Application Target Market Section */}
      <section className="py-16 bg-black">
         <div className="max-w-4xl mx-auto px-4 sm:px-6">
           <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
             <h2 className="text-xl font-black text-white mb-6 text-center border-b border-zinc-800 pb-4">Our Professional Reach</h2>
             <p className="text-zinc-400 text-sm text-center mb-8 max-w-2xl mx-auto">
               From individual professional boards to bulk export consignments, we service both local Pakistan markets and international clients worldwide. Every order receives the exact same precision and quality control.
             </p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
               <div className="bg-zinc-950 border border-zinc-800 p-4 rounded-xl"><span className="text-sm font-bold text-white">Pro Players & Clubs</span></div>
               <div className="bg-zinc-950 border border-zinc-800 p-4 rounded-xl"><span className="text-sm font-bold text-white">Sports Academies</span></div>
               <div className="bg-zinc-950 border border-zinc-800 p-4 rounded-xl"><span className="text-sm font-bold text-white">Importers & Distributors</span></div>
               <div className="bg-zinc-950 border border-zinc-800 p-4 rounded-xl"><span className="text-sm font-bold text-white">Retailers & International</span></div>
             </div>
           </div>
        </div>
      </section>

      {/* CTA Section - Matching Home Page Style */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-6">Work With Us</h2>
          <p className="text-zinc-400 text-sm md:text-base mb-8 max-w-2xl mx-auto">
            AZ Sports is not just a brand; it is a legacy of craftsmanship—built to perform and made to last for generations. For product inquiries, export orders, or dealership opportunities, we welcome you to contact our team.
          </p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all">
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
