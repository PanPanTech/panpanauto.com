import { InteriorPage, docMetadata } from "@/components/InteriorPage";
import { docs } from "@/lib/docs";

const page = docs.tint;
export const metadata = docMetadata(page);
export default function WindowTintPage() {
  return <InteriorPage page={page} />;
}
