import {
  Accordion,
  Button,
  Box,
  Container,
  Link,
  SimpleGrid,
  Heading,
  HStack,
  Stack,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Hero from "../components/landingPage/Hero";
import Features from "../components/landingPage/Features";
import FilecoinStats from "../components/landingPage/FilecoinStats";
import JoinNetwork from "../components/landingPage/JoinNetwork";
import Footer from "../components/landingPage/Footer";
import Faq from "../components/Faq";
import { gql, ApolloClient, InMemoryCache } from "@apollo/client";

const minerLanding = (stats) => {
  // console.log(stats);
  // console.log("active", stats.stats.activeMinersCount);
  // console.log("dataS", stats.stats.dataStored);
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" mb="16">
        <SimpleGrid gap="12">
          {/* Hero Section */}
          <Hero
            heroImg="/images/minerHero.svg"
            heroAlt="rewards for storage service with Filecoin"
            heroHeading="Provide Storage Services & Earn Rewards"
            heroText="The Filecoin network is designed to reward participants at multiple levels — from large scale data centers to local entrepreneurs with mining rigs that cover the last mile."
            ctaText="Become a Miner"
          />

          {/* Features Section */}
          <Stack textAlign="center" alignItems="center">
            <Heading color="gray.900" size="2xl">
              Why Filecoin?
            </Heading>
          </Stack>
          <SimpleGrid
            columns={{ md: 3, lg: 3, sm: 1 }}
            gap={{ lg: "28", md: "12", sm: "4" }}
          >
            <Features
              featureIcon="/images/censorship.svg"
              imgAlt="censorship resistance"
              featureTitle="Censorship resistance"
              featureDescription="Filecoin resists censorship because no central provider can be coerced into deleting files or withholding service."
            />
            <Features
              featureIcon="/images/minerrewards.svg"
              imgAlt="rewards"
              featureTitle="Rewards"
              featureDescription="Storing more files is directly related to winning more block rewards. The more storage you add, the more filecoin you’ll earn."
            />
            <Features
              featureIcon="/images/minercommunity.svg"
              imgAlt="active community"
              featureTitle="Active community"
              featureDescription="Filecoin has an active community of contributors to answer questions and help newcomers get started."
            />
          </SimpleGrid>

          {/*Filecoin Stats*/}
          <Box
            bgColor="blue.600"
            py="6"
            px="12"
            borderRadius="2xl"
            color="white"
            my="16"
          >
            <Stack textAlign="center" spacing="16" my="16">
              <Heading size="2xl" color="white">
                Filecoin Miners in Numbers
              </Heading>

              <SimpleGrid columns={{ sm: 1, md: 3, lg: 3 }} gap="16">
                <FilecoinStats
                  count={stats.stats.activeMinersCount + "+"}
                  countText=""
                  subtext="Active Miners and counting"
                />
                <FilecoinStats
                  count={stats.stats.networkStorageCapacity}
                  countText=""
                  subtext="Network Storage Capacity"
                />
                <FilecoinStats
                  count={stats.stats.dataStored}
                  countText=""
                  subtext="Data Stored till now"
                />
              </SimpleGrid>
            </Stack>
          </Box>

          {/*Join Network*/}
          <Stack textAlign="center" spacing="16" my="16">
            <Heading color="gray.900" size="2xl">
              Start your Miner Journey
            </Heading>
            <SimpleGrid columns={{ lg: 2, md: 2, sm: 1 }} gap="12">
              <JoinNetwork
                cardHeading="Become a Miner"
                cardText="Want to join Filecoin network as a miner, click the link below to get started."
                ctaText="Become a Miner"
                ctaVariant="outline"
              />
              <JoinNetwork
                cardHeading="Already a Miner? Claim Profile"
                cardText="If you are already a registered miner, claim your profile to see your storage stats and earning details in intuitive way."
                ctaText="Claim Profile"
              />
            </SimpleGrid>
          </Stack>

          {/*FAQ*/}
          <Stack textAlign="center" alignItems="center" spacing="16">
            <Heading size="lg">Frequently Asked Questions</Heading>
            <Stack minW={{ base: "80vw", md: "48rem" }} textAlign="left">
              <Accordion allowToggle="false">
                <Faq question="What?" answer="this is what" />
                <Faq question="What?" answer="this is what" />
                <Faq question="What?" answer="this is what" />
              </Accordion>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Footer />
    </>
  );
};

export default minerLanding;

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.BACKEND_URL,
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
      stats: data.networkStats,
    },
  };
}
