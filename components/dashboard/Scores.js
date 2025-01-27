import {
  Box,
  Heading,
  Text,
  Spacer,
  Wrap,
  WrapItem,
  Stack,
  HStack,
  VStack,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { Icon, IconProps, InfoIcon } from "@chakra-ui/icons";

function Scores(props) {
  return (
    <>
      <Box
        border="solid 2px #E2E8F0"
        borderRadius="2xl"
        p="12"
        h={{ lg: "full" }}
      >
        <Heading color="blue.700" size="lg" fontWeight="bold" pb="4">
          Scores
        </Heading>

        <HStack spacing="12">
          <VStack alignItems="left">
            <WrapItem alignItems="baseline">
              <Text fontSize="4xl" color="blue.600" pr="1">
                {props.reputationScore}
              </Text>
              <Text size="sm" color="gray.500">
                /100
              </Text>
            </WrapItem>
            <WrapItem alignItems="center" color="gray.600">
              <Tooltip
                label="Reputation scores are based on your performance of previous deals"
                aria-label="Reputation Scores"
                px="4"
                py="2"
                borderRadius="lg"
                hasArrow
              >
                <Text size="md" pr="2">
                  Reputation Score <InfoIcon w={5} h={5} color="gray.500" />
                </Text>
              </Tooltip>
            </WrapItem>
          </VStack>
          <Spacer />
          <VStack alignItems="left">
            <WrapItem alignItems="baseline">
              <Text fontSize="4xl" color="orange.500" pr="1">
                {props.transparencyScore}
              </Text>
              <Text size="sm" color="gray.500">
                /100
              </Text>
            </WrapItem>
            <WrapItem alignItems="center" color="gray.600">
              <Tooltip
                label="Transparency scores are based on your public information like email, social media handle, service details etc."
                aria-label="Transparency Scores"
                px="4"
                py="2"
                borderRadius="lg"
                hasArrow
              >
                <Text size="md" pr="2">
                  Transparency Score <InfoIcon w={5} h={5} color="gray.500" />
                </Text>
              </Tooltip>
            </WrapItem>
          </VStack>
        </HStack>
      </Box>
    </>
  );
}

export default Scores;
