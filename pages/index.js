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
import NewTaskForm from "../src/components/NewTaskForm";

const Home = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      date_due: "Jan 4",
      name: "task 1",
      priority: "priority 1",
      status: "pending",
    },
    {
      id: 2,
      date_due: "Jan 6",
      name: "task 2",
      priority: "priority 1",
      status: "pending",
    },
    {
      id: 3,
      date_due: "March 20",
      name: "task 3",
      priority: "priority 1",
      status: "pending",
    },
    {
      id: 4,
      date_due: "Dec 12",
      name: "task 4",
      priority: "priority 1",
      status: "pending",
    },
    {
      id: 5,
      date_due: "October 23",
      name: "task 5",
      priority: "priority 1",
      status: "pending",
    },
  ]);

  const [newItem, setNewItem] = useState("");
  const [newItemPriority, setNewItemPriority] = useState("high");
  const [newItemStatus, setNewItemStatus] = useState("pending");

  const addItem = (newItemObject) => {
    console.log(newItemObject);
    // if (newItem !== "" && !tasks.includes(newItem)) {
    //   let temporaryArrayIncludingNewItem = tasks;
    //   temporaryArrayIncludingNewItem.push(newItemObject);
    //   setTasks(temporaryArrayIncludingNewItem);
    //   setNewItem("");
    // } else {
    //   alert("This task already exists");
    // }
  };

  const done = (taskId) => {
    console.log("done");
  };

  const remove = (taskId) => {
    console.log("remove", taskId);
    // setTasks(
    //   tasks.filter((task) => {
    //     return task != taskName;
    //   })
    // );
  };

  const edit = (taskId) => {
    console.log("edit", taskId);
  };

  return (
    <Container border="2px solid gray" maxWidth="100%" pb="100px">
      <VStack>
        <Heading as="h1" mt="50px">
          To-Do App
        </Heading>
        <HStack justifyContent="space-between" py="50px">
          <NewTaskForm addItem={addItem} />
        </HStack>
        <Center>
          <Container maxW="1440px" w="100%">
            <ToDoTable tasks={tasks} done={done} edit={edit} remove={remove} />
          </Container>
        </Center>
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
