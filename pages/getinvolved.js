import React from "react";
import Layout from "../components/layouts/article";
import {
	Container,
	Heading,
	SimpleGrid,
	Link,
	Button,
	Stack,
} from "@chakra-ui/react";
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";
import Section from "../components/section";
import Image from "next/image";
import pic from "../public/humans/Hand of generous person putting heart in jar.jpg";

const getinvolved = () => {
	return (
		<Layout title="Get Involved">
			<Container>
				<Image src={pic} alt="help" />
				<Heading as="h3" fontSize={20} mb={4}>
					How can you help?
				</Heading>
				<SimpleGrid columns={{ sm: 2, md: 2 }} gap={6}>
					<Section>
						<Heading as="h3" fontSize={15}>
							Donate
						</Heading>
						<p>
							Sponsorships and donations allow us to execute our plans and
							initiatives to bring the most help to our beneficiaries. Support
							our cause in helping the caregivers by donating to our project. To
							make a donation, simply click on the button below.
						</p>
						<Link
							href="https://give.asia/campaign/run-to-empower-2022/"
							target="_blank"
						>
							<Button colorScheme="teal" mt={5}>
								Give Asia
							</Button>
						</Link>
					</Section>
					<Section>
						<Heading as="h3" fontSize={15}>
							Spread the word
						</Heading>
						<p>
							Tell your friends and family about our project! Spread the word
							and follow us on our social media through clicking on the buttons
							below!
						</p>
						<Stack>
							<Link
								href="https://www.facebook.com/Project-Empower-107679328546793"
								target="_blank"
							>
								<Button colorScheme="teal" mt={3} leftIcon={<IoLogoFacebook />}>
									Facebook
								</Button>
							</Link>
							<Link href="https://instagram.com/projempower" target="_blank">
								<Button
									colorScheme="teal"
									mt={3}
									leftIcon={<IoLogoInstagram />}
								>
									Instagram
								</Button>
							</Link>
						</Stack>
					</Section>
				</SimpleGrid>
			</Container>
		</Layout>
	);
};

export default getinvolved;
export { getServerSideProps } from "../components/chakra";
