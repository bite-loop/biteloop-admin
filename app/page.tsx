import { redirect } from "next/navigation";
import { verifyAuth } from "@/helper/auth-helper/verify";

export default async function Home() {
  const user = await verifyAuth();

  if (user) {
    redirect("/dashboard");
  }

  redirect("/login");
}