import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.800"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price. The purpose of this website is solely to
            display information regarding the products and services available on
            the Xcrypto App.
            <Text
              fontWeight={"bold"}
              textAlign={"center"}
              color={"whiteAlpha.700"}
              mt={"30"}
            >
              Copyright ©2023. All Rights Reserved
            </Text>
          </Text>
        </VStack>

        <VStack>
          <img
            src="https://gautammanak.me/assets/mypic.png"
            alt="react logo"
            style={{ width: "150px" }}
            
          />
          <Text> gautammanak</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
