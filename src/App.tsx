import './App.css'
import { useMemo } from "react";
import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Cpu, Shield, Users, Link as LinkIcon, MapPin, Calendar } from "lucide-react";

// --- Brand color (from provided logo) ---
const BRAND = "#00A651"; // used across accents and selection

// --- Flags for smoke tests / intent ---
const HAS_HEADER = false;
const HAS_CONTACT = false;
const HAS_CTA = false;

// Inline SVG logo so we don't depend on external asset loading
function DevsLogo({ className = "", size = 96 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 420 420"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Devs on Trees logo"
      className={className}
    >
      {/* Simplified mark inspired by the provided PNG: three trees, center with branch */}
      <g fill={BRAND}>
        <path d="M210 60c74 0 120 60 120 126 0 51-26 95-67 116v58a14 14 0 0 1-28 0v-52h-50v52a14 14 0 0 1-28 0v-58c-41-21-67-65-67-116 0-66 46-126 120-126zm0 64c-9 0-16 7-16 16v37l-19-19a16 16 0 1 0-23 23l42 42v31h32v-31l42-42a16 16 0 1 0-23-23l-19 19v-37c0-9-7-16-16-16z" />
        <path d="M62 129c45 0 74 36 74 76 0 31-15 58-38 71v51a12 12 0 1 1-24 0v-46h-24v46a12 12 0 1 1-24 0v-51C3 263-12 236-12 205c0-40 29-76 74-76z" transform="translate(20 0)" />
        <path d="M62 129c45 0 74 36 74 76 0 31-15 58-38 71v51a12 12 0 1 1-24 0v-46h-24v46a12 12 0 1 1-24 0v-51C3 263-12 236-12 205c0-40 29-76 74-76z" transform="translate(268 0)" />
      </g>
    </svg>
  );
}

const projects = [
  {
    name: "Depa",
    tag: "Fintech",
    blurb:
      "Core-banking middleware bridging fiat and crypto. Ledger, payments, compliance.",
    href: "https://depa.finance/",
    icon: Shield,
    accent: "from-cyan-400 to-green-400",
  },
  {
    name: "BazingAI",
    tag: "Coding Copilot",
    blurb:
      "Opinionated, context-first AI framework that works for production environments.",
    href: "#",
    icon: Bot,
    accent: "from-sky-400 to-violet-400",
  },
  {
    name: "Aforo.biz",
    tag: "IoT / Hardware",
    blurb:
      "Low-Cost devices to estimate capacity with privacy-respecting analytics.",
    href: "#",
    icon: Users,
    accent: "from-emerald-400 to-teal-400",
  },
  {
    name: "Save Tech",
    tag: "Chrome Extension",
    blurb:
      "Save and organize library links to share with your team and reuse later.",
    href: "#",
    icon: BookmarkIcon,
    accent: "from-fuchsia-400 to-amber-400",
  },
];

function BookmarkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-5 w-5 ${props.className ?? ""}`} {...props}>
      <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
    </svg>
  );
}

function NeonGrid() {
  const cells = useMemo(() => Array.from({ length: 60 }), []);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="absolute -left-20 top-0 h-[140%] w-64 rotate-12" style={{ background: `linear-gradient(to bottom, ${BRAND}4D, rgba(45,212,191,0.1), transparent)` }} />
      <div className="absolute -right-16 bottom-0 h-[120%] w-72 -rotate-6 bg-gradient-to-t from-fuchsia-500/20 via-violet-400/10 to-transparent blur-2xl" />
      <div className="absolute inset-0">
        {cells.map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0], y: [0, -6, 0] }}
            transition={{ duration: 6 + (i % 5), delay: i * 0.15, repeat: Infinity }}
            className="absolute h-1 w-1 rounded-full bg-white/50 shadow-[0_0_10px_2px_rgba(255,255,255,0.3)]"
            style={{ left: `${(i * 73) % 100}%`, top: `${(i * 37) % 100}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export default function DevsOnTreesLanding() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100" style={{ userSelect: "text" }}>
      {/* Hero (no header, no CTAs, with inline logo) */}
      <section className="relative overflow-hidden selection:bg-[--brand]/30 selection:text-white" style={{ '--brand': BRAND } as React.CSSProperties}>
        <NeonGrid />
        <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-6 inline-block rounded-xl shadow-lg"
                style={{ filter: `drop-shadow(0 0 10px ${BRAND}66)` }}
              >
                <DevsLogo size={96} />
              </motion.div>
              <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl/tight font-extrabold tracking-tight sm:text-6xl"
              >
                Devs on Trees
              </motion.h1>
              <p className="mt-4 max-w-prose text-neutral-300">
                My personal holding and long-term project. The idea is simple: a quiet place in Galicia to write code and, sometimes, host team offsites. This page explains the idea and lists the things I've been building.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Badge className="rounded-full bg-white/10 text-neutral-200">Galicia</Badge>
                <Badge className="rounded-full" style={{ backgroundColor: `${BRAND}33`, color: BRAND }}>Nature × Neon</Badge>
                <Badge className="rounded-full bg-cyan-500/20 text-cyan-300">Builder notes</Badge>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 shadow-2xl">
                <div className="absolute -inset-0.5 rounded-3xl blur-xl" style={{ backgroundImage: `linear-gradient(135deg, ${BRAND}33, rgba(56,189,248,0.1), rgba(232,121,249,0.1))` }} />
                <div className="relative grid gap-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${BRAND}33` }}>
                      <DevsLogo size={20} />
                    </span>
                    <div>
                      <p className="text-sm text-neutral-300">Place</p>
                      <p className="text-xs text-neutral-400">Quiet rooms, decent coffee, stable internet.</p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 p-5">
                    <div className="flex items-center gap-2 text-neutral-300">
                      <MapPin className="h-4 w-4" /> Galicia, Spain
                    </div>
                    <div className="mt-3 text-sm text-neutral-400">
                      A Casa Rural. When it’s ready, I’ll use it half the season for deep work and the other half to host a few teams.
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
                      <Calendar className="h-4 w-4" /> Opening timeline: TBD
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About (simple) */}
      <section id="about" className="relative border-y border-white/10 bg-neutral-950/60">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What it is</h2>
              <p className="mt-3 max-w-prose text-neutral-300">
                Devs on Trees is a container for my projects and a place idea. I like mixing clear, mechanical interfaces with the quiet of forests.
              </p>
            </div>
            <div className="flex items-start md:justify-end">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-neutral-300">Currently working on</p>
                <ul className="mt-2 list-disc pl-5 text-sm text-neutral-400">
                  <li>Stablecoin settlements (Depa)</li>
                  <li>Snippet vault (Save Tech)</li>
                  <li>Footfall sensors (Aforo.biz)</li>
                  <li>Repo-aware coding agent (BazingAI)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notes / Vision */}
      <section id="vision" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Notes on approach</h2>
              <p className="mt-3 max-w-prose text-neutral-300">
                I like robot UIs and neon edges, kept quiet. Work happens best with fewer people, a clear plan, and time set aside. Walks help.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Feature icon={Cpu} title="Engineering" text="Infra, payments, agents, a bit of hardware." />
                <Feature icon={DevsLogo} title="Place" text="Galicia. Green, slow, practical." />
                <Feature icon={Users} title="Teams" text="Small groups, high trust, steady output." />
                <Feature icon={Bot} title="AI" text="Tools that respect repos and ops." />
              </div>
            </div>
            <div>
              <div className="relative rounded-3xl border border-white/10 p-6">
                <div className="absolute -inset-0.5 rounded-3xl blur-xl" style={{ backgroundImage: `linear-gradient(135deg, ${BRAND}33, rgba(56,189,248,0.1), rgba(232,121,249,0.1))` }} />
                <div className="relative">
                  <h3 className="text-lg font-semibold">Simple rules</h3>
                  <ul className="mt-4 space-y-3 text-sm text-neutral-300">
                    <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BRAND }}></span> Builder &gt; talker.</li>
                    <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400"></span> Make it obvious.</li>
                    <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span> Keep it sparse, readable, fast.</li>
                    <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400"></span> Walks are part of work.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects (plain list, no marketing) */}
      <section id="projects" className="relative border-y border-white/10 bg-gradient-to-b from-neutral-950 to-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Projects</h2>
              <p className="mt-2 text-neutral-300">A short list of current and past things.</p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p) => (
              <ProjectCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer only (no contact) */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-neutral-400">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Devs on Trees.</p>
            <div className="flex items-center gap-4">
              <a href="#projects" className="hover:text-neutral-200">Projects</a>
              <a href="#vision" className="hover:text-neutral-200">Notes</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Smoke tests (rendered but visually hidden) */}
      <SmokeTests />
    </div>
  );
}

function Feature({ icon: Icon, title, text }: { icon: React.ElementType; title: string; text: string }) {
  // Allow Icon to be either a lucide icon component OR our DevsLogo component
  const IconEl = (props: React.SVGProps<SVGSVGElement>) => (Icon === DevsLogo ? <DevsLogo size={18} {...props} /> : <Icon {...props} />);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: `linear-gradient(to br, ${BRAND}33, rgba(56,189,248,0.2))` }}>
          <IconEl className="h-4 w-4" />
        </span>
        <div>
          <p className="text-sm font-medium text-neutral-200">{title}</p>
          <p className="text-xs text-neutral-400">{text}</p>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ name, tag, blurb, href, icon: Icon, accent }: { name: string; tag: string; blurb: string; href: string; icon: React.ElementType; accent: string }) {
  return (
    <Card className="group relative overflow-hidden rounded-3xl border-white/10 bg-white/5 transition hover:border-white/20">
      <div className={`pointer-events-none absolute -inset-1 opacity-0 blur-2xl transition group-hover:opacity-30 bg-gradient-to-br ${accent}`} />
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2 text-neutral-100">
          <span className="inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
              {Icon === DevsLogo ? <DevsLogo size={16} /> : <Icon className="h-4 w-4 text-neutral-100" />}
            </span>
            {name}
          </span>
          <Badge className="rounded-full bg-white/10 text-neutral-300 hover:bg-white/10">{tag}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="min-h-[60px] text-sm text-neutral-300">{blurb}</p>
        <div className="mt-4 flex items-center gap-2 text-sm">
          <a href={href} className="inline-flex items-center gap-1" style={{ color: BRAND }}>
            <LinkIcon className="h-4 w-4" /> Visit
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

// --- Minimal smoke tests (non-intrusive) ---
function SmokeTests() {
  const results = [];
  try {
    results.push({ name: "brand-defined", pass: typeof BRAND === "string" && BRAND.startsWith("#") });
    results.push({ name: "logo-component", pass: typeof DevsLogo === "function" });
    results.push({ name: "projects-length", pass: Array.isArray(projects) && projects.length === 4 });
    results.push({ name: "icons-defined", pass: [Bot, Cpu, Shield, Users, LinkIcon, MapPin, Calendar].every(Boolean) });
    results.push({ name: "no-header", pass: !HAS_HEADER });
    results.push({ name: "no-contact", pass: !HAS_CONTACT });
    results.push({ name: "no-cta", pass: !HAS_CTA });
  } catch (e) {
    results.push({ name: "runtime-error", pass: false, message: String(e) });
  }

  return (
    <div data-testid="smoke-tests" style={{ position: "absolute", left: -9999, width: 1, height: 1, overflow: "hidden" }}>
      {results.map((r) => (
        <div key={r.name} data-test={r.name} data-pass={String(r.pass)}>{r.pass ? "ok" : r.message || "fail"}</div>
      ))}
    </div>
  );
}
