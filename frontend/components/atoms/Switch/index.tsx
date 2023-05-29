import React from "react";
import * as Switch from "@radix-ui/react-switch";
import { Button } from "@/components";

export const SwitchToday = () => (
  <form>
    <div
      className="flex items-center"
      style={{ display: "flex", alignItems: "center" }}
    >
      <label
        className="text-white text-[15px] leading-none pr-[15px]"
        htmlFor="airplane-mode"
      >
        Airplane mode
      </label>
      <Switch.Root
        className="w-[51px] h-[31px] bg-black rounded-full relative  data-[state=checked]:bg-[#34C759] outline-none cursor-default"
        id="airplane-mode"
        // style={{ "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)" }}
      >
        <Switch.Thumb className="block w-[27px] h-[27px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>


     
    </div>

  
  </form>
);
