import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  GridItem,
  Center,
  Flex,
  Square,
  Text,
  Input,
} from "@chakra-ui/react";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <Grid textAlign="center">
        <GridItem fontSize="xx-large">
          <h1>User Details</h1>
        </GridItem>
      </Grid>

      <form method="post">
        <Flex color="white" width="100%">
          <Box color="black" width="100%" fontSize={"x-large"}>
            <h2>Basic Details</h2>
          </Box>
        </Flex>
        <Flex color="white" width="100%" gap={6}>
          <Box color="black" width="100%">
            <Text>First Name</Text>
            <Input placeholder="Basic usage" />
          </Box>
          <Box color="black" width="100%">
            <Text>Last Name</Text>
            <Input placeholder="Basic usage" />
          </Box>
        </Flex>
      </form>
    </Box>
  </ChakraProvider>
);
