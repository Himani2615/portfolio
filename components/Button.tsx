"use client";

import { Box } from "@chakra-ui/react";
import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <Box
      backgroundColor="#66b2b2"
      p={15}
      borderRadius={10}
      maxWidth="fit-content"
      color="#1B1B1B"
      fontWeight="bold"
      cursor="pointer"
      mx="auto"
      _hover={{ bg: "rgb(70,150,150)" }}
    >
      {text}
    </Box>
  );
};

export default Button;
