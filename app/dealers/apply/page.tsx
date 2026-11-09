import { InteriorPage, docMetadata } from "@/components/InteriorPage";
import { docs } from "@/lib/docs";

const page = docs.dealers;
export const metadata = docMetadata(page);
export default function DealerApplyPage() {
  return <InteriorPage page={page} />;
}
