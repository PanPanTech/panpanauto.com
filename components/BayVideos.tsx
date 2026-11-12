import { ProcessVideo } from "@/components/ProcessVideo";
import { bayVideos } from "@/lib/installations";

export function BayVideos() {
  return (
    <section className="mt-16" aria-labelledby="bay-heading">
      <h2 id="bay-heading" className="text-2xl font-semibold tracking-tight text-navy-950">
        From the bay
      </h2>
      <p className="prose-measure mt-3 leading-7 text-ink/80">
        Short process clips from the same partner shop. The film series is not labeled. Playback stays on this page.
      </p>
      {bayVideos.length > 0 ? (
        <ul className="mt-8 grid items-start gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {bayVideos.map((video) => (
            <li key={video.src} className="mx-auto w-full max-w-sm">
              <ProcessVideo video={video} className="rounded-2xl" />
              <h3 className="mt-3 font-semibold text-navy-950">{video.title}</h3>
              <p className="mt-1 text-sm leading-6 text-ink/75">{video.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6 max-w-3xl rounded-2xl border border-line bg-white px-5 py-6 text-sm leading-6 text-ink/75">
          Process clips will be published in this section when the files are in place.
        </p>
      )}
    </section>
  );
}
