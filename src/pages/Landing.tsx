import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Users,
  Sparkles,
  Camera,
  MapPin,
  Search,
  Mail,
} from "lucide-react";

const LOGO_WORDMARK = "/brand/df-wordmark.png";
const LOGO_STAND = "/brand/df-stand.png";

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-xs font-semibold tracking-widest text-blue-300/80">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-balance text-3xl font-semibold text-white md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-pretty text-sm leading-6 text-white/70 md:text-base">
          {subtitle}
        </p>
      ) : null}
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
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
      <Icon className="h-3.5 w-3.5 text-blue-300" />
      {text}
    </span>
  );
}

function Card({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-blue-500/12 ring-1 ring-blue-400/15">
        <Icon className="h-5 w-5 text-blue-300" />
      </div>
      <div className="text-lg font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-6 text-white/70">{desc}</div>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#05070f] text-white">
      {/* Background: minimal */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[#05070f]" />
        <div className="absolute inset-0 opacity-[0.10] [background-image:radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.55),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(125,211,252,0.30),transparent_45%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.88)_78%)]" />
      </div>

      {/* Content wrapper */}
      <div className="relative">
        {/* NAV */}
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05070f]/70 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={LOGO_WORDMARK}
                alt="DashFind"
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
              <Link to="/account-deletion" className="hover:text-white">
                Account Deletion
              </Link>
            </nav>

            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-400"
            >
              Join waitlist <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </header>

        {/* HERO */}
        <main>
          <section className="mx-auto max-w-6xl px-4 pt-10 pb-14 md:px-6 md:pt-16 md:pb-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              {/* left */}
              <div>
                <div className="flex flex-wrap gap-2">
                  <Pill icon={Users} text="community-driven" />
                  <Pill icon={ShieldCheck} text="safer handoffs" />
                  <Pill icon={Sparkles} text="smart matching" />
                </div>

                <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] md:text-5xl md:leading-tight">
                  Find lost items
                  <span className="text-blue-300"> without the chaos</span>.
                </h1>

                <p className="mt-4 max-w-xl text-pretty text-sm leading-6 text-white/70 md:text-base">
                  DashFind helps communities recover lost belongings after concerts,
                  in hostels, and on campuses. Post a lost or found item — we surface
                  likely matches so owners and finders can reconnect.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#waitlist"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-400"
                  >
                    Get early access <ArrowRight className="h-4 w-4" />
                  </a>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
                  >
                    Partner / pilots
                  </Link>
                </div>

                <div className="mt-4 text-xs text-white/55">
                  Minimal by design. Built for real-world events.
                </div>
              </div>

              {/* right */}
              <div className="relative mx-auto w-full max-w-[520px]">
                <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-white">
                        A simple flow that works
                      </div>
                      <div className="mt-2 text-sm text-white/70">
                        Report → match → verify → recover.
                      </div>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      pre-launch
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                      <div className="text-xs text-white/60">Best for</div>
                      <div className="mt-1 text-sm font-semibold text-white">
                        Campuses & events
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                      <div className="text-xs text-white/60">Focus</div>
                      <div className="mt-1 text-sm font-semibold text-white">
                        Trust + speed
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid place-items-center">
                    <img
                      src={LOGO_STAND}
                      alt="DashFind mascot"
                      className="w-full max-w-[280px] object-contain opacity-95"
                    />
                  </div>

                  <div className="mt-4 text-xs text-white/55">
                    Ownership verification before contact sharing reduces scams.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* HOW */}
          <section id="how" className="mx-auto max-w-6xl px-4 py-12 md:px-6">
            <SectionTitle
              eyebrow="HOW IT WORKS"
              title="Three steps. Done."
              subtitle="A lost & found system that doesn’t require endless scrolling or luck."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <Card
                icon={Camera}
                title="Post lost or found"
                desc="Add a photo and a short description. Location/time helps."
              />
              <Card
                icon={Sparkles}
                title="We suggest matches"
                desc="We compare descriptions + photos to surface likely matches."
              />
              <Card
                icon={ShieldCheck}
                title="Verify & recover"
                desc="Confirm key details before meeting or sharing contact."
              />
            </div>
          </section>

          {/* FEATURES */}
          <section
            id="features"
            className="border-t border-white/10 bg-black/20"
          >
            <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
              <SectionTitle
                eyebrow="FEATURES"
                title="Built for real places"
                subtitle="Concerts, hostels, college events — anywhere items get lost in a crowd."
              />

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <Card
                  icon={MapPin}
                  title="Location-aware feeds"
                  desc="Filter by venue/campus/area so you see the right posts quickly."
                />
                <Card
                  icon={Search}
                  title="Search that feels natural"
                  desc="Describe it normally — we handle synonyms and close matches."
                />
                <Card
                  icon={Users}
                  title="Community-driven"
                  desc="More users means better coverage and faster recoveries."
                />
                <Card
                  icon={ShieldCheck}
                  title="Trust-first design"
                  desc="Designed to reduce scams and false claims with verification prompts."
                />
              </div>
            </div>
          </section>

          {/* WAITLIST */}
          <section id="waitlist" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
            <SectionTitle
              eyebrow="PRE-LAUNCH"
              title="Join the waitlist"
              subtitle="Get early access updates and pilot invites. No spam."
            />

            <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 md:p-8">
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
                  className="rounded-2xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-400"
                  type="submit"
                >
                  Request access
                </button>
              </form>

              <div className="mt-4 text-xs text-white/55">
                No selling your email. Just launch updates.
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="border-t border-white/10 bg-black/30">
            <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={LOGO_WORDMARK}
                    alt="DashFind"
                    className="h-8 object-contain"
                  />
                  <div className="text-sm text-white/60">
                    Community-driven lost &amp; found.
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-white/70">
                  <Link className="hover:text-white" to="/privacy">
                    Privacy Policy
                  </Link>
                  <Link className="hover:text-white" to="/account-deletion">
                    Account Deletion
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
