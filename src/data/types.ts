export interface Project {
	id: number;
	name: string;
	description: string;
	tags: string[];
	category: Category;
	featured: boolean;
	date: string;
	difficulty: Difficulty;
	image: string;
	language: Language;
	urlRepo: string;
	urlDemo: string;
}

export type Category = "game" | "utility" | "effect" | "component" | "animation";
export type Language = "javascript" | "typescript";
export type Difficulty = "easy" | "intermediate" | "advanced";
