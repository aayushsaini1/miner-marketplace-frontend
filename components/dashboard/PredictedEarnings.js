import {} from "@chakra-ui/react";
import React from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const PredictedEarnings = (earning) => {
  console.log(earning);
  return <></>;
};

export default PredictedEarnings;

export async function getStaticProps() {
  client = new ApolloClient({
    uri: "https://miner-marketplace-backend.onrender.com/query",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query {
        networkStats {
          activeMinersCount
          networkStorageCapacity
          dataStored
        }
      }
    `,
  });
  return {
    props: {
      earning: data.networkStats,
    },
  };
}
