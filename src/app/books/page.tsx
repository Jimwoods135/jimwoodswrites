import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Books | Jim Woods — Author",
  description:
    "Browse all 9 books by Jim Woods, including business and productivity titles, westerns, and crime novels. Plus: Story Builder, coming soon.",
};

// TODO: Replace with real Amazon URL
const AMAZON_URL = "https://amazon.com/author/jimwoods";
const TIDYCAL_URL = "https://tidycal.com/jimwoods";

const serif = { fontFamily: "var(--font-dm-serif), Georgia, serif" };

// TODO: Replace titles, descriptions, and cover images with real data in Phase 2
const businessBooks = [
  {
    title: "Business Book Title One",
    subtitle: "A subtitle that describes the book",
    year: "2021",
    description:
      "A practical guide to [topic] for professionals who want to [outcome]. Placeholder description — will be updated with real copy in Phase 2.",
  },
  {
    title: "Business Book Title Two",
    subtitle: "A subtitle that describes the book",
    year: "2022",
    description:
      "An actionable framework for [topic] that helps readers [outcome]. Placeholder description — will be updated with real copy in Phase 2.",
  },
];

const westerns = [
  { title: "Western Novel One", year: "2018" },
  { title: "Western Novel Two", year: "2019" },
  { title: "Western Novel Three", year: "2020" },
  { title: "Western Novel Four", year: "2021" },
];

const crimeNovels = [
  { title: "Crime Novel One", year: "2019" },
  { title: "Crime Novel Two", year: "2020" },
  { title: "Crime Novel Three", year: "2022" },
];

function PlaceholderCover({ className = "" }: { className?: string }) {
  return (
    <div className={`aspect-[2/3] rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center ${className}`}>
      <p className="text-xs text-slate-600 text-center px-2">Book Cover</p>
    </div>
  );
}

export default function BooksPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-20"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #142040 0%, #050D18 65%)" }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Books</p>
          <h1 className="text-5xl text-white" style={serif}>The Library</h1>
          <p className="mt-5 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            9 published books across business, productivity, westerns, and crime fiction — plus
            Story Builder, coming soon.
          </p>
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-md border border-slate-600 px-6 py-2.5 text-sm text-slate-200 hover:border-accent hover:text-accent transition-colors"
          >
            View all on Amazon →
          </a>
        </div>
      </section>

      {/* Story Builder — Featured */}
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-8">
            Coming Soon
          </p>
          <div className="flex flex-col gap-10 md:flex-row md:items-center">
            <div className="w-full max-w-[180px] flex-shrink-0">
              <PlaceholderCover />
            </div>
            <div>
              <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-xs font-medium text-accent mb-3">
                Book #10
              </span>
              <h2 className="text-4xl text-white" style={serif}>Story Builder</h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Jim&apos;s most important book yet — a complete framework for non-fiction authors
                who want to write books that are structured, readable, and built to last. Paired
                with the Story Builder podcast, this book is the cornerstone of Jim&apos;s
                consulting philosophy.
              </p>
              <Link
                href="/podcast"
                className="mt-5 inline-flex items-center text-sm text-accent hover:text-accent-light transition-colors"
              >
                Listen to the Story Builder podcast →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business & Productivity */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-8">
            Business &amp; Productivity
          </p>
          <div className="grid gap-10 md:grid-cols-2">
            {businessBooks.map((book) => (
              <div key={book.title} className="flex gap-6 items-start">
                <div className="w-28 flex-shrink-0">
                  <PlaceholderCover />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">{book.year}</p>
                  <h3 className="text-xl text-white" style={serif}>{book.title}</h3>
                  <p className="text-sm text-slate-500 mt-0.5 italic">{book.subtitle}</p>
                  <p className="text-sm text-slate-400 mt-3 leading-relaxed">{book.description}</p>
                  <a
                    href={AMAZON_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-sm text-accent hover:text-accent-light transition-colors"
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Also by Jim — Westerns + Crime */}
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Also by Jim Woods
          </p>
          <p className="text-slate-400 text-sm mb-10 max-w-lg">
            Jim is a prolific author across genres — proof that the writing and publishing process
            he teaches is one he&apos;s lived.
          </p>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Westerns */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-5">
                Westerns
              </p>
              <div className="grid grid-cols-2 gap-4">
                {westerns.map((book) => (
                  <div key={book.title} className="group">
                    <PlaceholderCover className="group-hover:border-accent/40 transition-colors" />
                    <p className="text-sm text-white mt-2" style={serif}>{book.title}</p>
                    <p className="text-xs text-slate-600 mt-0.5">{book.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Crime */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-5">
                Crime Fiction
              </p>
              <div className="grid grid-cols-2 gap-4">
                {crimeNovels.map((book) => (
                  <div key={book.title} className="group">
                    <PlaceholderCover className="group-hover:border-accent/40 transition-colors" />
                    <p className="text-sm text-white mt-2" style={serif}>{book.title}</p>
                    <p className="text-xs text-slate-600 mt-0.5">{book.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-accent hover:text-accent-light transition-colors"
            >
              View all books on Amazon →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-4xl text-white mb-4" style={serif}>
            Ready to add your name to the shelf?
          </h2>
          <p className="text-slate-400 mb-8">
            Jim has navigated the self-publishing process across 9 books. Let him help you write
            and publish yours.
          </p>
          <a
            href={TIDYCAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-base font-medium text-white hover:bg-accent-dark transition-colors"
          >
            Book a Free Call
          </a>
        </div>
      </section>
    </>
  );
}
