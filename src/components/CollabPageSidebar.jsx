import {
  AtSignIcon,
  AttachmentIcon,
  ChatIcon,
  CalendarIcon,
  EditIcon,
  ArrowRightIcon,
  InfoOutlineIcon,
  SunIcon,
  QuestionOutlineIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink, useParams } from "react-router-dom";
import { FiDollarSign, FiUsers } from "react-icons/fi";

export default function Sidebar() {
  const params = useParams();
  return (
    <List color='white' fontSize='1.2em' spacing={4}>
      <ListItem>
        <NavLink to='/dashboard'>
          <ListIcon as={HamburgerIcon} color='white' /> Dashboard
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={`/collabs/${params.customer_id}/team`}>
          <ListIcon as={FiUsers} color='white' />
          Team
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={`/collabs/${params.customer_id}/notes`}>
          <ListIcon as={EditIcon} color='white' />
          Notes
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={`/collabs/${params.customer_id}/nextsteps`}>
          <ListIcon as={ArrowRightIcon} color='white' />
          Next Steps
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={`/collabs/${params.customer_id}/challenges`}>
          <ListIcon as={QuestionOutlineIcon} color='white' />
          Challenges
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={`/collabs/${params.customer_id}/proposals`}>
          <ListIcon as={SunIcon} color='white' />
          Proposals
        </NavLink>
      </ListItem>
      {/* <ListItem>
        <NavLink to={`/collabs/${params.customer_id}/currentstate`}>
          <ListIcon as={InfoOutlineIcon} color='white' />
          Current State
        </NavLink>
      </ListItem> */}
      <ListItem>
        <NavLink to={`/collabs/${params.customer_id}/legaldocuments`}>
          <ListIcon as={AtSignIcon} color='white' />
          Legal Documents
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={`/collabs/${params.customer_id}/pricing`}>
          <ListIcon as={FiDollarSign} color='white' />
          Pricing
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={`/collabs/${params.customer_id}/timeline`}>
          <ListIcon as={CalendarIcon} color='white' />
          Timeline(s)
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={`/collabs/${params.customer_id}/questions`}>
          <ListIcon as={ChatIcon} color='white' />
          Realtime Q&A
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={`/collabs/${params.customer_id}/allattachments`}>
          <ListIcon as={AttachmentIcon} color='white' />
          All Attachments
        </NavLink>
      </ListItem>
    </List>
  );
}
