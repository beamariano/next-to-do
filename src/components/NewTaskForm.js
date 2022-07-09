import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
// import PropTypes from 'prop-types'
import { v4 as uuidv4 } from "uuid";

const NewTaskForm = () => {
  const [newItemName, setNewItemName] = useState("");
  const [newItemPriority, setNewItemPriority] = useState("normal");
  const [newItemStatus, setNewItemStatus] = useState("pending");
  const [newItemDueDate, setNewItemDueDate] = useState("");

  const addItemHandler = () => {
    // e.preventDefault(e);
    let newItemObject = {
      id: uuidv4(),
      name: newItemName,
      date_due: newItemDueDate,
      priority: newItemPriority,
      status: newItemStatus,
    };
    console.log(newItemObject);
    addItemHandler(newItemObject);
  };

  useEffect(() => {
    console.log(newItemPriority);
  });

  return (
    <Box>
      <VStack>
        <HStack>
          <FormControl>
            <FormLabel htmlFor="name">Task Name</FormLabel>
            <Input
              placeholder="ex. maghugas ng plato"
              value={newItemName}
              onChange={(e) => {
                setNewItemName(e.target.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="date">Due Date</FormLabel>
            <Input
              placeholder="ex. April 27"
              value={newItemDueDate}
              onChange={(e) => {
                setNewItemDueDate(e.target.value);
              }}
            />
          </FormControl>
          <IconButton
            icon={<AddIcon />}
            onClick={(e) => {
              e.preventDefault();
              addItemHandler();
            }}
          />
        </HStack>

        <FormControl>
          <HStack>
            <FormLabel as="legend">Priority</FormLabel>
            <RadioGroup defaultValue="normal">
              <HStack>
                <Radio
                  value="high"
                  onChange={(e) => {
                    setNewItemPriority(e.target.value);
                  }}
                >
                  High
                </Radio>
                <Radio
                  value="normal"
                  onChange={(e) => {
                    setNewItemPriority(e.target.value);
                  }}
                >
                  Normal
                </Radio>
                <Radio
                  value="low"
                  onChange={(e) => {
                    setNewItemPriority(e.target.value);
                  }}
                >
                  Low
                </Radio>
              </HStack>
            </RadioGroup>
          </HStack>
        </FormControl>
      </VStack>
    </Box>
  );
};

// NewTaskForm.propTypes = {}

export default NewTaskForm;
