import { Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function CollabPageChallenges() {
  const params = useParams();

  return (
    <>
      <Flex>
        <Text>CollabPage Challenges for: {params.customer_id}</Text>
      </Flex>
    </>
  );
}
