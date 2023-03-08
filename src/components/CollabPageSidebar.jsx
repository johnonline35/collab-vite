import {
  AtSignIcon,
  AttachmentIcon,
  ChatIcon,
  CalendarIcon,
  EditIcon,
  InfoOutlineIcon,
  SunIcon,
  QuestionOutlineIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FiDollarSign, FiUsers } from "react-icons/fi";

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
          <ListIcon as={FiUsers} color='white' />
          Team
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/console/create'>
          <ListIcon as={EditIcon} color='white' />
          Next Steps
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/console/profile'>
          <ListIcon as={QuestionOutlineIcon} color='white' />
          Challenges
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/console/profile'>
          <ListIcon as={SunIcon} color='white' />
          Proposals
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/console/profile'>
          <ListIcon as={InfoOutlineIcon} color='white' />
          Current State
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/console/profile'>
          <ListIcon as={AtSignIcon} color='white' />
          Legal Documents
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/console/profile'>
          <ListIcon as={FiDollarSign} color='white' />
          Pricing
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/console/profile'>
          <ListIcon as={CalendarIcon} color='white' />
          Timeline(s)
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/console/profile'>
          <ListIcon as={ChatIcon} color='white' />
          Realtime Q&A
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/console/profile'>
          <ListIcon as={AttachmentIcon} color='white' />
          All Attachments
        </NavLink>
      </ListItem>
    </List>
  );
}
