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
	projectDetails: ProjectDetails;
}

export type Category = "game" | "utility" | "effect" | "component" | "animation";
export type Language = "javascript" | "typescript";
export type Difficulty = "easy" | "intermediate" | "advanced" | "expert";
export type ProjectDetails = {
	description: string;
	keyFeatures: string[];
	codeHighlights: string[];
	technicalChallenges: string[];
	lessonsLearned: string[];
	futureImprovements: string[];
};
