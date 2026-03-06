import Link from "next/link";


const TIDYCAL_URL = "https://tidycal.com/storybuilder/";
const SUBSTACK_URL = "https://authorjimwoods.substack.com/";
const AMAZON_URL = "https://www.amazon.com/stores/Jim-Woods/author/B00EYDA7OS";
const LINKEDIN_URL = "https://www.linkedin.com/in/jimwoodspage";
const YOUTUBE_URL = "https://www.youtube.com/playlist?list=PL82pjZmiW62RvcvYgytT-EJr_xfV9eZXJ";
const SPOTIFY_URL = "https://open.spotify.com/show/5l20jU0Nc7BAXxvQBr69JZ";

export default function Footer() {
  return (
    <footer className="border-t border-navy-700/50 bg-navy-900">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <p
              className="text-xl text-white"
              style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
            >
              Jim Woods
            </p>
            <p className="mt-2 text-sm text-slate-400 max-w-xs leading-relaxed">
              Author and book publishing consultant based in Cuyahoga Falls, Ohio.
              Let&apos;s bring your book into the world.
            </p>
            <a
              href={TIDYCAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-dark transition-colors"
            >
              Book a Free Call
            </a>
          </div>

          {/* Site links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
              Navigate
            </p>
            <ul className="space-y-2.5 text-sm">
              {[
                ["Services", "/services"],
                ["Books", "/books"],
                ["About", "/about"],
                ["Podcast", "/podcast"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
              Connect
            </p>
            <ul className="space-y-2.5 text-sm">
              {[
                ["Amazon", AMAZON_URL],
                ["LinkedIn", LINKEDIN_URL],
                ["YouTube", YOUTUBE_URL],
                ["Spotify", SPOTIFY_URL],
                ["Newsletter", SUBSTACK_URL],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-navy-700/50 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Jim Woods. All rights reserved.</p>
          <p>Cuyahoga Falls, OH</p>
        </div>
      </div>
    </footer>
  );
}
