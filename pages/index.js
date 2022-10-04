import Head from "next/head";
import CallToAction from "../components/call-to-action/callToAction.component";
import Header from "../components/header/header.component";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Qollabb</title>
				<meta name="description" content="Pinsout Assignment" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<CallToAction />
		</div>
	);
}
