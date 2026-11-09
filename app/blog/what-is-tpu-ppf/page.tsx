import { InteriorPage, docMetadata } from "@/components/InteriorPage";
import { docs } from "@/lib/docs";

const page = docs.tpuGuide;
export const metadata = docMetadata(page);
export default function TpuGuidePage() {
  return <InteriorPage page={page} />;
}
