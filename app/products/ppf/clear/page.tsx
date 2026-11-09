import { InteriorPage, docMetadata } from "@/components/InteriorPage";
import { docs } from "@/lib/docs";

const page = docs.clear;
export const metadata = docMetadata(page);
export default function ClearPpfPage() {
  return <InteriorPage page={page} />;
}
