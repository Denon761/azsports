export const metadata = {
  title: 'Official Rules | AZ Sports',
  description: 'Learn the rules of carrom, including setup, queen rules, fouls, scoring and winning conditions.',
};

export default function RulesPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <header className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <h1 className="text-lg font-black text-gray-900 text-center">Official Rules</h1>
          <p className="text-gray-600 leading-relaxed mt-4">
            Carrom is a popular indoor board game that combines skill, precision, strategy and concentration. Whether you are a beginner learning how to play or an experienced player preparing for a competitive match, understanding the rules of carrom helps you play fairly and confidently.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            This guide explains the basic rules of carrom, including board setup, striker placement, queen covering, fouls, scoring and winning conditions. For official tournament play, always consult the latest regulations issued by the relevant carrom governing body.
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <article className="space-y-8 text-xs leading-relaxed text-gray-700">
          <section>
            <h2 className="text-sm font-black text-gray-900 mb-2">1. What Is Carrom?</h2>
            <p>Carrom is a tabletop game played using a striker to pocket smaller playing pieces, known as carrom men, into four corner pockets. The game is commonly played in singles by two players or in doubles by four players divided into two teams.</p>
            <p className="mt-2">The standard set includes nine white carrom men, nine black carrom men and one red piece called the queen.</p>
            <p className="mt-2">The objective is to pocket your assigned carrom men and finish the board according to the applicable rules.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-gray-900 mb-2">2. Carrom Board and Equipment</h2>
            <p>A standard carrom game requires:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Carrom board:</strong> A square playing surface with four corner pockets, marked baselines and a smooth finish.</li>
              <li><strong>Carrom men:</strong> Nine white and nine black playing pieces.</li>
              <li><strong>Queen:</strong> One red playing piece.</li>
              <li><strong>Striker:</strong> A larger disc used to strike the carrom men.</li>
              <li><strong>Carrom powder:</strong> A permitted powder used to improve the movement of pieces across the playing surface.</li>
            </ul>
            <p className="mt-3">For competitive play, the board and playing equipment should meet the specifications of the relevant governing body.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-gray-900 mb-2">3. How to Set Up a Carrom Game</h2>
            <p>Arrange the carrom men in the prescribed formation inside the centre circle, with the queen positioned in the middle.</p>
            <p className="mt-3">In singles, the two players sit opposite each other. In doubles, teammates sit opposite one another.</p>
            <p className="mt-3">The first break is determined according to the applicable rules. Before shooting, the player must position the striker correctly within the permitted baseline area.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-gray-900 mb-2">4. How to Play Carrom</h2>
            <p>Players take turns using a finger to strike the striker and pocket their assigned carrom men.</p>
            <p className="mt-3">The basic playing principles are:</p>
            <ol className="list-decimal pl-5 mt-2 space-y-2">
              <li>Place the striker within the permitted shooting area.</li>
              <li>Strike it with a legal finger movement rather than pushing it.</li>
              <li>Aim to pocket your assigned carrom men.</li>
              <li>Continue your turn when permitted by the rules.</li>
              <li>Avoid illegal contact with pieces and other fouls.</li>
              <li>Follow the prescribed playing position and shooting procedure.</li>
            </ol>
            <p className="mt-3">Successful carrom playing requires accurate aiming, controlled force and an understanding of rebounds and angles.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-gray-900 mb-2">5. Queen Rules in Carrom</h2>
            <p>The red playing piece is known as the queen. Under standard competitive rules, the queen is worth three points, subject to the applicable scoring conditions.</p>
            <p className="mt-3">A player may pocket the queen after pocketing at least one of their own carrom men. The queen must then be covered by pocketing one of the player&apos;s own carrom men in the same or the immediately subsequent stroke, as prescribed by the applicable rules.</p>
            <p className="mt-3">If the queen is not legally covered, it is returned to the board according to the rules.</p>
            <p className="mt-3">The queen cannot be treated as an ordinary carrom man. Its successful covering and the circumstances in which it is pocketed can affect the result and score of a board.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-gray-900 mb-2">6. Common Carrom Fouls</h2>
            <p>A foul occurs when a player violates a playing rule. Common examples include:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Pocketing the striker.</li>
              <li>Making an illegal stroke or pushing the striker.</li>
              <li>Placing the striker incorrectly.</li>
              <li>Touching or moving carrom men improperly.</li>
              <li>Violating the prescribed playing position or procedure.</li>
            </ul>
            <p className="mt-3">The penalty depends on the specific infringement. Depending on the applicable rule, a player may have to return a pocketed piece, place a due or penalty piece on the board, or lose their turn.</p>
            <p className="mt-3">Tournament players should consult the official laws for the exact penalty associated with each foul.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-gray-900 mb-2">7. Carrom Scoring Rules</h2>
            <p>Under the scoring system published in the Indian Carrom Federation&apos;s laws:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Each carrom man remaining on the board for the losing player contributes one point to the winner&apos;s score.</li>
              <li>The queen is worth three additional points when the winner is entitled to receive them under the rules.</li>
              <li>The queen&apos;s additional points are subject to the prescribed score limits.</li>
              <li>The game is played to the specified target or board limit under the applicable format.</li>
            </ul>
            <p className="mt-3">In the cited rules, a game consists of 25 points or eight boards, whichever occurs first. Competition organisers should confirm the current rules and format for their event.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-gray-900 mb-2">8. How to Win a Game of Carrom</h2>
            <p>A player wins an individual board by legally pocketing all their own carrom men first, subject to the queen and other applicable rules.</p>
            <p className="mt-3">In a match, the overall winner is determined by the prescribed scoring system and competition format. Some competitions use multiple boards, point limits or match-specific regulations.</p>
            <p className="mt-3">A player should never assume that pocketing the final carrom man automatically guarantees a win: the position of the queen and any fouls or outstanding penalties may affect the result.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-gray-900 mb-2">9. Tips for Better Carrom Playing</h2>
            <p>Players can improve their technique through regular practice and correct equipment use.</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Practise straight shots to develop accuracy.</li>
              <li>Learn how rebounds and angles affect the striker.</li>
              <li>Control the force of each shot.</li>
              <li>Keep the playing surface clean and use permitted powder.</li>
              <li>Plan shots to pocket your own pieces while limiting your opponent&apos;s opportunities.</li>
              <li>Use a stable, level board with a smooth playing surface.</li>
            </ul>
            <p className="mt-3">Consistent practice helps develop better control, positioning and shot selection.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-gray-900 mb-2">10. Choosing a Carrom Board for Practice and Competition</h2>
            <p>A good carrom board should have a smooth playing surface, accurate markings, a stable frame and carefully finished playing areas.</p>
            <p className="mt-3">When choosing a board for home use, clubs, sports academies or competitive play, consider its construction, intended use and compliance with the relevant tournament specifications.</p>
            <p className="mt-3">AZ Sports – Amjad Zahoor Sports is a handmade wooden carrom board manufacturer based in Sialkot, Pakistan. The company focuses on traditional craftsmanship and produces carrom boards for players, retailers and international buyers.</p>
            <p className="mt-3">Explore AZ Sports to learn more about its handmade carrom boards and manufacturing heritage.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-gray-900 mb-2">Frequently Asked Questions About Carrom Rules</h2>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              <details className="py-3">
                <summary className="font-bold text-gray-900 cursor-pointer">How many players can play carrom?</summary>
                <p className="mt-2">Carrom is commonly played by two players in singles or four players in doubles.</p>
              </details>
              <details className="py-3">
                <summary className="font-bold text-gray-900 cursor-pointer">How many carrom men are used in a standard game?</summary>
                <p className="mt-2">A standard set contains nine white and nine black carrom men, plus one red queen.</p>
              </details>
              <details className="py-3">
                <summary className="font-bold text-gray-900 cursor-pointer">What is the queen in carrom?</summary>
                <p className="mt-2">The queen is the red playing piece. It must be legally covered after being pocketed, subject to the applicable rules.</p>
              </details>
              <details className="py-3">
                <summary className="font-bold text-gray-900 cursor-pointer">What happens if the striker goes into a pocket?</summary>
                <p className="mt-2">Pocketing the striker is generally a foul. The precise penalty depends on the circumstances and applicable rules.</p>
              </details>
              <details className="py-3">
                <summary className="font-bold text-gray-900 cursor-pointer">How many points is the queen worth?</summary>
                <p className="mt-2">Under the cited Indian Carrom Federation scoring rules, the queen is worth three points when the player is eligible to receive them.</p>
              </details>
              <details className="py-3">
                <summary className="font-bold text-gray-900 cursor-pointer">Where can I find the official laws of carrom?</summary>
                <p className="mt-2">Read the published <a className="font-semibold text-orange-700 underline underline-offset-2" href="https://www.indiancarrom.co.in/laws-of-carrom/" target="_blank" rel="noreferrer">Laws of Carrom from the Carrom Federation</a>. For international events, consult the relevant governing body and current tournament regulations.</p>
              </details>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-sm font-black text-gray-900 mb-2">About AZ Sports – Amjad Zahoor Sports</h2>
            <p>AZ Sports – Amjad Zahoor Sports is a handmade wooden carrom board manufacturer based in Sialkot, Pakistan. The company has a manufacturing heritage dating back to 1940.</p>
            <p className="mt-3">Through its focus on carrom board craftsmanship, AZ Sports serves players, clubs, retailers and international buyers seeking handmade wooden boards.</p>
            <p className="mt-3">Visit AZSports.pk to explore the company&apos;s products and manufacturing heritage.</p>
            <p className="mt-5 font-bold text-gray-900">AZ Sports – Amjad Zahoor Sports</p>
            <p className="text-gray-600">Handmade Carrom Boards | Sialkot, Pakistan | Established 1940</p>
          </section>
        </article>
      </main>
    </div>
  );
}