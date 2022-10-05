import Head from "next/head";

// StyleSheet
import styles from "../styles/Home.module.css";

// Components
import Header from "../components/header/header.component";
import CallToAction from "../components/call-to-action/callToAction.component";
import HowItWorks from "../components/how-it-works/how.it.works.component";
import WorkOnRealComp from "../components/work-on-real/work.on.real.component";
import TargetAudience from "../components/target-audience/target.audience.component";
import Projects from "../components/projects/projects.component";
import Internships from "../components/internships/internships.component";
import Jobs from "../components/jobs/jobs.component";
import Testimonial from "../components/testimonial/testimonial.component";
import Partners from "../components/partners/partners.components";
import NewsLetter from "../components/newsletter/newsletter.component";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Qollabb</title>
				<meta name="description" content="Pinsout Assignment" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<Header />
			<CallToAction />
			<HowItWorks />
			<WorkOnRealComp />
			<TargetAudience />
			<Projects />
			<Internships />
			<Jobs />
			<Testimonial />
			<Partners />
			<NewsLetter />
		</div>
	);
}
