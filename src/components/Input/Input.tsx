import styles from "./styles.module.css";
import { forwardRef, type JSX } from "react";

interface PropsInput
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "icon" | "onChange"> {
	size?: "small" | "medium" | "large";
	icon?: JSX.Element;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<HTMLInputElement, PropsInput>(
	({ size, icon, onChange, ...props }, ref) => {
		return (
			<div className={styles[`input-container`]}>
				<input
					className={`${styles.input} ${styles[`input-size-${size}`]} ${
						icon ? styles[`input-icon`] : ""
					}`}
					ref={ref}
					onChange={onChange}
					{...props}
				/>
				<span className={styles[`icon`]}>{icon}</span>
			</div>
		);
	}
);
