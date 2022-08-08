import {
	Container,
	VStack,
	Heading,
	Text,
	UnorderedList,
	ListItem,
	SimpleGrid,
	Box,
} from "@chakra-ui/react";
import React from "react";
import NextImage from "next/image";
import Emoji from "../components/emoji";
import Layout from "../components/layouts/article";

const About = () => {
	return (
		<Layout title="About">
			<Container
				maxW="container.md"
				display="flex"
				flexDirection="column"
				alignItems="center"
				px={{ base: 6, md: 3 }}
				mb={24}
			>
				<VStack>
					<Box mt={24} mb={-8}>
						<NextImage src="/about.png" alt="doodle" width={400} height={400} />
					</Box>

					<Heading as="h1">
						Project Empower is created for the caregivers
					</Heading>
					<Text>
						Project Empower (PE) is a NUS YLLSoM Local Community Involvement
						Project that was founded in January 2022, in pursuit to target a
						commonly neglected population; caregivers. PE is registered under
						NUS Medical Society, and the twelve-member committee hopes to raise
						awareness on the impact of caregiver burnout. Through a five-year
						plan, we aim to reach out to several target audiences to achieve
						various objectives. Currently, with advice and support from our
						mentors: Dr Ann Toh, Dr Abhishek and Dr Janice Soo, we are
						collaborating &amp; piloting our initiatives with caregivers of
						StarPALS patients under HCA Hospice Care. We also have the support
						of CaringSG who will be providing volunteer training to ensure that
						our volunteers are well trained.
					</Text>
				</VStack>

				{/* Vision and Mission */}
				<VStack mt={12} align="left" gap={4}>
					<Heading as="h3">
						Our Vision <Emoji symbol="👀" />
					</Heading>
					<Text>
						Advance society&apos;s caregiving readiness so as to empower current
						and future caregivers (both formal &amp; informal), to prepare them
						for caregiving.
					</Text>
					<Heading as="h3">
						Our Mission <Emoji symbol="🎯" />
					</Heading>
					<UnorderedList>
						<ListItem>Reduce caregiver burnout</ListItem>
						<ListItem>
							To raise awareness and prepare the general public for caregiving
						</ListItem>
						<ListItem>
							Conducting research to expand our knowledge on caregiving
						</ListItem>
					</UnorderedList>
				</VStack>

				<SimpleGrid></SimpleGrid>
			</Container>
		</Layout>
	);
};

export default About;
