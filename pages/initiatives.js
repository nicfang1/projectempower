/* eslint-disable react-hooks/rules-of-hooks */
import {
	Container,
	Heading,
	VStack,
	Text,
	SimpleGrid,
	Box,
	Flex,
	Divider,
	Button,
	chakra,
	Link,
	useColorModeValue,
} from "@chakra-ui/react";
import { ImBubble } from "react-icons/im";
import { FaHandsHelping, FaResearchgate } from "react-icons/fa";
import { AiFillVideoCamera } from "react-icons/ai";
import { MdPublic } from "react-icons/md";
import { SiPubmed } from "react-icons/si";
import { motion, isValidMotionProp } from "framer-motion";
import React from "react";
import Layout from "../components/layouts/article";
import NextImage from "next/image";
import NextLink from "next/link";

const initiatives = [
	{
		heading: "Caregiver Relief Service",
		desc: "Volunteers would perform simple activities (e.g. cleaning, purchasing groceries) to allow these caregivers to have personal time off for themselves.",
		icons: [
			{
				icon: <FaHandsHelping key="1" />,
				bgColorLight: "orange.200",
				bgColorDark: "orange.500",
			},
		],
	},
	{
		heading: "Public Awareness Events",
		desc: "Such as Run to Empower which welcomed all NUS students to take part to show support towards the unsung heroes in the lives of patients.",
		icons: [
			{
				icon: <MdPublic key="1" />,
				bgColorLight: "green.200",
				bgColorDark: "green.500",
			},
		],
	},
	{
		heading: "Video Interview",
		desc: "This will consist of a series of interviews with caregivers, patients, healthcare professionals and the public to understand the role that caregivers play in our healthcare landscape",
		icons: [
			{
				icon: <AiFillVideoCamera key="1" />,
				bgColorLight: "purple.200",
				bgColorDark: "purple.500",
			},
		],
	},
	{
		heading: "Research",
		desc: "Our review of the exisiting literature in Singapore has revealed that there is little understanding of the caregiver ecosystem. Through research, we aim to have a better understanding of caregivers in Singapore and generate new solutions to improve their wellbeing.",
		icons: [
			{
				icon: <FaResearchgate />,
				bgColorLight: "cyan.200",
				bgColorDark: "cyan.500",
			},
			{
				icon: <SiPubmed />,
				bgColorLight: "blue.200",
				bgColorDark: "blue.500",
			},
		],
	},
];

const ChakraBox = chakra(motion.div, {
	shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const container = {
	hidden: { opacity: 0, translateX: -50 },
	show: {
		opacity: 1,
		translateX: 0,
		transition: {
			ease: "easeInOut",
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { opacity: 0, translateX: -50 },
	show: { opacity: 1, translateX: 0 },
};

const LinkItem = ({ href, path, target, children, ...props }) => {
	const active = path === href;
	const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
	return (
		<NextLink href={href} passHref scroll={false}>
			<Link
				p={2}
				bg={active ? "grassTeal" : undefined}
				color={active ? "#202023" : inactiveColor}
				target={target}
				{...props}
			>
				{children}
			</Link>
		</NextLink>
	);
};

const Initiatives = () => {
	return (
		<Layout>
			<Container
				maxW="container.md"
				display="flex"
				flexDirection="column"
				alignItems="center"
				px={{ base: 6, md: 3 }}
				mb={24}
			>
				<ChakraBox
					variants={container}
					initial="hidden"
					whileInView="show"
					mt={32}
				>
					<Box
						mt={-12}
						mb={-8}
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<NextImage
							src="/Initiatives.png"
							alt="doodle"
							width={400}
							height={400}
						/>
					</Box>
					<VStack align="left" spacing={4}>
						<Heading>Initiatives created to help caregivers</Heading>
						<Text>
							We strive to understand the needs of caregivers and craft
							initiatives to best assist help to them!
						</Text>
						<SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4} mt={8}>
							{initiatives.map((initiative, index) => (
								<ChakraBox
									bg="whiteAlpha.100"
									overflow="hidden"
									p={6}
									borderRadius="lg"
									boxShadow="xl"
									variants={item}
									m={0}
									key={index}
									whileHover={{
										scale: 1.1,
									}}
								>
									<Flex
										flexDirection="column"
										gap={2}
										alignItems="start"
										h="full"
									>
										<Heading as="h2" fontSize="xl" fontWeight="bold">
											{initiative.heading}
										</Heading>
										<Text>{initiative.desc}</Text>
										<Box flex="1 1 0%" placeSelf="stretch" />
										<Flex flexDirection="row" gap={2}>
											{initiative.icons.map((i, index) => (
												<Button
													borderRadius="full"
													height={8}
													minW={8}
													p={3}
													fontSize="sm"
													w="auto"
													key={index}
													bg={useColorModeValue(i.bgColorLight, i.bgColorDark)}
												>
													{i.icon}
												</Button>
											))}
										</Flex>
									</Flex>
								</ChakraBox>
							))}
						</SimpleGrid>
					</VStack>
				</ChakraBox>
				<VStack mt={12}>
					<Heading as="h2">Have an idea to share?</Heading>
					<Text>
						At Project Empower we are constantly brainstorming new initiatives
						to help caregivers and for us to reach our goals. If you have an
						idea you would like to share, please contact us!
					</Text>
				</VStack>
				<Divider my={12} />
				<Button
					bg="orange.500"
					color="white"
					gap={2}
					as={LinkItem}
					href="/contact"
					_hover={{ bg: "orange.700", textDecoration: "none" }}
				>
					Get in touch with us
					<ImBubble />
				</Button>
			</Container>
		</Layout>
	);
};

export default Initiatives;
