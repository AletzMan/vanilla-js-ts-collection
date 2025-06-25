import { Gamepad2, Grid3X3, PanelsTopLeft, Shell, Wrench, Zap } from "@lucide/astro";
import JSIcon from "../icons/JSIcon.astro";
import TSIcon from "../icons/TSIcon.astro";

export const categories = [
	{ name: "Todos", icon: Grid3X3, value: "all" },
	{ name: "Componentes", icon: PanelsTopLeft, value: "component" },
	{ name: "Juegos", icon: Gamepad2, value: "game" },
	{ name: "Herramientas", icon: Wrench, value: "utility" },
	{ name: "Efectos", icon: Zap, value: "effect" },
	{ name: "Animaciones", icon: Shell, value: "animation" },
];
export const languages = [
	{ name: "JavaScript", value: "javascript", icon: JSIcon },
	{ name: "TypeScript", value: "typescript", icon: TSIcon },
];
export const difficulties = [
	{ name: "Fácil", value: "easy" },
	{ name: "Intermedio", value: "intermediate" },
	{ name: "Avanzado", value: "advanced" },
];
