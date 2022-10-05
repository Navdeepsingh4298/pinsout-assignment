import Image from "next/image";
import styles from "./partners.module.css";

const Partners = () => {
	return (
		<div className={styles.pContainer}>
			<div className={styles.pContainerHeader}>
				<h2 className={styles.pContainerHeading}>
					Decision makers in companies and universities around the globe trust
					us
				</h2>
				<p className={styles.pContainerPara}>
					Hundreds of fast-growing companies from tech startups, to SMEs, to
					Fortune 500
				</p>
			</div>
			<div className={styles.pContainerFooter}>
				<Image
					src="/left-arrow.png"
					alt="left-arrow"
					width={7.98}
					height={15.96}
				/>
				<Image
					src="/comp-takeda.png"
					alt="company-takeda"
					width={158.89}
					height={93.94}
				/>
				<Image
					src="/comp-HSE.png"
					alt="company-HSE"
					width={97.54}
					height={56.79}
				/>
				<Image
					src="/comp-delonghi.png"
					alt="company-delonghi"
					width={97.54}
					height={56.79}
				/>
				<Image
					src="/comp-kelly.png"
					alt="company-kelly"
					width={125.78}
					height={56.79}
				/>
				<Image
					src="/comp-festo.png"
					alt="company-festo"
					width={97.54}
					height={56.79}
				/>
				<Image
					src="/right-arrow.png"
					alt="right-arrow"
					width={7.98}
					height={15.96}
				/>
			</div>
		</div>
	);
};

export default Partners;
