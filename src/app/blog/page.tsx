import type { Metadata } from "next";
import ComingSoonPage from "@/page/ComingSoonPage";

export const metadata: Metadata = {
  title: "Blog — Plucia",
  description: "Our blog is coming soon.",
};

export default function Page() {
  return <ComingSoonPage title="Blog" />;
}
