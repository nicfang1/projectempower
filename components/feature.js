import {
	Container,
	Box,
	chakra,
	Text,
	Icon,
	SimpleGrid,
	Highlight,
	Link,
	VStack,
	useColorModeValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import {
	MdOutlinePersonPin,
	MdPermDeviceInformation,
	MdOutlineFlashlightOn,
} from "react-icons/md";
import NextLink from "next/link";
import { SiMinds } from "react-icons/si";

const features = [
	{
		heading: "About Us",
		content:
			"Find out about our project, our history, our mission and our goals.",
		icon: MdOutlineFlashlightOn,
		href: "/our-history",
	},
	{
		heading: "Our Initiatives",
		content: `We focus on Health, Education and Research & Development in our efforts.`,
		icon: SiMinds,
		href: "/our-history",
	},
	{
		heading: "How can you contribute",
		content:
			"You can make a difference to our efforts. Volunteer with us as a doctor. Be a donor.",
		icon: MdPermDeviceInformation,
		href: "/our-history",
	},
	{
		heading: "Contact us",
		content: `Keep your learning streak going, see stats of what you've learned and share it with others via your public profile. You can also join our private discord server!`,
		icon: MdOutlinePersonPin,
		href: "/our-history",
	},
];

const Features = () => {
	return (
		<Container maxW="6xl" p={{ base: 5, md: 10 }}>
			<chakra.h3
				fontSize="4xl"
				fontWeight="bold"
				mb={3}
				textAlign="center"
				lineHeight="tall"
			>
				A LOCAL COMMUNITY SERVICE PROJECT FOCUSED ON SERVING THE
				<Highlight
					query="CAREGIVERS"
					styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
				>
					CAREGIVERS.
				</Highlight>
			</chakra.h3>
			<SimpleGrid
				columns={{ base: 1, md: 2 }}
				placeItems="center"
				spacing={8}
				mt={12}
				mb={4}
			>
				{features.map((feature, index) => (
					<VStack
						key={index}
						textAlign="center"
						rounded="lg"
						bg={useColorModeValue("gray.100", "gray.800")}
						p={{ base: 3, sm: 6 }}
					>
						<Icon as={feature.icon} w={10} h={10} color="blue.400" />
						<chakra.h3
							as={Link}
							fontWeight="semibold"
							fontSize="2xl"
							_hover={{ color: "blue.800" }}
						>
							<NextLink href={feature.href} passHref scroll={false}>
								{feature.heading}
							</NextLink>
						</chakra.h3>
						<Text fontSize="md">{feature.content}</Text>
					</VStack>
				))}
			</SimpleGrid>
		</Container>
	);
};

export default Features;
