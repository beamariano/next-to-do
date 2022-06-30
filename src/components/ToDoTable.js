import React from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  Link,
  ListItem,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

const ToDoTable = ({ tasks }) => {
  console.log(tasks);
  return (
    <TableContainer w="100%">
      <Table variant="simple">
        <TableCaption>Notes</TableCaption>
        <Thead>
          <Tr>
            <Th>Task Name</Th>
            <Th>Status</Th>
            <Th>Priority</Th>
            <Th>Date Added</Th>
          </Tr>
        </Thead>
        <Tbody>
          <UnorderedList>
            {tasks.map((task, index) => (
              <ListItem key={index}>
                <Tr>
                  <Flex dir="row" justifyContent="space-between">
                    <Box>
                      <Text>{task.name}</Text>
                    </Box>
                    <HStack spacing={2}>
                      <Button onClick={() => done(task.id)}>Done</Button>
                      <Button ml={10} onClick={() => editItem(task.id)}>
                        Edit
                      </Button>
                      <Button ml={10} onClick={() => removeItem(task.id)}>
                        X
                      </Button>
                    </HStack>
                  </Flex>
                </Tr>
              </ListItem>
            ))}
          </UnorderedList>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ToDoTable;