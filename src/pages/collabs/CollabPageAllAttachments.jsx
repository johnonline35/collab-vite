import { Flex, Text, Textarea } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function CollabPageAllAttachments() {
  const params = useParams();

  return (
    <>
      <Flex>
        <Text>CollabPageAllAttachments for: {params.name}</Text>
      </Flex>
    </>
  );
}
