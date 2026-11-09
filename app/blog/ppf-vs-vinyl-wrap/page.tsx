import { InteriorPage, docMetadata } from "@/components/InteriorPage";
import { docs } from "@/lib/docs";

const page = docs.vinylGuide;
export const metadata = docMetadata(page);
export default function VinylGuidePage() {
  return <InteriorPage page={page} />;
}
