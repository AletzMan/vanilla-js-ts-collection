import { JavaScriptIcon, TypeScriptIcon } from "../../icons";
import styles from "./styles.module.css";

export function Logo() {
	return (
		<a href="/" className={styles.logo}>
			<div className={styles["logo-container"]}>
				<JavaScriptIcon className={styles["logo-icon"]} />
				<TypeScriptIcon className={styles["logo-icon"]} />
			</div>
			<div className={styles["logo-text"]}>Vanilla JS/TS Collection</div>
		</a>
	);
}
