import * as React from "react";
import {
	chakra,
	Container,
	VStack,
	Text,
	Button,
	Heading,
	Divider,
	SimpleGrid,
	Box,
	Link,
	useColorModeValue,
} from "@chakra-ui/react";
import { ImBubble } from "react-icons/im";
import { AiOutlinePlus, AiOutlineArrowRight } from "react-icons/ai";
import NextImage from "next/image";
import { motion, isValidMotionProp } from "framer-motion";
import Layout from "../components/layouts/article";
import NextLink from "next/link";
import { FaHandsHelping } from "react-icons/fa";
import { MdPublic } from "react-icons/md";
import { AiFillVideoCamera } from "react-icons/ai";
import { SiPubmed } from "react-icons/si";

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

const ChakraBox = chakra(motion.div, {
	shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const container = {
	hidden: { opacity: 0, translateY: 50 },
	show: {
		opacity: 1,
		translateY: 0,
		transition: {
			ease: "easeInOut",
			staggerChildren: 0.3,
		},
	},
};

const item = {
	hidden: { opacity: 0, translateY: 50 },
	show: { opacity: 1, translateY: 0 },
};

const HeroSection = () => {
	const initiatives = [
		{
			heading: "Caregiver Relief Service",
			desc: "Volunteers would perform simple activities (e.g. cleaning, purchasing groceries) to allow these caregivers to have personal time off for themselves.",
			icons: [
				{
					icon: <FaHandsHelping key="1" />,
					bgColor: useColorModeValue("orange.200", "orange.500"),
				},
			],
		},
		{
			heading: "Public Awareness Events",
			desc: "Such as Run to Empower which welcomed all NUS students to take part to show support towards the unsung heroes in the lives of patients.",
			icons: [
				{
					icon: <MdPublic key="1" />,
					bgColor: useColorModeValue("green.200", "green.500"),
				},
			],
		},
		{
			heading: "Video Interview",
			desc: "This will consist of a series of interviews with caregivers, patients, healthcare professionals and the public to understand the role that caregivers play in our healthcare landscape",
			icons: [
				{
					icon: <AiFillVideoCamera key="1" />,
					bgColor: useColorModeValue("purple.200", "purple.500"),
				},
			],
		},
		{
			heading: "Research",
			desc: "Our review of the exisiting literature in Singapore has revealed that there is little understanding of the caregiver ecosystem. Through research, we aim to have a better understanding of caregivers in Singapore and generate new solutions to improve their wellbeing.",
			icons: [
				{
					icon: <SiPubmed />,
					bgColor: useColorModeValue("blue.200", "blue.500"),
				},
			],
		},
	];

	return (
		<Layout
			title="Home"
			desc="A local community service project created for caregivers by students from NUS Medicine, Pharmacy and Pyschology. Find out more about our history, our vision, our mission and our initiatives"
		>
			<Container
				maxW="container.md"
				display="flex"
				flexDirection="column"
				alignItems="center"
				px={{ base: 6, md: 3 }}
				mb={24}
			>
				<VStack spacing={8}>
					<ChakraBox
						mt={12}
						mb={-8}
						animate={{
							rotate: ["0deg", "1.5deg", "3deg", "1.5deg", "0deg"],
							translateX: ["0%", "1%", "2%", "1%", "0%"],
							translateY: ["0%", "1%", "2%", "1%", "0%"],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
						}}
					>
						<NextImage
							src="/Landing.png"
							alt="doodle"
							width={400}
							height={400}
						/>
					</ChakraBox>
					<VStack gap={4} textAlign="center">
						<Heading>Caring for the Caregivers</Heading>
						<Text>
							A Local Community Service Project focused on serving the
							Caregivers.
						</Text>
						<Divider />
						<Button
							bg="orange.500"
							color="white"
							_hover={{ bg: "orange.800", textDecoration: "none" }}
							as={LinkItem}
							href="/about"
							rightIcon={<AiOutlineArrowRight />}
						>
							Find out more
						</Button>
					</VStack>
				</VStack>
				<VStack align="left" gap={4} mt={16}>
					<Heading>Project Empower is created for the caregivers</Heading>
					<Text>
						We are a team of students from NUS Medicine, Pharmacy and
						Psychiatry, working together to generate initiatives to improve the
						wellbeing of caregivers.
					</Text>
					<SimpleGrid columns={{ sm: 1, md: 2 }}>
						<Box
							maxW="2xl"
							display="flex"
							alignItems="center"
							justifyContent="center"
						>
							<NextImage
								src="/Landing_initiatives.png"
								alt="doodle"
								width={300}
								height={300}
							/>
						</Box>

						<ChakraBox
							display="flex"
							flexWrap="wrap"
							gap={4}
							variants={container}
							initial="hidden"
							whileInView="show"
						>
							{initiatives.map((initiative, index) => (
								<ChakraBox
									variants={item}
									display="flex"
									alignItems="center"
									p={4}
									cursor="pointer"
									gap={3}
									boxShadow="xl"
									borderRadius="lg"
									maxW="2xs"
									bg="whiteAlpha.100"
									key={index}
									whileHover={{
										scale: 1.1,
									}}
								>
									{initiative.icons.map((i, index) => (
										<Button
											borderRadius="full"
											h={8}
											minW={8}
											fontSize="sm"
											p={0}
											bg={i.bgColor}
											key={index}
										>
											{i.icon}
										</Button>
									))}

									<Text fontWeight="semibold">{initiative.heading}</Text>
								</ChakraBox>
							))}
							<Button
								alignItems="center"
								justifyContent="center"
								fontWeight="semibold"
								bg="orange.500"
								color="white"
								_hover={{ bg: "orange.700", textDecoration: "none" }}
								gap={2}
								href="/initiatives"
								as={LinkItem}
								rightIcon={<AiOutlinePlus />}
								cursor="unset"
								userSelect="none"
							>
								Find out more
							</Button>
						</ChakraBox>
					</SimpleGrid>
				</VStack>
				<VStack spacing={8} align="left" mt={16}>
					<Heading textAlign="left">Who do we work with?</Heading>
					<Text>
						Our partners are what allow us to continue doing what we doing;
						continuing to serve the caregivers!
					</Text>
					<ChakraBox
						display="flex"
						flexDirection="row"
						alignItems="center"
						justifyContent="space-between"
						variants={container}
						flexWrap="wrap"
						initial="hidden"
						whileInView="show"
						gap={16}
					>
						<ChakraBox variants={item}>
							<NextImage
								src="/partners/caringsg logo.png"
								alt="CaringSG"
								height={90}
								width={150}
							/>
						</ChakraBox>
						<ChakraBox variants={item}>
							<NextImage
								src="/partners/HCA_Logo.png"
								alt="HCA"
								height={90}
								width={100}
							/>
						</ChakraBox>
						<ChakraBox variants={item}>
							<NextImage
								src="/partners/med_soc.png"
								alt="Med Soc"
								height={90}
								width={120}
							/>
						</ChakraBox>
						<ChakraBox variants={item}>
							<NextImage
								src="/partners/NUS_Logo.png"
								alt="NUS"
								height={90}
								width={150}
							/>
						</ChakraBox>
					</ChakraBox>
				</VStack>
				<Divider my={12} />
				<Button
					bg="orange.500"
					color="white"
					_hover={{ bg: "orange.800", textDecoration: "none" }}
					gap={2}
					as={LinkItem}
					href="/contact"
					rightIcon={<ImBubble />}
				>
					Get in touch with us
				</Button>
			</Container>
		</Layout>
	);
};

export default HeroSection;
