export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-20">

      {/* Hero */}
      <section className="flex flex-col gap-6 text-center">
        <span className="text-xs uppercase tracking-widest text-[#58a6ff] font-semibold">HR Compliance Tool</span>
        <h1 className="text-4xl font-bold text-white leading-tight">
          Check LinkedIn Job Posts for<br />
          <span className="text-[#58a6ff]">Legal Compliance</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto">
          Paste any job posting and get an instant AI-powered compliance report. Flag discriminatory language, get fix suggestions, and export results for HR documentation — before you publish.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-2">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg hover:bg-[#79b8ff] transition-colors text-base"
          >
            Start Compliance Check — $14/mo
          </a>
        </div>
        <p className="text-[#8b949e] text-sm">No credit card required for demo &middot; Cancel anytime</p>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-left">
          {[
            { icon: "🔍", title: "Instant Scan", desc: "Paste text or a URL and get results in seconds" },
            { icon: "⚖️", title: "Legal Rules", desc: "Checks against EEOC, ADA, ADEA, and more" },
            { icon: "📄", title: "Export Report", desc: "Download PDF/CSV for HR documentation" }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white text-sm mb-1">{f.title}</div>
              <div className="text-[#8b949e] text-xs">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col gap-6 items-center">
        <h2 className="text-2xl font-bold text-white">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 w-full max-w-sm flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <span className="text-white font-bold text-xl">Pro Plan</span>
            <span className="bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-4xl font-bold text-white">$14</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <ul className="flex flex-col gap-2 text-sm text-[#c9d1d9]">
            {[
              "Unlimited job posting scans",
              "EEOC, ADA, ADEA compliance checks",
              "AI-powered fix suggestions",
              "PDF & CSV export for HR docs",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg hover:bg-[#79b8ff] transition-colors text-center text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white text-center">FAQ</h2>
        <div className="flex flex-col gap-4">
          {[
            {
              q: "What compliance rules does it check?",
              a: "We check against EEOC guidelines, the Americans with Disabilities Act (ADA), Age Discrimination in Employment Act (ADEA), and common state-level fair employment laws — flagging phrases that could expose your company to legal risk."
            },
            {
              q: "Can I paste text directly instead of a URL?",
              a: "Yes. You can paste raw job posting text directly into the checker. URL parsing for LinkedIn posts is also supported for Pro subscribers."
            },
            {
              q: "How do I export the compliance report?",
              a: "After each scan, you can download a PDF or CSV report summarizing flagged issues and suggested corrections — ready to attach to your HR documentation workflow."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2 text-sm">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs pt-4 border-t border-[#30363d]">
        &copy; {new Date().getFullYear()} Compliance Checker &middot; Built for HR teams &amp; recruiting agencies
      </footer>
    </main>
  );
}
