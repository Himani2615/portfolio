"use client";

import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { usePathname } from "next/navigation";

const Links = ["Projects", "Contact"];

const NavLink = ({ children }: { children: React.ReactNode }) => {
  const parameter = usePathname();
  const href = `/${String(children).toLowerCase()}`;
  const isActive = parameter === href;

  return (
    <Link
      px={4}
      mx={12}
      pt={2}
      fontSize="17px"
      _hover={{ textDecoration: "none", color: "#BCC2E1" }}
      borderBottom={isActive ? "2px solid #7986CB" : "none"}
      href={href}
    >
      {children}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThanMD] = useMediaQuery("(min-width: 28rem)");
  const pathname = usePathname();

  return (
    <Box bg={"gray.800"} px={4} pt={14}>
      <Flex>
        <HStack spacing={60}>
          <Box
            fontSize="22px"
            fontWeight="bold"
            color={pathname === "/" ? "#BCC2E1" : "white"}
          >
            <Link href="/">Himani Singh</Link>
          </Box>

          {isLargerThanMD && (
            <HStack as={"nav"}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          )}
        </HStack>

        <Flex alignItems="center" ml="auto">
          <SunIcon pt={2} boxSize={24} mr={8} cursor="pointer" />

          {!isLargerThanMD && (
            <IconButton
              icon={<HamburgerIcon boxSize={20} />}
              aria-label={"Open Menu"}
              border="none"
              backgroundColor={"#202020"}
              cursor="pointer"
              ml="auto"
              float="right"
              pb={2}
              pr={10}
              onClick={isOpen ? onClose : onOpen}
            />
          )}
        </Flex>
      </Flex>

      {isOpen ? (
        <Box py={4} mt={4} right={4} position="absolute">
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
