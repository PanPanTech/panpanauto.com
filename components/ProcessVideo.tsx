import type { BayVideo } from "@/lib/installations";

type Props = {
  video: BayVideo;
  autoPlay?: boolean;
  loop?: boolean;
  className?: string;
  preload?: "none" | "metadata" | "auto";
};

export function ProcessVideo({
  video,
  autoPlay = false,
  loop = false,
  className = "",
  preload = "metadata",
}: Props) {
  return (
    <video
      className={`block h-auto w-full bg-navy-950 ${className}`}
      width={video.width}
      height={video.height}
      controls
      muted
      playsInline
      poster={video.poster}
      preload={preload}
      autoPlay={autoPlay}
      loop={loop}
      aria-label={video.description}
    >
      <source src={video.src} type={video.type ?? "video/mp4"} />
    </video>
  );
}
