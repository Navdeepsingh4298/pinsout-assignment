import Head from "next/head";
import Navbar from "../components/navbar/navbar.component";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Qollabb</title>
				<meta name="description" content="Pinsout Assignment" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />
		</div>
	);
}
