import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <List color='white' fontSize='1.2em' spacing={4}>
      <ListItem>
        <NavLink to='/console'>
          <ListIcon as={CalendarIcon} color='white' /> Dashboard
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/console/create'>
          <ListIcon as={EditIcon} color='white' />
          COLLAB
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/console/profile'>
          <ListIcon as={AtSignIcon} color='white' />
          COLLAB
        </NavLink>
      </ListItem>
    </List>
  );
}