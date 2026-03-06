import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Story Builder Podcast | Jim Woods",
  description:
    "The Story Builder podcast with Jim Woods — writing craft and self-publishing insights for non-fiction authors. Available on YouTube and Spotify.",
};

// TODO: Replace with real URLs
const YOUTUBE_URL = "https://youtube.com/@storybuilder";
const SPOTIFY_URL = "https://open.spotify.com/show/storybuilder";
const TIDYCAL_URL = "https://tidycal.com/jimwoods";

const serif = { fontFamily: "var(--font-dm-serif), Georgia, serif" };

// TODO: Replace with real episode data in Phase 2
const episodes = [
  {
    number: "001",
    title: "Why Most Non-Fiction Books Fail (And What to Do Instead)",
    description:
      "Jim breaks down the most common structural mistakes non-fiction authors make — and introduces the Story Builder framework.",
    duration: "38 min",
  },
  {
    number: "002",
    title: "The Outline That Actually Works: Building Your Book Architecture",
    description:
      "A practical session on outlining non-fiction books that hold together from first chapter to last — with real examples from Jim's process.",
    duration: "44 min",
  },
  {
    number: "003",
    title: "Self-Publishing in 2024: What You Need to Know Before You Start",
    description:
      "An honest overview of the self-publishing landscape — costs, timelines, platforms, and the decisions most first-time authors get wrong.",
    duration: "52 min",
  },
  {
    number: "004",
    title: "Writing with Consistency: Building a Habit That Survives Real Life",
    description:
      "Jim shares the writing systems he's used across 9 books — and how to build momentum when time and energy are limited.",
    duration: "35 min",
  },
];

export default function PodcastPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-20"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #142040 0%, #050D18 65%)" }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col gap-10 md:flex-row md:items-center">
            {/* Podcast art placeholder */}
            <div className="w-full max-w-[220px] flex-shrink-0">
              <div className="aspect-square rounded-2xl bg-navy-800 border border-navy-600 flex items-center justify-center shadow-2xl">
                <div className="text-center px-4">
                  <p className="text-xl text-white" style={serif}>Story Builder</p>
                  <p className="text-sm text-slate-400 mt-2">with Jim Woods</p>
                  <p className="text-xs text-accent mt-4 uppercase tracking-wider">Cover Art</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                Podcast
              </p>
              <h1 className="text-5xl text-white" style={serif}>Story Builder</h1>
              <p className="mt-4 text-lg text-slate-400 leading-relaxed max-w-lg">
                Writing craft and self-publishing insights for non-fiction authors — hosted by
                Jim Woods.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-dark transition-colors"
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

      {/* About the Show */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
            About the Show
          </p>
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              Story Builder is a podcast for non-fiction authors who want to write better books
              and navigate the publishing world with confidence. Hosted by Jim Woods — author of
              9 books and book publishing consultant — each episode digs into the craft, the
              process, and the business of getting your book into the world.
            </p>
            <p>
              Whether you&apos;re working on your first manuscript or navigating the self-publishing
              process for the first time, Story Builder gives you practical tools and honest
              perspective from someone who has done it repeatedly, across multiple genres.
            </p>
            <p>
              The show is the companion to Jim&apos;s upcoming book — also called Story Builder —
              which presents his complete framework for non-fiction authors.
            </p>
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-8">
            Recent Episodes
          </p>
          <div className="space-y-4">
            {episodes.map((ep) => (
              <div
                key={ep.number}
                className="rounded-xl border border-navy-700/60 bg-navy-800 p-6 flex flex-col sm:flex-row sm:items-start gap-4 hover:border-accent/40 transition-colors"
              >
                <div className="flex-shrink-0">
                  <span className="text-xs font-mono text-slate-600">EP {ep.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white" style={serif}>{ep.title}</h3>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">{ep.description}</p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="text-xs text-slate-600">{ep.duration}</span>
                    <a
                      href={YOUTUBE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent hover:text-accent-light transition-colors"
                    >
                      Watch on YouTube →
                    </a>
                    <a
                      href={SPOTIFY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent hover:text-accent-light transition-colors"
                    >
                      Listen on Spotify →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-accent-light transition-colors"
            >
              View all episodes on YouTube →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-4xl text-white mb-4" style={serif}>
            Ready to work with Jim directly?
          </h2>
          <p className="text-slate-400 mb-8">
            The podcast is free. The consulting takes your book to the next level.
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
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-slate-600 px-8 py-3 text-base font-medium text-slate-200 hover:border-accent hover:text-accent transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
