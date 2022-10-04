const Btn = ({ title, styles }) => {
	return (
		<div>
			<button className={styles}>{title}</button>
		</div>
	);
};

export default Btn;
