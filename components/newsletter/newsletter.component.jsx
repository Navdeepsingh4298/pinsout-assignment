import styles from "./newsletter.module.css";
import Btn from "../btn/btn.component";
import Image from "next/image";

const NewsLetter = () => {
	return (
		<div className={styles.nContainer}>
			<h3 className={styles.nContainerHeading}>Subscribe to Newsletter</h3>
			<p className={styles.nContainerDesc}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit viverra
				laoreet ante vel arcu aliquam. Pellentesque sodales sit proin sagittis
			</p>
			<div className={styles.nContainerInput}>
				<input type="email" className={styles.nContainerInputEmail} />
				<Btn styles={styles.nContainerSubmitBtn} title={"Submit"} />
			</div>
		</div>
	);
};

export default NewsLetter;
