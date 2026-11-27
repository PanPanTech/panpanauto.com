import { InteriorPage, docMetadata } from "@/components/InteriorPage";
import { docs } from "@/lib/docs";

const page = docs.nanolink;
export const metadata = docMetadata(page);
export default function NanolinkPage() {
  return <InteriorPage page={page} />;
}
