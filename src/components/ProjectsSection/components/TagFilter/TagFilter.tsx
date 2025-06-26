import styles from "./style.module.css";
import { XIcon } from "lucide-react";

interface TagFilterProps {
	text: string;
	type: "language" | "difficulty" | "category" | "default";
	onClick: () => void;
}

export function TagFilter({ text, type, onClick }: TagFilterProps) {
	return (
		<span className={`${styles[`tag-filter`]} ${styles[`tag-filter-${type}`]}`}>
			{text}
			<button
				className={`${styles["tag-filter-button"]} ${
					type === "default" ? styles["tag-filter-button-default"] : ""
				}`}
				onClick={onClick}
			>
				{type !== "default" && <XIcon className={styles["tag-filter-icon"]} />}
			</button>
		</span>
	);
}
