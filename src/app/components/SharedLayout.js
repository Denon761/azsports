import React from 'react';

/**
 * Reusable Hero Component for informational pages
 */
export function PageHero({ title, description }) {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-2xl md:text-4xl font-black mb-4 tracking-tighter">
          {title}
        </h1>
        <p className="text-gray-200 text-sm md:text-base font-medium max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}

/**
 * Reusable Map Renderer to parse your content arrays cleanly
 */
export function ContentRenderer({ sections }) {
  return (
    <section className="py-12 md:py-16 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">
        {sections.map((section, index) => (
          <div key={index} className="space-y-4">
            {section.title && (
              <h2 className="text-xl md:text-2xl font-black text-primary border-b pb-2">
                {section.title}
              </h2>
            )}
            
            {/* Map over paragraph strings */}
            {section.content && section.content.map((paragraph, pIdx) => (
              <p key={pIdx} className="text-gray-700 text-sm md:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Map over bullet lists if they exist */}
            {section.list && section.list.length > 0 && (
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-700 mt-4">
                {section.list.map((item, lIdx) => (
                  <li key={lIdx}>{item}</li>
                ))}
              </ul>
            )}
            
            {/* Render any additional nested items or notes */}
            {section.note && (
              <p className="text-xs text-gray-500 italic mt-2">{section.note}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}