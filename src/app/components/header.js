import {Box, Container, Divider, Heading, Link} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Header() {
  return (
    <Box pt={4}>
      <Container maxW="container.lg" display="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="xl">
          <Link as={NextLink} href="/">
            back4app-full-stack
          </Link>
        </Heading>
      </Container>
      <Divider my={4}/>
    </Box>
  );
}