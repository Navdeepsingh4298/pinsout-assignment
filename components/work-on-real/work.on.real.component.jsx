import Image from "next/image";
import styles from "./work.on.real.module.css";

const WorkOnRealComp = () => {
	return (
		<div className={styles.worContainer}>
			<div className={styles.worTextContainer}>
				<h2 className={styles.worTextContainerHeading}>
					Work on real industry projects & showcase capabilities
				</h2>
				<p className={styles.worTextContainerPara}>
					Stand out from the competition with savvy marketing strategies, state
					of the art careers sites, engaging job ads, and an easy hiring
					process—not just for your candidates, but for your own team too.
				</p>
				<button className={styles.worTextContainerBtn}>
					<Image src="/signup.png" alt="Signup" height={18} width={18} />
					Signup for free
				</button>
			</div>
			<div className={styles.worImageContainer}>
				<Image src="/oldman.png" alt="oldman" width={550} height={500} />
			</div>
		</div>
	);
};

export default WorkOnRealComp;
