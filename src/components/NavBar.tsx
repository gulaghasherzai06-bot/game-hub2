import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
const NavBar = () => {
  return (
    <HStack px="2rem" my="1rem">
      <Image src={logo} boxSize={"60px"} borderRadius="10px"></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
