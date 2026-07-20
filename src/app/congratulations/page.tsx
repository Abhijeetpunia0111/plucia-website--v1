import type { Metadata } from "next";
import CongratsPage from "@/page/CongratsPage";

export const metadata: Metadata = {
  title: "You're on the list — Plucia",
  description: "You've joined the Plucia waitlist.",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const { email } = await searchParams;
  return <CongratsPage email={email ?? ""} />;
}
