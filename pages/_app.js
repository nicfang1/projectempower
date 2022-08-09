import Layout from "../components/layouts/main";
import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";
import Chakra from "../components/chakra";
import Script from "next/script";

if (typeof window !== "undefined") {
	window.history.scrollRestoration = "manual";
}

function Website({ Component, pageProps, router }) {
	return (
		<Chakra cookies={pageProps.cookies}>
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
			/>
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
				}}
			/>
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
