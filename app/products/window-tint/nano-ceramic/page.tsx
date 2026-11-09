import { InteriorPage, docMetadata } from "@/components/InteriorPage";
import { docs } from "@/lib/docs";

const page = docs.nano;
export const metadata = docMetadata(page);
export default function NanoCeramicPage() {
  return <InteriorPage page={page} />;
}
