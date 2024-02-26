import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <List spacing={"4"}>
      <ListItem color={"white"}>
        <NavLink to="/">
          <ListIcon as={CalendarIcon} />
          Dashboard
        </NavLink>
      </ListItem>
      <ListItem color={"white"}>
        <NavLink to="/create">
          <ListIcon as={EditIcon} />
          New Task
        </NavLink>
      </ListItem>
      <ListItem color={"white"}>
        <NavLink to="/profile">
          <ListIcon as={AtSignIcon} />
          Profile
        </NavLink>
      </ListItem>
    </List>
  );
};

export default Sidebar;
