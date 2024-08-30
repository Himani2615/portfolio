import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Heading from "./Heading";

const Bio = () => {
  return (
    <div>
      <Heading text="Bio" />
      <VStack align="start" textAlign="left">
        <Box>
          <HStack mt={20} alignItems="flex-start">
            <Text fontWeight="bold">2005</Text>
            <Text ml={8}>Born in Moradabad,India</Text>
          </HStack>
          <HStack alignItems="flex-start" mt={8} maxW="550">
            <Text fontWeight="bold">2022</Text>
            <Text ml={8}>
              Completed my school education with a focus on Science and
              Mathematics, where I developed a strong interest in technology and
              programming.
            </Text>
          </HStack>

          <HStack alignItems="flex-start" mt={8} maxW="550">
            <Text fontWeight="bold">2023</Text>
            <Text ml={8}>
              Started my engineering degree at IGDTUW,Delhi in CSE specialising
              in AI/ML. Currently developing my skills and expertise in various
              domains.
            </Text>
          </HStack>
        </Box>
      </VStack>
    </div>
  );
};

export default Bio;
