import { vehicleCaption, shots, type ShotId } from "@/lib/vehicles";

type Props = {
  id: ShotId;
  className?: string;
  priority?: boolean;
  caption?: boolean;
  sizes?: string;
};

export function VehicleFigure({
  id,
  className = "",
  priority = false,
  caption = true,
  sizes = "(min-width: 1024px) 720px, 100vw",
}: Props) {
  const shot = shots[id];
  return (
    <figure className={className}>
      <img
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="block h-auto w-full"
      />
      {caption ? (
        <figcaption className="mt-2 text-xs leading-relaxed text-navy-800/80">
          {vehicleCaption}{" "}
          <a className="underline decoration-brass/70 underline-offset-2" href={shot.sourcePath}>
            {shot.model} reference
          </a>
          .
        </figcaption>
      ) : null}
    </figure>
  );
}
