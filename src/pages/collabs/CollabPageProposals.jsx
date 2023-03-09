import { Flex, Text, Textarea } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function CollabPageProposals() {
  const params = useParams();

  return (
    <>
      <Flex>
        <Text>CollabPage Proposals for: {params.name}</Text>
      </Flex>
    </>
  );
}
