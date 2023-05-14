"use client";

import { Button, ToastDemo } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";

import { signOut } from "next-auth/react";
import React from "react";
import { FabButton } from "@/components/molecules/FabButton/Index";

export default function Home() {
  const { data: session, status } = useSession({
    required: true,
  });

  const [open, setOpen] = React.useState(false);

  return (
    <div className="h-full">
      <main className="flex justify-center  p-24 bg-white">
        <motion.div
          className="userdetails py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {session && (
            <>
   
              <h1 className="py-2 font-extrabold">
                username : {session?.user?.name}
              </h1>
              <h1 className="py-2 font-extrabold">
                email: {session?.user?.email}
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="welcome__text text-center"
              >
                <Button
                  size="large"
                  type="submit"
                  onClick={() => signOut({ redirect: false, callbackUrl: "/" })}
                >
                  Logout
                </Button>
              </motion.div>
            </>
          )}
        </motion.div>
      </main>

      {/* fab button */}

      <FabButton />
    </div>
  );
}
