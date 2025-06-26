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
							className={`${styles.category} ${
								categorySelect === category.name ? styles["category-checked"] : ""
							}`}
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
							{category.name}
							<span className={styles.count}>
								(
								{category.value === "all"
									? projects.length
									: projects.filter((project) => project.category === category.value).length}
								)
							</span>
						</label>
					);
				})}
			</div>
		</div>
	);
}
