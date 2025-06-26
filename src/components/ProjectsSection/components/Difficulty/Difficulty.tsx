import { CheckIcon } from "lucide-react";
import { difficulties } from "../../../../data/filters";
import { projects } from "../../../../data/proyects";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import { difficultySelected } from "../../../../store/store";

export function Difficulty() {
	const [difficultySelect, setDifficultySelect] = useState<string[]>([]);

	useEffect(() => {
		const unsubscribe = difficultySelected.subscribe((value) =>
			setDifficultySelect(value as string[])
		);
		return () => unsubscribe();
	}, []);

	const handleDifficultyChange = (value: string) => {
		setDifficultySelect((prev) => {
			if (prev.includes(value)) {
				return prev.filter((diff) => diff !== value);
			} else {
				return [...prev, value];
			}
		});
		let difficulty = difficultySelect;
		if (difficulty.includes(value)) {
			difficulty = difficulty.filter((diff) => diff !== value);
		} else {
			difficulty = [...difficulty, value];
		}
		difficultySelected.set(difficulty);
	};
	return (
		<div className={styles["difficulty-container"]}>
			<h2 className={styles.title}>Dificultad</h2>
			<div className={styles.difficulties}>
				{difficulties.map((difficulty) => (
					<button
						key={difficulty.value}
						className={`${styles.difficulty}  ${
							difficultySelect.includes(difficulty.value) ? styles["difficulty-checked"] : ""
						}`}
						onClick={() => handleDifficultyChange(difficulty.value)}
					>
						<div className={styles["difficulty-content"]}>
							<div className={styles.check}>
								<CheckIcon className={styles["check-icon"]} />
							</div>
							{difficulty.name}
						</div>
						<span className={styles.count}>
							({projects.filter((project) => project.difficulty === difficulty.value).length})
						</span>
					</button>
				))}
			</div>
		</div>
	);
}
