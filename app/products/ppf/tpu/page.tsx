import { InteriorPage, docMetadata } from "@/components/InteriorPage";
import { docs } from "@/lib/docs";

const page = docs.tpu;
export const metadata = docMetadata(page);
export default function TpuPpfPage() {
  return <InteriorPage page={page} />;
}
