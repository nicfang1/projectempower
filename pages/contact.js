import {
	Container,
	Divider,
	Heading,
	Link,
	VStack,
	Button,
	Box,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import NextImage from "next/image";
import Layout from "../components/layouts/article";

const Contact = () => {
	return (
		<Layout title="Contact">
			<Container
				maxW="container.md"
				display="flex"
				flexDirection="column"
				alignItems="center"
				px={{ base: 6, md: 3 }}
				mb={24}
			>
				<Box mt={16}>
					<NextImage src="/contact.png" alt="doodle" width={400} height={400} />
				</Box>
				<VStack spacing={8}>
					<Heading as="h1">We love hearing from you!</Heading>
					<Text>
						Your feedback is valuable to us! Write to us and we will get back to
						you shortly
					</Text>
					<Divider />
					<Link href="mailto:projempowercg@gmail.com" textDecoration="none">
						<Button
							bg="orange.500"
							_hover={{ bg: "orange.800" }}
							color="white"
							rightIcon={<AiOutlineMail />}
						>
							Email Us
						</Button>
					</Link>
				</VStack>
			</Container>
		</Layout>
	);
};

export default Contact;
