import Image from "next/image";
import styles from "./navbar.module.css";

const Navbar = () => {
	return (
		<div className={styles.navbarContainer}>
			<Image src="/logo.png" alt="logo" width={133.71} height={64.99} />
			<ul className={styles.navlist}>
				<li>Companies</li>
				<li>Students</li>
				<li>College/Universities</li>
				<li>About Us</li>
			</ul>
			<div className={styles.btns}>
				<a href="/signin">Sign In</a>
				<a className={styles.registerBtn} href="/register">
					Register
				</a>
			</div>
		</div>
	);
};

export default Navbar;
