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
  IconButton,
  Icon,
} from "@chakra-ui/react";

import { CheckIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";

const ToDoTable = ({ tasks, done, edit, remove }) => {
  return (
    <TableContainer w="100%">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Task Name</Th>
            <Th>Status</Th>
            <Th>Priority</Th>
            <Th>Date Due</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tasks.map((task, index) => (
            <Tr key={index}>
              <Td>
                <Box>
                  <Text>{task.name}</Text>
                </Box>
              </Td>
              <Td>
                <Text>{task.status}</Text>
              </Td>
              <Td>
                <Text>{task.priority}</Text>
              </Td>
              <Td>
                <Text>{task.date_due}</Text>
              </Td>
              <Td>
                <HStack spacing={1}>
                  <IconButton
                    icon={<CheckIcon />}
                    onClick={() => done(task.id)}
                  />
                  <IconButton
                    icon={<EditIcon />}
                    onClick={() => edit(task.id)}
                  />
                  <IconButton
                    icon={<DeleteIcon />}
                    onClick={() => remove(task.id)}
                  />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ToDoTable;
