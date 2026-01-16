import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#05070f] text-white">
      <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
        <Link to="/" className="text-sm text-white/70 hover:text-white">
          ← Back to home
        </Link>

        <h1 className="mt-6 text-3xl font-semibold">Contact</h1>
        <p className="mt-2 text-white/70">
          For pilots, partnerships, or support.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <div className="text-sm text-white/70">Email</div>
          <div className="mt-1 text-lg font-semibold">hello@dashfinder.ai</div>

          <div className="mt-6 text-sm text-white/70">Privacy</div>
          <div className="mt-1 text-lg font-semibold">privacy@syneidisi.tech</div>

          <div className="mt-6 text-sm text-white/70">Company</div>
          <div className="mt-1 text-sm leading-6 text-white/75">
            Syneidisi Tech Private Limited
            <br />
            [Insert registered office address]
          </div>
        </div>
      </div>
    </div>
  );
}
