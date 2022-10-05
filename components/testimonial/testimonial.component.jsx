import Image from "next/image";
import styles from "./testimonial.module.css";

const Testimonial = () => {
	return (
		<div className={styles.tContainer}>
			<div className={styles.tContainerHeader}>
				<div className={styles.tContainerHead}>
					<h2 className={styles.tContainerHeading}>
						What students are saying about{" "}
						<span className={styles.tContainerHeadingLogo}>Qollabb</span>
					</h2>
					<p className={styles.tContainerHeadingDesc}>
						Lorem ipsum dolor sit amet, consectetur{" "}
					</p>
				</div>
				<div className={styles.tContainerStudents}>
					<Image
						src="/left-arrow.png"
						alt="left-arrow"
						width={7.98}
						height={15.96}
					/>
					<div className={styles.tContainerStudentDisabled}>
						<Image
							src="/priyasingh.png"
							alt="priyasingh"
							width={54.8}
							height={54.8}
						/>
						<div>
							<h3 className={styles.tContainerStudentName}>
								Priya Singh Bhatia
							</h3>
							<p className={styles.tContainerStudentRole}>Intern at Whatsapp</p>
						</div>
					</div>
					<div className={styles.tContainerStudent}>
						<Image
							src="/priyasingh.png"
							alt="priyasingh"
							width={54.8}
							height={54.8}
						/>
						<div>
							<h3 className={styles.tContainerStudentName}>
								Priya Singh Bhatia
							</h3>
							<p className={styles.tContainerStudentRole}>Intern at Whatsapp</p>
						</div>
					</div>

					<div className={styles.tContainerStudentDisabled}>
						<Image
							src="/priyasingh.png"
							alt="priyasingh"
							width={54.8}
							height={54.8}
						/>
						<div>
							<h3 className={styles.tContainerStudentName}>
								Priya Singh Bhatia
							</h3>
							<p className={styles.tContainerStudentRole}>Intern at Whatsapp</p>
						</div>
					</div>
					<Image
						src="/right-arrow.png"
						alt="right-arrow"
						width={7.98}
						height={15.96}
					/>
				</div>
			</div>

			<div className={styles.tContainerFooter}>
				<Image src="/message.png" alt="Message" width={86.43} height={86.43} />
				<p className={styles.tContainerFooterPara}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit viverra
					laoreet ante vel arcu aliquam. Pellentesque sodales sit proin
					sagittis. Ut amet senectus orci id at viverra diam. Turpis nec
					pellentesque magna nunc gravida conva.
				</p>
			</div>
		</div>
	);
};

export default Testimonial;
