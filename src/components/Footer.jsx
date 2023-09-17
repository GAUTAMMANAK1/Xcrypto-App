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
            src="https://c8.alamy.com/comp/PP1R1P/glowing-blue-bitcoin-cryptocurrency-digital-decentralized-currency-symbol-conceptual-illustration-of-a-bitcoin-logo-connected-to-a-blockchain-netw-PP1R1P.jpg"
            alt="react logo"
            style={{ width: "150px" }}
            
          />
          <Text>BitcoinApp</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
