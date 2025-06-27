import { Gamepad2, Grid3X3, PanelsTopLeft, Shell, Wrench, Zap } from "lucide-react";
import { JavaScriptIcon, TypeScriptIcon } from "../icons";

export const categories = [
	{ name: "Todos", icon: Grid3X3, value: "all", color: "#9b5de5" },
	{ name: "Componentes", icon: PanelsTopLeft, value: "component", color: "#ffda0b" },
	{ name: "Juegos", icon: Gamepad2, value: "game", color: "#ff5656" },
	{ name: "Herramientas", icon: Wrench, value: "utility", color: "#77cdff" },
	{ name: "Efectos", icon: Zap, value: "effect", color: "#ff56da" },
	{ name: "Animaciones", icon: Shell, value: "animation", color: "#97ff7d" },
];
export const languages = [
	{ name: "JavaScript", value: "javascript", icon: JavaScriptIcon },
	{ name: "TypeScript", value: "typescript", icon: TypeScriptIcon },
];
export const difficulties = [
	{ name: "Fácil", value: "easy" },
	{ name: "Intermedio", value: "intermediate" },
	{ name: "Avanzado", value: "advanced" },
	{ name: "Experto", value: "expert" },
];
