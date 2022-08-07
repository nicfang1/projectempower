import {
	Flex,
	Link,
	Text,
	Container,
	VStack,
	useColorModeValue,
	Box,
	Divider,
	HStack,
	Button,
	chakra,
} from "@chakra-ui/react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import NextLink from "next/link";

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

const Footer = () => {
	return (
		<Box display="flex" flexDirection="column" mt={4}>
			<Divider />
			<HStack py={4} alignItems="center" justifyContent="space-between">
				<Text>2022 - Project Empower</Text>
				<Flex flexDirection="row" gap={2}>
					<Link>
						<Button
							appearance="none"
							color={useColorModeValue("white", "black")}
							bg={useColorModeValue("pink.500", "pink.200")}
							_hover={{
								bg: useColorModeValue("pink.800", "pink.500"),
								textDecoration: "none",
							}}
							borderRadius="999px"
							h={8}
							minW={8}
							p={0}
							as={LinkItem}
							href="#"
						>
							<BsInstagram />
						</Button>
					</Link>
					<Link>
						<Button
							appearance="none"
							color={useColorModeValue("white", "black")}
							bg={useColorModeValue("facebook.500", "facebook.200")}
							_hover={{ bg: useColorModeValue("facebook.800", "facebook.500") }}
							borderRadius="999px"
							h={8}
							minW={8}
							p={0}
							as={LinkItem}
							href="#"
						>
							<BsFacebook />
						</Button>
					</Link>
					<Link>
						<Button
							appearance="none"
							color={useColorModeValue("white", "black")}
							bg={useColorModeValue("linkedin.500", "linkedin.200")}
							_hover={{ bg: useColorModeValue("linkedin.800", "linkedin.500") }}
							borderRadius="999px"
							h={8}
							minW={8}
							p={0}
							as={LinkItem}
							href="#"
						>
							<BsLinkedin height="1em" width="1em" />
						</Button>
					</Link>
				</Flex>
			</HStack>
		</Box>
	);
};

export default Footer;
