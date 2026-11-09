import { InteriorPage, docMetadata } from "@/components/InteriorPage";
import { docs } from "@/lib/docs";

const page = docs.blog;
export const metadata = docMetadata(page);
export default function BlogPage() {
  return <InteriorPage page={page} />;
}
