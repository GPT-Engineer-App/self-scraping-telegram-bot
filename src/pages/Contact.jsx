import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <>
      <Navigation />
      <Box as="section" py={20}>
        <VStack spacing={8} align="start" maxW="3xl" mx="auto">
          <Heading as="h1" size="2xl">
            Contact Me
          </Heading>
          <Text fontSize="lg">Have a question or want to work together? Fill out the form to get in touch with me.</Text>
        </VStack>
      </Box>
    </>
  );
};

export default Contact;
