import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <>
      <Navigation />
      <Box as="section" py={20}>
        <VStack spacing={8} align="start" maxW="3xl" mx="auto">
          <Heading as="h1" size="2xl">
            About Me
          </Heading>
          <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum neque eget nunc mattis eu sollicitudin enim tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus.</Text>
        </VStack>
      </Box>
    </>
  );
};

export default About;
