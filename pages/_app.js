import Layout from "../components/layouts/main";
import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";
import Chakra from "../components/chakra";
import Script from "next/script";

if (typeof window !== "undefined") {
	window.history.scrollRestoration = "manual";
}

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-SLWZM1N3JJ"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-SLWZM1N3JJ');
// </script>

function Website({ Component, pageProps, router }) {
	return (
		<Chakra cookies={pageProps.cookies}>
			<Script
				strategy="lazyOnload"
				src="https://www.googletagmanager.com/gtag/js?id=G-XDZ8ZZ3T3K"
			/>

			<Script strategy="lazyOnload" id="gtag-init">
				{`window.dataLayer = window.dataLayer || [];
				  function gtag(){dataLayer.push(arguments);}
				  gtag('js', new Date());
				
				  gtag('config', 'G-XDZ8ZZ3T3K');
				  
			`}
			</Script>
			<Fonts />
			<Layout router={router}>
				<AnimatePresence
					exitBeforeEnter
					initial={true}
					onExitComplete={() => {
						if (typeof window !== "undefined") {
							window.scrollTo({ top: 0 });
						}
					}}
				>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</Layout>
		</Chakra>
	);
}

export default Website;
