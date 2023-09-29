import NextLink from "next/link";
import {Box, Container, Divider, Heading, HStack, Link, Tag, Text, VStack} from "@chakra-ui/react";
import {FaGithub} from "react-icons/fa";

export default function Footer() {
  return (
    <Box pb={4}>
      <Divider my={4}/>
      <Container maxW="container.lg" display="flex" justifyContent="space-between" alignItems="center">
        <VStack alignItems="left">
          <Heading size="sm">A full-stack blog powered by Back4app.</Heading>
          <Link as={NextLink} href="#">
            Click here to learn how to build it!
          </Link>
        </VStack>
        <Link href="https://github.com/duplxey/back4app-full-stack">
          <Tag background="black" color="white" py={2}>
            <HStack>
              <FaGithub size="1.5em"/>
              <Text>View on GitHub</Text>
            </HStack>
          </Tag>
        </Link>
      </Container>
    </Box>
  );
}