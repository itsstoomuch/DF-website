import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#05070f] text-white">
      <div className="mx-auto max-w-4xl px-4 py-10 md:px-6">
        <div className="mb-8 flex items-center justify-between">
          <Link to="/" className="text-sm text-white/70 hover:text-white">
            ← Back to home
          </Link>
          <Link to="/contact" className="text-sm text-blue-300 hover:text-white">
            Contact
          </Link>
        </div>

        <h1 className="text-3xl font-semibold">Privacy Policy for DashFind</h1>
        <p className="mt-2 text-sm text-white/60">
          Last Updated: January 15, 2026 • Developer: Syneidisi Tech Private
          Limited
        </p>

        <div className="mt-8 space-y-7 text-white/75">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">1. Introduction</h2>
            <p className="text-sm leading-6">
              Welcome to DashFind (“we,” “our,” or “us”). This Privacy Policy
              explains how Syneidisi Tech Private Limited collects, uses,
              discloses, and safeguards your information when you use the mobile
              application “DashFind” (the “App”).
            </p>
            <p className="text-sm leading-6">
              DashFind is an AI-powered Lost and Found platform. By using the
              App, you consent to the practices described in this policy.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">
              2. Information We Collect
            </h2>
            <div className="space-y-3 text-sm leading-6">
              <div>
                <div className="font-semibold text-white">A. Personal Data</div>
                <ul className="mt-1 list-disc pl-5">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Profile image</li>
                </ul>
              </div>

              <div>
                <div className="font-semibold text-white">
                  B. Item Data (AI Processing)
                </div>
                <ul className="mt-1 list-disc pl-5">
                  <li>Images of lost or found items</li>
                  <li>Descriptions, categories, and tags</li>
                  <li>Time &amp; date of reports</li>
                </ul>
              </div>

              <div>
                <div className="font-semibold text-white">
                  C. Device &amp; Usage Data
                </div>
                <ul className="mt-1 list-disc pl-5">
                  <li>Device model/manufacturer</li>
                  <li>Operating system version</li>
                  <li>IP address</li>
                  <li>App usage logs and crash reports</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">
              3. Permissions and Sensitive Data
            </h2>
            <div className="space-y-3 text-sm leading-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="font-semibold text-white">Camera</div>
                <div>
                  Used to capture item photos in-app. Images may be analyzed by
                  our AI to compute similarity matches.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="font-semibold text-white">
                  Location (Coarse &amp; Fine)
                </div>
                <div>
                  Used to geotag reports and power nearby search. We do not track
                  location in the background unless explicitly enabled.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="font-semibold text-white">Storage</div>
                <div>
                  Used only to upload images you select and optionally save
                  reports. We do not scan your entire library.
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">
              4. How We Use Your Information
            </h2>
            <ul className="list-disc space-y-1 pl-5 text-sm leading-6">
              <li>AI matching and similarity scoring</li>
              <li>Facilitating return via in-app messaging / consent sharing</li>
              <li>Verification and fraud prevention</li>
              <li>Service improvement (including improving AI accuracy)</li>
              <li>Notifications when potential matches are found</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">
              5. Data Sharing and Disclosure
            </h2>
            <p className="text-sm leading-6">We do not sell your personal data.</p>
            <ul className="list-disc space-y-1 pl-5 text-sm leading-6">
              <li>
                Other users (only after confirmation and based on your choices)
              </li>
              <li>Service providers (hosting, AI APIs, maps) under obligations</li>
              <li>Legal compliance</li>
              <li>Business transfers</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">6. Data Retention</h2>
            <ul className="list-disc space-y-1 pl-5 text-sm leading-6">
              <li>Personal data retained while your account is active</li>
              <li>Reports retained until marked resolved/returned</li>
              <li>
                Unresolved reports may be anonymized for historical analysis and
                AI training
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">
              7. Your Rights
            </h2>
            <p className="text-sm leading-6">
              Depending on your location, you may request access, correction,
              deletion, or withdraw permissions via device settings. Use the
              in-app delete option or contact us.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">8. Security</h2>
            <p className="text-sm leading-6">
              We use administrative, technical, and physical safeguards (such as
              HTTPS and secure storage). No system is perfectly secure.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">
              9. Children’s Privacy
            </h2>
            <p className="text-sm leading-6">
              DashFind is not intended for children under 13. We do not knowingly
              collect data from children under 13.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">10. Contact</h2>
            <p className="text-sm leading-6">
              <strong className="text-white">Syneidisi Tech Private Limited</strong>
              <br />
              Address: [Insert Physical Company Address Here]
              <br />
              Email: privacy@syneidisi.tech
              <br />
              Website: https://dashfinder.ai
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
