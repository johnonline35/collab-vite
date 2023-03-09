import { Flex, Text, Textarea } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function CollabPagePricing() {
  const params = useParams();

  return (
    <>
      <Flex>
        <Text>CollabPagePricing for: {params.customer_id}</Text>
      </Flex>
    </>
  );
}
