// app/login/page.tsx
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { auth } from "@/server/auth";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import BarChartComponent from "@/components/bar-chart";

export default async function LoginPage() {
  const session = await getServerSession(auth);

  if (!session) {
    redirect("/login");
  }

  if (session?.user.role === "admin") {
    return (
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full max-screen-xl mx-auto p-4 flex justify-center">
          <div className="flex w-full flex-col items-center gap-3  max-w-lg">
            <h3>You are an admin, welcome!</h3>
            <BarChartComponent />
          </div>
        </div>
      </SidebarProvider>
    );
  }

  return <p>You are not authorized to view this page!</p>;
}
