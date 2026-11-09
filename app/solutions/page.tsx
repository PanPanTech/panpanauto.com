import { InteriorPage, docMetadata } from "@/components/InteriorPage";
import { docs } from "@/lib/docs";

const page = docs.solutions;
export const metadata = docMetadata(page);
export default function SolutionsPage() {
  return <InteriorPage page={page} />;
}
