import styles from "./style.module.css";

interface Props {
	title: string;
	icon?: boolean;
	color?: string;
	size?: "small" | "medium" | "large";
	radius?: "xsmall" | "small" | "medium" | "large";
}

export default function Tag({ title, icon, color, size = "medium", radius = "medium" }: Props) {
	return (
		<div
			className={`
        ${styles.tag} 
        ${
					size === "small"
						? styles[`tag-size-small`]
						: size === "large"
						? styles[`tag-size-large`]
						: styles[`tag-size-medium`]
				} 
        ${
					radius === "xsmall"
						? styles[`tag-radius-xsmall`]
						: radius === "small"
						? styles[`tag-radius-small`]
						: radius === "large"
						? styles[`tag-radius-large`]
						: styles[`tag-radius-medium`]
				}
      `}
		>
			{icon && (
				<span
					className={styles[`tag-icon`]}
					style={{ backgroundColor: color || "var(--color-accent)" }}
				/>
			)}
			<span className={styles[`tag-title`]}>{title}</span>
		</div>
	);
}
