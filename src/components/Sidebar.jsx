import { AtSignIcon, HamburgerIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <List color='white' fontSize='1.2em' spacing={4}>
      <ListItem>
        <NavLink to='/console'>
          <ListIcon as={HamburgerIcon} color='white' /> Dashboard
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/console/create'>
          <ListIcon as={EditIcon} color='white' />
          Master ToDo List
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/console/profile'>
          <ListIcon as={AtSignIcon} color='white' />
          Account
        </NavLink>
      </ListItem>
    </List>
  );
}
