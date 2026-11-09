import { InteriorPage, docMetadata } from "@/components/InteriorPage";
import { docs } from "@/lib/docs";

const page = docs.wholesale;
export const metadata = docMetadata(page);
export default function WholesalePage() {
  return <InteriorPage page={page} />;
}
