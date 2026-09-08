import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack px="2rem" my="1rem" justifyContent={"space-between "}>
      <Image src={logo} boxSize={"60px"} borderRadius="10px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
