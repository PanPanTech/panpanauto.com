import { InteriorPage, docMetadata } from "@/components/InteriorPage";
import { docs } from "@/lib/docs";

const page = docs.matte;
export const metadata = docMetadata(page);
export default function MattePpfPage() {
  return <InteriorPage page={page} />;
}
