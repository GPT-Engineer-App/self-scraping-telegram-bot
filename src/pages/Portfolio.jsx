import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

const Portfolio = () => {
  return (
    <>
      <Navigation />
      <Box as="section" py={20}>
        <VStack spacing={8} align="start" maxW="3xl" mx="auto">
          <Heading as="h1" size="2xl">
            My Projects
          </Heading>
          <Text fontSize="lg">Coming soon...</Text>
        </VStack>
      </Box>
    </>
  );
};

export default Portfolio;
