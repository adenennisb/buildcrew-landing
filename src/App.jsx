import { useState, useEffect } from "react";

const TRADES = ["Electrician","Plumber","Framer","Roofer","Drywall","Concrete","Painter","HVAC"];
const TALLY_FORM_ID = "xXQ66J"; // ✅ Your live Tally form

export default function BuildCrewLanding() {
  const [count] = useState({ contractors: 47, trades: 112 });

  useEffect(() => {
    if (document.getElementById("tally-script")) return;
    const script = document.createElement("script");
    script.id = "tally-script";
    script.src = "https://tally.so/widgets/embed.js";
    script.onload = () => { if (window.Tally) window.Tally.loadEmbeds(); };
    document.body.appendChild(script);
  }, []);

  const openTally = () => {
    if (window.Tally) {
      window.Tally.openPopup(TALLY_FORM_ID, {
        width: 480,
        overlay: true,
        emoji: { text: "🏗", animation: "wave" },
      });
    } else {
      window.open(`https://tally.so/r/${TALLY_FORM_ID}`, "_blank");
    }
  };

  return (
    <div style={{
      fontFamily: "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif",
      background: "#F2EDE6", minHeight: "100vh", color: "#1A1208", overflowX: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.4)} }
        @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .fade-up   { animation: fadeUp 0.6s 0.00s ease both; }
        .fade-up-2 { animation: fadeUp 0.6s 0.15s ease both; }
        .fade-up-3 { animation: fadeUp 0.6s 0.30s ease both; }
        .fade-up-4 { animation: fadeUp 0.6s 0.45s ease both; }
        .fade-up-5 { animation: fadeUp 0.6s 0.60s ease both; }
        .cta-btn {
          cursor: pointer; font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase;
          border: none; border-radius: 4px;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(232,92,26,0.35); }
        .cta-btn:active { transform: scale(0.98); box-shadow: none; }
        .cta-btn-green:hover { box-shadow: 0 8px 24px rgba(26,110,60,0.35) !important; }
        .ticker-wrap { overflow: hidden; white-space: nowrap; }
        .ticker-inner { display: inline-block; animation: ticker 28s linear infinite; }
        .diagonal-stripe {
          background: repeating-linear-gradient(
            -45deg, transparent, transparent 6px,
            rgba(232,92,26,0.07) 6px, rgba(232,92,26,0.07) 12px
          );
        }
        .step-card {
          background: white; border-radius: 6px; padding: 36px 28px;
          border: 2px solid #E8E0D4; position: relative; overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .step-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(26,18,8,0.1); }
        .check-item { display: flex; gap: 10px; align-items: flex-start; margin-bottom: 10px; }
        .stat-num { font-size: 52px; font-weight: 900; line-height: 1; letter-spacing: -0.02em; }
      `}</style>

      {/* ── Ticker Banner ── */}
      <div style={{ background: "#E85C1A", padding: "10px 0", overflow: "hidden" }}>
        <div className="ticker-wrap">
          <div className="ticker-inner">
            {[...Array(6)].map((_, i) => (
              <span key={i} style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", color: "white", textTransform: "uppercase", padding: "0 40px" }}>
                ⚡ NOW LAUNCHING IN FRESNO &nbsp;·&nbsp; FIND TRADES IN HOURS, NOT DAYS &nbsp;·&nbsp; FREE TO JOIN DURING BETA &nbsp;·&nbsp; CONTRACTORS + TRADES WANTED &nbsp;·&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Nav ── */}
      <nav style={{ padding: "20px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "2px solid #D4C9B8", background: "#F2EDE6" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 38, height: 38, background: "#E85C1A", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🏗</div>
          <div>
            <div style={{ fontSize: 24, fontWeight: 900, letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1 }}>BuildCrew</div>
            <div style={{ fontSize: 11, color: "#9A8E80", letterSpacing: "0.1em", textTransform: "uppercase" }}>Fresno, CA</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#2ECC71", animation: "pulse-dot 2s infinite" }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#4A9960", letterSpacing: "0.04em" }}>Beta Signups Open</span>
          </div>
          <button className="cta-btn" onClick={openTally} style={{ background: "#E85C1A", color: "white", fontSize: 14, padding: "10px 20px" }}>
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 32px 60px", position: "relative" }}>
        <div className="diagonal-stripe" style={{ position: "absolute", top: 0, right: -32, width: "45%", height: "100%", borderRadius: "0 0 0 80px", zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 1 }}>

          <div className="fade-up" style={{
            display: "inline-block", background: "#1A1208", color: "#F2EDE6",
            fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
            padding: "6px 14px", borderRadius: 3, marginBottom: 24,
          }}>🔨 Fresno's Construction Labor Marketplace</div>

          <h1 className="fade-up-2" style={{
            fontSize: "clamp(54px, 8vw, 96px)", fontWeight: 900, lineHeight: 0.95,
            letterSpacing: "-0.02em", textTransform: "uppercase", maxWidth: 680, marginBottom: 28,
          }}>
            Find the<br />
            <span style={{ color: "#E85C1A", position: "relative", display: "inline-block" }}>
              Right Trade
              <svg style={{ position: "absolute", bottom: -4, left: 0, width: "100%", height: 8 }} viewBox="0 0 300 8" preserveAspectRatio="none">
                <path d="M0,6 Q75,0 150,5 Q225,10 300,4" stroke="#E85C1A" strokeWidth="3" fill="none" opacity="0.5"/>
              </svg>
            </span><br />
            In Hours.
          </h1>

          <p className="fade-up-3" style={{
            fontSize: 20, fontWeight: 500, color: "#6B5E50", maxWidth: 480,
            lineHeight: 1.6, marginBottom: 40, fontFamily: "'Barlow', sans-serif",
          }}>
            BuildCrew connects Fresno general contractors with licensed, insured subcontractors — fast. No more calling around for days.
          </p>

          <div className="fade-up-4" style={{ display: "flex", gap: 24, marginBottom: 48, flexWrap: "wrap" }}>
            {[
              { n: count.contractors, label: "Contractors signed up", color: "#E85C1A" },
              { n: count.trades,       label: "Trades on waitlist",    color: "#1A6E3C" },
              { n: "1",                label: "City at launch",        color: "#1A1208" },
            ].map(s => (
              <div key={s.label} style={{ borderLeft: `4px solid ${s.color}`, paddingLeft: 14 }}>
                <div className="stat-num" style={{ color: s.color }}>{s.n}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#9A8E80", letterSpacing: "0.04em", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="fade-up-5" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <button className="cta-btn" onClick={openTally} style={{ background: "#E85C1A", color: "white", fontSize: 22, padding: "18px 40px" }}>
              Join the Waitlist →
            </button>
            <span style={{ fontSize: 13, color: "#9A8E80", fontFamily: "'Barlow', sans-serif" }}>Free during beta · No credit card</span>
          </div>
        </div>
      </section>

      {/* ── Trades Marquee ── */}
      <div style={{ background: "#1A1208", padding: "16px 0", overflow: "hidden" }}>
        <div className="ticker-wrap">
          <div className="ticker-inner" style={{ animationDuration: "20s" }}>
            {[...TRADES, ...TRADES, ...TRADES, ...TRADES].map((t, i) => (
              <span key={i} style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.1em", color: "#6B5E50", textTransform: "uppercase", padding: "0 28px" }}>
                {["⚡","🔧","🪵","🏠","🧱","🏗","🎨","❄️"][i % 8]} {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── How It Works ── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 32px" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#E85C1A", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>How It Works</div>
        <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: 52 }}>Simple as 1-2-3</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {[
            { n: "01", title: "Post Your Job",  desc: "GC fills in trade needed, location, dates, and budget. Takes 2 minutes from your phone.", icon: "📋", color: "#E85C1A" },
            { n: "02", title: "Get Matched",    desc: "BuildCrew surfaces verified, insured trades in Fresno who are available and reviewed.", icon: "🔍", color: "#1A6E3C" },
            { n: "03", title: "Hire & Go",      desc: "Compare bids, pick your trade, confirm the job. Everything tracked in one place.", icon: "✅", color: "#1A1208" },
          ].map(step => (
            <div key={step.n} className="step-card">
              <div style={{ position: "absolute", top: 16, right: 20, fontSize: 72, fontWeight: 900, color: "#F2EDE6", lineHeight: 1, fontFamily: "'Barlow Condensed', sans-serif", userSelect: "none" }}>{step.n}</div>
              <div style={{ fontSize: 36, marginBottom: 16, position: "relative" }}>{step.icon}</div>
              <div style={{ width: 32, height: 4, background: step.color, borderRadius: 2, marginBottom: 16 }} />
              <h3 style={{ fontSize: 24, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: 10 }}>{step.title}</h3>
              <p style={{ fontSize: 15, color: "#6B5E50", lineHeight: 1.65, fontFamily: "'Barlow', sans-serif" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Two-sided value props ── */}
      <section style={{ background: "#1A1208", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
          {[
            {
              key: "gc", color: "#E85C1A", radius: "6px 0 0 6px",
              eyebrow: "For General Contractors",
              headline: "Stop Burning Days Finding Trades",
              items: ["Browse verified, insured trades in Fresno","Compare bids and reviews in one place","Post a job in under 2 minutes","Built for the jobsite — mobile first","Free to use during beta"],
              cta: "Sign Up as a Contractor",
            },
            {
              key: "trade", color: "#1A6E3C", radius: "0 6px 6px 0",
              eyebrow: "For Trades & Subs",
              headline: "Fill Your Schedule. Get Paid.",
              items: ["Get job requests sent directly to you","Set your availability in seconds","Build a verified profile GCs trust","No cold calls — you pick your jobs","Free to list during beta"],
              cta: "Sign Up as a Trade",
            },
          ].map(s => (
            <div key={s.key} style={{ background: s.color, borderRadius: s.radius, padding: "52px 44px" }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 8 }}>{s.eyebrow}</div>
              <h3 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 900, textTransform: "uppercase", color: "white", lineHeight: 1.05, marginBottom: 28, letterSpacing: "-0.01em" }}>{s.headline}</h3>
              {s.items.map(item => (
                <div key={item} className="check-item">
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 18, flexShrink: 0 }}>→</span>
                  <span style={{ fontSize: 16, fontWeight: 600, color: "white", fontFamily: "'Barlow', sans-serif" }}>{item}</span>
                </div>
              ))}
              <button className={`cta-btn ${s.key === "trade" ? "cta-btn-green" : ""}`} onClick={openTally}
                style={{ marginTop: 28, background: "rgba(255,255,255,0.15)", color: "white", fontSize: 16, padding: "14px 28px", border: "2px solid rgba(255,255,255,0.3)" }}>
                {s.cta} →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── Urgency / Final CTA ── */}
      <section style={{ maxWidth: 680, margin: "0 auto", padding: "80px 32px", textAlign: "center" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#E85C1A", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>Limited Beta Spots</div>
        <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 20 }}>
          Be First in<br />Fresno
        </h2>
        <p style={{ fontSize: 17, color: "#6B5E50", fontFamily: "'Barlow', sans-serif", lineHeight: 1.7, marginBottom: 36 }}>
          We're onboarding a small group of contractors and trades in Fresno before public launch. Early members get free access, priority matching, and a founding member badge on their profile.
        </p>
        <button className="cta-btn" onClick={openTally} style={{ background: "#E85C1A", color: "white", fontSize: 22, padding: "20px 48px" }}>
          Reserve Your Spot →
        </button>
        <div style={{ marginTop: 14, fontSize: 13, color: "#A89C8C", fontFamily: "'Barlow', sans-serif" }}>
          🔒 No spam. No credit card. We'll reach out personally.
        </div>
        <div style={{ marginTop: 48, display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
          {["✓ Free during beta", "✓ Fresno-only launch", "✓ Verified trades only"].map(t => (
            <span key={t} style={{ fontSize: 14, fontWeight: 700, color: "#9A8E80", letterSpacing: "0.04em" }}>{t}</span>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: "#1A1208", padding: "40px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, background: "#E85C1A", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🏗</div>
            <span style={{ fontSize: 20, fontWeight: 900, letterSpacing: "0.04em", textTransform: "uppercase", color: "white" }}>BuildCrew</span>
          </div>
          <div style={{ fontSize: 13, color: "#4A3F35", fontFamily: "'Barlow', sans-serif" }}>
            Launching in Fresno, CA · Beta 2025 · hello@buildcrew.com
          </div>
          <button className="cta-btn" onClick={openTally} style={{ background: "#E85C1A", color: "white", fontSize: 14, padding: "10px 20px" }}>
            Join Waitlist
          </button>
        </div>
      </footer>
    </div>
  );
}