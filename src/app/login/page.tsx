import type { Metadata } from "next";
import LoginPage from "@/page/LoginPage";

export const metadata: Metadata = {
  title: "Sign In — Plucia",
  description: "Sign in to your Plucia workspace.",
};

export default function Page() {
  return <LoginPage />;
}
