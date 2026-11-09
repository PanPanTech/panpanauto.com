import { InteriorPage, docMetadata } from "@/components/InteriorPage";
import { docs } from "@/lib/docs";

const page = docs.photochromic;
export const metadata = docMetadata(page);
export default function PhotochromicPage() {
  return <InteriorPage page={page} />;
}
