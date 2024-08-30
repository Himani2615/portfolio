import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const page = () => {
  return (
    <Box bg={"#202020"}>
      <Center>
        <Flex direction={"column"} px={8}>
          <Navbar />
        </Flex>
      </Center>
    </Box>
  );
};

export default page;
