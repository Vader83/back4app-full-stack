import {Box, Container, Divider, Heading} from "@chakra-ui/react";

export default function Header() {
  return (
    <Box py={4}>
      <Container maxW="container.lg" display="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="xl">back4app-host-frontend-and-backend</Heading>
      </Container>
      <Divider my={4}/>
    </Box>
  );
}