import { useEffect, useState, type MouseEvent } from "react";
import { categories } from "../../../../data/filters";
import { projects } from "../../../../data/proyects";
import { categorySelected } from "../../../../store/store";
import styles from "./styles.module.css";

export function Categories() {
	const [categorySelect, setCategorySelect] = useState("Todos");

	useEffect(() => {
		const unsubscribe = categorySelected.subscribe((value) => {
			setCategorySelect(value);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const handleCategoryChange = (e: MouseEvent<HTMLInputElement>) => {
		const value = (e.target as HTMLInputElement).value;
		categorySelected.set(value);
		setCategorySelect(value);
	};

	return (
		<div className={styles.categoriesContainer}>
			<h2 className={styles.title}>Categorias</h2>
			<div className={styles.categories}>
				{categories.map((category) => {
					const Icon = category.icon;
					return (
						<label
							key={category.name}
							htmlFor={category.name}
							className={`${styles.category}  `}
							style={
								categorySelect === category.name
									? {
											background: `linear-gradient(135deg, ${category.color}20, ${category.color}40, ${category.color}20)`,
											border: `1px solid ${category.color}70`,
											color: category.color,
									  }
									: {
											background:
												"linear-gradient(135deg, var(--color-surface-secondary), var(--color-surface), var(--color-surface-secondary))",
											border: `1px solid var(--color-border)`,
									  }
							}
						>
							<input
								type="radio"
								name="category"
								className={styles.radioCategory}
								id={category.name}
								value={category.name}
								onClick={handleCategoryChange}
							/>
							<Icon className={styles.icon} />
							<div className={styles["category-content"]}>
								{category.name}
								<span className={styles.count}>
									(
									{category.value === "all"
										? projects.length
										: projects.filter((project) => project.category === category.value).length}
									)
								</span>
							</div>
						</label>
					);
				})}
			</div>
		</div>
	);
}
