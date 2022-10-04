import Image from "next/image";
import styles from "./target.audience.module.css";

const TargetAudience = () => {
	return (
		<div className={styles.taContainer}>
			<div className={styles.taCardsContainer}>
				<div className={styles.taCard}>
					<Image
						src="/hat-outline.png"
						alt="hat-outline"
						width={59.11}
						height={59.11}
					/>
					<h4 className={styles.taCardHeading}>Company</h4>
					<p className={styles.taCardpara}>
						Create 2d / 3d video animation in a short period of time designed to
						promote a company product
					</p>
					<span className={styles.taCardExploreBtn}>
						<p>Explore</p>
						<Image
							src="/PurpleArrow.png"
							alt="PurpleArrow"
							width={25}
							height={14}
						/>
					</span>
				</div>

				<div className={styles.taCardOdd}>
					<Image
						src="/Graduate.png"
						alt="Graduate"
						width={59.11}
						height={59.11}
					/>
					<h4 className={styles.taCardHeadingOdd}>Student</h4>
					<p className={styles.taCardparaOdd}>
						Make your website design / mobile application design more colorful
						and give a cool impression on the eyes of the user
					</p>
					<span className={styles.taCardExploreBtnOdd}>
						<p>Explore</p>
						<Image
							src="/WhiteArrow.png"
							alt="WhiteArrow"
							width={25}
							height={14}
						/>
					</span>
				</div>

				<div className={styles.taCard}>
					<Image
						src="/hat-outline.png"
						alt="hat-outline"
						width={59.11}
						height={59.11}
					/>
					<h4 className={styles.taCardHeading}>College/University</h4>
					<p className={styles.taCardpara}>
						Create customizable illustrations with attractive designs that are
						made visually through high creativity
					</p>
					<span className={styles.taCardExploreBtn}>
						<p>Explore</p>
						<Image
							src="/PurpleArrow.png"
							alt="PurpleArrow"
							width={25}
							height={14}
						/>
					</span>
				</div>
			</div>
		</div>
	);
};

export default TargetAudience;
