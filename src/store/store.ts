import { atom } from "nanostores";
import { projects } from "../data/proyects";
import type { Project } from "../data/types";

export const categorySelected = atom("Todos");
export const languageSelected = atom("Todos");
export const difficultySelected = atom("Todos");

export const projectsFiltered = atom<(set: any, get: any) => Project[]>((set, get) => {
	const category = get(categorySelected);
	const language = get(languageSelected);
	const difficulty = get(difficultySelected);
	return projects.filter((project: Project) => {
		return (
			(category === "Todos" || project.category === category) &&
			(language === "Todos" || project.language === language) &&
			(difficulty === "Todos" || project.difficulty === difficulty)
		);
	});
});
