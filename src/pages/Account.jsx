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

export default function Account() {
  return (
    <Tabs mt='40px' p='20px' colorScheme='blue' variant='enclosed'>
      <TabList>
        <Tab _selected={{ color: "white", bg: "blue.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "blue.400" }}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: john@instantcollab.co
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor dit amet consectuor
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum dolor dit amet consectuor
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='teal.400' />
              Lorem ipsum dolor dit amet consectuor
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='teal.400' />
              Lorem ipsum dolor dit amet consectuor
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color='red.400' />
              Lorem ipsum dolor dit amet consectuor
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='teal.400' />
              Lorem ipsum dolor dit amet consectuor
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color='red.400' />
              Lorem ipsum dolor dit amet consectuor
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
