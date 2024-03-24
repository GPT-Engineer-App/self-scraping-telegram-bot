import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="gray.100" py={4}>
      <HStack as="nav" spacing={8} justify="center">
        <Link as={RouterLink} to="/" fontWeight="bold">
          Home
        </Link>
        <Link as={RouterLink} to="/about" fontWeight="bold">
          About
        </Link>
        <Link as={RouterLink} to="/portfolio" fontWeight="bold">
          Portfolio
        </Link>
        <Link as={RouterLink} to="/contact" fontWeight="bold">
          Contact
        </Link>
      </HStack>
    </Box>
  );
};

export default Navigation;
