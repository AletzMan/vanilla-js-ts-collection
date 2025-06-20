import type { Project } from "./types";

export const projects: Project[] = [
	{
		name: "Calculadora",
		description:
			"Calculadora avanzada con memoria, operaciones básicas, raíz cuadrada, exponente, porcentaje y función 1/x (inverso multiplicativo). Interfaz intuitiva y soporte para teclado.",
		tags: ["math", "calculator", "memory"],
		category: "utility",
		difficulty: "intermediate",
		date: "2023-09-15",
		featured: true,
		image:
			"https://raw.githubusercontent.com/AletzMan/ImagesStorage/refs/heads/main/vanillacollection/calculator.webp",
		language: "javascript",
		urlRepo: "https://github.com/AletzMan/calculator",
		urlDemo: "https://aletzman.github.io/calculator/",
	},
	{
		name: "PaintBoard",
		description:
			"Lienzo interactivo tipo Paint para dibujar libremente con el mouse, selección de colores y control de grosor de trazo.",
		tags: ["canvas", "drawing", "events", "paint"],
		category: "utility",
		difficulty: "easy",
		date: "2023-10-02",
		featured: true,
		image:
			"https://raw.githubusercontent.com/AletzMan/ImagesStorage/refs/heads/main/vanillacollection/paintboard.webp",
		language: "javascript",
		urlRepo: "https://github.com/AletzMan/paintboard",
		urlDemo: "https://aletzman.github.io/paintboard/",
	},
	{
		name: "Reloj Analógico",
		description:
			"Reloj clásico de agujas animadas con diseño responsivo, actualizado en tiempo real usando transformaciones CSS.",
		tags: ["clock", "animation", "real time"],
		category: "component",
		difficulty: "easy",
		date: "2023-08-20",
		featured: false,
		image:
			"https://raw.githubusercontent.com/AletzMan/ImagesStorage/refs/heads/main/vanillacollection/analog-clock.webp",
		language: "javascript",
		urlRepo: "https://github.com/AletzMan/analog-clock",
		urlDemo: "https://aletzman.github.io/analog-clock/",
	},
	{
		name: "Reloj Digital",
		description:
			"Reloj digital con visualización en tiempo real, cronómetro funcional y cuenta regresiva personalizable.",
		tags: ["clock", "timer", "countdown", "setInterval", "UI"],
		category: "component",
		difficulty: "intermediate",
		date: "2023-08-25",
		featured: false,
		image:
			"https://raw.githubusercontent.com/AletzMan/ImagesStorage/refs/heads/main/vanillacollection/digital-clock.webp",
		language: "javascript",
		urlRepo: "https://github.com/AletzMan/digital-clock-vanilla",
		urlDemo: "https://aletzman.github.io/digital-clock-vanilla/",
	},
	{
		name: "Bubble Shooter Game",
		description:
			"Juego arcade de disparo de burbujas. Apunta y lanza a las burbujas del mismo color que la objetivo. No tiene niveles, el objetivo es alcanzar el mayor puntaje posible.",
		tags: ["game", "canvas", "bubble shooter", "color match", "arcade"],
		category: "game",
		difficulty: "advanced",
		date: "2023-11-10",
		featured: true,
		image:
			"https://raw.githubusercontent.com/AletzMan/ImagesStorage/refs/heads/main/vanillacollection/bubble-shooter-game.webp",
		language: "javascript",
		urlRepo: "https://github.com/AletzMan/bubble-shooter-game",
		urlDemo: "https://aletzman.github.io/bubble-shooter-game/",
	},
];
