import About from "../../components/About";
import Navbar from "../../components/Navbar";
import { Center, Flex, Container, Box, Image } from "@chakra-ui/react";
import Bio from "../../components/Bio";
import Skills from "../../components/Skills";
import Socials from "../../components/Socials";
import Footer from "../../components/Footer";
import SketchfabEmbed from "../../components/Model";
import Hobbies from "../../components/Hobbies";
import Contact from "../../components/Contact";

// #808588

export default function Home() {
  return (
    <Center bg={"#202020"}>
      <Flex direction={"column"} px={14}>
        <Navbar />
        <SketchfabEmbed />
        <Container>
          <Box
            borderRadius="10px"
            my={6}
            py={14}
            px={28}
            textAlign="center"
            bg={"#7986CB"}
            css={{
              backdropFilter: "blur(10px)",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Hey there, I&apos;m a Web Developer bringing ideas to life!
          </Box>

          <Box display={{ md: "flex" }} css={{ marginTop: "20px" }}>
            <Box>
              <Image
                src="./me2.png"
                borderRadius="100%"
                float="right"
                boxSize="103"
                borderColor="white"
                border="2px solid"
              />
              <h1>Himani Singh</h1>
            </Box>
            <Box pt={5}>Full Stack Developer | ML Enthusiast |</Box>
            <Box mt={1}>CSE Major with AI Specialization</Box>
          </Box>
          <Box height={70}></Box>
          {/* <Box bg="#A1A1A1" height="1"></Box> */}
          <About />
          <Box height="40"></Box>
          <Bio />
          <Box height="40"></Box>
          {/* <Skills/>
      <Box height="40"></Box> */}
          <Hobbies />
          <Box height={40}></Box>
          <Socials />
          <Box height={40}></Box>
          <Contact />
          <Footer />
        </Container>
      </Flex>
    </Center>
  );
}
