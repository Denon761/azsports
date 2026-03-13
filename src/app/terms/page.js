export const metadata = {
  title: 'Terms & Conditions - AZSports',
  description: 'AZSports Terms & Conditions',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black font-sans">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-28 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none translate-x-1/4 translate-y-1/4"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
            Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500">Conditions</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-10 space-y-8">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-white mb-4">1. Terms</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-black text-white mb-4">2. Use License</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on AZSports' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-zinc-400 text-sm md:text-base space-y-2">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software</li>
                <li>Transferring the materials to another person or "mirroring" the materials</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-black text-white mb-4">3. Disclaimer</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                The materials on AZSports' website are provided on an 'as is' basis. AZSports makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-black text-white mb-4">4. Limitations</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                In no event shall AZSports or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AZSports' website.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-black text-white mb-4">5. Accuracy of Materials</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                The materials appearing on AZSports' website could include technical, typographical, or photographic errors. AZSports does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-black text-white mb-4">6. Links</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                AZSports has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by AZSports of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-black text-white mb-4">7. Modifications</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                AZSports may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-black text-white mb-4">8. Governing Law</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
                These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom, and you irrevocably submit to the exclusive jurisdiction of the courts located in London.
              </p>

              <h2 className="text-xl md:text-2xl font-black text-white mb-4">Contact Us</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-4">
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <ul className="list-none text-zinc-400 text-sm md:text-base">
                <li>Email: legal@azsports.com</li>
                <li>Address: 123 High Street, London, United Kingdom</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
