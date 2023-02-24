import "./App.css";
import {
  Button,
  Input,
  Spinner,
  Flex,
  Spacer,
  Stack,
  Box,
} from "@chakra-ui/react";
import DisplayJohn from "./components/DisplayJohn";
import { JohnProfile } from "./components/DisplayJohn";

function App() {
  return (
    <>
      <DisplayJohn />
      <JohnProfile />
      {/* <Flex justify="space-around" mb={3}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.300"
          color="blue.500"
          size="xl"
        />
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.400"
          color="blue.500"
          size="xl"
        />
      </Flex>
      <Box mb={3}>
        <Flex justify="center" align="center" gap="2px">
          <Button colorScheme="teal" size="sm">
            Button
          </Button>
          <Button colorScheme="blue" size="lg">
            Button
          </Button>
          <Button colorScheme="green" size="md">
            Button
          </Button>
        </Flex>
      </Box>
      <Box>
        <Stack spacing={3}>
          <Input placeholder="small size" size="sm" />
          <Input placeholder="medium size" size="md" />
          <Input placeholder="large size" size="lg" />
        </Stack>
      </Box> */}
    </>
  );
}

export default App;
