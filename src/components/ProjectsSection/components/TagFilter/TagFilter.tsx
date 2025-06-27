import { categories } from "../../../../data/filters";
import styles from "./style.module.css";
import { XIcon } from "lucide-react";

interface TagFilterProps {
	text: string;
	type: "language" | "difficulty" | "category" | "search" | "default";
	onClick: () => void;
}

export function TagFilter({ text, type, onClick }: TagFilterProps) {
	const colorCategory = categories.find((cat) => cat.name === text)?.color || "";
	return (
		<span
			className={`${styles[`tag-filter`]} ${styles[`tag-filter-${type}`]}`}
			style={
				type === "category"
					? {
							color: colorCategory,
							backgroundColor: colorCategory + "20",
							border: `1px solid ${colorCategory}45`,
					  }
					: {}
			}
		>
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
