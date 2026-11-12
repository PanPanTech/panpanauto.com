export type InstallationPhoto = {
  file: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  vehicle: string;
  setting: string;
};

export type InstallationCase = {
  id: string;
  title: string;
  summary: string;
  photos: readonly InstallationPhoto[];
};

export type BayVideo = {
  src: string;
  poster: string;
  width: number;
  height: number;
  title: string;
  description: string;
  type?: string;
};

export const installationsPath = "/installations/";

const photo = (
  file: string,
  width: number,
  height: number,
  vehicle: string,
  setting: string,
  alt: string,
  caption = setting,
): InstallationPhoto => ({ file, width, height, vehicle, setting, alt, caption });

export const installationCases: readonly InstallationCase[] = [
  {
    id: "volkswagen-suv",
    title: "Volkswagen SUV",
    summary:
      "A Volkswagen SUV in the bay, including the light bar and red brake calipers. These are finished-bay stills. The film series is not labeled.",
    photos: [
      photo(
        "vw-suv-front.jpg",
        2000,
        1340,
        "Volkswagen SUV",
        "Front view in the finished bay.",
        "Black Volkswagen SUV, front view with a full-width light bar, in a workshop bay.",
      ),
      photo(
        "vw-suv-side.jpg",
        2000,
        1125,
        "Volkswagen SUV",
        "Side profile in the bay.",
        "Black Volkswagen SUV in profile inside a glass-walled installation bay.",
      ),
      photo(
        "vw-suv-front-angle.jpg",
        2000,
        1125,
        "Volkswagen SUV",
        "Front three-quarter in the bay.",
        "Black Volkswagen SUV, front three-quarter view, in a workshop bay.",
      ),
      photo(
        "vw-suv-rear.jpg",
        2000,
        1125,
        "Volkswagen SUV",
        "Rear three-quarter in the bay.",
        "Black Volkswagen SUV, rear three-quarter view, in a workshop bay.",
      ),
    ],
  },
  {
    id: "volkswagen-crossover",
    title: "Volkswagen crossover",
    summary:
      "Profile, front three-quarter, and close details of a Volkswagen crossover in the same shop. The film series is not labeled.",
    photos: [
      photo(
        "vw-crossover-side.jpg",
        2000,
        1125,
        "Volkswagen crossover",
        "Side profile in the bay.",
        "Black Volkswagen crossover in profile inside a glass-walled installation bay.",
      ),
      photo(
        "vw-crossover-front-angle.jpg",
        2000,
        1166,
        "Volkswagen crossover",
        "Front three-quarter in the bay.",
        "Black Volkswagen crossover, front three-quarter view, in an installation bay.",
      ),
      photo(
        "vw-crossover-front-close.jpg",
        2000,
        1125,
        "Volkswagen crossover",
        "Grille and headlight close-up.",
        "Close view of the grille and headlight on a black Volkswagen crossover.",
      ),
      photo(
        "vw-crossover-hood-vent.jpg",
        2000,
        1125,
        "Volkswagen crossover",
        "Hood vent detail.",
        "Hood vent on the black paint of a Volkswagen crossover.",
      ),
      photo(
        "vw-crossover-light-detail.jpg",
        2000,
        1125,
        "Volkswagen crossover",
        "Headlight and fender close-up.",
        "Headlight and front fender on a black Volkswagen crossover.",
      ),
    ],
  },
  {
    id: "bmw-suv",
    title: "BMW SUV",
    summary: "Front three-quarter and profile of a BMW SUV in the workshop. The film series is not labeled.",
    photos: [
      photo(
        "bmw-front-angle.jpg",
        2000,
        1125,
        "BMW SUV",
        "Front three-quarter in the bay.",
        "Black BMW SUV, front three-quarter view, in a workshop bay.",
      ),
      photo(
        "bmw-side.jpg",
        2000,
        1125,
        "BMW SUV",
        "Side profile in the bay.",
        "Black BMW SUV in profile inside a glass-walled installation bay.",
      ),
    ],
  },
  {
    id: "land-rover-discovery",
    title: "Land Rover Discovery",
    summary: "Rear three-quarter of a Land Rover Discovery in the shop. V8 HSE badging is visible on the tailgate.",
    photos: [
      photo(
        "discovery-rear.jpg",
        1280,
        1635,
        "Land Rover Discovery",
        "Rear three-quarter in the shop.",
        "Silver Land Rover Discovery, rear three-quarter view, in a shop. V8 HSE badging is visible on the tailgate.",
        "Rear three-quarter in the shop. V8 HSE badging is visible on the tailgate.",
      ),
    ],
  },
  {
    id: "infiniti",
    title: "Infiniti",
    summary: "An Infiniti in the LED-ceiling bay. The film series is not labeled.",
    photos: [
      photo(
        "infiniti-bay.jpg",
        1279,
        1633,
        "Infiniti",
        "In the LED-ceiling bay.",
        "Dark green Infiniti in a bay under an LED ceiling.",
      ),
    ],
  },
  {
    id: "matte-off-road-suv",
    title: "Matte-finished off-road SUV",
    summary: "Rear three-quarter of a matte-finished off-road SUV with a roof rack and side ladder.",
    photos: [
      photo(
        "matte-offroad.jpg",
        1279,
        1706,
        "Matte-finished off-road SUV",
        "Rear three-quarter, with a roof rack and side ladder.",
        "Matte-finished off-road SUV, rear three-quarter view, with a roof rack and side ladder, inside a shop.",
      ),
    ],
  },
];

export function installationSrc(photo: InstallationPhoto) {
  return `/installations/${photo.file}`;
}

export function findInstallation(file: string) {
  for (const item of installationCases) {
    const match = item.photos.find((entry) => entry.file === file);
    if (match) return { item, photo: match };
  }
  throw new Error(`Unknown installation photo: ${file}`);
}

const homepageFiles = ["vw-crossover-side.jpg", "vw-suv-front.jpg", "discovery-rear.jpg"] as const;

export const homepageInstallationTiles = homepageFiles.map((file) => {
  const found = findInstallation(file);
  return { ...found.photo, caseId: found.item.id };
});

export const heroInstallation = findInstallation("vw-crossover-side.jpg");

/**
 * Process clips for /installations/ "From the bay", in play order.
 * Files are the supplied H.264 masters in public/installations/. Do not re-encode,
 * rotate, or substitute stock video. The homepage loop uses the first clip.
 */
export const bayVideos: readonly BayVideo[] = [
  {
    src: "/installations/process-squeegee.mp4",
    poster: "/installations/process-squeegee.jpg",
    width: 720,
    height: 1280,
    title: "Squeegee on the hood",
    description: "Squeegeeing paint protection film on a hood in a partner shop bay.",
  },
  {
    src: "/installations/process-ford-grille.mp4",
    poster: "/installations/process-ford-grille.jpg",
    width: 720,
    height: 1280,
    title: "Headlight and grille",
    description: "Rinsing and working film around a headlight and grille.",
  },
  {
    src: "/installations/process-bumper.mp4",
    poster: "/installations/process-bumper.jpg",
    width: 720,
    height: 1280,
    title: "Hood edge",
    description: "Trimming film along the hood edge at the windshield.",
  },
];

export const homepageProcessClip = bayVideos[0];
