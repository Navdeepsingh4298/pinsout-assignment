import Image from "next/image";
import styles from "./how.it.works.module.css";

const HowItWorks = () => {
	return (
		<div className={styles.hiwContainer}>
			<h2 className={styles.hiwheading}>How it Works</h2>
			<div className={styles.hiwCards}>
				<div className={styles.hiwCard}>
					<Image src="/arrow1.png" alt="arrow" width={250} height={120} />
					<h4 className={styles.hiwCardHeading}>Create a Profile</h4>
					<p className={styles.hiwCardPara}>
						Create your free account with Google, Facebook, Linkedin or simply
						create a Qollabb account using your email ID.
					</p>
				</div>
				<div className={styles.hiwCard}>
					<Image src="/arrow2.png" alt="arrow" width={250} height={120} />
					<h4 className={styles.hiwCardHeading}>Explore Opportunities</h4>
					<p className={styles.hiwCardPara}>
						Search, select and join from over hundreds of real industry projects
						OR simply apply for an internship or a job posted by employers.
					</p>
				</div>
				<div className={styles.hiwCard}>
					<Image src="/arrow3.png" alt="arrow" width={250} height={120} />
					<h4 className={styles.hiwCardHeading}>Showcase capabilities</h4>
					<p className={styles.hiwCardPara}>
						Submit your project work to showcase your capabilites and impress
						top employers, get noticed.
					</p>
				</div>
				<div className={styles.hiwCard}>
					<Image src="/arrow4.png" alt="arrow" width={250} height={120} />
					<h4 className={styles.hiwCardHeading}>Get certified</h4>
					<p className={styles.hiwCardPara}>
						Complete all project milestones, get your project work evaluated by
						senior experts & earn valuable certification.
					</p>
				</div>
			</div>
		</div>
	);
};

export default HowItWorks;
