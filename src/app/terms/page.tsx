import type { Metadata } from "next";
import ComingSoonPage from "@/page/ComingSoonPage";

export const metadata: Metadata = {
  title: "Terms of Service — Plucia",
  description: "Our terms of service are coming soon.",
};

export default function Page() {
  return <ComingSoonPage title="Terms of Service" />;
}
