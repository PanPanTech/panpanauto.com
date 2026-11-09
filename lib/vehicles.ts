export const vehicleCaption =
  "Xiaomi EV reference photo from the public pages at xiaomiev.com. Not a PanPan Auto installation, delivery, or case study.";

export type VehicleShot = {
  src: string;
  width: number;
  height: number;
  alt: string;
  model: string;
  sourcePath: string;
};

const source = "https://www.xiaomiev.com";

export const shots = {
  su7Coast: {
    src: "/vehicles/su7-coast.webp",
    width: 1920,
    height: 1080,
    model: "Xiaomi SU7",
    sourcePath: `${source}/su7`,
    alt: "Xiaomi SU7 sedan in a coastal studio setting, shown as a paint-finish reference photo, not a PanPan installation.",
  },
  n70: {
    src: "/vehicles/n70-studio.webp",
    width: 1600,
    height: 900,
    model: "Xiaomi N70",
    sourcePath: source,
    alt: "Xiaomi N70 SUV in a studio setting, shown as a vehicle reference photo, not a PanPan installation.",
  },
  n90: {
    src: "/vehicles/n90-studio.webp",
    width: 1600,
    height: 900,
    model: "Xiaomi N90",
    sourcePath: source,
    alt: "Xiaomi N90 SUV in a studio setting with a raised roof tent, shown as a vehicle reference photo, not a PanPan installation.",
  },
  yu7Showroom: {
    src: "/vehicles/yu7-showroom.webp",
    width: 1600,
    height: 976,
    model: "Xiaomi YU7",
    sourcePath: `${source}/customization`,
    alt: "Xiaomi YU7 in a purple showroom, shown as a color-finish reference photo, not a PanPan installation.",
  },
  yu7Street: {
    src: "/vehicles/yu7-street.webp",
    width: 1600,
    height: 900,
    model: "Xiaomi YU7",
    sourcePath: `${source}/xiaomi/yu7`,
    alt: "Green Xiaomi YU7 parked on a city street, shown as a color-film reference photo, not a PanPan installation.",
  },
  yu7Mountain: {
    src: "/vehicles/yu7-mountain.webp",
    width: 1600,
    height: 900,
    model: "Xiaomi YU7",
    sourcePath: `${source}/xiaomi/yu7`,
    alt: "Green Xiaomi YU7 on a mountain road, shown as a vehicle reference photo, not a PanPan installation.",
  },
  yu7Dusk: {
    src: "/vehicles/yu7-dusk.webp",
    width: 1600,
    height: 900,
    model: "Xiaomi YU7",
    sourcePath: `${source}/xiaomi/yu7`,
    alt: "Xiaomi YU7 at dusk on a coastal road, shown as a glass and paint reference photo, not a PanPan installation.",
  },
  yu7Aurora: {
    src: "/vehicles/yu7-aurora.webp",
    width: 1600,
    height: 900,
    model: "Xiaomi YU7",
    sourcePath: `${source}/xiaomi/yu7`,
    alt: "Rear view of a Xiaomi YU7 at twilight, shown as a gloss-finish reference photo, not a PanPan installation.",
  },
  yu7Silhouette: {
    src: "/vehicles/yu7-silhouette.webp",
    width: 1600,
    height: 874,
    model: "Xiaomi YU7",
    sourcePath: `${source}/xiaomi/yu7`,
    alt: "Xiaomi YU7 silhouette in a dark studio, shown as a finish reference photo, not a PanPan installation.",
  },
  cabinDay: {
    src: "/vehicles/cabin-day.webp",
    width: 1600,
    height: 900,
    model: "Xiaomi SU7",
    sourcePath: `${source}/su7`,
    alt: "Xiaomi SU7 cabin in daylight, showing windshield and side glass as a window-tint reference, not a PanPan installation.",
  },
  cabinNight: {
    src: "/vehicles/cabin-night.webp",
    width: 1600,
    height: 998,
    model: "Xiaomi SU7",
    sourcePath: `${source}/su7`,
    alt: "Xiaomi SU7 cabin at night with ambient lighting, shown as a window-tint reference, not a PanPan installation.",
  },
  cabinYu7: {
    src: "/vehicles/cabin-yu7.webp",
    width: 1600,
    height: 998,
    model: "Xiaomi YU7",
    sourcePath: `${source}/xiaomi/yu7`,
    alt: "Xiaomi YU7 front cabin and windshield, shown as a window-tint reference, not a PanPan installation.",
  },
} as const satisfies Record<string, VehicleShot>;

export type ShotId = keyof typeof shots;
