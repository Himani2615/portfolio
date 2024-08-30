"use client";

import { Stack, Text, IconButton, Tooltip, VStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import React from "react";
import Heading from "./Heading";

const Socials = () => {
  return (
    <div>
      <Heading text="Socials" />
      <VStack mt={30} spacing={10} alignItems="flex-start" ml="15px">
        <Stack
          direction="row"
          align="center"
          spacing={4}
          p={8}
          borderRadius={10}
          cursor="pointer"
          _hover={{ bgColor: "rgb(50,110,115)" }}
          onClick={() => window.open("https://github.com/himani2615", "_blank")}
        >
          <IconButton
            icon={<FaGithub />}
            aria-label="GitHub"
            boxSize={30}
            border="none"
            cursor="pointer"
            borderRadius={20}
            color="rgb(129, 230, 217)"
          />
          <Text
            fontSize="lg"
            fontWeight="bold"
            color="rgb(129, 230, 217)"
            mx={15}
          >
            @himani2615
          </Text>
        </Stack>

        <Stack
          direction="row"
          align="center"
          spacing={4}
          p={8}
          borderRadius={10}
          cursor="pointer"
          _hover={{ bgColor: "rgb(50,110,115)" }}
          onClick={() =>
            window.open("https://linkedin.com/in/himani-singh-in", "_blank")
          }
        >
          <IconButton
            icon={<FaLinkedin />}
            aria-label="Linkedin"
            boxSize={30}
            border="none"
            cursor="pointer"
            borderRadius={20}
            color="rgb(129, 230, 217)"
          />
          <Text
            fontSize="lg"
            fontWeight="bold"
            color="rgb(129, 230, 217)"
            mx={15}
          >
            /himani-singh-in
          </Text>
        </Stack>
      </VStack>
    </div>
  );
};

export default Socials;
