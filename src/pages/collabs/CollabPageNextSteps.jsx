import { Flex, Text, Textarea } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function CollabPageNextSteps() {
  const params = useParams();

  return (
    <>
      <Flex>
        <Text>CollabPage Next steps for: {params.customer_id}</Text>
      </Flex>
    </>
  );
}
