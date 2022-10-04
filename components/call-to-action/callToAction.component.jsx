import styles from "./callToAction.module.css";
import Image from "next/image";

const CallToAction = () => {
	return (
		<div className={styles.ctaContainer}>
			<div className={styles.ctaCard}>
				<Image
					src="/videocall.png"
					alt="videocallicon"
					width={55.4}
					height={55.4}
				/>
				<p>Explore Opportunities</p>
			</div>
			<div className={styles.ctaCard}>
				<Image
					src="/videocall.png"
					alt="videocallicon"
					width={55.4}
					height={55.4}
				/>
				<p>Connect with us</p>
			</div>
			<div className={styles.ctaCard}>
				<Image src="/user.png" alt="usericon" width={55.4} height={55.4} />
				<p>Sign Up for free</p>
			</div>
		</div>
	);
};

export default CallToAction;
