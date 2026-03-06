import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Jim Woods | Author & Book Publishing Consultant",
  description:
    "Jim Woods is a published author and book publishing consultant based in Cuyahoga Falls, Ohio — with 9 books and years of hands-on self-publishing experience.",
};

// TODO: Replace with real URLs
const TIDYCAL_URL = "https://tidycal.com/jimwoods";
const LINKEDIN_URL = "https://linkedin.com/in/jimwoods";
const AMAZON_URL = "https://amazon.com/author/jimwoods";

const serif = { fontFamily: "var(--font-dm-serif), Georgia, serif" };

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-20"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #142040 0%, #050D18 65%)" }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">About</p>
          <h1 className="text-5xl text-white" style={serif}>Jim Woods</h1>
          <p className="mt-4 text-slate-400 text-lg">
            Author. Publisher. Consultant. Cuyahoga Falls, Ohio.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col gap-12 md:flex-row md:items-start">
            {/* Photo placeholder */}
            <div className="w-full max-w-xs flex-shrink-0">
              <div className="aspect-[3/4] rounded-2xl bg-navy-800 border border-navy-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-28 h-28 rounded-full bg-navy-700 mx-auto mb-3" />
                  <p className="text-xs text-slate-600">Headshot Placeholder</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full rounded-md border border-slate-600 px-5 py-2.5 text-sm text-slate-200 hover:border-accent hover:text-accent transition-colors"
                >
                  View LinkedIn
                </a>
                <a
                  href={AMAZON_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full rounded-md border border-slate-600 px-5 py-2.5 text-sm text-slate-200 hover:border-accent hover:text-accent transition-colors"
                >
                  Books on Amazon
                </a>
              </div>
            </div>

            {/* Bio content */}
            <div className="flex-1 space-y-6 text-slate-400 leading-relaxed">
              <p>
                Jim Woods is a published author and book publishing consultant based in Cuyahoga
                Falls, Ohio. With 9 books to his name — spanning business, productivity, westerns,
                and crime fiction — Jim has spent years navigating every stage of the
                self-publishing journey: writing, editing, formatting, publishing, and marketing.
              </p>
              <p>
                His work as a consulting guide grew naturally from that experience. Authors who
                want to write books — especially non-fiction — often have great ideas but no clear
                path from those ideas to a finished, published product. Jim provides that path:
                practical, direct, experience-backed guidance that gets writers moving and keeps
                them on track.
              </p>
              <p>
                Jim&apos;s primary focus is non-fiction: business books, self-help, and memoir with
                application — the kind of books that teach something, challenge something, or
                document something worth preserving. He also consults on fiction projects, bringing
                the same structural thinking to storytelling that he applies to his own western and
                crime novels.
              </p>
              <p>
                His upcoming book, <strong className="text-slate-200">Story Builder</strong>, is
                the fullest expression of his philosophy: a complete framework for non-fiction
                authors who want to write books that are structured, readable, and built to last.
                The companion podcast — also called Story Builder — is available on YouTube and
                Spotify.
              </p>

              <div className="pt-4 border-t border-navy-700/50">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
                  By the numbers
                </p>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { number: "9", label: "Published Books" },
                    { number: "5", label: "Services Offered" },
                    { number: "Ohio", label: "Cuyahoga Falls" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-3xl text-white" style={serif}>{stat.number}</p>
                      <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
            Philosophy
          </p>
          <h2 className="text-3xl text-white mb-8" style={serif}>
            What I believe about books and writing
          </h2>
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              Books change lives — the lives of readers, and the lives of the people who write
              them. A published book establishes authority, opens doors, and creates a legacy that
              outlasts any single conversation or social media post.
            </p>
            <p>
              Most aspiring authors don&apos;t fail because they lack ideas. They fail because they
              don&apos;t have a clear process, a realistic structure, or someone in their corner
              who has already done the work. That&apos;s what I provide.
            </p>
            <p>
              Writing a book is hard. Publishing it doesn&apos;t have to be. The self-publishing
              world gives authors more control, more speed, and more earning potential than
              traditional publishing — but only if you navigate it with intention. I help you do
              that.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, #142040 0%, #080F1E 60%)" }}
      >
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-4xl text-white mb-4" style={serif}>
            Let&apos;s work together
          </h2>
          <p className="text-slate-400 mb-8">
            Book a free discovery call and tell me about your project. We&apos;ll figure out the
            best path forward together.
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
