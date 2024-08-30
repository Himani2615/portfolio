"use client";
import { Box, Text } from "@chakra-ui/react";
import Heading from "./Heading";
import Button from "./Button";
import React from "react";

const Contact: React.FC = () => {
  return (
    <Box>
      <Heading text="Contact" />
      <Text my={24} ml={16}>
        Have a project in mind or just want to say hi? Feel free to reach out!
      </Text>
      <Button text="Get in touch" />
    </Box>
  );
};

export default Contact;
