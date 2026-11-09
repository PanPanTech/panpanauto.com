import { InteriorPage, docMetadata } from "@/components/InteriorPage";
import { docs } from "@/lib/docs";

const page = docs.about;
export const metadata = docMetadata(page);
export default function AboutPage() {
  return <InteriorPage page={page} />;
}
