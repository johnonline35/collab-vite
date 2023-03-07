import { UnlockIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Spacer,
  HStack,
  useToast,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";

export default function Navbar() {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Logged out",
      description: "Successfully logged out",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
      icon: <UnlockIcon />,
    });
  };

  return (
    <Flex as='nav' p='10px' mb='40px' alignItems='center'>
      <Heading as='h1'>Collabs</Heading>
      <Spacer />

      <HStack spacing='20px'>
        <Box bg='gray.200' p='10px'>
          J
        </Box>
        {/* <Avatar name='John' src='/img/mario.png'>
          <AvatarBadge width='1.3em' bg='red.500'>
            <Text fontSize='xs' color='white'>
              3
            </Text>
          </AvatarBadge>
        </Avatar> */}
        <Text>john@instantcollab.co</Text>
        <Button colorScheme='blue' onClick={showToast}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}
