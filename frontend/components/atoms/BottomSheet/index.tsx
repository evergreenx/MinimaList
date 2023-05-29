import React, { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

const Index = () => {
  const [open, setOpen] = useState(false);
  return <BottomSheet open={open}>My awesome content here</BottomSheet>;
};

export default Index;
