import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://jimwoodswrites.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://jimwoodswrites.com/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Jim Woods"],
      images: [{ url: "/headshot.jpg", width: 800, height: 1000, alt: "Jim Woods" }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/headshot.jpg"],
    },
  };
}

const TIDYCAL_URL = "https://tidycal.com/storybuilder/";
const SUBSTACK_URL = "https://authorjimwoods.substack.com/";

const serif = { fontFamily: "var(--font-dm-serif), Georgia, serif" };

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Minimal markdown-to-HTML: handles ## headings, **bold**, and paragraphs
function renderBody(body: string) {
  const blocks = body.split(/\n\n+/);
  return blocks.map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl text-white mt-10 mb-4" style={serif}>
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("- ")) {
      const items = block.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i} className="space-y-2 my-4 pl-4">
          {items.map((item, j) => {
            const content = item.replace("- ", "");
            return (
              <li key={j} className="flex items-start gap-2 text-slate-400">
                <span className="text-accent mt-1 flex-shrink-0">→</span>
                <span dangerouslySetInnerHTML={{ __html: boldify(content) }} />
              </li>
            );
          })}
        </ul>
      );
    }
    return (
      <p key={i} className="text-slate-400 leading-relaxed my-4"
        dangerouslySetInnerHTML={{ __html: boldify(block) }}
      />
    );
  });
}

function boldify(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong class="text-slate-200">$1</strong>');
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-16"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #142040 0%, #050D18 65%)" }}
      >
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-4 flex items-center gap-3 text-xs text-slate-500">
            <Link href="/blog" className="hover:text-accent transition-colors">← Blog</Link>
            <span>·</span>
            <span>{post.category}</span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl text-white leading-tight" style={serif}>
            {post.title}
          </h1>
          <p className="mt-5 text-lg text-slate-400 leading-relaxed">{post.description}</p>
          <p className="mt-6 text-sm text-slate-500">By Jim Woods</p>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-navy-950 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="prose-custom">
            {renderBody(post.body)}
          </div>
        </div>
      </article>

      {/* Author + CTA */}
      <section className="bg-navy-900 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border border-navy-700/60 bg-navy-800 p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">About the Author</p>
              <p className="text-white font-medium mb-2" style={serif}>Jim Woods</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Jim Woods is a published author and book publishing consultant based in Cuyahoga Falls, Ohio.
                With 9 books across multiple genres, he helps non-fiction writers bring their books into the world
                through coaching, editing, and self-publishing guidance.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href={TIDYCAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-accent-light transition-colors"
                >
                  Book a free call →
                </a>
                <a
                  href={SUBSTACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 hover:text-accent transition-colors"
                >
                  Subscribe on Substack →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles */}
      <section className="bg-navy-950 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-md border border-slate-600 px-6 py-2.5 text-sm text-slate-200 hover:border-accent hover:text-accent transition-colors"
          >
            ← Back to all articles
          </Link>
        </div>
      </section>
    </>
  );
}
