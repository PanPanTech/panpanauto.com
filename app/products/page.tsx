import { InteriorPage, docMetadata } from "@/components/InteriorPage";
import { docs } from "@/lib/docs";

const page = docs.products;
export const metadata = docMetadata(page);
export default function ProductsIndexPage() {
  return <InteriorPage page={page} />;
}
