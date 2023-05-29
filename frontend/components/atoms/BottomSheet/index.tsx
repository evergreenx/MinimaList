import React, { useState } from "react";
import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

interface BottomSheetProps {
  openBottomSheet: boolean;
  setOpenBottomSheet: (openBottomSheet: boolean) => void;
  children: React.ReactNode;
}

const Index = ({
  openBottomSheet,
  setOpenBottomSheet,
  children,
}: BottomSheetProps) => {
  const handleDismissSheet = () => {
    setOpenBottomSheet(false);
  };

  //   const [open, setOpen] = useState(false);
  return (
    <BottomSheet
      open={openBottomSheet}
      onDismiss={handleDismissSheet}
      snapPoints={({ maxHeight }) => [maxHeight / 2, maxHeight]}
      maxHeight={650}
      header={
        <h1 className="font-semibold text-[17px] text-[#000000]">Task</h1>
      }
    >
      {children}
    </BottomSheet>
  );
};

export default Index;
