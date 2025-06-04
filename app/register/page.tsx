import { RegisterForm } from "@/components/register-form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { auth } from "@/server/auth";

export default async function Register() {
  const session = await getServerSession(auth);

  if (session) {
    redirect("/");
  }
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <RegisterForm />
    </div>
  );
}
