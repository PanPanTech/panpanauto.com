import Link from "next/link";
import { VehicleFigure } from "@/components/VehicleFigure";

export default function NotFound() {
  return (
    <div className="mx-auto grid max-w-page gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-navy-950">That page is not on this site</h1>
        <p className="mt-4 text-ink/75">
          The wholesale catalog is still a Phase 1 map. Start from the film index or send an inquiry.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/" className="rounded-full bg-navy-900 px-4 py-2 text-sm font-semibold text-white">Home</Link>
          <Link href="/contact/" className="rounded-full border border-navy-900 px-4 py-2 text-sm font-semibold">Contact</Link>
        </div>
      </div>
      <VehicleFigure id="yu7Dusk" className="overflow-hidden rounded-3xl" />
    </div>
  );
}
