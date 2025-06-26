import Tag from "../../../Tag/Tag";
import styles from "./style.module.css";
import type { Project } from "../../../../data/types";
import { Calendar } from "lucide-react";
import { categories } from "../../../../data/filters";

export default function Project({ project }: { project: Project }) {
	return (
		<article className={styles.project} key={project.name}>
			<picture className={styles.picture}>
				<img src={project.image} alt={project.name} />
			</picture>
			<div className={styles.content}>
				<h2>{project.name}</h2>
				<p>{project.description}</p>
				<div className={styles.tags}>
					{project.tags.map((tag) => (
						<Tag title={tag} size="small" radius="xsmall" key={tag} />
					))}
				</div>
			</div>
			<footer className={styles.footer}>
				<span className={styles["footer-date"]}>
					<Calendar />
					{project.date}
				</span>
				<span className={styles["footer-category"]}>
					{categories.find((cat) => cat.value === project.category)?.name}
				</span>
			</footer>
		</article>
	);
}
