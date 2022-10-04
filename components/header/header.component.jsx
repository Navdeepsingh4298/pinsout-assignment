import Image from "next/image";
import Navbar from "../navbar/navbar.component";
import styles from "./header.module.css";

const Header = () => {
	return (
		<div className={styles.headerContainer}>
			<Navbar />

			<div className={styles.headerMain}>
				<div>
					<h2 className={styles.headerTexth2}>
						Get valuable industry experience
					</h2>
					<p className={styles.headerTextp}>
						work on industry projects gain employibility and explore internships
						and jobs.
					</p>
					<span className={styles.exploreBtn}>
						<p>Explore</p>
						<Image
							src="/airplane.png"
							alt="explore"
							width={19.5}
							height={17.5}
						/>
					</span>
				</div>
				<div>
					<Image src="/hat.png" alt="hat" width={543.6} height={543.6} />
				</div>
			</div>
		</div>
	);
};

export default Header;
