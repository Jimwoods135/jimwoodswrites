import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | Jim Woods — Book Publishing Consultant",
  description:
    "Articles on book coaching, writing non-fiction, self-publishing, and building your author platform — from a published author with 9 books.",
  alternates: { canonical: "https://jimwoodswrites.com/blog" },
  openGraph: {
    title: "Blog | Jim Woods — Book Publishing Consultant",
    description:
      "Articles on book coaching, writing non-fiction, self-publishing, and building your author platform.",
    url: "https://jimwoodswrites.com/blog",
    images: [{ url: "/headshot.jpg", width: 800, height: 1000, alt: "Jim Woods" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Jim Woods — Book Publishing Consultant",
    description:
      "Articles on book coaching, writing non-fiction, self-publishing, and building your author platform.",
    images: ["/headshot.jpg"],
  },
};

const SUBSTACK_URL = "https://authorjimwoods.substack.com/";

const serif = { fontFamily: "var(--font-dm-serif), Georgia, serif" };

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-20"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #142040 0%, #050D18 65%)" }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Blog</p>
          <h1 className="text-5xl text-white" style={serif}>Writing, Publishing &amp; the Author Life</h1>
          <p className="mt-5 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Practical articles on writing non-fiction, navigating self-publishing, and building
            your author platform — from someone who&apos;s done it across 9 books.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-10">
            {sorted.map((post) => (
              <article key={post.slug} className="border-b border-navy-700/50 pb-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                  {post.category} · {post.readTime}
                </p>
                <h2 className="text-2xl text-white mb-3 hover:text-accent-light transition-colors" style={serif}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">{post.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600">{formatDate(post.date)}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm text-accent hover:text-accent-light transition-colors"
                  >
                    Read article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Newsletter</p>
          <h2 className="text-3xl text-white mb-4" style={serif}>Get new articles in your inbox</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">
            I publish writing tips, publishing insights, and behind-the-scenes content on Substack.
            Free to subscribe.
          </p>
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-base font-medium text-white hover:bg-accent-dark transition-colors"
          >
            Subscribe on Substack
          </a>
        </div>
      </section>
    </>
  );
}
