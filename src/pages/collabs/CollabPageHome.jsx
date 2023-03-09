import {
  Flex,
  FormControl,
  FormLabel,
  Switch,
  Text,
  Textarea,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../../supabase/clientapp";

export default function CollabPageHome() {
  const params = useParams();
  const [emailLink, setEmailLink] = useState();
  const [loadingToggle, setLoadingToggle] = useState(false);

  const getEmailLinkState = async () => {
    const { data, error } = await supabase
      .from("customer_table")
      .select()
      .eq("customer_id", params.customer_id);
    // console.log(data);
    setEmailLink(data[0].enable_calendar_link);

    setLoadingToggle(false);
  };

  useEffect(() => {
    setLoadingToggle(true);
    getEmailLinkState();
  }, []);

  const updateEmailToggle = async () => {
    // console.log("toggle");
    const { data, error } = await supabase
      .from("customer_table")
      .update({ enable_calendar_link: !emailLink })
      .eq("customer_id", params.customer_id)
      .select();

    // console.log(data);

    setEmailLink(data[0].enable_calendar_link);
  };

  return (
    <>
      <Flex mb={5}>
        <Text>CollabPage Home for: {params.customer_id}</Text>
      </Flex>
      <FormControl display='flex' alignItems='center'>
        <FormLabel htmlFor='email-alerts' mb='0'>
          Enable calendar links {params.customer_name}?
        </FormLabel>
        {loadingToggle ? (
          <Spinner />
        ) : (
          <Switch
            id='email-alerts'
            isChecked={emailLink}
            onChange={() => updateEmailToggle()}
            loading={loadingToggle}
          />
        )}
      </FormControl>
    </>
  );
}
