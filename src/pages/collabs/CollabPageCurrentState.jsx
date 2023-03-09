import { Flex, Text, Textarea } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function CollabPageCurrentState() {
  const params = useParams();

  return (
    <>
      <Flex>
        <Text>CollabPage CollabPageCurrentState for: {params.name}</Text>
      </Flex>
    </>
  );
}
