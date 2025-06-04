"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  return (
    <button
      className="flex items-center gap-2"
      onClick={() => signOut({ callbackUrl: "/login" })}
    >
      <LogOut /> Logout
    </button>
  );
}
