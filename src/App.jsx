import { useState } from "react";
import Select from "./Select";
import styles from "./App.module.css";
const kitOptions = ["dodatki", "rangi", "custom"];

const roles = [
	"TRIAL SUPPORT",
	"SUPPORT",
	"JUNIOR MODERATOR",
	"MODERATOR",
	"JUNIOR ADMINISTRATOR",
	"ADMINISTRATOR ",
];

const addons = [
	"Druga Postać",
	"Unikalny Numer Telefonu",
	"Unikalna Tablica Rejestracyjna",
	"Pojazd z Selectealera",
	"Limitowany Pojazd",
	"Skrzynka Crime X5",
	"Skrzynka Legalna X5",
	"Koszulka Ekipowa",
	"Limitka Boostera - 2x BOOST",
];

const App = () => {
	const [mode, setMode] = useState(-1);
	const changeHandler = (option) => {
		if (option.target.id === "1") setMode(option.target.selectedIndex);
	};

	return (
		<div className={styles.card}>
			<Select id="1" key="1" onChange={changeHandler} options={kitOptions} />
			{mode == 1 && <Select id="2" key="2" options={addons} />}
			{mode == 2 && <Select id="3" key="3" options={roles} />}
			{mode == 3 && (
				<>
					<Select id="2" key="2" options={addons}></Select>{" "}
					<Select id="3" key="3" options={roles} />
				</>
			)}
			<button className={styles.button}>Złóż zamówienie</button>
		</div>
	);
};

export default App;
