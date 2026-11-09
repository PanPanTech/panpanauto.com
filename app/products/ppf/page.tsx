import { InteriorPage, docMetadata } from "@/components/InteriorPage";
import { docs } from "@/lib/docs";

const page = docs.ppf;
export const metadata = docMetadata(page);
export default function PpfPage() {
  return <InteriorPage page={page} />;
}
