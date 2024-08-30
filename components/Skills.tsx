import { Box, SimpleGrid, Heading, Text, Image } from "@chakra-ui/react";

const skills = [
  {
    name: "JavaScript",
    logo: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.worldvectorlogo.com/logos/typescript-2.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5Lhy3AVi5gO_JJOeywcjfSHyfvLHMPPgxw&s",
  },
  {
    name: "Bootstrap",
    logo: "https://www.stickerpress.in/media/products/800x800/df70d11c185d4e81aad3fc5f5b5b2576.jpg",
  },
  {
    name: "Chakra UI",
    logo: "https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg",
  },
  {
    name: "Framer Motion",
    logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
  },
  { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  {
    name: "Next.js",
    logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
  },
  {
    name: "Express.js",
    logo: "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg",
  },
  { name: "MySQL", logo: "https://www.svgrepo.com/show/303251/mysql-logo.svg" },
];

const SkillsSection = () => {
  return (
    <Box my={10}>
      <Heading as="h2" size="xl" mb={24}>
        Skills
      </Heading>
      <SimpleGrid columns={4} spacing={10} mx={2}>
        {skills.map((skill) => (
          <Box
            key={skill.name}
            p={3}
            bg="gray.800"
            borderRadius="md"
            textAlign="center"
            boxShadow="md"
            _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
          >
            <Image src={skill.logo} alt="logo" height="60" borderRadius="10%" />
            <Text fontWeight="semibold" color="white" pt={4}>
              {skill.name}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SkillsSection;
