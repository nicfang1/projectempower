import { motion } from "framer-motion";
import Head from "next/head";
import { GridItemStyle } from "../grid-item";

const variants = {
	hidden: { opacity: 0, x: 0, y: 20 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: -0, y: 20 },
};

const Layout = ({ children, title, desc, keywords }) => (
	<motion.article
		initial="hidden"
		animate="enter"
		exit="exit"
		variants={variants}
		transition={{ duration: 0.4, type: "easeInOut" }}
		style={{ position: "relative" }}
	>
		<>
			{title && (
				<Head>
					<title> Project Empower | {title}</title>
					<meta name="twitter:title" content={title} />
					<meta property="og:title" content={title} />
					<meta name="description" content={desc} key="desc" />
					<meta name="keywords" content={keywords} />
					<meta property="og:description" content={desc} />
				</Head>
			)}
			{children}

			<GridItemStyle />
		</>
	</motion.article>
);

export default Layout;
