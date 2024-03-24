import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <>
      <Navigation />
      <Box as="section" pt={40} pb={20} textAlign="center">
        <VStack spacing={8}>
          <Heading as="h1" size="2xl">
            Welcome to My Portfolio
          </Heading>
          <Text fontSize="xl" maxW="2xl" mx="auto">
            I'm a software developer specializing in building exceptional digital experiences.
          </Text>
          <Button colorScheme="blue" size="lg">
            View my work
          </Button>
        </VStack>
      </Box>

      <Box as="section" py={20} bg="gray.50">
        <VStack spacing={8} align="start" maxW="3xl" mx="auto">
          <Heading as="h2" size="xl">
            About Me
          </Heading>
          <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum neque eget nunc mattis eu sollicitudin enim tincidunt.</Text>
        </VStack>
      </Box>

      <Box as="section" py={20}>
        <VStack spacing={8} align="start" maxW="3xl" mx="auto">
          <Heading as="h2" size="xl">
            My Projects
          </Heading>
          <Text fontSize="lg">Coming soon...</Text>
        </VStack>
      </Box>

      <Box as="section" py={20} bg="gray.50">
        <VStack spacing={8} align="start" maxW="3xl" mx="auto">
          <Heading as="h2" size="xl">
            Get In Touch
          </Heading>
          <Text fontSize="lg">Have a question or want to work together? Fill out the form to get in touch with me.</Text>
        </VStack>
      </Box>
    </>
  );
};

export default Index;
