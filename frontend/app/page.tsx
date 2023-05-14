"use client";

import { Button } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession({
    required: true,
  });

  console.log({ session, status });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/auth/login">
        {session?.user?.name}
        <Button size="large" type="submit" onClick={() => signOut(

          { redirect: false, callbackUrl: "/" }
        )}>
          Logins
        </Button>
      </Link>
    </main>
  );
}
