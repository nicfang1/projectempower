import Head from "next/head";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";
import Script from "next/script";

const Main = ({ children, router }) => {
	return (
		<Box as="main" pb={8}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="author" content="Project Empower" />
				<link rel="apple-touch-icon" href="/public/PE_logo.png" />
				<link rel="shortcut icon" href="/PE_logo.png" type="image/x-icon" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@ProjectEmpower" />
				<meta name="twitter:creator" content="@ProjectEmpower" />
				<meta name="twitter:image" content="/images/PElogo.png" />
				<meta property="og:site_name" content="Project Empower" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/public/PE_logo.png" />
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
