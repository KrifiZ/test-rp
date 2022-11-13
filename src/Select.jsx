import styles from "./Card.module.css";

const Select = (props) => {
	let defaultSelect;

	switch (parseInt(props.id)) {
		case 1:
			defaultSelect = "------------";
			break;
		case 2:
			defaultSelect = "zaznacz dodatek";
			break;
		case 3:
			defaultSelect = "zaznacz range";
			break;
	}

	return (
		<select
			className={styles.select}
			id={props.id}
			defaultValue={defaultSelect}
			onChange={props.onChange}
		>
			<option disabled hidden>
				{defaultSelect}
			</option>
			{props.options.map((option, index) => (
				<option key={index}>{option}</option>
			))}
		</select>
	);
};
export default Select;
