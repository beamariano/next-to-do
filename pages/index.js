import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Flex,
  Input,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const Home = ({ data }) => {
  console.log(data);
  const [tasks, setTasks] = useState(data);
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

  useEffect(() => {
    if (data) {
      setTasks(data);
    }
  }, []);

  return (
    <Box>
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
          {tasks.map((item, index) => {
            console.log(item);
            return (
              <ListItem key={index}>
                <Text>{item.task}</Text>
                <Button ml={10} onClick={() => editItem(item.id)}>
                  Edit
                </Button>
                <Button ml={10} onClick={() => removeItem(item.id)}>
                  Remove
                </Button>
              </ListItem>
            );
          })}
        </UnorderedList>
      </Flex>
    </Box>
  );
};
export const getStaticProps = async () => {
  const url = "https://62b1788dc7e53744afb9d5c9.mockapi.io/api/tasks";
  try {
    const res = await fetch(url);
    const data = await res.json();
    return { props: { data } };
  } catch {
    // 404 ERROR
    return { props: null };
  }
};

export default Home;
