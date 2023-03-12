import { Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function CollabPageLegalDocuments() {
  const params = useParams();

  return (
    <>
      <Flex>
        <Text>
          CollabPage CollabPageLegalDocuments for: {params.customer_id}
        </Text>
      </Flex>
    </>
  );
}
