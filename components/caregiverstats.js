import * as React from "react";
import {
	Container,
	Text,
	SimpleGrid,
	Box,
	chakra,
	Stack,
	HStack,
	Icon,
} from "@chakra-ui/react";
import { AiFillCheckCircle } from "react-icons/ai";

const statData = [
	{
		label: "Caregivers Worldwide",
		score: "44M",
	},
	{
		label: "Caregivers in Singapore",
		score: "496K",
	},
	{
		label: "Caregivers with Depression",
		score: "40%",
	},
	{
		label: "Caregivers finding caregiving stressful",
		score: "75%",
	},
];

// const planList = [
// 	"Customer obsessed. We put our customers front & center.",
// 	"Transparency. Most of our work is public.",
// 	"Freedom. We work from anywhere in the world.",
// 	"Autonomy. We want to create a safe, high-trust team.",
// 	"Excellence. We are aiming high, and we know it.",
// ];

const BrandStats = () => {
	return (
		<Container maxW="6xl" p={0} my={8}>
			<Stack
				direction={{ base: "column", md: "row" }}
				justifyContent="space-between"
			>
				<Stack spacing={4}>
					<chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold">
						Why Caregivers?
					</chakra.h1>
					<Text fontSize="md" maxW="480px">
						Caregivers are the unsung heroes in the lives of many patients. If
						not for the tireless hours caregivers put in to care for their loved
						ones, many patients would have suffered. So if the caregivers are
						unable to care themselves, how will they care for their loved ones?
					</Text>

					{/* <Stack spacing={2}>
						<Text fontSize="md" color="gray.400">
							We plan on doing all that cultivating our values:
						</Text>
						{planList.map((data, index) => (
							<HStack key={index} alignItems="center" spacing={1} fontSize="md">
								<Icon as={AiFillCheckCircle} w={4} h={4} color="blue.400" />
								<Text fontSize="md">{data}</Text>
							</HStack>
						))}
					</Stack> */}
				</Stack>
				<Stack>
					<SimpleGrid
						columns={2}
						spacing={5}
						pt={8}
						pl={{ base: 0, md: 10 }}
						margin="auto 0"
					>
						{statData.map((data, index) => (
							<Stack
								key={index}
								pl={3}
								py={1}
								pr={1}
								borderLeft="2px solid"
								borderLeftColor="blue.400"
								justifyContent="space-between"
							>
								<Box fontSize="2xl" fontWeight="bold" color="blue.400">
									{data.score}
								</Box>
								<Text fontSize="md">{data.label}</Text>
							</Stack>
						))}
					</SimpleGrid>
				</Stack>
			</Stack>
		</Container>
	);
};

export default BrandStats;
