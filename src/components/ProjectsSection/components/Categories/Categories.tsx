import { useState, type ChangeEvent } from "react";
import { categories } from "../../../../data/filters";
import { projects } from "../../../../data/proyects";
import { categorySelected, projectsFiltered } from "../../../../store/store";
import styles from "./styles.module.css";

export function Categories() {
	const [categorySelect, setCategorySelect] = useState("Todos");
	const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = (e.target as HTMLInputElement).value;
		categorySelected.set(value);
		const categoryName = categories.find((category) => category.name === value)?.value;
		projectsFiltered.set(projects.filter((project) => project.category === categoryName));
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
								onChange={handleCategoryChange}
							/>
							<Icon />
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
