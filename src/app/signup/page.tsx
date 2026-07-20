import type { Metadata } from "next";
import SignupPage from "@/page/SignupPage";

export const metadata: Metadata = {
  title: "Get Started — Plucia",
  description: "Create your Plucia account and tell us how you sell.",
};

export default function Page() {
  return <SignupPage />;
}
