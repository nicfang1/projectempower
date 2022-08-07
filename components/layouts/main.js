import Head from "next/head";
import dynamic from "next/dynamic";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";

const Main = ({ children, router }) => {
	return (
		<Box as="main" pb={8}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Project Empower" />
				<meta name="author" content="Project Empower" />
				<link rel="apple-touch-icon" href="/images/PElogo.png" />
				<link
					rel="shortcut icon"
					href="/images/PElogo.png"
					type="image/x-icon"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@ProjectEmpower" />
				<meta name="twitter:creator" content="@ProjectEmpower" />
				<meta name="twitter:image" content="/images/PElogo.png" />
				<meta property="og:site_name" content="Project Empower Homepage" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/images/PElogo.png" />
				<title>Project Empower</title>
			</Head>

			<NavBar path={router.asPath} />
			<Container maxW="container.md">
				{children}
				<Footer />
			</Container>
		</Box>
	);
};

export default Main;
