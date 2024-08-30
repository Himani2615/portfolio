import { Center, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Heading from "./Heading";
import Button from "./Button";

const About = () => {
  return (
    <div>
      <Container id="about" py={8} maxW={"2xl"}>
        <Stack direction="column" spacing={10}>
          <Heading text="About" />
          <Text maxW="580" pt={10} >
            A passionate Web Developer based in India with a knack for building
            innovative and high-performing web applications. With a strong
            foundation in front-end and back-end technologies, I specialize in
            creating immersive, user-friendly experiences.
          </Text>
          <Text maxW="580" pb={8}>
            When I&apos;m not coding, you&apos;ll find me exploring new
            technologies, participating in hackathons, or contributing to
            open-source projects. I&apos;m always on the lookout for exciting
            challenges and opportunities to grow as a developer.
          </Text>
          <Button text="My portfolio > " />
        </Stack>
      </Container>
    </div>
  );
};

export default About;
