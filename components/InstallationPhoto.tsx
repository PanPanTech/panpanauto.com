import type { InstallationPhoto as InstallationPhotoData } from "@/lib/installations";
import { installationSrc } from "@/lib/installations";

type Props = {
  photo: InstallationPhotoData;
  className?: string;
  priority?: boolean;
  caption?: boolean;
  sizes?: string;
};

export function InstallationPhoto({
  photo,
  className = "",
  priority = false,
  caption = true,
  sizes = "(min-width: 1024px) 720px, 100vw",
}: Props) {
  return (
    <figure className={className}>
      <img
        src={installationSrc(photo)}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="block h-auto w-full"
      />
      {caption ? (
        <figcaption className="mt-2 text-xs leading-relaxed text-navy-800/80">{photo.caption}</figcaption>
      ) : null}
    </figure>
  );
}
