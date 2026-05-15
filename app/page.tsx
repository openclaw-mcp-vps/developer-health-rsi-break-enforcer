export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex flex-col items-center px-4">
      {/* Hero */}
      <section className="w-full max-w-3xl text-center pt-24 pb-16">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          RSI Prevention
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Prevent RSI with{" "}
          <span className="text-[#58a6ff]">Smart Coding Break Reminders</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          RSI Break Enforcer monitors your keyboard and mouse patterns in real time, detects risk factors before they become injuries, and forces you to take the micro-breaks your wrists actually need.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start Protecting Your Wrists — $8/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. Works on macOS &amp; Windows.</p>
      </section>

      {/* Feature pills */}
      <section className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-3 pb-16">
        {["Keystroke Monitoring","RSI Risk Score","Forced Micro-Breaks","Analytics Dashboard"].map((f) => (
          <div key={f} className="bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 text-center text-sm font-medium text-[#c9d1d9]">
            {f}
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="w-full max-w-sm pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] font-semibold mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$8<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#6e7681] mb-6">Everything you need to stay injury-free</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Real-time keystroke &amp; mouse tracking",
              "Adaptive break scheduling",
              "RSI risk score &amp; trend charts",
              "Customizable break durations",
              "Desktop notifications &amp; lock screen",
              "macOS &amp; Windows support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full max-w-2xl pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does RSI Break Enforcer detect risk?",
              a: "It tracks typing speed, keystroke force patterns, and continuous usage duration. When your activity crosses configurable thresholds, it calculates a risk score and triggers a break."
            },
            {
              q: "Does it actually enforce breaks or just remind me?",
              a: "Both. You can configure it to show a gentle notification or to lock your screen entirely until the break timer completes — your choice."
            },
            {
              q: "Is my typing data sent to any server?",
              a: "No. All monitoring happens locally on your machine. Only anonymous usage analytics (no keystrokes) are sent to improve the product."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="pb-8 text-xs text-[#6e7681] text-center">
        &copy; {new Date().getFullYear()} RSI Break Enforcer. All rights reserved.
      </footer>
    </main>
  );
}
