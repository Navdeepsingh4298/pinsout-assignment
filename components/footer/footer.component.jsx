import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
	return (
		<div className={styles.fContainer}>
			<div className={styles.fContainerUpper}>
				<div className={styles.fContainerMain}>
					<Image
						src="/logo-purple.png"
						alt="logo"
						width={133.71}
						height={64.99}
					/>
					<p className={styles.fContainerMainText}>
						Open the doors for brilliant ideas to flow to you
					</p>
					<Image
						src="/socials.png"
						alt="socials"
						width={220.42}
						height={52.7}
					/>
				</div>
				<div className={styles.fContainerLinks}>
					<ul>
						<li className={styles.fContainerLinksHeading}>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Companies</a>
						</li>
						<li>
							<a href="#">Students</a>
						</li>
						<li>
							<a href="#">College/Universities</a>
						</li>
						<li>
							<a href="#">About Us</a>
						</li>
					</ul>
				</div>
				<div className={styles.fContainerLinks}>
					<ul>
						<li className={styles.fContainerLinksHeading}>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Companies</a>
						</li>
						<li>
							<a href="#">Students</a>
						</li>
						<li>
							<a href="#">College/Universities</a>
						</li>
						<li>
							<a href="#">About Us</a>
						</li>
					</ul>
				</div>
				<div className={styles.fContainerLinks}>
					<ul>
						<li className={styles.fContainerLinksHeading}>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Companies</a>
						</li>
						<li>
							<a href="#">Students</a>
						</li>
						<li>
							<a href="#">College/Universities</a>
						</li>
						<li>
							<a href="#">About Us</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.fContainerLower}>
				Copyright@Qollabb 2022, All right Reserved{" "}
				<a
					href="https://www.navdev.ml"
					target="_blank"
					rel="noopener noreferrer"
				>
					Made by Navdeep Singh
				</a>
			</div>
		</div>
	);
};

export default Footer;
