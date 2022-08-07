import { SimpleGrid, Heading, Text, Button, Box } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import pic from "../public/humans/Young_woman_holding_big_heart.png";

const Card = () => {
	return (
		<SimpleGrid columns={{ sm: 1, md: 2 }}>
			<Image src={pic} alt="human" width={500} height={400} />
			<Box>
				<Heading textColor="linear(to-l, #7928CA, #FF0080)">
					Caring for the Caregivers
				</Heading>
				<Text>A NUS YLLSOM LCIP founded in January 2022</Text>
				<Button>Find out more</Button>
			</Box>
		</SimpleGrid>
	);
};

export default Card;
