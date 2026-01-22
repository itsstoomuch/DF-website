import React from "react";
import { Link } from "react-router-dom";
import { Trash2, ShieldCheck, Clock, Database } from "lucide-react";

export default function AccountDeletion() {
  return (
    <div className="min-h-screen bg-[#05070f] text-white relative overflow-hidden">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.55),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(125,211,252,0.35),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto max-w-4xl px-4 py-10 md:py-14">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-semibold tracking-widest text-blue-300/80">
              ACCOUNT DELETION
            </div>
            <h1 className="mt-3 text-balance text-3xl font-semibold md:text-4xl">
              Delete your DashFind account
            </h1>
            <p className="mt-3 text-sm leading-6 text-white/70 md:text-base">
              This page explains how to request deletion of your DashFind account and associated data.
              (Required for Google Play listing.)
            </p>
          </div>

          <Link
            to="/privacy"
            className="hidden sm:inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10"
          >
            <ShieldCheck className="h-4 w-4 text-blue-300" />
            Privacy Policy
          </Link>
        </div>

        {/* Steps */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 md:p-8">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-500/12 ring-1 ring-blue-400/15">
              <Trash2 className="h-5 w-5 text-blue-300" />
            </div>
            <div>
              <div className="text-lg font-semibold">How to request deletion</div>
              <div className="text-sm text-white/60">Choose any one method below.</div>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-sm leading-6 text-white/75">
            <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
              <div className="font-semibold text-white">Method A — In-app (recommended)</div>
              <ol className="mt-2 list-decimal pl-5 space-y-1 text-white/75">
                <li>Open DashFind</li>
                <li>Go to <span className="text-white/90 font-medium">Settings</span></li>
                <li>Select <span className="text-white/90 font-medium">Account</span> → <span className="text-white/90 font-medium">Delete Account</span></li>
                <li>Confirm deletion</li>
              </ol>
              <div className="mt-2 text-xs text-white/55">
                If you don’t see this option yet, use Method B.
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
              <div className="font-semibold text-white">Method B — Email request</div>
              <p className="mt-2 text-white/75">
                Email us from the address linked to your DashFind account:
              </p>

              <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="text-white/80">
                  <span className="text-white/60">Email:</span>{" "}
                  <span className="font-semibold">support@dashfind.ai</span>
                </div>
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-400"
                  href="mailto:support@dashfind.ai?subject=Account%20Deletion%20Request%20-%20DashFind&body=Hello%20DashFind%20Support%2C%0A%0AI%20want%20to%20delete%20my%20DashFind%20account.%0A%0AAccount%20email%3A%20%3Cyour%20email%3E%0AReason%20(optional)%3A%20%3C...%3E%0A%0AThank%20you."
                >
                  Send email
                </a>
              </div>

              <p className="mt-3 text-xs text-white/55">
                Include your account email. We may ask for verification to prevent abuse.
              </p>
            </div>
          </div>
        </div>

        {/* Data handling */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-500/12 ring-1 ring-blue-400/15">
                <Database className="h-5 w-5 text-blue-300" />
              </div>
              <div className="text-base font-semibold">What gets deleted</div>
            </div>
            <ul className="mt-4 list-disc pl-5 text-sm leading-6 text-white/75 space-y-1">
              <li>Account profile information</li>
              <li>Login identifiers associated with your account</li>
              <li>Your posted lost/found reports (unless retention is required below)</li>
              <li>App-related preferences tied to your account</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-500/12 ring-1 ring-blue-400/15">
                <Clock className="h-5 w-5 text-blue-300" />
              </div>
              <div className="text-base font-semibold">Retention & exceptions</div>
            </div>
            <ul className="mt-4 list-disc pl-5 text-sm leading-6 text-white/75 space-y-1">
              <li>
                Some data may be retained if required for fraud prevention, legal compliance, or dispute resolution.
              </li>
              <li>
                Backups may persist for a limited period before being fully purged.
              </li>
              <li>
                If content was reported/flagged, minimal logs may be kept for security.
              </li>
            </ul>
            <p className="mt-3 text-xs text-white/55">
              For details, see the <Link className="text-blue-300 hover:text-blue-200" to="/privacy">Privacy Policy</Link>.
            </p>
          </div>
        </div>

        <div className="mt-8 text-xs text-white/50">
          © {new Date().getFullYear()} Syneidisi Tech Private Limited. All rights reserved.
        </div>
      </div>
    </div>
  );
}
