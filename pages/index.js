import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Button,
  Flex,
  Link,
  ListItem,
  UnorderedList,
  Text,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState(["1", "2", "3"]);
  const [item, setItem] = useState("");

  const addItem = () => {
    if (item !== "" && !tasks.includes(item)) {
      let temp = tasks;
      temp.push(item);
      setTasks(temp);
      setItem("");
    }
  };

  const removeItem = (taskName) => {
    setTasks(
      tasks.filter((task) => {
        return task != taskName;
      })
    );
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      flexDirection="column"
    >
      <Input
        placeholder="Item Name"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      ></Input>
      <Button
        onClick={() => {
          addItem();
        }}
      >
        Add Item
      </Button>
      <UnorderedList>
        {tasks.map((task) => (
          <ListItem key={task.index}>
            {task}
            <Button ml={10} onClick={() => removeItem(task)}>
              Remove
            </Button>
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
}
