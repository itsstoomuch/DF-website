import { Link } from "react-router-dom";

export default function Help() {
  return (
    <div className="min-h-screen bg-[#05070f] text-white">
      <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
        <Link to="/" className="text-sm text-white/70 hover:text-white">
          ← Back to home
        </Link>

        <h1 className="mt-6 text-3xl font-semibold">Help</h1>
        <p className="mt-2 text-white/70">
          DashFind is pre-launch. Here’s how it will work at launch.
        </p>

        <div className="mt-8 space-y-6 text-white/75">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="font-semibold text-white">How do I report an item?</div>
            <div className="mt-2 text-sm leading-6">
              Create a “Lost” or “Found” report with a photo, short description,
              and location.
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="font-semibold text-white">How do matches happen?</div>
            <div className="mt-2 text-sm leading-6">
              AI compares images + text + time + location to suggest likely
              matches with a confidence score.
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="font-semibold text-white">Is it safe?</div>
            <div className="mt-2 text-sm leading-6">
              DashFind is designed for verification before contact sharing.
              Always meet in public and confirm ownership details.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
