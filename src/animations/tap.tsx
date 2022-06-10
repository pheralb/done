import { TapProps } from "@/interfaces/animations";
import { motion } from "framer-motion";

const Tap = (props: TapProps) => {
  return (
    <motion.div whileTap={{ scale: 0.98 }}>
      {props.children}
    </motion.div>
  );
};

export default Tap;
