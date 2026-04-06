import { useState, useEffect } from "react";

// ── Brand colors ──────────────────────────────────────────────
const BLUE   = "#1A4FBF";
const ORANGE = "#F5A623";
const DARK   = "#2B2B2B";
const BG     = "#F4F6FA";

// ── TradeLink Logo ────────────────────────────────────────────
function TradeLinkLogo({ size = "md" }) {
  const iconH  = size === "sm" ? 28 : size === "lg" ? 56 : 40;
  const textSz = size === "sm" ? 17 : size === "lg" ? 34 : 24;
  const gap    = size === "sm" ? 7  : size === "lg" ? 14 : 10;

  return (
    <div style={{ display:"flex", alignItems:"center", gap }}>
      {/* ── Robotic arm icon ── */}
      <svg width={iconH * 0.9} height={iconH} viewBox="0 0 90 110" fill="none">
        {/* Top ball joint */}
        <circle cx="65" cy="12" r="11" fill={BLUE}/>
        {/* Upper arm — top-right → middle-left */}
        <rect x="12" y="5" width="62" height="18" rx="9"
          transform="rotate(42 12 5)" fill={BLUE}/>
        {/* Middle ball joint */}
        <circle cx="27" cy="50" r="10" fill={BLUE}/>
        {/* Lower arm — middle-left → lower-right */}
        <rect x="23" y="43" width="58" height="18" rx="9"
          transform="rotate(-38 23 43)" fill={BLUE}/>
        {/* Lower-right ball joint */}
        <circle cx="64" cy="76" r="9" fill={BLUE}/>
        {/* Chain link base — horizontal bar */}
        <rect x="12" y="82" width="52" height="16" rx="8" fill={BLUE}/>
        {/* Left drive knob */}
        <circle cx="12" cy="90" r="9" fill={BLUE}/>
        {/* Right drive knob (orange accent) */}
        <circle cx="64" cy="90" r="9" fill={ORANGE}/>
      </svg>

      {/* ── Wordmark ── */}
      <div style={{
        fontFamily:"'Barlow Condensed', 'Arial Narrow', Arial, sans-serif",
        fontWeight: 900,
        fontSize: textSz,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: DARK,
        lineHeight: 1,
        display: "flex",
        alignItems: "center",
      }}>
        TRADE
        {/* The "Li" with orange dot */}
        <span style={{ position:"relative", display:"inline-block" }}>
          L
        </span>
        <span style={{ position:"relative", display:"inline-block", marginBottom: textSz * 0.32 }}>
          <span style={{ display:"inline-block", width: textSz * 0.12, height: textSz * 0.12,
            background: ORANGE, borderRadius:"50%",
            position:"absolute", top: -textSz * 0.08, left:"50%", transform:"translateX(-50%)" }}/>
          i
        </span>
        NK
        {/* Orange chevron */}
        <svg width={textSz * 0.45} height={textSz * 0.7} viewBox="0 0 10 16"
          style={{ marginLeft: textSz * 0.06, flexShrink:0 }}>
          <path d="M8 0 L2 8 L8 16" stroke={ORANGE} strokeWidth="3"
            strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </div>
    </div>
  );
}

// ── Trades list ───────────────────────────────────────────────
const TRADES = {
  en: ["Electrician","Plumber","Framer","Roofer","Drywall","Concrete","Painter","HVAC"],
  es: ["Electricista","Plomero","Encofrador","Techador","Drywall","Concreto","Pintor","HVAC"],
};

// ── Translations ──────────────────────────────────────────────
const T = {
  en: {
    ticker: "⚡ NOW LAUNCHING IN FRESNO \u00a0·\u00a0 FIND TRADES IN HOURS, NOT DAYS \u00a0·\u00a0 FREE TO JOIN DURING BETA \u00a0·\u00a0 CONTRACTORS + TRADES WANTED \u00a0·\u00a0",
    navStatus: "Beta Signups Open",
    navCta: "Join Waitlist",
    heroBadge: "🔨 Fresno's Construction Labor Marketplace",
    heroH1Line1: "Find the",
    heroH1Accent: "Right Trade",
    heroH1Line3: "In Hours.",
    heroPara: "TradeLink connects Fresno general contractors with licensed, insured subcontractors — fast. No more calling around for days.",
    statContractors: "Contractors signed up",
    statTrades: "Trades on waitlist",
    statCity: "City at launch",
    heroCta: "Join the Waitlist →",
    heroSub: "Free during beta · No credit card",
    howLabel: "How It Works",
    howH2: "Simple as 1-2-3",
    steps: [
      { n:"01", title:"Post Your Job",  desc:"GC fills in trade needed, location, dates, and budget. Takes 2 minutes from your phone.", icon:"📋", color: BLUE },
      { n:"02", title:"Get Matched",    desc:"TradeLink surfaces verified, insured trades in Fresno who are available and reviewed.",    icon:"🔍", color: ORANGE },
      { n:"03", title:"Hire & Go",      desc:"Compare bids, pick your trade, confirm the job. Everything tracked in one place.",         icon:"✅", color: DARK },
    ],
    sides: [
      {
        key:"gc", color: BLUE, radius:"6px 0 0 6px",
        eyebrow:"For General Contractors",
        headline:"Stop Burning Days Finding Trades",
        items:["Browse verified, insured trades in Fresno","Compare bids and reviews in one place","Post a job in under 2 minutes","Built for the jobsite — mobile first","Free to use during beta"],
        cta:"Sign Up as a Contractor",
      },
      {
        key:"trade", color:"#1A6E3C", radius:"0 6px 6px 0",
        eyebrow:"For Trades & Subs",
        headline:"Fill Your Schedule. Get Paid.",
        items:["Get job requests sent directly to you","Set your availability in seconds","Build a verified profile GCs trust","No cold calls — you pick your jobs","Free to list during beta"],
        cta:"Sign Up as a Trade",
      },
    ],
    urgencyLabel: "Limited Beta Spots",
    urgencyH2Line1: "Be First in",
    urgencyH2Line2: "Fresno",
    urgencyPara: "We're onboarding a small group of contractors and trades in Fresno before public launch. Early members get free access, priority matching, and a founding member badge on their profile.",
    urgencyCta: "Reserve Your Spot →",
    urgencySub: "🔒 No spam. No credit card. We'll reach out personally.",
    urgencyTags: ["✓ Free during beta","✓ Fresno-only launch","✓ Verified trades only"],
    footerMeta: "Launching in Fresno, CA · Beta 2025 · hello@tradelink.com",
    footerCta: "Join Waitlist",
    modalTitle: "Join TradeLink Beta",
    modalSub: "Free access · Fresno launch · Limited spots",
    formRoleLabel: "I am a *",
    formRoles: [{ value:"contractor", label:"General Contractor" },{ value:"trade", label:"Trade / Sub" }],
    formTradeLabel: "Trade Type *",
    formTradePlaceholder: "Select your trade…",
    formNameLabel: "Full Name *",
    formNamePlaceholder: "John Smith",
    formEmailLabel: "Email *",
    formEmailPlaceholder: "you@example.com",
    formPhoneLabel: "Phone",
    formPhonePlaceholder: "(559) 555-0100",
    formCompanyLabel: "Company",
    formCompanyPlaceholder: "ABC Construction",
    formOptional: "(optional)",
    formSubmit: "Reserve My Spot →",
    formSubmitting: "Saving…",
    formError: "Something went wrong. Make sure the local server is running (npm run server).",
    formFooter: "🔒 No spam. No credit card. We'll reach out personally.",
    successTitle: "You're on the list!",
    successBody: "We'll reach out personally when TradeLink launches in Fresno. Talk soon.",
  },
  es: {
    ticker: "⚡ AHORA LANZANDO EN FRESNO \u00a0·\u00a0 ENCUENTRA OFICIOS EN HORAS, NO DÍAS \u00a0·\u00a0 GRATIS DURANTE LA BETA \u00a0·\u00a0 SE BUSCAN CONTRATISTAS + OFICIOS \u00a0·\u00a0",
    navStatus: "Inscripciones Beta Abiertas",
    navCta: "Únete a la Lista",
    heroBadge: "🔨 El Mercado Laboral de Construcción de Fresno",
    heroH1Line1: "Encuentra el",
    heroH1Accent: "Oficio Correcto",
    heroH1Line3: "En Horas.",
    heroPara: "TradeLink conecta a los contratistas generales de Fresno con subcontratistas licenciados y asegurados — rápido. Sin más llamadas por días.",
    statContractors: "Contratistas registrados",
    statTrades: "Oficios en lista de espera",
    statCity: "Ciudad al lanzamiento",
    heroCta: "Únete a la Lista de Espera →",
    heroSub: "Gratis durante la beta · Sin tarjeta de crédito",
    howLabel: "Cómo Funciona",
    howH2: "Simple como 1-2-3",
    steps: [
      { n:"01", title:"Publica tu Trabajo",      desc:"El GC ingresa el oficio, ubicación, fechas y presupuesto. Toma 2 minutos desde tu teléfono.",  icon:"📋", color: BLUE },
      { n:"02", title:"Encuentra Coincidencias", desc:"TradeLink muestra oficios verificados y asegurados en Fresno disponibles y con reseñas.",        icon:"🔍", color: ORANGE },
      { n:"03", title:"Contrata y Avanza",        desc:"Compara ofertas, elige tu oficio, confirma el trabajo. Todo rastreado en un solo lugar.",        icon:"✅", color: DARK },
    ],
    sides: [
      {
        key:"gc", color: BLUE, radius:"6px 0 0 6px",
        eyebrow:"Para Contratistas Generales",
        headline:"Deja de Perder Días Buscando Oficios",
        items:["Explora oficios verificados y asegurados en Fresno","Compara ofertas y reseñas en un solo lugar","Publica un trabajo en menos de 2 minutos","Diseñado para la obra — primero móvil","Gratis durante la beta"],
        cta:"Regístrate como Contratista",
      },
      {
        key:"trade", color:"#1A6E3C", radius:"0 6px 6px 0",
        eyebrow:"Para Oficios y Subcontratistas",
        headline:"Llena tu Agenda. Cobra.",
        items:["Recibe solicitudes de trabajo directamente","Establece tu disponibilidad en segundos","Construye un perfil verificado en el que los GC confíen","Sin llamadas en frío — tú eliges tus trabajos","Gratis para registrarse durante la beta"],
        cta:"Regístrate como Oficio",
      },
    ],
    urgencyLabel: "Plazas Beta Limitadas",
    urgencyH2Line1: "Sé el Primero",
    urgencyH2Line2: "en Fresno",
    urgencyPara: "Estamos incorporando a un pequeño grupo de contratistas y oficios en Fresno antes del lanzamiento público. Los miembros iniciales obtienen acceso gratuito, emparejamiento prioritario y una insignia de miembro fundador en su perfil.",
    urgencyCta: "Reserva Tu Lugar →",
    urgencySub: "🔒 Sin spam. Sin tarjeta de crédito. Nos comunicaremos personalmente.",
    urgencyTags: ["✓ Gratis durante la beta","✓ Lanzamiento solo en Fresno","✓ Solo oficios verificados"],
    footerMeta: "Lanzando en Fresno, CA · Beta 2025 · hello@tradelink.com",
    footerCta: "Únete a la Lista",
    modalTitle: "Únete a la Beta de TradeLink",
    modalSub: "Acceso gratuito · Lanzamiento en Fresno · Plazas limitadas",
    formRoleLabel: "Soy un/a *",
    formRoles: [{ value:"contractor", label:"Contratista General" },{ value:"trade", label:"Oficio / Sub" }],
    formTradeLabel: "Tipo de Oficio *",
    formTradePlaceholder: "Selecciona tu oficio…",
    formNameLabel: "Nombre Completo *",
    formNamePlaceholder: "Juan García",
    formEmailLabel: "Correo Electrónico *",
    formEmailPlaceholder: "tu@ejemplo.com",
    formPhoneLabel: "Teléfono",
    formPhonePlaceholder: "(559) 555-0100",
    formCompanyLabel: "Empresa",
    formCompanyPlaceholder: "Construcciones ABC",
    formOptional: "(opcional)",
    formSubmit: "Reservar Mi Lugar →",
    formSubmitting: "Guardando…",
    formError: "Algo salió mal. Asegúrate de que el servidor local esté funcionando (npm run server).",
    formFooter: "🔒 Sin spam. Sin tarjeta de crédito. Nos comunicaremos personalmente.",
    successTitle: "¡Estás en la lista!",
    successBody: "Te contactaremos personalmente cuando TradeLink lance en Fresno. Hasta pronto.",
  },
};

// ── Main component ────────────────────────────────────────────
export default function TradeLinkLanding() {
  const [count] = useState({ contractors: 47, trades: 112 });
  const [lang, setLang] = useState("en");
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name:"", email:"", phone:"", role:"", trade_type:"", company:"" });
  const [formState, setFormState] = useState("idle");

  const t = T[lang];
  const trades = TRADES[lang];

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") closeForm(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openForm = () => {
    setFormData({ name:"", email:"", phone:"", role:"", trade_type:"", company:"" });
    setFormState("idle");
    setFormOpen(true);
  };

  const closeForm = () => { setFormOpen(false); setFormState("idle"); };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, lang }),
      });
      if (!res.ok) throw new Error("Server error");
      setFormState("success");
      setTimeout(() => closeForm(), 3000);
    } catch {
      setFormState("error");
    }
  };

  const inputStyle = {
    width:"100%", padding:"12px 14px", fontSize:15,
    border:"2px solid #D4D9E8", borderRadius:4,
    fontFamily:"'Barlow', sans-serif", background:"white",
    color: DARK, outline:"none",
  };

  const labelStyle = {
    display:"block", fontSize:12, fontWeight:700,
    letterSpacing:"0.08em", textTransform:"uppercase",
    color:"#6B7A99", marginBottom:6,
  };

  return (
    <div style={{
      fontFamily:"'Barlow Condensed', 'Arial Narrow', Arial, sans-serif",
      background: BG, minHeight:"100vh", color: DARK, overflowX:"hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulseDot{ 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.4)} }
        @keyframes ticker  { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes modalIn { from{opacity:0;transform:translateY(20px) scale(.97)} to{opacity:1;transform:translateY(0) scale(1)} }
        .fade-up   { animation:fadeUp .6s .00s ease both }
        .fade-up-2 { animation:fadeUp .6s .15s ease both }
        .fade-up-3 { animation:fadeUp .6s .30s ease both }
        .fade-up-4 { animation:fadeUp .6s .45s ease both }
        .fade-up-5 { animation:fadeUp .6s .60s ease both }
        .cta-btn {
          cursor:pointer; font-family:'Barlow Condensed',sans-serif;
          font-weight:800; letter-spacing:.08em; text-transform:uppercase;
          border:none; border-radius:5px;
          transition:transform .15s ease, box-shadow .15s ease;
        }
        .cta-btn:hover  { transform:translateY(-2px); box-shadow:0 8px 24px rgba(26,79,191,.30); }
        .cta-btn:active { transform:scale(.98); box-shadow:none; }
        .cta-btn-orange:hover { box-shadow:0 8px 24px rgba(245,166,35,.35) !important; }
        .ticker-wrap  { overflow:hidden; white-space:nowrap; }
        .ticker-inner { display:inline-block; animation:ticker 28s linear infinite; }
        .diagonal-stripe {
          background:repeating-linear-gradient(
            -45deg, transparent, transparent 6px,
            rgba(26,79,191,.05) 6px, rgba(26,79,191,.05) 12px
          );
        }
        .step-card {
          background:white; border-radius:8px; padding:36px 28px;
          border:2px solid #DDE3F0; position:relative; overflow:hidden;
          transition:transform .2s ease, box-shadow .2s ease;
        }
        .step-card:hover { transform:translateY(-4px); box-shadow:0 12px 32px rgba(26,79,191,.12); }
        .check-item { display:flex; gap:10px; align-items:flex-start; margin-bottom:10px; }
        .stat-num   { font-size:52px; font-weight:900; line-height:1; letter-spacing:-.02em; }
        .form-input:focus { border-color:${BLUE} !important; }
        .lang-toggle { display:flex; border:2px solid #D4D9E8; border-radius:5px; overflow:hidden; }
        .lang-btn {
          padding:6px 12px; font-size:12px; font-weight:800; letter-spacing:.08em;
          cursor:pointer; border:none; background:transparent;
          font-family:'Barlow Condensed',sans-serif; transition:all .15s ease; color:#9AA3BB;
        }
        .lang-btn.active  { background:${BLUE}; color:white; }
        .lang-btn:not(.active):hover { background:#E8ECF5; color:${DARK}; }
      `}</style>

      {/* ── Ticker ── */}
      <div style={{ background: BLUE, padding:"10px 0", overflow:"hidden" }}>
        <div className="ticker-wrap">
          <div className="ticker-inner">
            {[...Array(6)].map((_, i) => (
              <span key={i} style={{ fontSize:13, fontWeight:700, letterSpacing:"0.12em", color:"white", textTransform:"uppercase", padding:"0 40px" }}>
                {t.ticker}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Nav ── */}
      <nav style={{ padding:"18px 32px", display:"flex", alignItems:"center", justifyContent:"space-between", borderBottom:"2px solid #DDE3F0", background:"white" }}>
        <TradeLinkLogo size="md" />
        <div style={{ display:"flex", alignItems:"center", gap:16 }}>
          <div className="lang-toggle">
            <button className={`lang-btn${lang==="en"?" active":""}`} onClick={() => setLang("en")}>EN</button>
            <button className={`lang-btn${lang==="es"?" active":""}`} onClick={() => setLang("es")}>ES</button>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            <div style={{ width:8, height:8, borderRadius:"50%", background:"#2ECC71", animation:"pulseDot 2s infinite" }}/>
            <span style={{ fontSize:13, fontWeight:600, color:"#2ECC71", letterSpacing:"0.04em" }}>{t.navStatus}</span>
          </div>
          <button className="cta-btn" onClick={openForm} style={{ background: BLUE, color:"white", fontSize:14, padding:"10px 22px" }}>
            {t.navCta}
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ maxWidth:1100, margin:"0 auto", padding:"80px 32px 60px", position:"relative" }}>
        <div className="diagonal-stripe" style={{ position:"absolute", top:0, right:-32, width:"45%", height:"100%", borderRadius:"0 0 0 80px", zIndex:0 }}/>
        <div style={{ position:"relative", zIndex:1 }}>
          <div className="fade-up" style={{
            display:"inline-block", background: DARK, color:"white",
            fontSize:12, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase",
            padding:"6px 14px", borderRadius:3, marginBottom:24,
          }}>{t.heroBadge}</div>

          <h1 className="fade-up-2" style={{
            fontSize:"clamp(54px, 8vw, 96px)", fontWeight:900, lineHeight:.95,
            letterSpacing:"-0.02em", textTransform:"uppercase", maxWidth:680, marginBottom:28,
          }}>
            {t.heroH1Line1}<br/>
            <span style={{ color: BLUE, position:"relative", display:"inline-block" }}>
              {t.heroH1Accent}
              <svg style={{ position:"absolute", bottom:-4, left:0, width:"100%", height:8 }} viewBox="0 0 300 8" preserveAspectRatio="none">
                <path d="M0,6 Q75,0 150,5 Q225,10 300,4" stroke={ORANGE} strokeWidth="3" fill="none" opacity="0.7"/>
              </svg>
            </span><br/>
            {t.heroH1Line3}
          </h1>

          <p className="fade-up-3" style={{
            fontSize:20, fontWeight:500, color:"#5A6480", maxWidth:480,
            lineHeight:1.6, marginBottom:40, fontFamily:"'Barlow', sans-serif",
          }}>{t.heroPara}</p>

          <div className="fade-up-4" style={{ display:"flex", gap:24, marginBottom:48, flexWrap:"wrap" }}>
            {[
              { n: count.contractors, label: t.statContractors, color: BLUE },
              { n: count.trades,      label: t.statTrades,      color: ORANGE },
              { n: "1",               label: t.statCity,        color: DARK },
            ].map(s => (
              <div key={s.label} style={{ borderLeft:`4px solid ${s.color}`, paddingLeft:14 }}>
                <div className="stat-num" style={{ color: s.color }}>{s.n}</div>
                <div style={{ fontSize:13, fontWeight:600, color:"#9AA3BB", letterSpacing:"0.04em", textTransform:"uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="fade-up-5" style={{ display:"flex", alignItems:"center", gap:16, flexWrap:"wrap" }}>
            <button className="cta-btn" onClick={openForm} style={{ background: BLUE, color:"white", fontSize:22, padding:"18px 40px" }}>
              {t.heroCta}
            </button>
            <span style={{ fontSize:13, color:"#9AA3BB", fontFamily:"'Barlow', sans-serif" }}>{t.heroSub}</span>
          </div>
        </div>
      </section>

      {/* ── Trades Marquee ── */}
      <div style={{ background: DARK, padding:"16px 0", overflow:"hidden" }}>
        <div className="ticker-wrap">
          <div className="ticker-inner" style={{ animationDuration:"20s" }}>
            {[...trades,...trades,...trades,...trades].map((tr, i) => (
              <span key={i} style={{ fontSize:15, fontWeight:700, letterSpacing:"0.1em", color:"#5A6480", textTransform:"uppercase", padding:"0 28px" }}>
                {["⚡","🔧","🪵","🏠","🧱","🏗","🎨","❄️"][i%8]} {tr}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── How It Works ── */}
      <section style={{ maxWidth:1100, margin:"0 auto", padding:"80px 32px" }}>
        <div style={{ fontSize:13, fontWeight:700, color: BLUE, letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:12 }}>{t.howLabel}</div>
        <h2 style={{ fontSize:"clamp(32px, 5vw, 52px)", fontWeight:900, textTransform:"uppercase", letterSpacing:"-0.01em", marginBottom:52 }}>{t.howH2}</h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:24 }}>
          {t.steps.map(step => (
            <div key={step.n} className="step-card">
              <div style={{ position:"absolute", top:16, right:20, fontSize:72, fontWeight:900, color:"#F0F3FA", lineHeight:1, fontFamily:"'Barlow Condensed',sans-serif", userSelect:"none" }}>{step.n}</div>
              <div style={{ fontSize:36, marginBottom:16, position:"relative" }}>{step.icon}</div>
              <div style={{ width:32, height:4, background:step.color, borderRadius:2, marginBottom:16 }}/>
              <h3 style={{ fontSize:24, fontWeight:800, textTransform:"uppercase", letterSpacing:"0.02em", marginBottom:10 }}>{step.title}</h3>
              <p style={{ fontSize:15, color:"#5A6480", lineHeight:1.65, fontFamily:"'Barlow',sans-serif" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Two-sided value props ── */}
      <section style={{ background: DARK, padding:"80px 32px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:4 }}>
          {t.sides.map(s => (
            <div key={s.key} style={{ background:s.color, borderRadius:s.radius, padding:"52px 44px" }}>
              <div style={{ fontSize:12, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"rgba(255,255,255,0.55)", marginBottom:8 }}>{s.eyebrow}</div>
              <h3 style={{ fontSize:"clamp(24px, 3vw, 38px)", fontWeight:900, textTransform:"uppercase", color:"white", lineHeight:1.05, marginBottom:28, letterSpacing:"-0.01em" }}>{s.headline}</h3>
              {s.items.map(item => (
                <div key={item} className="check-item">
                  <span style={{ color:"rgba(255,255,255,0.6)", fontSize:18, flexShrink:0 }}>→</span>
                  <span style={{ fontSize:16, fontWeight:600, color:"white", fontFamily:"'Barlow',sans-serif" }}>{item}</span>
                </div>
              ))}
              <button className={`cta-btn${s.key==="trade"?" cta-btn-orange":""}`} onClick={openForm}
                style={{ marginTop:28, background:"rgba(255,255,255,0.15)", color:"white", fontSize:16, padding:"14px 28px", border:"2px solid rgba(255,255,255,0.3)" }}>
                {s.cta} →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── Urgency / Final CTA ── */}
      <section style={{ maxWidth:680, margin:"0 auto", padding:"80px 32px", textAlign:"center" }}>
        <div style={{ fontSize:13, fontWeight:700, color: BLUE, letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:12 }}>{t.urgencyLabel}</div>
        <h2 style={{ fontSize:"clamp(32px, 5vw, 52px)", fontWeight:900, textTransform:"uppercase", letterSpacing:"-0.02em", lineHeight:1, marginBottom:20 }}>
          {t.urgencyH2Line1}<br/>{t.urgencyH2Line2}
        </h2>
        <p style={{ fontSize:17, color:"#5A6480", fontFamily:"'Barlow',sans-serif", lineHeight:1.7, marginBottom:36 }}>{t.urgencyPara}</p>
        <button className="cta-btn" onClick={openForm} style={{ background: BLUE, color:"white", fontSize:22, padding:"20px 48px" }}>
          {t.urgencyCta}
        </button>
        <div style={{ marginTop:14, fontSize:13, color:"#9AA3BB", fontFamily:"'Barlow',sans-serif" }}>{t.urgencySub}</div>
        <div style={{ marginTop:48, display:"flex", justifyContent:"center", gap:32, flexWrap:"wrap" }}>
          {t.urgencyTags.map(tag => (
            <span key={tag} style={{ fontSize:14, fontWeight:700, color:"#9AA3BB", letterSpacing:"0.04em" }}>{tag}</span>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: DARK, padding:"40px 32px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:20 }}>
          <TradeLinkLogo size="sm" />
          <div style={{ fontSize:13, color:"#5A6480", fontFamily:"'Barlow',sans-serif" }}>{t.footerMeta}</div>
          <button className="cta-btn" onClick={openForm} style={{ background: BLUE, color:"white", fontSize:14, padding:"10px 22px" }}>
            {t.footerCta}
          </button>
        </div>
      </footer>

      {/* ── Waitlist Modal ── */}
      {formOpen && (
        <div onClick={(e) => { if (e.target===e.currentTarget) closeForm(); }}
          style={{
            position:"fixed", inset:0, zIndex:1000,
            background:"rgba(26,18,8,0.75)", backdropFilter:"blur(4px)",
            display:"flex", alignItems:"center", justifyContent:"center", padding:20,
          }}>
          <div style={{
            background:BG, borderRadius:10, width:"100%", maxWidth:480,
            maxHeight:"90vh", overflowY:"auto",
            animation:"modalIn .25s ease both",
            boxShadow:"0 24px 64px rgba(26,79,191,.3)",
          }}>
            {/* Header */}
            <div style={{ background: DARK, padding:"24px 28px", borderRadius:"10px 10px 0 0", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
              <div>
                <div style={{ marginBottom:6 }}><TradeLinkLogo size="sm" /></div>
                <div style={{ fontSize:13, color:"#9AA3BB", fontFamily:"'Barlow',sans-serif" }}>{t.modalSub}</div>
              </div>
              <button onClick={closeForm} style={{ background:"none", border:"none", color:"#9AA3BB", fontSize:24, cursor:"pointer", lineHeight:1, padding:"4px 8px" }}>✕</button>
            </div>

            {formState === "success" ? (
              <div style={{ padding:"52px 28px", textAlign:"center" }}>
                <div style={{ fontSize:52, marginBottom:16 }}>✅</div>
                <div style={{ fontSize:28, fontWeight:900, textTransform:"uppercase", letterSpacing:"0.02em", marginBottom:12 }}>{t.successTitle}</div>
                <div style={{ fontSize:15, color:"#5A6480", fontFamily:"'Barlow',sans-serif", lineHeight:1.6 }}>{t.successBody}</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ padding:28 }}>
                <div style={{ display:"grid", gap:18 }}>

                  {/* Role */}
                  <div>
                    <label style={labelStyle}>{t.formRoleLabel}</label>
                    <div style={{ display:"flex", gap:10 }}>
                      {t.formRoles.map(opt => (
                        <label key={opt.value} style={{ flex:1, display:"block" }}>
                          <input type="radio" name="role" value={opt.value}
                            checked={formData.role===opt.value} onChange={handleChange}
                            required style={{ display:"none" }}/>
                          <span style={{
                            display:"block", padding:"14px 10px",
                            border:`2px solid ${formData.role===opt.value ? BLUE : "#D4D9E8"}`,
                            borderRadius:4, cursor:"pointer", textAlign:"center",
                            fontWeight:700, fontSize:13, letterSpacing:"0.06em", textTransform:"uppercase",
                            color: formData.role===opt.value ? BLUE : "#6B7A99",
                            background: formData.role===opt.value ? "#EEF2FC" : "transparent",
                            transition:"all .15s ease",
                          }}>{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Trade type */}
                  {formData.role==="trade" && (
                    <div>
                      <label style={labelStyle}>{t.formTradeLabel}</label>
                      <select name="trade_type" value={formData.trade_type} onChange={handleChange}
                        required className="form-input" style={{ ...inputStyle, appearance:"none" }}>
                        <option value="">{t.formTradePlaceholder}</option>
                        {TRADES.en.map((tr, i) => <option key={tr} value={tr}>{trades[i]}</option>)}
                      </select>
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label style={labelStyle}>{t.formNameLabel}</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                      placeholder={t.formNamePlaceholder} required className="form-input" style={inputStyle}/>
                  </div>

                  {/* Email */}
                  <div>
                    <label style={labelStyle}>{t.formEmailLabel}</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                      placeholder={t.formEmailPlaceholder} required className="form-input" style={inputStyle}/>
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={labelStyle}>{t.formPhoneLabel} <span style={{ fontWeight:400, textTransform:"none", letterSpacing:0 }}>{t.formOptional}</span></label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      placeholder={t.formPhonePlaceholder} className="form-input" style={inputStyle}/>
                  </div>

                  {/* Company */}
                  <div>
                    <label style={labelStyle}>{t.formCompanyLabel} <span style={{ fontWeight:400, textTransform:"none", letterSpacing:0 }}>{t.formOptional}</span></label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange}
                      placeholder={t.formCompanyPlaceholder} className="form-input" style={inputStyle}/>
                  </div>

                  {formState==="error" && (
                    <div style={{ background:"#FFF0EE", border:"2px solid #E85C1A", borderRadius:4, padding:"12px 14px", fontSize:14, color:"#C0391A", fontFamily:"'Barlow',sans-serif" }}>
                      {t.formError}
                    </div>
                  )}

                  <button type="submit" disabled={formState==="submitting"} className="cta-btn"
                    style={{ background: BLUE, color:"white", fontSize:18, padding:16, width:"100%", opacity: formState==="submitting" ? 0.7 : 1 }}>
                    {formState==="submitting" ? t.formSubmitting : t.formSubmit}
                  </button>

                  <div style={{ textAlign:"center", fontSize:12, color:"#9AA3BB", fontFamily:"'Barlow',sans-serif" }}>
                    {t.formFooter}
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
