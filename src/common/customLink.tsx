import React from "react";
import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

interface CustomLink {
  children: React.ReactNode;
  href: string;
}

const CustomLink = (props: CustomLink) => {
  return (
    <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.97 }}>
      <Link _hover={{ textDecoration: "none" }} as={RouterLink} to={props.href}>
        {props.children}
      </Link>
    </motion.div>
  );
};

export default CustomLink;
