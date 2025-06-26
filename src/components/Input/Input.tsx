import styles from "./styles.module.css";
import type { JSX } from "react";

interface Props {
	type: React.HTMLInputTypeAttribute;
	placeholder: string;
	size?: "small" | "medium" | "large";
	icon?: JSX.Element;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string;
}

export default function Input({
	type,
	placeholder,
	size = "medium",
	icon: Icon,
	onChange,
	value,
}: Props) {
	return (
		<div className={styles[`input-container`]}>
			<input
				type={type}
				placeholder={placeholder}
				className={`${styles.input} ${styles[`input-size-${size}`]} ${
					Icon ? styles[`input-icon`] : ""
				}`}
				value={value}
				onChange={onChange}
			/>
			<span className={styles[`icon`]}>{Icon}</span>
		</div>
	);
}
