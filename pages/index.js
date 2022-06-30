import { useEffect, useState } from "react";

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
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

import { v4 as uuidv4 } from "uuid";
import ToDoTable from "../src/components/ToDoTable";

const Home = () => {
  const [tasks, setTasks] = useState([
    {
      date_added: "1656574906",
      name: "task1",
      priority: "priority 1",
      status: "pending",
      id: "1",
    },
    {
      date_added: "1656574906",
      name: "task1",
      priority: "priority 1",
      status: "pending",
      id: "1",
    },
    {
      date_added: "1656574906",
      name: "task1",
      priority: "priority 1",
      status: "pending",
      id: "1",
    },
    {
      date_added: "1656574906",
      name: "task1",
      priority: "priority 1",
      status: "pending",
      id: "1",
    },
    {
      date_added: "1656574906",
      name: "task1",
      priority: "priority 1",
      status: "pending",
      id: "1",
    },
  ]);

  const [newItem, setNewItem] = useState("");
  const [newItemPriority, setNewItemPriority] = useState("high");
  const [newItemStatus, setNewItemStatus] = useState("pending");

  const addItem = () => {
    let newItemObject = {
      id: uuidv4(),
      name: newItem,
      date_added: new Date(),
      priority: newItemPriority,
      status: newItemStatus,
    };
    if (newItem !== "" && !tasks.includes(newItem)) {
      let temporaryArrayIncludingNewItem = tasks;
      temporaryArrayIncludingNewItem.push(newItemObject);
      setTasks(temporaryArrayIncludingNewItem);
      setNewItem("");
    } else {
      alert("This task already exists");
    }
  };

  const done = () => {
    console.log("done");
  };

  const removeItem = (taskName) => {
    console.log(taskName);
    // setTasks(
    //   tasks.filter((task) => {
    //     return task != taskName;
    //   })
    // );
  };

  const editItem = (taskId) => {
    console.log(taskId);
  };

  return (
    <Container border="2px solid black" maxWidth="100%">
      <VStack>
        <Heading as="h1" mt="50px">
          To-Do App
        </Heading>
        <HStack justifyContent="space-between" py="50px">
          <Input
            placeholder="Item Name"
            value={newItem}
            onChange={(e) => {
              setNewItem(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              addItem();
            }}
          >
            Add Item
          </Button>
        </HStack>
        <Container>
          <ToDoTable
            tasks={tasks}
            done={done}
            editItem={editItem}
            removeItem={removeItem}
          />
        </Container>
      </VStack>
    </Container>
  );
};
// export const getStaticProps = async () => {
//   const url = "https://62b1788dc7e53744afb9d5c9.mockapi.io/api/tasks";
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     return { props: { data } };
//   } catch {
//     // 404 ERROR
//     return { props: null };
//   }
// };

export default Home;
