import { atom } from "nanostores";
import { projects } from "../data/proyects";
import type { Project } from "../data/types";

export const categorySelected = atom("Todos");
export const languageSelected = atom("Todos");
export const difficultySelected = atom("Todos");

export const projectsFiltered = atom<Project[]>(projects);
