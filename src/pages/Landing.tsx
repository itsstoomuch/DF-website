import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Users,
  Camera,
  MapPin,
  Search,
  Zap,
  Mail,
  CheckCircle2,
} from "lucide-react";

const LOGO_WORDMARK = "/brand/df-wordmark.png";
const LOGO_STAND = "/brand/df-stand.png";
const LOGO_RUN = "/brand/df-run.png";

/** Desktop-only cursor spotlight (mobile gets none). */
function CursorSpotlight() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setActive(true);
    };
    const onLeave = () => setActive(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] hidden md:block">
      <div
        className="absolute h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-opacity duration-300"
        style={{
          left: pos.x,
          top: pos.y,
          opacity: active ? 0.32 : 0,
          background:
            "radial-gradient(circle at center, rgba(59,130,246,0.36), transparent 62%)",
        }}
      />
      <div
        className="absolute h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl transition-opacity duration-300"
        style={{
          left: pos.x,
          top: pos.y,
          opacity: active ? 0.22 : 0,
          background:
            "radial-gradient(circle at center, rgba(125,211,252,0.26), transparent 64%)",
        }}
      />
    </div>
  );
}

/**
 * Backdrop tuned:
 * - Mobile: lighter/faster (no heavy animated blobs)
 * - Desktop: full animated glows + beams
 */
function Backdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#05070f]" />

      {/* Desktop-only heavy blobs */}
      <motion.div
        className="hidden md:block absolute -top-52 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-blue-500/16 blur-3xl"
        animate={{ opacity: [0.16, 0.3, 0.16], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden md:block absolute top-24 -left-56 h-[660px] w-[660px] rounded-full bg-sky-400/10 blur-3xl"
        animate={{ opacity: [0.1, 0.22, 0.1], scale: [1, 1.03, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden md:block absolute -bottom-64 right-[-180px] h-[740px] w-[740px] rounded-full bg-indigo-500/10 blur-3xl"
        animate={{ opacity: [0.09, 0.2, 0.09], scale: [1, 1.04, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Mobile-friendly static glow */}
      <div className="md:hidden absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/12 blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:64px_64px]" />

      {/* Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(59,130,246,0.22),transparent_55%)]" />

      {/* Desktop-only moving beam */}
      <motion.div
        className="hidden md:block absolute inset-0 opacity-[0.14] [background:linear-gradient(115deg,transparent_30%,rgba(59,130,246,0.45)_48%,transparent_66%)]"
        animate={{ x: ["-22%", "22%", "-22%"] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.88)_76%)]" />

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22400%22 height=%22400%22 filter=%22url(%23n)%22 opacity=%220.45%22/%3E%3C/svg%3E')]" />
    </div>
  );
}

function Pill({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75 backdrop-blur">
      <Icon className="h-3.5 w-3.5 text-blue-300" />
      {text}
    </span>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-transform hover:-translate-y-[2px]">
      <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-blue-500/12 ring-1 ring-blue-400/15">
        <Icon className="h-5 w-5 text-blue-300" />
      </div>
      <div className="text-lg font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-6 text-white/70">{desc}</div>
    </div>
  );
}

/** Shimmer block (skeleton tile) */
function ShimmerBlock({
  className = "",
  delayMs = 0,
}: {
  className?: string;
  delayMs?: number;
}) {
  return (
    <div
      className={
        "relative overflow-hidden rounded-xl border border-white/10 bg-white/5 " +
        className
      }
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.18),transparent_55%)]" />
      <div
        className="absolute inset-0 opacity-70 motion-safe:animate-[df_shimmer_1.8s_ease-in-out_infinite] [background:linear-gradient(110deg,transparent,rgba(255,255,255,0.07),transparent)]"
        style={{ animationDelay: `${delayMs}ms` }}
      />
    </div>
  );
}

function AiMatchPanel() {
  const delays = useMemo(
    () => Array.from({ length: 6 }).map((_, i) => i * 120),
    []
  );

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-4 sm:p-5 backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-500/15 ring-1 ring-blue-400/20">
            <Sparkles className="h-5 w-5 text-blue-300" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">AI Match</div>
            <div className="text-xs text-white/60">
              Comparing photos + descriptions…
            </div>
          </div>
        </div>

        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          <Zap className="h-3.5 w-3.5 text-blue-300" />
          real-time
        </span>
      </div>

      <div className="relative mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
        {/* Mobile tweak: 2 cols on phones, 3 on sm+ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-3">
          {delays.map((d, i) => (
            <ShimmerBlock key={i} delayMs={d} className="aspect-square" />
          ))}
        </div>

        {/* scan */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-blue-500/0 via-blue-400/25 to-blue-500/0 blur-sm motion-safe:block"
          animate={{ y: ["-35%", "160%"] }}
          transition={{ duration: 2.35, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-white/65">
        <span className="truncate">
          Top match:{" "}
          <span className="text-white/85">“Black purse • main stage”</span>
        </span>
        <span className="text-blue-300/80">92% confident</span>
      </div>

      {/* Desktop-only match ping badge (keeps mobile clean) */}
      <motion.div
        className="pointer-events-none absolute right-4 top-[104px] hidden md:block"
        initial={{ opacity: 0, scale: 0.92, y: 6 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="relative rounded-2xl border border-white/10 bg-black/55 p-3 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-blue-500/15 blur-md" />
              <img
                src={LOGO_RUN}
                alt="Match found"
                className="relative h-10 w-10 object-contain opacity-90"
              />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Match ping</div>
              <div className="text-[11px] text-white/60">
                Candidate found nearby
              </div>
            </div>
            <CheckCircle2 className="ml-2 h-4 w-4 text-blue-300" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
function MobileAccordion({
  items,
}: {
  items: { title: string; desc: string; icon?: React.ReactNode }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="md:hidden space-y-3">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        return (
          <button
            key={idx}
            type="button"
            onClick={() => setOpen(isOpen ? null : idx)}
            className="w-full text-left rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {it.icon ? (
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-blue-500/12 ring-1 ring-blue-400/15">
                    {it.icon}
                  </div>
                ) : null}
                <div className="text-sm font-semibold text-white">{it.title}</div>
              </div>

              <div className="text-white/50 text-lg leading-none">
                {isOpen ? "–" : "+"}
              </div>
            </div>

            {isOpen ? (
              <div className="mt-2 text-sm leading-6 text-white/70">
                {it.desc}
              </div>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}


export default function Landing() {
  return (
    // Mobile tweak: prevent sideways scroll from glows
    <div className="min-h-screen text-white overflow-x-hidden">
      <CursorSpotlight />

      <div className="relative">
        <Backdrop />

        {/* NAV */}
        <header className="relative z-10">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 md:py-5">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={LOGO_WORDMARK}
                alt="DashFind.ai"
                className="h-8 sm:h-9 object-contain"
              />
            </Link>

            <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
              <a href="#how" className="hover:text-white">
                How it works
              </a>
              <a href="#features" className="hover:text-white">
                Features
              </a>
              <a href="#waitlist" className="hover:text-white">
                Waitlist
              </a>
              <Link to="/privacy" className="hover:text-white">
                Privacy
              </Link>
            </nav>

            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-400 hover:-translate-y-[1px] transition-transform"
            >
              Join waitlist <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </header>

        {/* HERO */}
        <main className="relative z-10">
          {/* Mobile tweak: tighter spacing; desktop unchanged */}
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 px-4 pb-12 pt-8 md:grid-cols-2 md:gap-10 md:px-6 md:pb-20 md:pt-14">
            {/* left */}
            <div>
              <div className="flex flex-wrap gap-2">
                <Pill icon={Users} text="community-powered" />
                <Pill icon={ShieldCheck} text="privacy-first" />
                <Pill icon={Sparkles} text="AI matching" />
              </div>

              {/* Mobile tweak: better phone headline size; desktop stays same */}
              <h1 className="mt-6 text-balance text-[34px] leading-[1.08] font-semibold sm:text-4xl md:text-5xl md:leading-tight">
                Lost items. <span className="text-blue-300">Found faster</span>.
                <br className="hidden md:block" />
                Powered by people.{" "}
                <span className="text-blue-300">Matched by AI</span>.
              </h1>

              <p className="mt-4 max-w-xl text-pretty text-sm leading-6 text-white/70 md:text-base">
                DashFind is a community-driven lost &amp; found where AI compares
                photos, descriptions, and locations—so owners and finders connect
                with less chaos.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#waitlist"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-400 hover:-translate-y-[1px] transition-transform"
                >
                  Get early access <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 hover:-translate-y-[1px] transition-transform"
                >
                  Partner / pilots
                </Link>
              </div>

              <div className="mt-6 md:mt-7">
                <AiMatchPanel />
              </div>

              <div className="mt-3 text-xs text-white/55">
                Pre-launch: features shown are prototypes. Shipping in phases.
              </div>
            </div>

            {/* right */}
            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="absolute -inset-10 -z-10 rounded-[48px] bg-blue-500/12 blur-2xl" />

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="relative overflow-hidden rounded-[44px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 sm:p-6 shadow-[0_20px_80px_-30px_rgba(59,130,246,0.55)]"
              >
                <div className="rounded-[34px] border border-white/10 bg-black/55 p-4 sm:p-6">
                  <div className="text-sm font-semibold text-white">
                    A safer way to reconnect items
                  </div>
                  <div className="mt-2 text-sm text-white/70">
                    Verify ownership details before sharing contact. Designed to
                    reduce scams.
                  </div>

                  <motion.div
                    className="mt-5 sm:mt-6 flex items-center justify-center"
                    animate={{ y: [0, -7, 0] }}
                    transition={{
                      duration: 4.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <img
                      src={LOGO_STAND}
                      alt="DashFind mascot"
                      className="w-full max-w-[320px] sm:max-w-[340px] object-contain opacity-95"
                    />
                  </motion.div>

                  <div className="mt-5 sm:mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="text-xs text-white/60">Near you</div>
                      <div className="mt-1 text-sm font-semibold text-white">
                        Smart location filters
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="text-xs text-white/60">Confidence</div>
                      <div className="mt-1 text-sm font-semibold text-white">
                        Match scoring
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/18 blur-3xl" />
              </motion.div>
            </div>
          </div>

          {/* HOW */}
          <motion.section
  id="how"
  className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14"
  initial={{ opacity: 0, y: 18 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-120px" }}
  transition={{ duration: 0.55, ease: "easeOut" }}
>
  <div className="mx-auto mb-7 max-w-2xl text-center md:mb-10">
    <div className="mb-3 text-xs font-semibold tracking-widest text-blue-300/80">
      HOW IT WORKS
    </div>
    <h2 className="text-balance text-3xl font-semibold text-white md:text-4xl">
      Three steps. Less drama.
    </h2>
    <p className="mt-3 text-pretty text-sm leading-6 text-white/70 md:text-base">
      Post what you found or what you lost. DashFind suggests likely matches and keeps contact safer.
    </p>
  </div>

  {/* Mobile: compact accordion (short scroll) */}
  <MobileAccordion
    items={[
      {
        title: "Post a report",
        desc: "Add a photo, a simple description, and where it happened. Found or lost—both work.",
        icon: <Camera className="h-4 w-4 text-blue-300" />,
      },
      {
        title: "AI suggests matches",
        desc: "We compare images + text + time + location to surface likely matches (not noise).",
        icon: <Sparkles className="h-4 w-4 text-blue-300" />,
      },
      {
        title: "Verify & connect",
        desc: "Confirm ownership details before meeting or sharing contact details.",
        icon: <ShieldCheck className="h-4 w-4 text-blue-300" />,
      },
    ]}
  />

  {/* Desktop: keep your original cards */}
  <div className="hidden md:grid grid-cols-3 gap-5">
    <FeatureCard
      icon={Camera}
      title="Post a report"
      desc="Add a photo, a simple description, and where it happened. Found or lost—both work."
    />
    <FeatureCard
      icon={Sparkles}
      title="AI suggests matches"
      desc="We compare images + text + time + location to surface likely matches (not noise)."
    />
    <FeatureCard
      icon={ShieldCheck}
      title="Verify & connect"
      desc="Confirm ownership details before meeting or sharing contact details."
    />
  </div>
</motion.section>


          {/* FEATURES */}
          <motion.section
  id="features"
  className="border-t border-white/10 bg-black/20"
  initial={{ opacity: 0, y: 18 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-120px" }}
  transition={{ duration: 0.55, ease: "easeOut" }}
>
  <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
    <div className="mx-auto mb-7 max-w-2xl text-center md:mb-10">
      <div className="mb-3 text-xs font-semibold tracking-widest text-blue-300/80">
        FEATURES
      </div>
      <h2 className="text-balance text-3xl font-semibold text-white md:text-4xl">
        Built for events, campuses, and cities
      </h2>
      <p className="mt-3 text-pretty text-sm leading-6 text-white/70 md:text-base">
        A utility app should feel invisible—until you need it. Then it should feel like a superpower.
      </p>
    </div>

    {/* Mobile: accordion */}
    <MobileAccordion
      items={[
        {
          title: "Location-aware search",
          desc: "Filter by venue/campus/neighborhood. Find the right feed fast.",
          icon: <MapPin className="h-4 w-4 text-blue-300" />,
        },
        {
          title: "Smart descriptions",
          desc: "Describe it normally. We handle synonyms and “close enough” wording.",
          icon: <Search className="h-4 w-4 text-blue-300" />,
        },
        {
          title: "Trust-first flow",
          desc: "Designed to reduce scams and false claims before contact is shared.",
          icon: <ShieldCheck className="h-4 w-4 text-blue-300" />,
        },
        {
          title: "Community signals",
          desc: "Helpful users earn trust over time. Good people, rewarded.",
          icon: <Users className="h-4 w-4 text-blue-300" />,
        },
      ]}
    />

    {/* Desktop: keep your original grid */}
    <div className="hidden md:grid grid-cols-2 gap-5">
      <FeatureCard
        icon={MapPin}
        title="Location-aware search"
        desc="Filter by venue/campus/neighborhood. Find the right feed fast."
      />
      <FeatureCard
        icon={Search}
        title="Smart descriptions"
        desc="Describe it normally. We handle synonyms and “close enough” wording."
      />
      <FeatureCard
        icon={ShieldCheck}
        title="Trust-first flow"
        desc="Designed to reduce scams and false claims before contact is shared."
      />
      <FeatureCard
        icon={Users}
        title="Community signals"
        desc="Helpful users earn trust over time. Good people, rewarded."
      />
    </div>
  </div>
</motion.section>


          {/* WAITLIST */}
          <motion.section
            id="waitlist"
            className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="mx-auto mb-9 max-w-2xl text-center md:mb-10">
              <div className="mb-3 text-xs font-semibold tracking-widest text-blue-300/80">
                PRE-LAUNCH
              </div>
              <h2 className="text-balance text-3xl font-semibold text-white md:text-4xl">
                Join the waitlist
              </h2>
              <p className="mt-3 text-pretty text-sm leading-6 text-white/70 md:text-base">
                Early access, pilot invites, and first access to community
                features.
              </p>
            </div>

            <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 md:p-8">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-black/40 py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    placeholder="you@example.com"
                    type="email"
                    required
                  />
                </div>
                <button
                  className="rounded-2xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-400 hover:-translate-y-[1px] transition-transform"
                  type="submit"
                >
                  Request access
                </button>
              </form>

              <div className="mt-4 text-xs text-white/55">
                No spam. No selling your email. Just launch updates.
              </div>
            </div>
          </motion.section>

          {/* FOOTER */}
          <footer className="border-t border-white/10 bg-black/30">
            <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={LOGO_WORDMARK}
                    alt="DashFind.ai"
                    className="h-8 object-contain"
                  />
                  <div className="text-sm text-white/60">
                    Community + AI to reunite people with their stuff.
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-white/70">
                  <Link className="hover:text-white" to="/privacy">
                    Privacy Policy
                  </Link>
                  <Link className="hover:text-white" to="/help">
                    Help
                  </Link>
                  <Link className="hover:text-white" to="/contact">
                    Contact
                  </Link>
                </div>
              </div>

              <div className="mt-8 text-xs text-white/50">
                © {new Date().getFullYear()} Syneidisi Tech Private Limited. All
                rights reserved.
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
