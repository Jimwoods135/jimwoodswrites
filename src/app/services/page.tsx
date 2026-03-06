import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Jim Woods — Book Publishing Consultant",
  description:
    "Book coaching, developmental editing, formatting, self-publishing services, and book consulting for non-fiction and fiction authors.",
};


const TIDYCAL_URL = "https://tidycal.com/storybuilder/";

const serif = { fontFamily: "var(--font-dm-serif), Georgia, serif" };

const services = [
  {
    title: "Book Coaching",
    icon: "✍️",
    tagline: "From blank page to finished manuscript.",
    description:
      "Book coaching is for writers who have an idea but need structure, accountability, and an experienced guide to help them see it through. Jim works with you 1:1 to develop your book concept, build a chapter outline, and establish a writing process that actually fits your life. Whether you write in 30-minute bursts or dedicated sessions, Jim helps you build momentum and finish.",
    includes: [
      "Concept development and clarity sessions",
      "Chapter-by-chapter outlining",
      "Ongoing 1:1 writing sessions",
      "Accountability and milestone tracking",
      "Feedback on drafts as you go",
    ],
    ideal: "Aspiring authors who have an idea but don't know how to start — or who've started and gotten stuck.",
  },
  {
    title: "Developmental Editing",
    icon: "📝",
    tagline: "Make your manuscript the best version of itself.",
    description:
      "Developmental editing goes beyond line-level corrections. Jim reads your full manuscript and provides deep, structural feedback on how the book works as a whole — the logic of your argument, the flow between chapters, the clarity of your core idea, and whether each section earns its place. You'll receive a detailed editorial letter and annotated manuscript.",
    includes: [
      "Full manuscript read-through",
      "Detailed editorial letter",
      "Chapter-level structure feedback",
      "Clarity and argument analysis",
      "Annotated manuscript with inline notes",
    ],
    ideal: "Authors with a complete or near-complete draft who want expert eyes before finalizing.",
  },
  {
    title: "Book Formatting",
    icon: "📐",
    tagline: "Publication-ready interior and cover formatting.",
    description:
      "A great book deserves a professional presentation. Jim handles interior formatting for both print and digital formats — ensuring your book meets the specifications required by Amazon KDP, IngramSpark, and other major platforms. Clean typography, proper margins, and a polished layout that readers trust.",
    includes: [
      "Print interior formatting (KDP, IngramSpark)",
      "eBook formatting (EPUB, MOBI)",
      "Front and back matter setup",
      "Typography and layout optimization",
      "Final file delivery in required formats",
    ],
    ideal: "Authors ready to publish who need their manuscript formatted to professional standards.",
  },
  {
    title: "Self-Publishing Services",
    icon: "🚀",
    tagline: "Navigate the publishing process with confidence.",
    description:
      "Self-publishing has never been more accessible — but the process is full of decisions that can overwhelm first-time authors. Jim walks you through every step: setting up your KDP account, obtaining your ISBN, choosing your distribution channels, pricing your book, and preparing for launch. You'll publish with confidence instead of confusion.",
    includes: [
      "Amazon KDP account setup and optimization",
      "ISBN acquisition and assignment",
      "Distribution channel strategy",
      "Pricing and royalty guidance",
      "Launch checklist and preparation",
    ],
    ideal: "First-time self-publishers who want a knowledgeable guide through the entire process.",
  },
  {
    title: "Book Consulting",
    icon: "💡",
    tagline: "Strategic guidance at any stage of your project.",
    description:
      "Not every author needs a full coaching or editing engagement. Book consulting gives you direct access to Jim's expertise for targeted questions and decisions — whether you're choosing between publishing paths, evaluating a cover design, planning a launch, or trying to understand your options. Consulting sessions are focused, efficient, and designed to get you unstuck fast.",
    includes: [
      "Publishing path analysis (traditional vs. self)",
      "Launch strategy and planning",
      "Cover and title feedback",
      "Marketing and discoverability guidance",
      "Post-publication growth strategies",
    ],
    ideal: "Authors at any stage who need expert advice on specific decisions rather than a full engagement.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-20"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #142040 0%, #050D18 65%)" }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Services</p>
          <h1 className="text-5xl text-white" style={serif}>
            How I Help Authors
          </h1>
          <p className="mt-5 text-lg text-slate-400 leading-relaxed max-w-xl mx-auto">
            From first draft to finished book — hands-on guidance at every stage of the
            writing and publishing process.
          </p>
          <a
            href={TIDYCAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-base font-medium text-white hover:bg-accent-dark transition-colors"
          >
            Book a Free Discovery Call
          </a>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div key={service.title} className="flex flex-col gap-8 md:flex-row">
                <div className="md:w-12 flex-shrink-0">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl text-white mb-1" style={serif}>{service.title}</h2>
                  <p className="text-accent text-sm mb-4">{service.tagline}</p>
                  <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>

                  <div className="rounded-xl border border-navy-700/60 bg-navy-800 p-5 mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                      What&apos;s included
                    </p>
                    <ul className="space-y-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="text-accent mt-0.5">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-xs text-slate-500">
                    <strong className="text-slate-400">Ideal for:</strong> {service.ideal}
                  </p>
                </div>
              </div>
            ))}
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
            Not sure which service is right for you?
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Book a free discovery call. We&apos;ll talk through where you are in your project and
            figure out exactly what kind of support will move you forward.
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
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
