import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import {
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";

const Profile = () => {
  return (
    <Tabs mt={"40px"} p={"20px"} colorScheme="purple" variant={"enclosed"}>
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Account info</Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Task history</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              hatamovzafar7070@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
              repellat!
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
              est sequi.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
	
export default Profile;
