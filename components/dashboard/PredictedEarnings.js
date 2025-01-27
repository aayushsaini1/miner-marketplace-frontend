import {
  Heading,
  Stack,
  VStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  HStack,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function PredictedEarnings(props) {
  const [filecoinUSDRate, setFilecoinUSDRate] = useState(0);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=filecoin&vs_currencies=usd"
    )
      .then((res) => res.json())
      .then((r) => {
        console.log(r.filecoin.usd);
        setFilecoinUSDRate(r.filecoin.usd);
      });
  }, []);

  return (
    <>
      <VStack textAlign="left" alignItems="left">
        <Heading size="lg" color="blue.700" my={4}>
          Predicted Earnings
        </Heading>

        <Text fontSize="md" color="gray.800">
          Quality Adjusted Power
        </Text>
        <Text color="blue.700">{props.qap}</Text>

        <Stack>
          <VStack alignItems="left">
            <Stat alignItems="left">
              <StatLabel fontSize="lg">Total Estimated Income</StatLabel>
              <StatNumber color="green.600">{props.totalIncome} FIL</StatNumber>
              <StatHelpText>
                ($ {Math.round(props.totalIncome * filecoinUSDRate)})
              </StatHelpText>
            </Stat>
            <VStack textAlign="left" alignItems="left">
              <HStack>
                <Text>Existing Deals</Text>
                <Text>{props.existing}</Text>
              </HStack>
              <HStack>
                <Text>Potential Deals</Text>
                <Text>{props.potential}</Text>
              </HStack>
              <HStack>
                <Text>Block Rewards</Text>
                <Text>{props.blockRewards}</Text>
              </HStack>
              <HStack>
                <Text>Days until eligible</Text>
                <Text>{props.days}</Text>
              </HStack>
            </VStack>
            <hr />
            <Stat>
              <StatLabel>Total Estimated Expenditure</StatLabel>
              <StatNumber color="red.600">
                {props.totalExpenditure} FIL
              </StatNumber>
              <StatHelpText>
                ($ {Math.round(props.totalExpenditure * filecoinUSDRate)})
              </StatHelpText>
            </Stat>
            <VStack textAlign="left" alignItems="left">
              <HStack>
                <Text>Collateral Deposit</Text>
                <Text>{props.deposits}</Text>
              </HStack>
              <HStack>
                <Text>Gas</Text>
                <Text>{props.gas}</Text>
              </HStack>
              <HStack>
                <Text>Penalty</Text>
                <Text>{props.penalty}</Text>
              </HStack>
              <HStack>
                <Text>Others</Text>
                <Text>{props.others}</Text>
              </HStack>
            </VStack>
            <hr />
            <Stat>
              <StatLabel>Net Estimated Income</StatLabel>
              <StatNumber color="blue.700">{props.netEarnings} FIL</StatNumber>
              <StatHelpText>
                ($ {Math.round(props.netEarnings * filecoinUSDRate)})
              </StatHelpText>
            </Stat>
          </VStack>
        </Stack>
      </VStack>
    </>
  );
}

export default PredictedEarnings;
