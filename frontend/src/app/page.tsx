"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  FileText,
  Download,
  Lock,
  Globe,
  Plus,
  Minus,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";

/* ─── DATA ─── */

const schemes = [
  {
    name: "PM KISAN",
    full: "Pradhan Mantri Kisan Samman Nidhi",
    amount: "₹6,000/yr",
    note: "Direct income support for cultivating farmers with land records.",
    status: "eligible",
  },
  {
    name: "AB PM-JAY",
    full: "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana",
    amount: "₹5,00,000/yr",
    note: "Cashless secondary and tertiary hospitalisation cover.",
    status: "eligible",
  },
  {
    name: "PM-SY",
    full: "Pradhan Mantri Shram Yogi Maandhan",
    amount: "₹1,26,000",
    note: "Provident provisions for pensioners in unorganised sector.",
    status: "near_miss",
  },
  {
    name: "NSP Post Matric",
    full: "National Scholarship Portal – Post Matric",
    amount: "₹18,000/yr",
    note: "Scholarships for higher education from minority communities.",
    status: "near_miss",
  },
];

const faqs = [
  {
    q: "Is Entitle affiliated with the Government?",
    a: "No. Entitle is a public-interest platform that reads eligibility rules as published in official scheme gazettes. All formal applications must be submitted via official government portals.",
  },
  {
    q: "What is Blockchain verification used for?",
    a: "Your eligibility assessment is cryptographically hashed and anchored to the public ledger. This establishes a timestamped proof that your assessment was carried out on that specific date.",
  },
  {
    q: "Are my documents safe with Entitle?",
    a: "No documents are processed directly on our servers by your claims for scheme mapping purposes. Decisions are made on verified summaries.",
  },
  {
    q: "How are the scheme criteria kept updated?",
    a: "We monitor the gazette and issue-stage scheme notifications daily. The determinations rules sets are updated as soon as a scheme's criteria change.",
  },
];

const trustPillars = [
  {
    icon: CheckCircle2,
    title: "Deterministic Matching",
    body: "No algorithm opinions or scores. Each eligibility decision is computed directly against published scheme rules.",
  },
  {
    icon: ShieldCheck,
    title: "Public Ledger Proof",
    body: "Your assessment is hashed and anchored on a public ledger. Documents are logged and anchored without server calls.",
  },
  {
    icon: FileText,
    title: "Plain Language Explanations",
    body: "We translate complex legal rules and administrative jargon into plain language insights.",
  },
  {
    icon: Lock,
    title: "Privacy First Infrastructure",
    body: "Your documents never leave your device. We process only cryptographic summaries using a zero-knowledge architecture.",
  },
];

const footerLinks = {
  Citizen: ["Eligibility Check", "Scheme Directory", "Document Wallet", "My Determination"],
  Transparency: ["Rule Engine Guide", "Open Data Access", "Ledger Explorer"],
  Platform: ["About Entitle", "How It Works", "Accessibility", "Privacy Policy"],
};

/* ─── HEADER (shared structure) ─── */
function SiteHeader({ ctaLabel = "Check Eligibility", ctaHref = "/assistant" }) {
  return (
    <>
      {/* Tricolor */}
      <div className="flex h-[5px] w-full">
        <div className="flex-1" style={{ background: "#FF9933" }} />
        <div className="flex-1" style={{ background: "#FFFFFF", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }} />
        <div className="flex-1" style={{ background: "#138808" }} />
      </div>

      {/* Utility bar */}
      <div className="text-[11.5px] font-medium py-2 px-6" style={{ background: "#1C1C1C", color: "#A0A0A0" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="#main" className="hover:text-white transition-colors">Skip to content</a>
            <span className="text-[#3A3A3A]">|</span>
            <span>A public-interest service. Not a Government of India portal.</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Helpline <strong className="text-white">1800-11-0001</strong></span>
            <span className="text-[#3A3A3A]">|</span>
            <div className="flex items-center gap-2">
              <button className="hover:text-white transition-colors text-xs">A-</button>
              <button className="text-white font-bold text-sm">A</button>
              <button className="hover:text-white transition-colors text-sm font-bold">A+</button>
            </div>
            <span className="text-[#3A3A3A]">|</span>
            <button className="hover:text-white transition-colors">English</button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4">
            <div className="w-11 h-11 border-2 flex items-center justify-center font-bold text-xl" style={{ borderColor: "#0B3CC8", color: "#0B3CC8", fontFamily: "var(--font-open-sans)" }}>
              E
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight" style={{ color: "#0B3CC8", fontFamily: "var(--font-open-sans)" }}>ENTITLE</div>
              <div className="text-[11px] text-[#64748B] mt-0.5 font-medium">Welfare Entitlement Assistance · Citizen Services</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {[
              ["Overview", "/", true],
              ["My determination", "/dashboard", false],
              ["Schemes directory", "#schemes", false],
              ["Documents", "/documents", false],
              ["Help", "#faq", false],
            ].map(([label, href, active]) => (
              <Link
                key={label as string}
                href={href as string}
                className={`relative px-4 py-4 text-sm font-medium transition-colors ${active ? "text-[#0B3CC8]" : "text-[#475569] hover:text-[#0B3CC8]"}`}
              >
                {label}
                {active && <span className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "#0B3CC8" }} />}
              </Link>
            ))}
          </nav>

          <Link href={ctaHref}>
            <button className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded transition-all hover:opacity-90" style={{ background: "#0B3CC8", color: "#fff" }}>
              {ctaLabel} <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </header>
    </>
  );
}

/* ─── PAGE ─── */
export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen" style={{ fontFamily: "var(--font-open-sans), sans-serif", background: "#F3F4F6" }}>
      <SiteHeader />

      {/* ── HERO ── */}
      <section id="main" className="relative py-20 md:py-28 px-6 overflow-hidden bg-[#0A1628]" style={{ backgroundImage: "linear-gradient(to bottom, rgba(10, 22, 40, 0.6), rgba(11, 60, 200, 0.8)), url('/hero-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>

        <div className="relative max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-[12px] font-semibold tracking-widest uppercase text-white/80 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#FF9933]" style={{ animation: "pulse 2s infinite" }} />
            Trusted Eligibility Gateway
          </div>

          <h1 className="text-[3rem] md:text-[4rem] font-bold leading-[1.08] mb-5 text-white" style={{ letterSpacing: "-0.035em" }}>
            Know Your Rights.<br />Claim Your Benefits.
          </h1>

          <p className="text-[1.05rem] text-white/65 mb-10 max-w-xl mx-auto leading-relaxed font-normal">
            An independent, blockchain-secured citizen platform designed to accurately map your profile to valid central and state welfare schemes in plain language.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <Link href="/assistant">
              <button className="flex items-center gap-2.5 font-semibold px-7 py-3.5 rounded text-sm transition-all hover:opacity-90 shadow-lg" style={{ background: "#0B3CC8", color: "#fff" }}>
                Check Your Eligibility <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <a href="#schemes">
              <button className="flex items-center gap-2.5 font-semibold px-7 py-3.5 rounded text-sm border border-white/25 text-white hover:bg-white/10 transition-all">
                Browse Directory <ExternalLink className="w-4 h-4" />
              </button>
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-3 text-white/50 text-[13px]">
            <div className="flex -space-x-2">
              {["#E8620A", "#0B3CC8", "#16A34A", "#7C3AED", "#0891B2"].map((c, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0D2150] flex items-center justify-center text-[10px] font-bold text-white" style={{ background: c, zIndex: 5 - i }}>
                  {["KD", "SR", "MP", "AP", "RK"][i]}
                </div>
              ))}
            </div>
            <span>Over <strong className="text-white">43,000+</strong> citizens verified their benefit this week.</span>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-center mb-4" style={{ color: "#E8620A" }}>
            The Three-Step Process
          </p>
          <h2 className="text-[1.9rem] font-bold text-[#0F172A] text-center mb-12" style={{ letterSpacing: "-0.025em" }}>
            How Entitle Secures Your Claims
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "01", icon: FileText, title: "Answer Quick Questions", body: "No interview needed. Enter simple details about your household, income and location." },
              { n: "02", icon: CheckCircle2, title: "Instant Scheme Match", body: "Our rule engine deterministically matches your profile against 106 published scheme criteria." },
              { n: "03", icon: Download, title: "Download Verified Certificate", body: "Receive a timestamped, blockchain-anchored certificate you can share with any government authority." },
            ].map(({ n, icon: Icon, title, body }) => (
              <div key={n} className="border border-[#E2E8F0] rounded-sm p-7 bg-white hover:border-[#0B3CC8]/40 hover:shadow-md transition-all duration-200">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-2xl font-bold" style={{ color: "#E8620A", letterSpacing: "-0.03em" }}>{n}</span>
                  <div className="w-9 h-9 rounded flex items-center justify-center mt-0.5" style={{ background: "#EEF3FF" }}>
                    <Icon className="w-5 h-5" style={{ color: "#0B3CC8" }} />
                  </div>
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2">{title}</h3>
                <p className="text-[13px] text-[#64748B] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHEMES DIRECTORY ── */}
      <section id="schemes" className="py-20 px-6" style={{ background: "#F3F4F6" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[11px] font-semibold tracking-widest uppercase mb-2" style={{ color: "#E8620A" }}>
                Entitle Welfare Directory
              </p>
              <h2 className="text-[1.9rem] font-bold text-[#0F172A]" style={{ letterSpacing: "-0.025em" }}>
                Assessed National Welfare Programs
              </h2>
            </div>
            <a href="#" className="text-sm font-semibold hover:underline hidden md:block" style={{ color: "#0B3CC8" }}>
              View all 106 schemes →
            </a>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-sm overflow-hidden">
            {schemes.map((s, i) => (
              <div key={s.name} className={`flex items-center gap-4 px-7 py-5 hover:bg-[#F8FAFC] transition-colors ${i > 0 ? "border-t border-[#E2E8F0]" : ""}`}>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-0.5">
                    <span className="font-bold text-[#0F172A] text-[15px]">{s.name}</span>
                    <span className="text-[11px] text-[#64748B] hidden md:block">— {s.full}</span>
                  </div>
                  <p className="text-[12.5px] text-[#64748B] truncate">{s.note}</p>
                </div>
                <div className="shrink-0 font-bold text-[#0F172A] text-[15px] w-32 text-right hidden md:block">
                  {s.amount}
                </div>
                <div className="shrink-0">
                  {s.status === "eligible" ? (
                    <Link href="/assistant">
                      <button className="text-xs font-semibold px-4 py-2 rounded-sm text-white transition-opacity hover:opacity-90" style={{ background: "#16A34A" }}>
                        Register
                      </button>
                    </Link>
                  ) : (
                    <button className="text-xs font-semibold px-4 py-2 rounded-sm border transition-colors" style={{ borderColor: "#D97706", color: "#92400E", background: "#FFFBEB" }}>
                      Near Miss
                    </button>
                  )}
                </div>
              </div>
            ))}

            <div className="px-7 py-4 border-t border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between">
              <p className="text-[12px] text-[#64748B]">Showing 4 of 106 schemes tracked</p>
              <a href="#" className="text-[12px] font-semibold hover:underline" style={{ color: "#0B3CC8" }}>View all 106 schemes →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST PILLARS ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-center mb-4" style={{ color: "#E8620A" }}>
            Core Principles
          </p>
          <h2 className="text-[1.9rem] font-bold text-[#0F172A] text-center mb-12" style={{ letterSpacing: "-0.025em" }}>
            Designed for Transparency and Trust
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {trustPillars.map(({ icon: Icon, title, body }) => (
              <div key={title} className="border border-[#E2E8F0] rounded-sm p-6 hover:border-[#0B3CC8]/30 hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded flex items-center justify-center mb-4" style={{ background: "#EEF3FF" }}>
                  <Icon className="w-5 h-5" style={{ color: "#0B3CC8" }} />
                </div>
                <h3 className="font-bold text-[#0F172A] text-sm mb-2">{title}</h3>
                <p className="text-[12px] text-[#64748B] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-20 px-6" style={{ background: "#0A1628" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 border border-white/15 bg-white/8 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-widest uppercase text-white/60 mb-8">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
              Verification Firsthand
            </div>
            <blockquote className="text-[1.15rem] font-normal text-white/80 leading-relaxed mb-8" style={{ fontStyle: "italic" }}>
              "We were struggling to verify our eligibility for post-matric scholarships for my daughter. Entitle showed us the exact certificate required. No middlemen, no bribes, straight and simple."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white" style={{ background: "#E8620A" }}>
                DK
              </div>
              <div>
                <div className="font-semibold text-white text-sm">Devendra Kulkarni</div>
                <div className="text-[12px] text-white/45">Parent &amp; Farmer · Wardha, Maharashtra</div>
              </div>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="w-full md:w-72 h-56 rounded-sm overflow-hidden border border-white/10 relative shrink-0" style={{ background: "#0D2150" }}>
            <div className="absolute inset-0 flex items-center justify-center text-white/20">
              <div className="text-center">
                <Globe className="w-14 h-14 mx-auto mb-2" strokeWidth={1} />
                <p className="text-xs">Citizen Story · Wardha</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-center mb-4" style={{ color: "#E8620A" }}>
            Platform Questions
          </p>
          <h2 className="text-[1.9rem] font-bold text-[#0F172A] text-center mb-12" style={{ letterSpacing: "-0.025em" }}>
            Frequently Asked Questions
          </h2>

          <div className="border-t border-[#E2E8F0]">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-[#E2E8F0]">
                <button
                  className="w-full flex items-center justify-between py-5 text-left gap-6 group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-[#0F172A] text-sm group-hover:text-[#0B3CC8] transition-colors">
                    {f.q}
                  </span>
                  {openFaq === i
                    ? <Minus className="w-4 h-4 shrink-0" style={{ color: "#0B3CC8" }} />
                    : <Plus className="w-4 h-4 shrink-0 text-[#64748B]" />
                  }
                </button>
                {openFaq === i && (
                  <div className="pb-5 text-[13px] text-[#64748B] leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-14 px-6" style={{ background: "#0A1628" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
            {/* Brand col */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 border-2 flex items-center justify-center font-bold text-base" style={{ borderColor: "#3B5BDB", color: "#7C9EFF", fontFamily: "var(--font-open-sans)" }}>E</div>
                <div>
                  <div className="font-bold text-white text-sm" style={{ fontFamily: "var(--font-open-sans)" }}>ENTITLE</div>
                  <div className="text-[10px] text-white/35 uppercase tracking-widest">Welfare Access Platform</div>
                </div>
              </div>
              <p className="text-[13px] text-white/35 leading-relaxed mb-5 max-w-xs">
                An independent, public-interest platform empowering citizens with rule-based eligibility knowledge and verifiable entitlement proofs.
              </p>
              <div className="flex flex-col gap-2 text-[13px] text-white/40">
                <a href="tel:18001100001" className="flex items-center gap-2 hover:text-white/70 transition-colors">
                  <Phone className="w-3.5 h-3.5" /> 1800-11-0001
                </a>
                <a href="mailto:support@entitle.in" className="flex items-center gap-2 hover:text-white/70 transition-colors">
                  <Mail className="w-3.5 h-3.5" /> support@entitle.in
                </a>
              </div>
            </div>

            {/* Link cols */}
            {Object.entries(footerLinks).map(([col, links]) => (
              <div key={col}>
                <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-5">{col}</h4>
                <ul className="space-y-3">
                  {links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-[13px] text-white/40 hover:text-white/80 transition-colors">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[12px] text-white/25">
              © 2026 Entitle Project — An independent welfare access initiative. Not affiliated with the Government of India.
            </p>
            <div className="flex items-center gap-5 text-[12px] text-white/30">
              {["National Portal", "RTI", "Accessibility", "Terms", "Privacy"].map((l) => (
                <a key={l} href="#" className="hover:text-white/60 transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
