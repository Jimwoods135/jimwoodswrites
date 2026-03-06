import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Jim Woods — Book Publishing Consultant",
  description:
    "Book a free discovery call with Jim Woods or send him a message. Based in Cuyahoga Falls, Ohio — serving authors locally and nationwide.",
};

// TODO: Replace with real URLs and email
const TIDYCAL_URL = "https://tidycal.com/jimwoods";
const EMAIL = "jim@jimwoodswrites.com"; // TODO: Confirm real email address

const serif = { fontFamily: "var(--font-dm-serif), Georgia, serif" };

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-20"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #142040 0%, #050D18 65%)" }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Contact</p>
          <h1 className="text-5xl text-white" style={serif}>Let&apos;s Talk</h1>
          <p className="mt-5 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Ready to write your book? Have a question about Jim&apos;s services? Reach out — he&apos;d
            love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Book a Call */}
            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 flex flex-col">
              <div className="text-3xl mb-4">📅</div>
              <h2 className="text-2xl text-white mb-3" style={serif}>Book a Free Call</h2>
              <p className="text-slate-400 leading-relaxed mb-6 flex-1">
                The best way to start. Book a free 30-minute discovery call via TidyCal — no
                pressure, no pitch. Just a real conversation about your book project and what
                kind of support makes sense for you.
              </p>
              <a
                href={TIDYCAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-medium text-white hover:bg-accent-dark transition-colors"
              >
                Book on TidyCal
              </a>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-navy-700/60 bg-navy-800 p-8 flex flex-col">
              <div className="text-3xl mb-4">✉️</div>
              <h2 className="text-2xl text-white mb-3" style={serif}>Send an Email</h2>
              <p className="text-slate-400 leading-relaxed mb-6 flex-1">
                Prefer to send a message first? Reach out directly by email. Jim reads every
                message and responds personally. Ideal for specific questions, project
                inquiries, or if you want to share a bit about what you&apos;re working on before
                booking a call.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center rounded-md border border-slate-600 px-6 py-3 text-base font-medium text-slate-200 hover:border-accent hover:text-accent transition-colors"
              >
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Location note */}
          <div className="mt-12 rounded-xl border border-navy-700/60 bg-navy-900 p-6 flex flex-col sm:flex-row gap-4 items-start">
            <div className="text-2xl">📍</div>
            <div>
              <p className="text-white font-medium">Cuyahoga Falls, Ohio</p>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                Jim is based in Cuyahoga Falls and serves clients locally in the Summit County /
                Greater Akron area as well as authors nationwide. All consulting and coaching
                sessions are available remotely via video call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-6">FAQ</p>
          <h2 className="text-3xl text-white mb-10" style={serif}>Common Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What kinds of books do you work on?",
                a: "Primarily non-fiction — business, self-help, and memoir with application. Jim also consults on fiction projects. If you have a manuscript or idea and you're serious about publishing it, reach out.",
              },
              {
                q: "Do you work with first-time authors?",
                a: "Absolutely. Most of Jim's clients are writing their first book. The services are designed to guide you through the process whether you've never written a chapter or you have a draft that needs help.",
              },
              {
                q: "Do you offer in-person sessions?",
                a: "Jim is based in Cuyahoga Falls, Ohio and is open to in-person sessions for local clients in the greater Akron / Summit County area. All services are also available remotely.",
              },
              {
                q: "What's the best way to start?",
                a: "Book a free discovery call. It's 30 minutes, there's no obligation, and it gives both of us a chance to figure out if working together makes sense.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-navy-700/50 pb-6">
                <h3 className="text-white font-medium mb-2">{item.q}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
