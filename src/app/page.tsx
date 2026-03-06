import Link from "next/link";


const TIDYCAL_URL = "https://tidycal.com/storybuilder/";
const SUBSTACK_URL = "https://authorjimwoods.substack.com/";
const AMAZON_URL = "https://www.amazon.com/stores/Jim-Woods/author/B00EYDA7OS";
const YOUTUBE_URL = "https://www.youtube.com/playlist?list=PL82pjZmiW62RvcvYgytT-EJr_xfV9eZXJ";
const SPOTIFY_URL = "https://open.spotify.com/show/5l20jU0Nc7BAXxvQBr69JZ";
const LINKEDIN_URL = "https://www.linkedin.com/in/jimwoodspage";

const services = [
  {
    title: "Book Coaching",
    description:
      "Work 1:1 with Jim to develop your concept, structure your ideas, and build a writing process that carries you from first word to finished manuscript.",
    icon: "✍️",
  },
  {
    title: "Developmental Editing",
    description:
      "Deep-level feedback on your manuscript's structure, narrative arc, chapter flow, and overall effectiveness before you finalize your draft.",
    icon: "📝",
  },
  {
    title: "Book Formatting",
    description:
      "Professional interior and cover formatting that meets print and digital publishing standards for a polished, reader-ready final product.",
    icon: "📐",
  },
  {
    title: "Self-Publishing Services",
    description:
      "End-to-end guidance through the self-publishing process — from KDP setup to ISBN, distribution channels, and launch strategy.",
    icon: "🚀",
  },
  {
    title: "Book Consulting",
    description:
      "Strategic advisory at any stage of your project — concept, manuscript, publishing, or post-launch — to help you make smart, informed decisions.",
    icon: "💡",
  },
];

const testimonials = [
  {
    quote:
      "Jim helped me turn scattered ideas into a published book. His coaching process is methodical, encouraging, and exactly what I needed to finally get it done.",
    name: "Sarah M.",
    title: "Non-Fiction Author",
  },
  {
    quote:
      "The self-publishing guidance Jim provided saved me months of confusion. My book is now live on Amazon and doing better than I expected.",
    name: "Mark T.",
    title: "Business Author & Entrepreneur",
  },
  {
    quote:
      "Jim's developmental editing transformed my manuscript. His feedback was specific, actionable, and made my book something I'm genuinely proud of.",
    name: "Linda K.",
    title: "Memoir Author",
  },
];

const serif = { fontFamily: "var(--font-dm-serif), Georgia, serif" };

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #142040 0%, #050D18 65%)",
        }}
      >
        <div className="mx-auto max-w-3xl px-6 py-32 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent-light">
            Book Publishing Consultant · Cuyahoga Falls, Ohio
          </p>
          <h1 className="text-5xl font-normal leading-tight text-white sm:text-6xl md:text-7xl" style={serif}>
            Let&apos;s bring your book{" "}
            <span className="italic">into the world.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400 leading-relaxed">
            Jim Woods is a published author and consulting guide for aspiring
            non-fiction writers — offering book coaching, developmental editing,
            formatting, and self-publishing services.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={TIDYCAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-base font-medium text-white hover:bg-accent-dark transition-colors"
            >
              Book a Free Call
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-slate-600 px-8 py-3 text-base font-medium text-slate-200 hover:border-accent hover:text-accent transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600">
          <svg className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Services Overview ── */}
      <section className="bg-navy-900 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Services</p>
            <h2 className="text-4xl text-white" style={serif}>How I Help Authors</h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Whether you&apos;re starting from a blank page or nearly ready to publish, I offer
              hands-on guidance at every stage of the process.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-navy-700/60 bg-navy-800 p-6 transition-colors hover:border-accent/40"
              >
                <div className="mb-4 text-2xl">{service.icon}</div>
                <h3 className="text-xl text-white mb-2" style={serif}>{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            ))}

            {/* CTA card */}
            <div className="rounded-xl border border-accent/30 bg-accent/10 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl text-white mb-2" style={serif}>Not sure where to start?</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Book a free discovery call and we&apos;ll map out exactly what you need to get
                  your book written and published.
                </p>
              </div>
              <a
                href={TIDYCAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-dark transition-colors"
              >
                Book a Free Call
              </a>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="text-sm text-accent hover:text-accent-light transition-colors">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Story Builder Feature ── */}
      <section
        className="py-24"
        style={{ background: "radial-gradient(ellipse 100% 80% at 50% 50%, #142040 0%, #050D18 70%)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="w-full max-w-xs flex-shrink-0">
              <div className="aspect-[2/3] rounded-lg bg-navy-800 border border-navy-600 flex items-center justify-center shadow-2xl">
                <div className="text-center px-6">
                  <p className="text-2xl text-white" style={serif}>Story Builder</p>
                  <p className="text-sm text-slate-400 mt-2">Jim Woods</p>
                  <p className="text-xs text-accent mt-4 uppercase tracking-wider">Book Cover</p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-xs font-medium text-accent mb-4">
                Coming Soon — Book #10
              </span>
              <h2 className="text-4xl text-white sm:text-5xl" style={serif}>Story Builder</h2>
              <p className="mt-5 text-lg text-slate-400 leading-relaxed">
                Jim&apos;s most important book yet — a complete framework for non-fiction authors
                who want to write books that are structured, readable, and built to last. Story
                Builder distills everything Jim has learned across 9 published books and years of
                consulting.
              </p>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Paired with the Story Builder podcast on YouTube and Spotify, this book is the
                cornerstone of Jim&apos;s consulting philosophy and the clearest expression of his
                approach to the craft.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-slate-600 px-5 py-2.5 text-sm text-slate-200 hover:border-accent hover:text-accent transition-colors"
                >
                  ▶ Watch on YouTube
                </a>
                <a
                  href={SPOTIFY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-slate-600 px-5 py-2.5 text-sm text-slate-200 hover:border-accent hover:text-accent transition-colors"
                >
                  🎵 Listen on Spotify
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Books Preview ── */}
      <section className="bg-navy-900 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Published Works</p>
            <h2 className="text-4xl text-white" style={serif}>9 Books and Counting</h2>
            <p className="mt-4 text-slate-400 max-w-lg mx-auto">
              From business and productivity to westerns and crime fiction — Jim is a prolific
              author who has navigated the self-publishing world across multiple genres.
            </p>
          </div>

          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
            Business &amp; Productivity
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {[1, 2].map((i) => (
              <div key={i} className="group flex gap-5 items-start">
                <div className="w-20 flex-shrink-0 rounded-lg bg-navy-800 border border-navy-700 group-hover:border-accent/40 transition-colors overflow-hidden">
                  <div className="aspect-[2/3] flex items-center justify-center">
                    <p className="text-xs text-slate-600 text-center px-1">Cover</p>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="text-white" style={serif}>Book Title {i}</p>
                  <p className="text-xs text-slate-500 mt-1">Business / Productivity</p>
                  <a
                    href={AMAZON_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-xs text-accent hover:text-accent-light transition-colors"
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-navy-700/60 bg-navy-800 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              Also by Jim Woods
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Jim is also the author of{" "}
              <strong className="text-slate-300">4 western novels</strong> and{" "}
              <strong className="text-slate-300">3 crime novels</strong> — demonstrating his range
              as a writer and his deep familiarity with the storytelling craft.
            </p>
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-sm text-accent hover:text-accent-light transition-colors"
            >
              View all books on Amazon →
            </a>
          </div>

          <div className="mt-10 text-center">
            <Link href="/books" className="text-sm text-accent hover:text-accent-light transition-colors">
              See the full library →
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Snippet ── */}
      <section className="py-24 bg-navy-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-12 md:flex-row md:items-center">
            <div className="w-full max-w-sm flex-shrink-0">
              <div className="aspect-square rounded-2xl bg-navy-800 border border-navy-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-28 h-28 rounded-full bg-navy-700 mx-auto mb-3" />
                  <p className="text-xs text-slate-600">Headshot Placeholder</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">About Jim</p>
              <h2 className="text-4xl text-white mb-6" style={serif}>A writer who helps writers.</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Jim Woods is a published author and book publishing consultant based in Cuyahoga
                Falls, Ohio. With 9 books to his name — spanning business, productivity, westerns,
                and crime fiction — Jim has navigated every stage of the self-publishing journey
                firsthand.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                His consulting work draws directly from that experience: practical, real-world
                guidance for aspiring authors who want to stop overthinking and start publishing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center rounded-md border border-slate-600 px-5 py-2.5 text-sm text-slate-200 hover:border-accent hover:text-accent transition-colors"
                >
                  Read my full story
                </Link>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-accent hover:text-accent-light transition-colors"
                >
                  View LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-navy-900 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Testimonials</p>
            <h2 className="text-4xl text-white" style={serif}>What authors are saying</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-navy-700/60 bg-navy-800 p-6 flex flex-col"
              >
                <p className="text-3xl text-accent leading-none mb-4">&ldquo;</p>
                <p className="text-slate-300 leading-relaxed flex-1 text-sm">{t.quote}</p>
                <div className="mt-6 border-t border-navy-700/60 pt-4">
                  <p className="font-medium text-white text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Podcast ── */}
      <section className="py-24 bg-navy-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-10 md:flex-row md:items-center">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Podcast</p>
              <h2 className="text-4xl text-white mb-4" style={serif}>The Story Builder Podcast</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Join Jim as he breaks down the craft of writing and the business of self-publishing
                — with actionable insights for non-fiction authors at every stage of their journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-navy-800 border border-navy-700 px-5 py-2.5 text-sm text-slate-200 hover:border-accent hover:text-accent transition-colors"
                >
                  ▶ Watch on YouTube
                </a>
                <a
                  href={SPOTIFY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-navy-800 border border-navy-700 px-5 py-2.5 text-sm text-slate-200 hover:border-accent hover:text-accent transition-colors"
                >
                  🎵 Listen on Spotify
                </a>
                <Link
                  href="/podcast"
                  className="inline-flex items-center text-sm text-accent hover:text-accent-light transition-colors"
                >
                  More about the show →
                </Link>
              </div>
            </div>

            <div className="w-full max-w-xs flex-shrink-0">
              <div className="aspect-square rounded-2xl bg-navy-800 border border-navy-700 flex items-center justify-center">
                <div className="text-center px-4">
                  <p className="text-xl text-white" style={serif}>Story Builder</p>
                  <p className="text-sm text-slate-400 mt-2">with Jim Woods</p>
                  <p className="text-xs text-accent mt-4 uppercase tracking-wider">Podcast Cover Art</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter + Final CTA ── */}
      <section
        className="py-24"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, #142040 0%, #080F1E 60%)" }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Newsletter</p>
          <h2 className="text-4xl text-white mb-4" style={serif}>Join the newsletter</h2>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-md mx-auto">
            Get writing tips, publishing insights, and updates on Story Builder — delivered to
            your inbox via Jim&apos;s Substack.
          </p>
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-base font-medium text-white hover:bg-accent-dark transition-colors"
          >
            Subscribe on Substack
          </a>

          <div className="mt-20 border-t border-navy-700/50 pt-16">
            <h2 className="text-4xl text-white mb-4" style={serif}>Ready to write your book?</h2>
            <p className="text-slate-400 mb-8 max-w-sm mx-auto">
              Book a free discovery call and let&apos;s map out the path from your idea to a
              published book.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href={TIDYCAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-base font-medium text-white hover:bg-accent-dark transition-colors"
              >
                Book a Free Call
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-slate-600 px-8 py-3 text-base font-medium text-slate-200 hover:border-accent hover:text-accent transition-colors"
              >
                Contact Jim
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
