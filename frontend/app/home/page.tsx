"use client";

import { Button } from "@/components";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const Page = () => {
  const { data: session, status } = useSession({
    required: true,

    
  });

  console.log(session);
  return (
    <div className="p-3">
      <Button size="large" type="submit">
        <Link href="/auth/login">Login</Link>
      </Button>
    </div>
  );
};

export default Page;
