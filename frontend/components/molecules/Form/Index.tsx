"use client";

import { Button, Input } from "@/components";
import React from "react";

export const Form = () => {
  // form molecule

  return (
    <div className="bg-white w-full">
      <form>
        <div className="email_container py-10">
          <Input
            label="Email"
            placeholder="Email"
            type="email"
            id="email"
            setter={() => {}}
            value={""}
            className="w-full border-2 border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        <div className="password__container">
          <Input
            label="password"
            placeholder="password"
            className="w-full border-2 border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            type="password"
            id="password"
            setter={() => {}}
            value={""}
          />
        </div>

        <div className="button__container my-10">
          <Button size="large" type="submit">
            Button
          </Button>
        </div>
      </form>
    </div>
  );
};
