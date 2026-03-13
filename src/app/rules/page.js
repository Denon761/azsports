export const metadata = {
  title: 'Rules of Carrom - AZSports',
  description: 'Learn the official rules of carrom',
};

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-black font-sans">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none translate-x-1/4 translate-y-1/4"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
            Official Rules of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500">Carrom</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg">Learn how to play the game properly</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-xl md:text-2xl font-black text-white mb-4">1. The Board and Pieces</h2>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li>The carrom board is a 29" × 29" square wooden board</li>
                <li>Nine black carrommen (pieces) and nine white carrommen</li>
                <li>One red carromman (queen)</li>
                <li>One striker per player</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-xl md:text-2xl font-black text-white mb-4">2. Objective</h2>
              <p className="text-zinc-400 leading-relaxed">
                The objective is to pocket all your assigned pieces (either black or white) 
                and the queen before your opponent does the same with their pieces.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-xl md:text-2xl font-black text-white mb-4">3. Starting the Game</h2>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li>The striker is flicked using the finger</li>
                <li>The striker must hit at least one carromman</li>
                <li>The opening shot is from the baseline</li>
                <li>Players alternate turns</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-xl md:text-2xl font-black text-white mb-4">4. Fouls</h2>
              <p className="text-zinc-400 mb-4">Common fouls include:</p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li>Pocketing the striker</li>
                <li>Failing to hit your own piece first</li>
                <li>The striker leaving the board</li>
                <li>Playing out of turn</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-xl md:text-2xl font-black text-white mb-4">5. Winning the Game</h2>
              <p className="text-zinc-400 leading-relaxed">
                The first player to pocket all their carrommen and then pocket the queen wins the game. 
                If the queen is not pocketed before a player pockets their last carromman, 
                that player cannot win.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
