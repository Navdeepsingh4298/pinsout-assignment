import Head from "next/head";

// Components
import Header from "../components/header/header.component";
import CallToAction from "../components/call-to-action/callToAction.component";
import HowItWorks from "../components/how-it-works/how.it.works.component";
import WorkOnRealComp from "../components/work-on-real/work.on.real.component";
import TargetAudience from "../components/target-audience/target.audience.component";
import Projects from "../components/projects/projects.component";

// StyleSheet
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
			<HowItWorks />
			<WorkOnRealComp />
			<TargetAudience />
			<Projects />
		</div>
	);
}
