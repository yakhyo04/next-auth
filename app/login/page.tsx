// app/login/page.tsx
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { auth } from "@/server/auth";

import { LoginForm } from "@/components/login-form";

export default async function LoginPage() {
  const session = await getServerSession(auth);

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <LoginForm />
    </div>
  );
}
