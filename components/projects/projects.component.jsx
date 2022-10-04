import styles from "./projects.module.css";

const Projects = () => {
	return (
		<div className={styles.projectsContainer}>
			<div className={styles.projectsHeader}>
				<h3 className={styles.projectsContainerHeading}>
					Explore Industry Projects
				</h3>
				<p className={styles.projectsContainerPara}>
					Lorem ipsum dolor sit amet. consectetur
				</p>
				<button className={styles.allCatBtn}>All Catogory</button>
			</div>

			<div className={styles.projectCardsContainer}>
				<div className={styles.projectCardPurple}>
					<h4 className={styles.projectCardPurpleHeading}>
						Design & Development
					</h4>
					<p className={styles.projectCardPurplePara}>150 jobs available</p>
				</div>

				<div className={styles.projectCardWhite}>
					<h4 className={styles.projectCardHeading}>Design & Development</h4>
					<p className={styles.projectCardWhitePara}>150 jobs available</p>
				</div>
				<div className={styles.projectCardWhite}>
					<h4 className={styles.projectCardHeading}>Design & Development</h4>
					<p className={styles.projectCardWhitePara}>150 jobs available</p>
				</div>
				<div className={styles.projectCardWhite}>
					<h4 className={styles.projectCardHeading}>Design & Development</h4>
					<p className={styles.projectCardWhitePara}>150 jobs available</p>
				</div>
				<div className={styles.projectCardWhite}>
					<h4 className={styles.projectCardHeading}>Design & Development</h4>
					<p className={styles.projectCardWhitePara}>150 jobs available</p>
				</div>
				<div className={styles.projectCardWhite}>
					<h4 className={styles.projectCardHeading}>Design & Development</h4>
					<p className={styles.projectCardWhitePara}>150 jobs available</p>
				</div>
				<div className={styles.projectCardWhite}>
					<h4 className={styles.projectCardHeading}>Design & Development</h4>
					<p className={styles.projectCardWhitePara}>150 jobs available</p>
				</div>
				<div className={styles.projectCardWhite}>
					<h4 className={styles.projectCardHeading}>Design & Development</h4>
					<p className={styles.projectCardWhitePara}>150 jobs available</p>
				</div>
			</div>
		</div>
	);
};

export default Projects;
