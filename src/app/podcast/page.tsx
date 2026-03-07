import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Story Builder Podcast | Jim Woods",
  description:
    "Story Builder is a podcast hosted by Jim Woods featuring interviews with authors and creators on how to craft great stories. Available on YouTube and Spotify.",
};

const YOUTUBE_URL = "https://www.youtube.com/playlist?list=PL82pjZmiW62RvcvYgytT-EJr_xfV9eZXJ";
const SPOTIFY_URL = "https://open.spotify.com/show/5l20jU0Nc7BAXxvQBr69JZ";
const TIDYCAL_URL = "https://tidycal.com/storybuilder/";

const serif = { fontFamily: "var(--font-dm-serif), Georgia, serif" };

// TODO: Replace with real episode data in Phase 2
const episodes = [
  {
    number: "001",
    guest: "Guest Author Name",
    title: "How to Build Stories That Actually Hold Together",
    description:
      "I sit down with a published author to break down the structural decisions behind their book — what worked, what didn't, and what every writer can take away.",
    duration: "42 min",
  },
  {
    number: "002",
    guest: "Guest Author Name",
    title: "Writing Your First Non-Fiction Book: What Nobody Tells You",
    description:
      "A candid conversation about the gap between having a great idea and delivering a book that earns its reader's time — and how to close it.",
    duration: "38 min",
  },
  {
    number: "003",
    guest: "Guest Creator Name",
    title: "From Idea to Audience: Building a Brand Around Your Book",
    description:
      "We dig into how creators are using books as the foundation for everything else — podcasts, courses, consulting, and long-term authority.",
    duration: "50 min",
  },
  {
    number: "004",
    guest: "Guest Author Name",
    title: "The Craft of Memoir: How to Tell a True Story That Teaches",
    description:
      "Memoir with application is one of the most powerful formats in non-fiction. My guest breaks down how to write personal stories that connect and resonate.",
    duration: "45 min",
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
                Conversations with authors and creators on how to build stories that matter —
                hosted by me, Jim Woods.
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
              Story Builder is a podcast I host featuring in-depth conversations with authors and
              creators about the craft of building great stories. Each episode goes behind the
              scenes of how real books get written — the structure, the process, the decisions,
              and the lessons learned along the way.
            </p>
            <p>
              My guests include published authors, storytellers, and creative professionals who
              have figured out how to take a compelling idea and turn it into something that
              connects with an audience. Whether you&apos;re writing your first book or your
              fifth, these conversations will sharpen how you think about your work.
            </p>
            <p>
              Story Builder the podcast is distinct from my upcoming book of the same name —
              though both share the same core belief: that great stories are built, not just
              written.
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
                  <p className="text-xs text-accent mb-1">with {ep.guest}</p>
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

      {/* Story Builder Book Callout */}
      <section className="bg-navy-900 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="text-3xl flex-shrink-0">📖</div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                Also Coming Soon
              </p>
              <h3 className="text-2xl text-white mb-2" style={serif}>Story Builder — The Book</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                While the podcast features conversations with other authors and creators, my
                upcoming book — Story Builder — is my complete framework for non-fiction writers
                who want to write books that are structured, readable, and built to last.
              </p>
              <Link
                href="/books"
                className="inline-flex items-center text-sm text-accent hover:text-accent-light transition-colors"
              >
                Learn more about the book →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-4xl text-white mb-4" style={serif}>
            Ready to work together?
          </h2>
          <p className="text-slate-400 mb-8">
            The podcast is free. When you&apos;re ready to work on your own book, I&apos;m here.
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
