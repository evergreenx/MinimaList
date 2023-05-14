import { Button } from "@/components/atoms/Button/Index";
import { ToastDemo } from "@/components/organisms/Toast/Index";
import React from "react";
import { motion, useAnimation } from "framer-motion";

export const FabButton = () => {
  const [open, setOpen] = React.useState(false);

  const fabControls = useAnimation();


  const handleFabClick = () => {
    fabControls.start("shake");

    setOpen(true);
  };

  const fabVariants = {
    shake: {
      x: [-5, 5, -5, 5, 0],
      transition: { duration: 0.5 },
    },
  };
  

  return (
    <motion.div className="fab__container flex justify-end p-4 right-0 bottom-0 absolute "
    
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
    >
      <ToastDemo setOpen={setOpen} open={open}
      title ={'calm down, this is just a demo , feature coming soon 😁'}
      />


<motion.div
  animate={fabControls}
  variants={fabVariants}
  onClick={handleFabClick}
>
<Button size="fab" type="button" >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9999 11.0001H2.15781M10.9999 2.15802V11.0001V2.15802ZM10.9999 11.0001V19.8422V11.0001ZM10.9999 11.0001H19.842H10.9999Z"
            stroke="#FAFAFA"
            stroke-width="2.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Button>
</motion.div>
    
    </motion.div>
  );
};
