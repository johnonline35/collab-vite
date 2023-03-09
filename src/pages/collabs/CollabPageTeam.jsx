import { Flex, Text, Textarea } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function CollabPageTeam() {
  const params = useParams();

  return (
    <>
      <Flex>
        <Text>CollabPage Team for: {params.customer_id}</Text>
      </Flex>
    </>
  );
}
