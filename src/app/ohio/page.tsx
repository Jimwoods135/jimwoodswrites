import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema, personSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Book Publishing Consultant in Cuyahoga Falls, Ohio | Jim Woods",
  description:
    "Jim Woods is a book publishing consultant and author coach based in Cuyahoga Falls, Ohio. Serving authors in Akron, Summit County, and Northeast Ohio — in-person or remote.",
  keywords: [
    "book publishing consultant Cuyahoga Falls",
    "book coach Ohio",
    "book coach Akron",
    "self-publishing help Ohio",
    "book writing coach Summit County",
    "how to publish a book Ohio",
    "book coach near me",
    "author coach Northeast Ohio",
    "developmental editor Cuyahoga Falls",
    "self-publishing consultant Akron",
  ],
  alternates: { canonical: "https://jimwoodswrites.com/ohio" },
  openGraph: {
    title: "Book Publishing Consultant in Cuyahoga Falls, Ohio | Jim Woods",
    description:
      "Jim Woods is a book publishing consultant and author coach based in Cuyahoga Falls, Ohio. Serving authors in Akron, Summit County, and Northeast Ohio.",
    url: "https://jimwoodswrites.com/ohio",
    images: [{ url: "/headshot.jpg", width: 800, height: 1000, alt: "Jim Woods — Book Publishing Consultant in Cuyahoga Falls, Ohio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Publishing Consultant in Cuyahoga Falls, Ohio | Jim Woods",
    description:
      "Book coaching, developmental editing, and self-publishing services in Cuyahoga Falls & Northeast Ohio.",
    images: ["/headshot.jpg"],
  },
};

const TIDYCAL_URL = "https://tidycal.com/storybuilder/";
const EMAIL = "Jimwoodswrites@gmail.com";

const serif = { fontFamily: "var(--font-dm-serif), Georgia, serif" };

const services = [
  {
    icon: "✍️",
    title: "Book Coaching",
    desc: "1:1 guidance from first idea to finished manuscript — at whatever stage you're at.",
  },
  {
    icon: "📖",
    title: "Developmental Editing",
    desc: "Big-picture feedback on structure, argument, narrative flow, and reader experience.",
  },
  {
    icon: "📐",
    title: "Book Formatting",
    desc: "Print and digital formatting that meets publisher and retail standards.",
  },
  {
    icon: "🚀",
    title: "Self-Publishing Services",
    desc: "End-to-end help getting your book onto Amazon, Barnes & Noble, and beyond.",
  },
  {
    icon: "🗺️",
    title: "Book Consulting",
    desc: "Strategic direction on positioning, audience, and building your author platform.",
  },
];

const areas = [
  "Cuyahoga Falls",
  "Akron",
  "Hudson",
  "Stow",
  "Kent",
  "Tallmadge",
  "Barberton",
  "Munroe Falls",
  "Fairlawn",
  "Copley",
  "Norton",
  "Green",
  "Summit County",
  "Portage County",
  "Medina County",
  "Northeast Ohio",
];

const faqs = [
  {
    q: "Are you available for in-person meetings in Cuyahoga Falls?",
    a: "Yes — I'm based in Cuyahoga Falls and happy to meet in person with local clients. I work with authors throughout Summit County and the greater Akron area face-to-face, and I offer all services remotely as well.",
  },
  {
    q: "Do you work with authors in Akron and Summit County?",
    a: "Absolutely. I work with authors from Cuyahoga Falls, Akron, Hudson, Stow, Kent, and across Summit County — as well as clients across Ohio and nationwide via video call.",
  },
  {
    q: "What kind of books do local clients typically write?",
    a: "Most of my local clients are writing non-fiction: business books, memoirs, self-help, and professional guides. I also work with fiction writers. If you've got a book idea or a manuscript in progress, reach out.",
  },
  {
    q: "I'm new to writing — is that okay?",
    a: "That's exactly who I work with. Most of my clients are first-time authors. You don't need a finished draft to get started — just a serious commitment to your book and your readers.",
  },
  {
    q: "Do you offer any free consultations?",
    a: "Yes. Book a free 30-minute discovery call on TidyCal. No pressure, no pitch — just a conversation about your project and what kind of support makes sense.",
  },
];

export default function OhioPage() {
  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd data={localBusinessSchema} />

      {/* Header */}
      <section
        className="pt-32 pb-20"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #142040 0%, #050D18 65%)" }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
            Cuyahoga Falls, Ohio
          </p>
          <h1 className="text-5xl text-white leading-tight" style={serif}>
            Book Publishing Help in<br />Northeast Ohio
          </h1>
          <p className="mt-5 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            I&apos;m Jim Woods — a published author and book publishing consultant based in
            Cuyahoga Falls. I help non-fiction writers in Akron, Summit County, and across
            Northeast Ohio bring their book into the world.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={TIDYCAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-medium text-white hover:bg-accent-dark transition-colors"
            >
              Book a Free Call
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center rounded-md border border-slate-600 px-6 py-3 text-base font-medium text-slate-200 hover:border-accent hover:text-accent transition-colors"
            >
              Send a Message
            </a>
          </div>
        </div>
      </section>

      {/* About / Local Connection */}
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                Local &amp; Available
              </p>
              <h2 className="text-3xl text-white mb-5" style={serif}>
                A Book Coach Who&apos;s Right Here in Summit County
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  I&apos;ve lived and worked in Cuyahoga Falls for years. I know the local author
                  community, I know the Summit County entrepreneurial scene, and I know what it
                  takes for a local professional to carve out time to write a book alongside
                  everything else they&apos;re doing.
                </p>
                <p>
                  With 9 published books of my own — across business, fiction, and my upcoming
                  Story Builder framework — I bring real, first-hand experience to every client
                  engagement. Not just theory.
                </p>
                <p>
                  Whether you&apos;re a business owner in Akron who wants to establish authority
                  in your industry, a professional in Hudson writing a memoir, or a first-time
                  author in Stow with a story that needs to be told — I can help you finish and
                  publish your book.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: "📍", label: "Based in Cuyahoga Falls, OH" },
                { icon: "🤝", label: "In-person sessions available locally" },
                { icon: "💻", label: "Remote sessions for all Ohio clients" },
                { icon: "📚", label: "9 published books across multiple genres" },
                { icon: "🎙️", label: "Host of Story Builder podcast" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-xl border border-navy-700/60 bg-navy-800 px-5 py-4"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-slate-200 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">Services</p>
          <h2 className="text-3xl text-white mb-12" style={serif}>
            Everything You Need to Publish Your Book
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-navy-700/60 bg-navy-800 p-6"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-lg text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
            <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 flex flex-col justify-center items-start">
              <p className="text-white font-medium mb-3">Not sure which service fits?</p>
              <a
                href={TIDYCAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent-light underline underline-offset-2 transition-colors"
              >
                Book a free call to talk it through →
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="text-sm text-slate-400 hover:text-accent transition-colors underline underline-offset-2"
            >
              View full service details →
            </Link>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">Service Area</p>
          <h2 className="text-3xl text-white mb-4" style={serif}>
            Serving Authors Across Northeast Ohio
          </h2>
          <p className="text-slate-400 mb-10 leading-relaxed max-w-2xl">
            I work with authors in person across Summit County and the greater Akron area. All
            services are also available remotely — so if you&apos;re anywhere in Ohio or
            nationwide, we can work together.
          </p>
          <div className="flex flex-wrap gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-navy-600 bg-navy-800 px-4 py-2 text-sm text-slate-300"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Don&apos;t see your city? Reach out — if you&apos;re in Ohio or beyond, remote
            consulting is always available.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">FAQ</p>
          <h2 className="text-3xl text-white mb-10" style={serif}>
            Local Author Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((item) => (
              <div key={item.q} className="border-b border-navy-700/50 pb-6">
                <h3 className="text-white font-medium mb-2">{item.q}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl text-white mb-5" style={serif}>
            Ready to Write Your Book?
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed max-w-xl mx-auto">
            I&apos;m based right here in Cuyahoga Falls and I&apos;d love to hear about your
            project. Book a free 30-minute call — no pressure, just a real conversation about
            your book.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={TIDYCAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-base font-medium text-white hover:bg-accent-dark transition-colors"
            >
              Book a Free Call
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center rounded-md border border-slate-600 px-8 py-3 text-base font-medium text-slate-200 hover:border-accent hover:text-accent transition-colors"
            >
              Send an Email
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-600">
            Jim Woods · Cuyahoga Falls, OH · {EMAIL}
          </p>
        </div>
      </section>
    </>
  );
}
