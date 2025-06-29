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
	imageBrowser: string;
	language: Language;
	urlRepo: string;
	urlDemo: string;
	projectDetails: ProjectDetails;
}

export type Category = "game" | "utility" | "effect" | "component" | "animation";
export type Language = "javascript" | "typescript";
export type Difficulty = "easy" | "intermediate" | "advanced" | "expert";
export type CodeHighlight = {
	description: string;
	code: string;
	lang: string;
};
export type ProjectDetails = {
	description: string;
	keyFeatures: string[];
	codeHighlights: CodeHighlight[];
	technicalChallenges: string[];
	lessonsLearned: string[];
	futureImprovements: string[];
};
