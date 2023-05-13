import { Button } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/auth/login">
        <Button size="large" type="submit">
          Login
        </Button>
      </Link>
    </main>
  );
}
