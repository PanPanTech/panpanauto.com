"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-950/95 text-paper backdrop-blur">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="min-w-0" onClick={() => setOpen(false)}>
          <span className="block text-base font-semibold tracking-tight">PanPan Auto</span>
          <span className="block text-[11px] uppercase tracking-[0.16em] text-brass-bright">
            Authorized dealer
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-paper/85 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${site.phoneTel}`}
            className="hidden text-sm font-medium text-paper sm:inline"
          >
            {site.phoneDisplay}
          </a>
          <Link
            href="/contact/"
            className="rounded-full bg-brass-bright px-3 py-2 text-sm font-semibold text-navy-950 hover:bg-white sm:px-4"
          >
            Request a quote
          </Link>
          <button
            type="button"
            className="rounded-md border border-white/20 px-3 py-2 text-sm lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-2 text-center sm:hidden">
        <a className="text-sm font-semibold text-brass-bright" href={`tel:${site.phoneTel}`}>
          {site.phoneDisplay}
        </a>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-white/10 px-4 py-4 lg:hidden" aria-label="Mobile">
          <ul className="grid gap-3 text-sm">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)} className="block py-1">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={`tel:${site.phoneTel}`} className="block py-1 font-medium text-brass-bright">
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
