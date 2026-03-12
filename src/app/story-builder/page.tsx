import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { personSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Story Builder — The Book | Jim Woods",
  description:
    "Story Builder is Jim Woods' complete framework for non-fiction authors who want to write books that are structured, readable, and built to last. Coming soon.",
  alternates: { canonical: "https://jimwoodswrites.com/story-builder" },
  openGraph: {
    title: "Story Builder — The Book | Jim Woods",
    description:
      "A complete framework for non-fiction authors who want to write books that are structured, readable, and built to last.",
    url: "https://jimwoodswrites.com/story-builder",
    images: [{ url: "/book-story-builder.jpg", width: 800, height: 1200, alt: "Story Builder by Jim Woods" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Story Builder — The Book | Jim Woods",
    description:
      "A complete framework for non-fiction authors. Coming soon from Jim Woods.",
    images: ["/book-story-builder.jpg"],
  },
};

const TIDYCAL_URL = "https://tidycal.com/storybuilder/";
const SUBSTACK_URL = "https://authorjimwoods.substack.com/";
const YOUTUBE_URL = "https://www.youtube.com/playlist?list=PL82pjZmiW62RvcvYgytT-EJr_xfV9eZXJ";
const SPOTIFY_URL = "https://open.spotify.com/show/5l20jU0Nc7BAXxvQBr69JZ";

const serif = { fontFamily: "var(--font-dm-serif), Georgia, serif" };

const pillars = [
  {
    icon: "🏗️",
    title: "Structure First",
    desc: "Most books fail before the first word is written. Story Builder starts with architecture — a framework that gives your book direction, logic, and momentum.",
  },
  {
    icon: "📖",
    title: "Readable by Design",
    desc: "A well-structured book still has to hold a reader's attention. Story Builder teaches you how to write chapters that flow, arguments that build, and prose that earns its keep.",
  },
  {
    icon: "🏛️",
    title: "Built to Last",
    desc: "The best non-fiction books don't just sell — they establish authority. Story Builder shows you how to write a book that positions you as the definitive voice in your space.",
  },
];

const faqs = [
  {
    q: "Who is Story Builder for?",
    a: "Non-fiction authors — especially first-time writers working on business books, self-help, or memoir with application. If you have an important idea and want to turn it into a book that actually works, this framework is for you.",
  },
  {
    q: "How is this different from the Story Builder podcast?",
    a: "The podcast features conversations with authors and creators on the craft of storytelling. The book is my complete, step-by-step framework — a practical guide you can apply directly to your own manuscript.",
  },
  {
    q: "When does it come out?",
    a: "Story Builder is coming soon. Subscribe to my Substack newsletter to be the first to know when it launches — and to get early access and launch pricing.",
  },
  {
    q: "Can I work with you before the book comes out?",
    a: "Absolutely. My consulting and coaching services use the Story Builder framework now. Book a free discovery call to get started.",
  },
];

export default function StoryBuilderPage() {
  return (
    <>
      <JsonLd data={personSchema} />

      {/* Hero */}
      <section
        className="pt-32 pb-20"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #142040 0%, #050D18 65%)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-12 md:flex-row md:items-center">
            {/* Book cover */}
            <div className="w-full max-w-[220px] flex-shrink-0 mx-auto md:mx-0">
              <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/book-story-builder.jpg"
                  alt="Story Builder by Jim Woods"
                  fill
                  className="object-cover"
                  sizes="220px"
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-xs font-medium text-accent mb-4">
                Coming Soon — Book #10
              </span>
              <h1 className="text-5xl sm:text-6xl text-white leading-tight" style={serif}>
                Story Builder
              </h1>
              <p className="mt-2 text-xl text-slate-400 italic" style={serif}>
                A Framework for Non-Fiction Authors
              </p>
              <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl mx-auto md:mx-0">
                Most non-fiction books fail not because the idea is bad — but because the structure is.
                Story Builder is my complete framework for writing books that are structured, readable,
                and built to last.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href={SUBSTACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-base font-medium text-white hover:bg-accent-dark transition-colors"
                >
                  Get Launch Updates
                </a>
                <a
                  href={TIDYCAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-slate-600 px-8 py-3 text-base font-medium text-slate-200 hover:border-accent hover:text-accent transition-colors"
                >
                  Work with Me Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">The Problem</p>
          <h2 className="text-3xl text-white mb-8" style={serif}>
            Most non-fiction books are built on a great idea and a weak foundation.
          </h2>
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              Writers spend months — sometimes years — working on a book, only to end up with a
              manuscript that feels scattered, hard to follow, or longer than it needs to be. The
              idea was good. The execution didn&apos;t serve it.
            </p>
            <p>
              This isn&apos;t a writing talent problem. It&apos;s a structure problem. And structure
              is learnable.
            </p>
            <p>
              After writing 9 books across multiple genres and working with dozens of authors as a
              consultant, I&apos;ve built a framework that addresses this directly. Story Builder gives
              you the architecture your book needs before you write a single chapter.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">The Framework</p>
          <h2 className="text-3xl text-white mb-12" style={serif}>
            Three pillars. One finished book.
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-navy-700/60 bg-navy-800 p-6">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-xl text-white mb-3" style={serif}>{p.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Callout */}
      <section className="bg-navy-900 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8 flex flex-col sm:flex-row gap-6 items-center">
            <div className="text-4xl flex-shrink-0">🎙️</div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Story Builder Podcast</p>
              <h3 className="text-xl text-white mb-2" style={serif}>
                Start learning the framework now
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                While the book is in development, the Story Builder podcast features conversations with
                authors and creators on how to craft great stories. Available on YouTube and Spotify.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-600 px-5 py-2.5 text-sm text-slate-200 hover:border-accent hover:text-accent transition-colors whitespace-nowrap"
              >
                ▶ YouTube
              </a>
              <a
                href={SPOTIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-600 px-5 py-2.5 text-sm text-slate-200 hover:border-accent hover:text-accent transition-colors whitespace-nowrap"
              >
                🎵 Spotify
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">FAQ</p>
          <h2 className="text-3xl text-white mb-10" style={serif}>Questions about Story Builder</h2>
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

      {/* Launch CTA */}
      <section
        className="py-24"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, #142040 0%, #080F1E 60%)" }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl text-white mb-4" style={serif}>
            Be the first to know when it launches.
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
            Subscribe to my Substack newsletter for launch updates, early access, and exclusive
            content from the Story Builder framework.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-base font-medium text-white hover:bg-accent-dark transition-colors"
            >
              Subscribe for Launch Updates
            </a>
            <Link
              href="/podcast"
              className="inline-flex items-center justify-center rounded-md border border-slate-600 px-8 py-3 text-base font-medium text-slate-200 hover:border-accent hover:text-accent transition-colors"
            >
              Listen to the Podcast
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
