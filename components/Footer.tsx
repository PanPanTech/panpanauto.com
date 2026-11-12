import Link from "next/link";
import { footerNav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-paper">
      <div className="mx-auto grid max-w-page gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <p className="text-lg font-semibold">PanPan Auto</p>
          <p className="mt-3 text-sm leading-6 text-paper/75">
            Multi-brand authorized dealer and distributor for auto film and selected parts
            (ISF, NKODA, NANOLINK). Operated by {site.operator}. Not a factory website.
          </p>
          <p className="mt-4 text-sm">
            <a className="font-semibold text-brass-bright" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
          </p>
          <dl className="mt-4 space-y-1 text-sm text-paper/70">
            <div className="flex gap-2">
              <dt>Email</dt>
              <dd>
                <a className="hover:text-white" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt>WeChat</dt>
              <dd>{site.wechat}</dd>
            </div>
            <div className="flex gap-2">
              <dt>Address</dt>
              <dd>{site.address}</dd>
            </div>
            <div className="flex gap-2">
              <dt>Hours</dt>
              <dd>{site.hours}</dd>
            </div>
          </dl>
        </div>
        {footerNav.map((group) => (
          <div key={group.title}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-brass-bright">
              {group.title}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-paper/80 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-page flex-col gap-2 px-4 py-5 text-xs text-paper/60 sm:px-6 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} PanPan Auto. Studio reference photos are Xiaomi EV images, not PanPan
            installations. Shop stills are partner-shop work.
          </p>
          <p>panpanauto.com · Specifications, MOQ, warranty, and lead time remain TBD until confirmed.</p>
        </div>
      </div>
    </footer>
  );
}
