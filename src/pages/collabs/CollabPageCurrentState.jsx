import { Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function CollabPageCurrentState() {
  const params = useParams();

  return (
    <>
      <Flex>
        <Text>CollabPage CollabPageCurrentState for: {params.customer_id}</Text>
      </Flex>
    </>
  );
}
