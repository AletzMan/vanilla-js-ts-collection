import { CheckIcon } from "lucide-react";
import { projects } from "../../../../data/proyects";
import { languages } from "../../../../data/filters";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import { languageSelected } from "../../../../store/store";

export function Languages() {
	const [languageSelect, setLanguageSelect] = useState<string[]>([]);
	useEffect(() => {
		const unsubscribe = languageSelected.subscribe((value) => setLanguageSelect(value as string[]));
		return () => unsubscribe();
	}, []);

	const handleLanguageChange = (value: string) => {
		setLanguageSelect((prev) => {
			if (prev.includes(value)) {
				return prev.filter((lang) => lang !== value);
			} else {
				return [...prev, value];
			}
		});
		let language = languageSelect;
		if (language.includes(value)) {
			language = language.filter((lang) => lang !== value);
		} else {
			language = [...language, value];
		}
		languageSelected.set(language);
	};

	return (
		<div className={styles["language-container"]}>
			<h2 className={styles.title}>Lenguajes</h2>
			<div className={styles.container}>
				{languages.map((language) => (
					<button
						key={language.name}
						onClick={() => handleLanguageChange(language.value)}
						className={`${styles.language} ${
							languageSelect.includes(language.value) ? styles["language-checked"] : ""
						}`}
					>
						<div className={styles["language-content"]}>
							<div className={styles.check}>
								<CheckIcon className={styles["check-icon"]} />
							</div>
							{language.icon && <language.icon className={styles["icon"]} />}
							{language.name}
						</div>
						<span className={styles["count"]}>
							({projects.filter((project) => project.language === language.value).length})
						</span>
					</button>
				))}
			</div>
		</div>
	);
}
