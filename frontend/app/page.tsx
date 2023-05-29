"use client";

import { Button } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";

import { signOut } from "next-auth/react";
import React from "react";
import { FabButton } from "@/components/molecules/FabButton/Index";
import AddTask from "@/components/organisms/AddTask/Index";

export default function Home() {
  const { data: session, status } = useSession({
    required: true,
  });

  const [openBottomSheet, setOpenBottomSheet] = React.useState(false);

  return (
    <div className="h-full">
      <main className="flex justify-center  p-24 ">
        <AddTask
          openBottomSheet={openBottomSheet}
          setOpenBottomSheet={setOpenBottomSheet}
        />
        <motion.div
          className="userdetails py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {session && (
            <>
              <h1 className="py-2 text-xs font-extrabold">
                username : {session?.user?.name}
              </h1>
              <h1 className="py-2 text-xs font-extrabold">
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

      <FabButton
        openBottomSheet={openBottomSheet}
        setOpenBottomSheet={setOpenBottomSheet}
      />
    </div>
  );
}
