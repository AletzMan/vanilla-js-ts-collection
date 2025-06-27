import Tag from "../../../Tag/Tag";
import styles from "./style.module.css";
import type { Project } from "../../../../data/types";
import { Calendar, Github, Link2, StarIcon } from "lucide-react";
import { categories, difficulties } from "../../../../data/filters";
import { JavaScriptIcon, TypeScriptIcon } from "../../../../icons";

export default function Project({ project }: { project: Project }) {
	const IconCategory = categories.find((cat) => cat.value === project.category)?.icon || null;
	const IconLanguage = project.language === "javascript" ? <JavaScriptIcon /> : <TypeScriptIcon />;
	const IconDifficulty = difficulties.find((cat) => cat.value === project.difficulty)?.name || "";
	const IconCategoryColor = categories.find((cat) => cat.value === project.category)?.color || "";
	return (
		<article className={styles.project} key={project.name}>
			<header className={styles.header}>
				<div className={styles["header-info"]}>
					<span className={styles["header-date"]}>
						<Calendar />
						{project.date}
					</span>
					<span className={`${styles["header-category"]} `} style={{ color: IconCategoryColor }}>
						{IconCategory && <IconCategory />}
					</span>
				</div>
				<picture className={styles.picture}>
					{project.featured && <StarIcon className={styles["featured-icon"]} />}
					<img src={project.image} alt={project.name} />
				</picture>
			</header>
			<div className={styles.content}>
				<span className={styles["content-header"]}>
					<span className={styles["content-id"]}>#{project.id}</span>
					<span
						className={`${styles["content-difficulty"]} ${
							styles[`content-difficulty-${project.difficulty}`]
						}`}
					>
						{IconDifficulty}
					</span>
				</span>
				<h2>
					{project.name} {IconLanguage}
				</h2>
				<p>{project.description}</p>
				<div className={styles.tags}>
					{project.tags.map((tag) => (
						<Tag title={tag} size="small" radius="xsmall" key={tag} type="tag" />
					))}
				</div>
			</div>
			<footer className={styles.footer}>
				<a
					href={project.urlRepo}
					target="_blank"
					rel="noopener noreferrer"
					className={styles["footer-link"]}
				>
					<Github />
					Repo
				</a>
				<a
					href={project.urlDemo}
					target="_blank"
					rel="noopener noreferrer"
					className={styles["footer-link"]}
				>
					<Link2 />
					Demo
				</a>
			</footer>
		</article>
	);
}
