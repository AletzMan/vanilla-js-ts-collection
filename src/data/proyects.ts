import type { Project } from "./types";

export const projects: Project[] = [
	{
		id: 1,
		name: "Calculadora",
		description:
			"Calculadora avanzada con memoria, operaciones básicas, raíz cuadrada, exponente, porcentaje y función 1/x",
		tags: ["math", "calculator", "memory"],
		category: "utility",
		difficulty: "intermediate",
		date: "2023-03-30",
		featured: true,
		image:
			"https://raw.githubusercontent.com/AletzMan/ImagesStorage/refs/heads/main/vanillacollection/calculator.webp",
		language: "javascript",
		urlRepo: "https://github.com/AletzMan/calculator",
		urlDemo: "https://aletzman.github.io/calculator/",
	},
	{
		id: 2,
		name: "PaintBoard",
		description:
			"Lienzo interactivo tipo Paint para dibujar libremente con el mouse, selección de colores y control de grosor de trazo.",
		tags: ["canvas", "drawing", "events", "paint"],
		category: "utility",
		difficulty: "easy",
		date: "2023-01-14",
		featured: true,
		image:
			"https://raw.githubusercontent.com/AletzMan/ImagesStorage/refs/heads/main/vanillacollection/paint-board.webp",
		language: "javascript",
		urlRepo: "https://github.com/AletzMan/PaintBoard",
		urlDemo: "https://aletzman.github.io/PaintBoard/",
	},
	{
		id: 3,
		name: "Reloj Analógico",
		description:
			"Reloj clásico de agujas animadas con diseño responsivo, actualizado en tiempo real usando transformaciones CSS.",
		tags: ["clock", "animation", "real time"],
		category: "component",
		difficulty: "easy",
		date: "2022-12-24",
		featured: false,
		image:
			"https://raw.githubusercontent.com/AletzMan/ImagesStorage/refs/heads/main/vanillacollection/analog-clock.webp",
		language: "javascript",
		urlRepo: "https://github.com/AletzMan/analog_clock",
		urlDemo: "https://aletzman.github.io/analog_clock/",
	},
	{
		id: 4,
		name: "Reloj Digital",
		description:
			"Reloj digital con visualización en tiempo real, cronómetro funcional y cuenta regresiva personalizable.",
		tags: ["clock", "timer", "countdown", "setInterval", "UI"],
		category: "component",
		difficulty: "intermediate",
		date: "2022-11-30",
		featured: false,
		image:
			"https://raw.githubusercontent.com/AletzMan/ImagesStorage/refs/heads/main/vanillacollection/digital-clock.webp",
		language: "javascript",
		urlRepo: "https://github.com/AletzMan/digital-clock-vanilla",
		urlDemo: "https://aletzman.github.io/digital-clock-vanilla/",
	},
	{
		id: 5,
		name: "Bubble Shooter Game",
		description:
			"Juego arcade de disparo. Apunta y lanza a las burbujas del mismo color que la objetivo. No tiene niveles, el objetivo es alcanzar el mayor puntaje posible.",
		tags: ["game", "canvas", "bubble shooter", "color match", "arcade"],
		category: "game",
		difficulty: "advanced",
		date: "2023-04-04",
		featured: true,
		image:
			"https://raw.githubusercontent.com/AletzMan/ImagesStorage/refs/heads/main/vanillacollection/bubble-shooter-game.webp",
		language: "javascript",
		urlRepo: "https://github.com/AletzMan/bubble_shooter_game",
		urlDemo: "https://aletzman.github.io/bubble_shooter_game/",
	},
];
