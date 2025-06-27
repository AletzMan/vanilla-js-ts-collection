import { useEffect, useMemo, useRef, useState } from "react";
import {
	Funnel,
	ChevronDown,
	SearchIcon,
	ChevronUp,
	ArrowUpWideNarrow,
	ArrowDownWideNarrow,
} from "lucide-react";
import { categorySelected, difficultySelected, languageSelected } from "../../store/store";
import { Categories } from "./components/Categories/Categories";
import { Languages } from "./components/Languages/Languages";
import { Difficulty } from "./components/Difficulty/Difficulty";
import styles from "./style.module.css";
import { Input } from "../Input/Input";
import Tag from "../Tag/Tag";
import { categories } from "../../data/filters";
import { projects } from "../../data/proyects";
import { TagFilter } from "./components/TagFilter/TagFilter";
import Project from "./components/Project/Project";

export function ProjectsSection() {
	const [search, setSearch] = useState("");
	const [language, setLanguage] = useState<string[]>(languageSelected.get());
	const [difficulty, setDifficulty] = useState<string[]>(difficultySelected.get());
	const [category, setCategory] = useState<string>(categorySelected.get());
	const [showFilters, setShowFilters] = useState(false);
	const [sort, setSort] = useState<string>("id");
	const [sortDirection, setSortDirection] = useState<string>("asc");

	const filtersRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const unsubscribeLanguage = languageSelected.subscribe((value) =>
			setLanguage(value as string[])
		);
		const unsubscribeDifficulty = difficultySelected.subscribe((value) =>
			setDifficulty(value as string[])
		);
		const unsubscribeCategory = categorySelected.subscribe((value) => setCategory(value as string));
		return () => {
			unsubscribeLanguage();
			unsubscribeDifficulty();
			unsubscribeCategory();
		};
	}, []);

	const filteredProjects = useMemo(() => {
		const filtered = projects.filter((project) => {
			if (!project.language && !project.difficulty && !project.category) {
				return false;
			}
			const isLanguageMatch = language.length === 0 || language.includes(project.language);
			const isDifficultyMatch = difficulty.length === 0 || difficulty.includes(project.difficulty);
			const findCategory = categories.find((cat) => cat.name === category);
			const isCategoryMatch = category === "Todos" || project.category === findCategory?.value;
			const isSearchMatch =
				project.name.toLowerCase().includes(search.toLowerCase()) ||
				project.description.toLowerCase().includes(search.toLowerCase()) ||
				project.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
			return isLanguageMatch && isDifficultyMatch && isCategoryMatch && isSearchMatch;
		});
		switch (sort) {
			case "id": {
				if (sortDirection === "desc") {
					return filtered.sort((a, b) => b.id - a.id);
				}
				return filtered.sort((a, b) => a.id - b.id);
			}
			case "name": {
				if (sortDirection === "desc") {
					return filtered.sort((a, b) => b.name.localeCompare(a.name));
				}
				return filtered.sort((a, b) => a.name.localeCompare(b.name));
			}
			case "date": {
				if (sortDirection === "desc") {
					return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
				}
				return filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
			}
			case "difficulty": {
				if (sortDirection === "desc") {
					return filtered.sort((a, b) => b.difficulty.localeCompare(a.difficulty));
				}
				return filtered.sort((a, b) => a.difficulty.localeCompare(b.difficulty));
			}
			case "language": {
				if (sortDirection === "desc") {
					return filtered.sort((a, b) => b.language.localeCompare(a.language));
				}
				return filtered.sort((a, b) => a.language.localeCompare(b.language));
			}
		}

		return filtered;
	}, [language, difficulty, category, search, sort, sortDirection]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (filtersRef.current && !filtersRef.current.contains(event.target as Node)) {
				setShowFilters(false);
			}
		};

		if (showFilters) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [showFilters]);

	const getCountFilters = () => {
		const languages = languageSelected.get();
		const difficulties = difficultySelected.get();
		return languages.length + difficulties.length;
	};

	return (
		<section id="projects" className={styles.section}>
			<header className={styles.header}>
				<div className={styles["title-container"]}>
					<h2 className={styles["title-container-title"]}>Explora los proyectos</h2>
					<Input
						type="search"
						placeholder="Buscar proyectos"
						size="large"
						onChange={(e) => setSearch(e.target.value)}
						icon={<SearchIcon className={styles.icon} />}
					/>{" "}
				</div>

				<Categories />
				<div className={styles.options}>
					<div className={styles.filters} ref={filtersRef}>
						<button
							className={styles[`filters-button`]}
							onClick={() => setShowFilters((prev) => !prev)}
						>
							<Funnel className={styles.icon} /> Filtros Avanzados
							<ChevronDown className={styles.icon} />
							<span className={styles["count-filters"]}>{getCountFilters()}</span>
						</button>

						<div
							className={styles.checkboxes}
							style={{
								height: showFilters ? "auto" : 0,
								transform: showFilters ? "scaleY(1)" : "scaleY(0)",
							}}
						>
							<Languages />
							<Difficulty />
						</div>
					</div>
					<div className={styles["sort-container"]}>
						<button
							className={styles[`sort-button`]}
							onClick={() => setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"))}
						>
							{sortDirection === "asc" ? (
								<ArrowUpWideNarrow className={styles["sort-icon"]} />
							) : (
								<ArrowDownWideNarrow className={styles["sort-icon"]} />
							)}
						</button>
						<select className={styles.sort} onChange={(e) => setSort(e.target.value)}>
							<option value="id" className={styles["sort-option"]}>
								ID
							</option>
							<option className={styles["sort-option"]} value="name">
								Nombre
							</option>
							<option className={styles["sort-option"]} value="date">
								Fecha
							</option>
							<option className={styles["sort-option"]} value="difficulty">
								Dificultad
							</option>
							<option className={styles["sort-option"]} value="language">
								Lenguaje
							</option>
						</select>
					</div>
				</div>
				<div className={styles["tags-container"]}>
					{category !== "Todos" && (
						<TagFilter
							text={category}
							type="category"
							onClick={() => categorySelected.set("Todos")}
						/>
					)}
					{language.length > 0 &&
						language.map((lang) => (
							<TagFilter
								key={lang}
								text={lang}
								type="language"
								onClick={() => languageSelected.set(language.filter((l) => l !== lang))}
							/>
						))}
					{difficulty.length > 0 &&
						difficulty.map((diff) => (
							<TagFilter
								key={diff}
								text={diff}
								type="difficulty"
								onClick={() => difficultySelected.set(difficulty.filter((d) => d !== diff))}
							/>
						))}
					{(language.length > 0 || difficulty.length > 0 || category !== "Todos") && (
						<TagFilter
							text="Limpiar filtros"
							type="default"
							onClick={() => {
								languageSelected.set([]);
								difficultySelected.set([]);
								categorySelected.set("Todos");
							}}
						/>
					)}
				</div>
			</header>
			<span className={styles.count}>Mostrando {filteredProjects.length} proyectos</span>
			<div className={styles.projects}>
				{filteredProjects.map((project) => (
					<Project project={project} key={project.name} />
				))}
			</div>
		</section>
	);
}
