import { Button } from "@/components";
import { SwitchToday } from "@/components/atoms/Switch";
import React from "react";

const Index = () => {
  return (
    <div className="p-3">
      <h1 className="text-[34px] font-bold  text-[#000000] tracking-tighter mt-[37px]">
        Add a task
      </h1>

      <div className="task__name mt-[37px] flex space-x-[17px] items-center">
        <label className="font-semibold text-[20px] text-[#000000]">Name</label>
        <input
          type="text"
          placeholder="Enter task name"
          className="border-0  text-[#3C3C43] outline-none text-sm font-normal border-b-[0.3px] border-[#000000] p-2 w-full"
        />
      </div>

      <div className="task__time mt-[30px] flex space-x-[17px] items-center">
        <label className="font-semibold text-[20px] text-[#000000]">Hour</label>
        <input
          type="text"
          placeholder="Enter task name"
          className="border-0  text-[#3C3C43] outline-none text-sm font-normal border-b-[0.3px] border-[#000000] p-2 w-full"
        />
      </div>

      <div
        className="task__istoday 
      mt-[30px] mb-[62px] flex justify-between items-center
      "
      >
        <label className="font-semibold text-[20px] text-[#000000]">
          Today
        </label>

        <SwitchToday />
      </div>

  


      



      <Button size="large">
     Done
      </Button>


      <p className="text-[#3C3C43] font-normal tracking-tighter text-[13px] mt-[14px]">
      If you disable today, the task will be considered as tomorrow
      </p>
    </div>
  );
};

export default Index;
