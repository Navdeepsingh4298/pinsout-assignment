import Image from "next/image";
import Btn from "../btn/btn.component";
import styles from "./jobs.module.css";

const Jobs = () => {
	return (
		<div className={styles.jContainer}>
			<div className={styles.jHeaderContainer}>
				<h3 className={styles.jContainerHeading}>Latest jobs for freshers</h3>
				<p className={styles.jContainerPara}>
					Lorem ipsum dolor sit amet. consectetur
				</p>
				<button className={styles.alljBtn}>See all Jobs</button>
			</div>

			<div className={styles.jCardsContainer}>
				<div className={styles.jCard}>
					<Image
						src="/netflix.png"
						alt="netflixicon"
						width={44.37}
						height={44.37}
					/>
					<div className={styles.jCardHead}>
						<h3 className={styles.jCardLogoHeading}>Netflix</h3>
						<p className={styles.jCardTextLoc}>Noida, UP, India</p>
					</div>
					<span className={styles.jCardTextPrice}>&#8377; 14k</span>
					<span className={styles.jCardTextDuration}>/month</span>
					<h3 className={styles.jCardHeading}>Product Designer</h3>
					<div className={styles.jCardBody}>
						<p>
							Project
							<span className={styles.jCardTextTime}>2 Days ago</span>
						</p>
						<p className={styles.jCardDesc}>
							We are looking for a senior product designer for our team
						</p>
					</div>

					<Btn title="Apply Now" styles={styles.jCardApplyBtn} />
				</div>
				<div className={styles.jCard}>
					<Image
						src="/netflix.png"
						alt="netflixicon"
						width={44.37}
						height={44.37}
					/>
					<div className={styles.jCardHead}>
						<h3 className={styles.jCardLogoHeading}>Netflix</h3>
						<p className={styles.jCardTextLoc}>Noida, UP, India</p>
					</div>
					<span className={styles.jCardTextPrice}>&#8377; 14k</span>
					<span className={styles.jCardTextDuration}>/month</span>
					<h3 className={styles.jCardHeading}>Product Designer</h3>
					<div className={styles.jCardBody}>
						<p>
							Project
							<span className={styles.jCardTextTime}>2 Days ago</span>
						</p>
						<p className={styles.jCardDesc}>
							We are looking for a senior product designer for our team
						</p>
					</div>

					<Btn title="Apply Now" styles={styles.jCardApplyBtn} />
				</div>
				<div className={styles.jCard}>
					<Image
						src="/netflix.png"
						alt="netflixicon"
						width={44.37}
						height={44.37}
					/>
					<div className={styles.jCardHead}>
						<h3 className={styles.jCardLogoHeading}>Netflix</h3>
						<p className={styles.jCardTextLoc}>Noida, UP, India</p>
					</div>
					<span className={styles.jCardTextPrice}>&#8377; 14k</span>
					<span className={styles.jCardTextDuration}>/month</span>
					<h3 className={styles.jCardHeading}>Product Designer</h3>
					<div className={styles.jCardBody}>
						<p>
							Project
							<span className={styles.jCardTextTime}>2 Days ago</span>
						</p>
						<p className={styles.jCardDesc}>
							We are looking for a senior product designer for our team
						</p>
					</div>

					<Btn title="Apply Now" styles={styles.jCardApplyBtn} />
				</div>
				<div className={styles.jCard}>
					<Image
						src="/netflix.png"
						alt="netflixicon"
						width={44.37}
						height={44.37}
					/>
					<div className={styles.jCardHead}>
						<h3 className={styles.jCardLogoHeading}>Netflix</h3>
						<p className={styles.jCardTextLoc}>Noida, UP, India</p>
					</div>
					<span className={styles.jCardTextPrice}>&#8377; 14k</span>
					<span className={styles.jCardTextDuration}>/month</span>
					<h3 className={styles.jCardHeading}>Product Designer</h3>
					<div className={styles.jCardBody}>
						<p>
							Project
							<span className={styles.jCardTextTime}>2 Days ago</span>
						</p>
						<p className={styles.jCardDesc}>
							We are looking for a senior product designer for our team
						</p>
					</div>

					<Btn title="Apply Now" styles={styles.jCardApplyBtn} />
				</div>
				<div className={styles.jCard}>
					<Image
						src="/netflix.png"
						alt="netflixicon"
						width={44.37}
						height={44.37}
					/>
					<div className={styles.jCardHead}>
						<h3 className={styles.jCardLogoHeading}>Netflix</h3>
						<p className={styles.jCardTextLoc}>Noida, UP, India</p>
					</div>
					<span className={styles.jCardTextPrice}>&#8377; 14k</span>
					<span className={styles.jCardTextDuration}>/month</span>
					<h3 className={styles.jCardHeading}>Product Designer</h3>
					<div className={styles.jCardBody}>
						<p>
							Project
							<span className={styles.jCardTextTime}>2 Days ago</span>
						</p>
						<p className={styles.jCardDesc}>
							We are looking for a senior product designer for our team
						</p>
					</div>

					<Btn title="Apply Now" styles={styles.jCardApplyBtn} />
				</div>
				<div className={styles.jCard}>
					<Image
						src="/netflix.png"
						alt="netflixicon"
						width={44.37}
						height={44.37}
					/>
					<div className={styles.jCardHead}>
						<h3 className={styles.jCardLogoHeading}>Netflix</h3>
						<p className={styles.jCardTextLoc}>Noida, UP, India</p>
					</div>
					<span className={styles.jCardTextPrice}>&#8377; 14k</span>
					<span className={styles.jCardTextDuration}>/month</span>
					<h3 className={styles.jCardHeading}>Product Designer</h3>
					<div className={styles.jCardBody}>
						<p>
							Project
							<span className={styles.jCardTextTime}>2 Days ago</span>
						</p>
						<p className={styles.jCardDesc}>
							We are looking for a senior product designer for our team
						</p>
					</div>

					<Btn title="Apply Now" styles={styles.jCardApplyBtn} />
				</div>
			</div>
		</div>
	);
};

export default Jobs;
