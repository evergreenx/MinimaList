import BottomSheet from "@/components/atoms/BottomSheet";
import AddTaskForm from "@/components/molecules/AddTaskForm";
import React from "react";

interface BottomSheetProps {
  openBottomSheet: boolean;
  setOpenBottomSheet: (openBottomSheet: boolean) => void;
}

const Index = ({ openBottomSheet, setOpenBottomSheet }: BottomSheetProps) => {
  return (
    <BottomSheet
      openBottomSheet={openBottomSheet}
      setOpenBottomSheet={setOpenBottomSheet}
    >


      <AddTaskForm />
    </BottomSheet>
  );
};

export default Index;
