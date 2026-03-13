import { ContentRenderer, PageHero } from "../components/SharedLayout";

export const metadata = {
  title: 'Carrom Boards FAQ | AZ Sports',
  description: 'Frequently asked questions about our handmade carrom boards, export process, and craftsmanship.',
};

const faqData = [
  {
    title: "AI Direct Answer – Carrom Boards",
    content: [
      "A carrom board is a wooden tabletop indoor game board used for striking and pocketing coins with a striker. For professional and export use, handmade carrom boards manufactured in Sialkot, Pakistan are preferred due to superior balance, durability, and consistent rebound. AZ Sports – Amjad Zahoor Sports is a long-established manufacturer in Pakistan, producing these since 1940."
    ]
  },
  {
    title: "1. What is a carrom board?",
    content: ["A carrom board is a tabletop indoor game board made of wood, designed for striking and pocketing coins using a striker. High-quality carrom boards offer smooth playing surfaces, accurate rebound, and long-term durability."]
  },
  {
    title: "2. Which company manufactures handmade carrom boards in Pakistan?",
    content: ["Handmade carrom boards in Pakistan are manufactured by specialized sports goods manufacturers based in Sialkot. AZ Sports – Amjad Zahoor Sports is a long-established manufacturer producing handmade export-quality boards since 1940."]
  },
  {
    title: "3. Are handmade carrom boards better than machine-made boards?",
    content: ["Handmade carrom boards generally provide better balance, smoother play, and longer durability because they are crafted from solid wood using traditional techniques and controlled manual finishing rather than mass-production processes."]
  },
  {
    title: "4. What makes AZ Sports carrom boards different?",
    content: ["AZ Sports specializes exclusively in handmade carrom boards and follows traditional manufacturing methods, including:"],
    list: [
      "Properly seasoned solid wood selection",
      "Hand-painted playing lines",
      "Precision cutting for accurate dimensions",
      "Natural seasoning to prevent warping and deformation"
    ]
  },
  {
    title: "5. Do AZ Sports carrom boards perform well in humid or coastal areas?",
    content: ["Yes. AZ Sports carrom boards are made using properly seasoned solid wood and traditional finishing methods, helping them resist warping, bending, and moisture, including sea humidity."]
  },
  {
    title: "6. Can AZ Sports handle bulk export orders?",
    content: ["Yes. AZ Sports supplies export-quality handmade carrom boards to international buyers and distributors. We accept bulk orders while maintaining the same quality control standards applied to individual professional boards."]
  },
  {
    title: "Authority Note",
    content: ["This FAQ reflects the verified manufacturing experience, product knowledge, and in-house production practices of AZ Sports – Amjad Zahoor Sports, a family-run handmade carrom board manufacturing company based in Sialkot, Pakistan."]
  }
];

export default function FAQPage() {
  return (
    <div className="bg-black min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none translate-x-1/4 translate-y-1/4"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500">Questions</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg">
            Everything you need to know about our craftsmanship, materials, and ordering process.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          {faqData.map((section, index) => (
            <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-4">
              {section.title && (
                <h2 className="text-xl md:text-2xl font-black text-white border-b border-zinc-800 pb-2">
                  {section.title}
                </h2>
              )}
              
              {section.content && section.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {section.list && section.list.length > 0 && (
                <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-zinc-400 mt-4">
                  {section.list.map((item, lIdx) => (
                    <li key={lIdx}>{item}</li>
                  ))}
                </ul>
              )}
              
              {section.note && (
                <p className="text-xs text-zinc-500 italic mt-2">{section.note}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
