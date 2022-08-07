import {
	VStack,
	Box,
	Heading,
	Link,
	useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const NAV_ITEMS = [
	{
		label: "The Project",
		href: "our-history",
	},
	{
		label: "Our Identity",
		href: "our-identity",
	},
	{
		label: "Our Beneficiaries",
		href: "our-beneficiaries",
	},
	{
		label: "Our Partners",
		href: "our-partners",
	},
];

const Sidebar = () => {
	return (
		<VStack
			p={6}
			display={{ base: "none", md: "flex" }}
			align="start"
			background="#ffffff"
			height="max-content"
			width="max-content"
			boxShadow="lg"
			rounded="md"
			_hover={{ boxShadow: "xl" }}
		>
			<Heading as="h2" size="lg">
				About Us
			</Heading>
			{NAV_ITEMS.map((navitem) => SidebarNav(navitem))}
		</VStack>
	);
};

const SidebarNav = (navItem) => {
	const linkColor = useColorModeValue("gray.600", "gray.200");
	const linkHoverColor = useColorModeValue("gray.800", "white");
	return (
		<Link
			p={2}
			fontSize={"sm"}
			fontWeight={500}
			color={linkColor}
			_hover={{
				textDecoration: "none",
				color: linkHoverColor,
			}}
			textAlign="left"
			cursor="pointer"
		>
			<NextLink href={navItem.href ?? "#"}>{navItem.label}</NextLink>
		</Link>
	);
};

export default Sidebar;
