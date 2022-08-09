import Logo from "./logo";
import NextLink from "next/link";
import {
	Container,
	Box,
	Link,
	Stack,
	Heading,
	Flex,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	IconButton,
	useColorModeValue,
	Button,
	HStack,
	Divider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";

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

const Navbar = (props) => {
	const { path } = props;

	return (
		<Box
			position="fixed"
			as="nav"
			w="100%"
			bg={useColorModeValue("rgba(255, 255, 255, 0.48)", "#20202380")}
			backdropBlur="blur(10px)"
			zIndex={1}
			{...props}
			py={2}
		>
			<Container
				display="flex"
				p={2}
				maxW="container.lg"
				wrap="wrap"
				align="center"
				justifyContent="space-between"
				gap={4}
			>
				<Flex align="center" mr={5}>
					<Heading as="h1" size="lg" letterSpacing={"tighter"}>
						<Logo />
					</Heading>
				</Flex>

				<Stack
					direction={{ base: "column", md: "row" }}
					display={{ base: "none", md: "flex" }}
					width={{ base: "full", md: "auto" }}
					alignItems="center"
					flexGrow={1}
					mt={{ base: 4, md: 0 }}
				>
					<LinkItem href="/about" path={path}>
						About
					</LinkItem>
					<LinkItem href="/initiatives" path={path}>
						Initiatives
					</LinkItem>
				</Stack>

				<HStack>
					<ThemeToggleButton />
					<Button
						as={LinkItem}
						href="/contact"
						display={{ base: "none", md: "inline-block" }}
						bg={useColorModeValue("green.500", "green.200")}
						color={useColorModeValue("white", "gray.800")}
						_hover={{
							bg: useColorModeValue("green.800", "green.500"),
							textDecoration: "none",
						}}
					>
						Something in Mind?
					</Button>

					<Box ml={2} display={{ base: "inline-flex", md: "none" }}>
						<Menu isLazy id="navbar-menu">
							<MenuButton
								as={IconButton}
								icon={<HamburgerIcon />}
								variant="outline"
								aria-label="Options"
							/>
							<MenuList p={2} minW="3xs">
								<MenuItem as={LinkItem} href="/about">
									About
								</MenuItem>
								<MenuItem as={LinkItem} href="/initiatives">
									Initiatives
								</MenuItem>
								<MenuItem>
									<Divider my="0.5rem" opacity="0.6" />
								</MenuItem>
								<MenuItem
									as={Button}
									bg={useColorModeValue("green.500", "green.200")}
									color={useColorModeValue("white", "gray.800")}
								>
									Something in Mind?
								</MenuItem>
							</MenuList>
						</Menu>
					</Box>
				</HStack>
			</Container>
		</Box>
	);
};

export default Navbar;
