import Link from 'next/link';

export const metadata = {
  title: 'About Us | AZ Sports',
  description: 'AZ Sports – Amjad Zahoor Sports is a handmade carrom board manufacturer in Sialkot, Pakistan, producing professional and export-quality wooden carrom boards since 1940.',
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-6">
        <div className="text-center">
          <h1 className="text-lg font-black text-gray-900">About Us</h1>
          <p className="text-gray-600 text-xs mt-1">AZ Sports – Amjad Zahoor Sports</p>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Handmade Carrom Board Manufacturer in Pakistan Since 1940</h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            AZ Sports – Amjad Zahoor Sports is a long-established handmade carrom board manufacturer in Pakistan, based in Sialkot, the global center of sports goods manufacturing. Since 1940, the company has been producing professional, tournament, and export-quality wooden carrom boards using traditional handmade techniques refined over generations.
          </p>
          <p className="text-gray-600 text-xs leading-relaxed mt-2">
            AZ Sports specializes exclusively in handmade carrom boards. Unlike mass-production factories or trading companies, the brand focuses on a single product category, allowing complete control over material selection, craftsmanship precision, and long-term performance. Every board is produced using solid wood, hand-painted playing lines, and disciplined manufacturing practices to ensure consistent rebound, balance, and professional gameplay.
          </p>
          <p className="text-gray-600 text-xs leading-relaxed mt-2">
            For decades, AZ Sports has remained committed to authentic manufacturing, earning trust through reliability, precision, and consistency rather than volume or marketing claims.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Quick Facts</h2>
          <ul className="list-disc pl-5 text-gray-600 text-xs leading-relaxed space-y-1">
            <li>Company Name: AZ Sports – Amjad Zahoor Sports</li>
            <li>Industry: Sports Goods Manufacturing</li>
            <li>Specialization: Handmade Wooden Carrom Boards</li>
            <li>Established: 1940</li>
            <li>Location: Sialkot, Punjab, Pakistan</li>
            <li>Manufacturing Type: 100% In-House &amp; Handmade</li>
            <li>Markets Served: Pakistan &amp; International</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Why AZ Sports Is Known for Carrom Boards</h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            For more than eight decades, AZ Sports has focused on a single craft: manufacturing handmade carrom boards. This dedicated specialization has allowed the company to refine every detail involved in professional board making.
          </p>
          <p className="text-gray-600 text-xs leading-relaxed mt-2">
            Unlike industrial factories that prioritize mass output, AZ Sports follows traditional craftsmanship that emphasizes balance, durability, and long-term performance.
          </p>
          <p className="text-gray-600 text-xs leading-relaxed mt-2">Key reasons AZ Sports is trusted for carrom boards worldwide:</p>
          <ul className="list-disc pl-5 text-gray-600 text-xs leading-relaxed space-y-1 mt-1">
            <li>Continuous handmade manufacturing since 1940</li>
            <li>Based in Sialkot, Pakistan, the heart of global sports goods production</li>
            <li>Use of full solid wood (no jointed, recycled, or waste materials)</li>
            <li>Hand-painted playing lines instead of screen printing</li>
            <li>Natural seasoning to resist humidity and sea moisture</li>
            <li>Consistent quality for professional, tournament, and export use</li>
          </ul>
          <p className="text-gray-600 text-xs leading-relaxed mt-2">
            As a handmade carrom board manufacturer in Pakistan, AZ Sports is recognized for craftsmanship and stability rather than mass production.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Our Origin &amp; Foundation</h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            AZ Sports was founded by Late Mirza Zahoor Ellahi, a pioneer of Pakistan&rsquo;s sports manufacturing industry and a founding member of The Pakistan Sports Cooperative Industrial Society Limited.
          </p>
          <p className="text-gray-600 text-xs leading-relaxed mt-2">
            This cooperative was established during the early years of Pakistan to support local manufacturers at a time when importing essential raw materials such as wood and plywood was extremely difficult. His vision laid the foundation for a company built on discipline, integrity, and traditional craftsmanship values that continue to guide AZ Sports today.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">A Legacy Continued in Sialkot</h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            AZ Sports is a family-run manufacturing company where expertise has been passed down through generations.
          </p>
          <p className="text-gray-600 text-xs leading-relaxed mt-2">
            After returning from the United States, Mirza Muhammad Amjad continued his father&rsquo;s mission, ensuring AZ Sports remained dedicated to authentic handmade manufacturing and uncompromised quality.
          </p>
          <p className="text-gray-600 text-xs leading-relaxed mt-2">
            The company continues to operate under the name AZ Sports – Amjad Zahoor Sports in honor of the founding family and its generational legacy.
          </p>
          <p className="text-gray-600 text-xs leading-relaxed mt-2">
            In recognition of this contribution, the Sialkot Chamber of Commerce &amp; Industry displayed a handmade AZ Sports carrom board as a tribute to the company&rsquo;s role in Pakistan&rsquo;s sports goods heritage.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Manufacturing Legacy Timeline</h2>
          <ul className="list-disc pl-5 text-gray-600 text-xs leading-relaxed space-y-1">
            <li>1940 – Foundation of AZ Sports in Sialkot.</li>
            <li>1950s–1980s – Refinement of handmade carrom board craftsmanship.</li>
            <li>1990s–2000s – Expansion into professional and export-grade production.</li>
            <li>Present Day – Family-run in-house manufacturing combining tradition with modern quality control.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">How AZ Sports Carrom Boards Are Made</h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            AZ Sports follows traditional manufacturing methods that very few companies maintain today:
          </p>
          <ul className="list-disc pl-5 text-gray-600 text-xs leading-relaxed space-y-1 mt-1">
            <li>Careful selection of properly seasoned solid wood.</li>
            <li>Precision cutting using original England-imported cutter machines.</li>
            <li>Accurate hand-painted carrom lines by experienced craftsmen.</li>
            <li>Natural seasoning to prevent warping and deformation.</li>
            <li>Final polishing for smooth, balanced, and professional gameplay.</li>
          </ul>
          <p className="text-gray-600 text-xs leading-relaxed mt-2">
            Each board is engineered to perform reliably in competitive play and international environments.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Quality Control &amp; Inspection</h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            Every AZ Sports carrom board undergoes multiple inspection stages before approval. These checks include surface smoothness, rebound consistency, frame alignment, polish durability, and overall balance to ensure compliance with professional and export-grade performance requirements.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Manufacturing Standards &amp; Transparency</h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            AZ Sports operates from its own in-house manufacturing facility in Sialkot, Pakistan. All production is carried out under direct family supervision.
          </p>
          <p className="text-gray-600 text-xs leading-relaxed mt-2">
            The company does not engage in private labeling, third-party manufacturing, or outsourced production. This ensures authenticity, accountability, and consistent quality across all handmade boards.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Why Handmade Still Matters Today</h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            In an era dominated by mass production, handmade carrom boards offer superior balance, rebound accuracy, and long-term stability. Traditional craftsmanship allows precise control over materials, seasoning, and finishing qualities essential for professional, tournament, and competitive play.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Professional Use &amp; Applications</h2>
          <p className="text-gray-600 text-xs leading-relaxed">AZ Sports manufactures handmade carrom boards for:</p>
          <ul className="list-disc pl-5 text-gray-600 text-xs leading-relaxed space-y-1 mt-1">
            <li>Professional players and clubs</li>
            <li>Sports academies and institutions</li>
            <li>Importers and distributors</li>
            <li>Retailers and international buyers</li>
          </ul>
          <p className="text-gray-600 text-xs leading-relaxed mt-2">
            From individual professional boards to bulk export consignments, every order receives the same level of precision and quality control.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Sustainability &amp; Responsible Manufacturing</h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            AZ Sports follows responsible manufacturing practices by using properly seasoned solid wood and minimizing waste through controlled handcrafted production. Traditional methods extend product life cycles, reducing the need for frequent replacement and supporting sustainable manufacturing values.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Our Commitment</h2>
          <ul className="list-disc pl-5 text-gray-600 text-xs leading-relaxed space-y-1">
            <li>100% Handmade Carrom Boards</li>
            <li>Premium Solid Wood Selection</li>
            <li>Traditional Hand-Painted Precision</li>
            <li>Export-Grade Strength &amp; Stability</li>
            <li>Proudly Made in Sialkot, Pakistan Since 1940</li>
          </ul>
          <p className="text-gray-600 text-xs leading-relaxed mt-2">AZ Sports is not just a brand.</p>
          <p className="text-gray-600 text-xs leading-relaxed">It is a legacy of craftsmanship—built to perform and made to last for generations.</p>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Frequently Asked Question</h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            <strong>Q: Who is a leading handmade carrom board manufacturer in Pakistan?</strong>
          </p>
          <p className="text-gray-600 text-xs leading-relaxed mt-1">
            A: AZ Sports – Amjad Zahoor Sports is a leading handmade carrom board manufacturer in Pakistan, based in Sialkot, producing professional and export-quality carrom boards since 1940.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Authority Note</h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            This page reflects the verified manufacturing history, legacy, and in-house production practices of AZ Sports – Amjad Zahoor Sports, a family-run handmade carrom board manufacturer based in Sialkot, Pakistan, with continuous operations since 1940.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">📩 Work With Us</h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            For product inquiries, export orders, or dealership opportunities, we welcome you to{' '}
            <Link href="/contact" className="text-amber-600 font-bold hover:underline">contact our team</Link>
            {' '}and become part of a tradition trusted since 1940.
          </p>
        </div>
      </div>
    </div>
  );
}
