import { atom } from "nanostores";
import { projects } from "../data/proyects";
import type { Project } from "../data/types";

export const categorySelected = atom("Todos");
export const languageSelected = atom<string[]>([]);
export const difficultySelected = atom<string[]>([]);

export const projectsFiltered = atom<Project[]>(projects);
