import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Link,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { supabase } from "../supabase/clientapp";

export default function Dashboard() {
  const tasks = useLoaderData();
  const params = useParams();
  const [companyInfo, setCompanyInfo] = useState("");

  const getCompanyTileInfo = async () => {
    const { data, error } = await supabase.from("customer_table").select();
    const { data: reps } = await supabase.from("rep_table").select();
    for (let i = 0; i < data.length; i++) {
      data[i].rep = reps[0];
      // TODO: Find rep based on ID
    }
    // .eq("customer_id", params.customer_id);
    console.log(data);
    setCompanyInfo(data);
  };

  useEffect(() => {
    getCompanyTileInfo();
  }, []);

  return (
    <SimpleGrid spacing={10} minChildWidth='300px'>
      {companyInfo &&
        companyInfo.map((info) => (
          <Card
            key={info.customer_id}
            borderTop='8px'
            borderColor='blue.400'
            bg='white'
          >
            <CardHeader>
              <Flex gap={5}>
                {/* <Avatar src={info.img} /> */}
                <Box>
                  <Link href={`/collabs/${info.customer_id}`}>
                    <Heading as='h3' size='sm'>
                      {info.customer_name}
                    </Heading>
                  </Link>
                  <Text>Led by {info.rep.rep_name}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color='gray.500'>
              <Text>{info.lorem}</Text>
            </CardBody>

            <Divider borderColor='gray.200' />

            <CardFooter>
              <HStack>
                <Button
                  onClick={() => {}}
                  variant='ghost'
                  leftIcon={<ViewIcon />}
                >
                  View
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}

export const tasksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");

  return res.json();
};
