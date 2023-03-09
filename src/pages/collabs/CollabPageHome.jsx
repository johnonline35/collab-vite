import { Flex, Text, Textarea } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function CollabPageHome() {
  const params = useParams();

  return (
    <>
      <Flex>
        <Text>CollabPage Home for: {params.name}</Text>
      </Flex>
    </>
  );
}
