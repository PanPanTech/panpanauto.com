import { InteriorPage, docMetadata } from "@/components/InteriorPage";
import { docs } from "@/lib/docs";

const page = docs.color;
export const metadata = docMetadata(page);
export default function ColorPpfPage() {
  return <InteriorPage page={page} />;
}
