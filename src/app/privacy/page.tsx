import type { Metadata } from "next";
import ComingSoonPage from "@/page/ComingSoonPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Plucia",
  description: "Our privacy policy is coming soon.",
};

export default function Page() {
  return <ComingSoonPage title="Privacy Policy" />;
}
