import { Button } from "@/components";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Button size="large" type="submit">
        <Link href="/auth/login">Login</Link>
      </Button>
    </div>
  );
};

page.propTypes = {};

export default page;
