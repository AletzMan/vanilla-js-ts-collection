import type { Project } from "./types";

export const projects: Project[] = [
	{
		id: 1,
		name: "Calculadora",
		description:
			"Calculadora con operaciones básicas y científicas (raíz, exponente, porcentaje) y función de memoria.",
		tags: [
			"math",
			"calculator",
			"memory",
			"UI/UX",
			"DOM Manipulation",
			"event handling",
			"logic",
			"frontend",
		],
		category: "utility",
		difficulty: "intermediate",
		date: "2023-03-30",
		featured: true,
		image:
			"https://raw.githubusercontent.com/AletzMan/ImagesStorage/refs/heads/main/vanillacollection/calculator.webp",
		imageBrowser:
			"https://raw.githubusercontent.com/AletzMan/ImagesStorage/refs/heads/main/vanillacollection/calculator.webp",
		language: "javascript",
		urlRepo: "https://github.com/AletzMan/calculator",
		urlDemo: "https://aletzman.github.io/calculator/",
		projectDetails: {
			description:
				"Esta calculadora es una aplicación web interactiva que simula la funcionalidad de una calculadora de escritorio, combinando operaciones aritméticas básicas con funciones científicas avanzadas y una útil capacidad de memoria. Diseñada con una interfaz de usuario limpia y responsiva, permite a los usuarios realizar cálculos complejos, gestionar el historial de memoria de forma visible y cambiar el signo de los números con facilidad. Su desarrollo se centró en la precisión lógica y una experiencia de usuario fluida, adaptando dinámicamente el tamaño de la fuente en el display para números largos y proporcionando un control intuitivo sobre cada operación.",
			keyFeatures: [
				"**Operaciones Aritméticas Básicas:** Realiza sumas, restas, multiplicaciones y divisiones.",
				"**Operaciones Avanzadas:** Incluye funciones para porcentaje (%), recíproco (1/x), cuadrado ($x^2$), y raíz cuadrada ($sqrt{x}$).",
				"**Gestión de Signos:** Permite cambiar el signo de un número ($+/-$).",
				"**Manejo de Entrada:** Admite números con decimales y gestiona la entrada de dígitos de manera intuitiva.",
				"**Historial de Memoria:** Implementa una funcionalidad de memoria (M+, M-, MR, MC) con una lista visible de valores guardados, permitiendo al usuario almacenar y recuperar números.",
				"**Feedback Visual:** Muestra la operación actual y el resultado en pantallas separadas, mejorando la experiencia del usuario. El tamaño de la fuente del resultado se ajusta dinámicamente según la longitud para asegurar la visibilidad.",
				"**Controles de Borrado:** Ofrece opciones para borrar la última entrada (Backspace), borrar la entrada actual (C) o borrar todo (CE).",
			],
			codeHighlights: [
				{
					description:
						"**Manipulación del DOM:** Se utiliza `document.querySelectorAll` y `document.querySelector` para acceder a los elementos HTML de la calculadora, y se manipulan sus propiedades `textContent` y `style` para actualizar la interfaz.",
					code: "const displayResult = document.querySelector('.display-result');\nconst buttons = document.querySelectorAll('.calculator-button');\ndisplayResult.textContent = result;\ndisplayResult.style.fontSize = adjustFontSize(result.length);",
					lang: "javascript",
				},
				{
					description:
						'**Manejo de Eventos:** Se emplean `addEventListener("mousedown", ...)` para detectar las interacciones del usuario con los botones, lo que permite ejecutar las funciones correspondientes a cada acción.',
					code: "buttons.forEach(button => {\n    button.addEventListener('mousedown', (e) => {\n        // Lógica basada en el botón clickeado\n        console.log(e.target.textContent);\n    });\n});",
					lang: "javascript",
				},
				{
					description:
						"**Manejo de entrada de números y actualización del display:** La función `SelectNumberPress` maneja la entrada de números y actualiza el display, asegurando que los resultados se borren para nuevas entradas y que los números se añadan de forma incremental.",
					code: "function SelectNumberPress(number) {\n    if (displayResult.textContent == 0 || resultObtained) {\n        displayResult.textContent = number;\n        resultObtained = false;\n    } else {\n        displayResult.textContent += number;\n    }\n    newNumberEntered = true;\n}",
					lang: "javascript",
				},
				{
					description:
						"**Lógica de Operaciones:** La función `SelectOperation` gestiona la lógica central de la calculadora, manejando el estado de los números, operadores y resultados intermedios. Llama a `ValidateOperation` para realizar cálculos cuando se selecciona una nueva operación después de un número.",
					code: "function SelectOperation(operator) {\n    if (numberOne == 0) {\n        numberOne = Number(displayResult.textContent);\n    } else if (newNumberEntered) {\n        numberTwo = Number(displayResult.textContent);\n        ValidateOperation();\n        displayResult.textContent = numberOne;\n    }\n    operationRealized = operator;\n    newNumberEntered = false;\n}",
					lang: "javascript",
				},
				{
					description:
						"**Funcionalidad de Memoria:** La implementación de la memoria es un punto clave, con funciones para añadir, restar, recuperar y limpiar valores, junto con una interfaz dinámica para ver los elementos guardados. La función `AddMemory`, por ejemplo, añade un número al array de memoria y actualiza la visualización.",
					code: "function AddMemory(number) {\n    memory.push(Number(number));\n    UpdateMemoryList(); // Función para actualizar visualmente la lista de memoria\n}",
					lang: "javascript",
				},
			],
			technicalChallenges: [
				"**Gestión del Estado de la Calculadora:** Mantener el control preciso de los números (`numberOne`, `numberTwo`), la operación actual y los indicadores (`resultObtained`, `newNumberEntered`) para garantizar que las operaciones se encadenen correctamente y el display refleje el estado exacto.",
				"**Manejo de Precedencia y Encadenamiento de Operaciones:** Asegurar que operaciones consecutivas (ej. `2 + 3 * 4`) o el uso del botón `=` varias veces sigan la lógica esperada, gestionando cuándo se calcula un resultado intermedio y cuándo se inicia una nueva operación.",
				"**Dinámica del Display:** Ajustar el tamaño de la fuente del display de resultado para números muy largos y manejar la visualización de decimales y ceros iniciales de forma coherente.",
				"**Implementación de Funciones de Memoria:** Desarrollar un sistema robusto para añadir, restar, recuperar y limpiar elementos de la memoria, incluyendo su visualización en una lista desplegable.",
			],
			lessonsLearned: [
				"**Importancia del Manejo de Estado:** Comprendí a fondo cómo la gestión de variables de estado es fundamental en aplicaciones interactivas para controlar el flujo y el comportamiento del usuario.",
				"**Diseño de Lógica Clara:** Aprendí a descomponer un problema complejo (operaciones de calculadora) en funciones más pequeñas y manejables, lo que mejora la legibilidad y el mantenimiento del código.",
				"**Interacción con el DOM:** Reforcé mis habilidades en la manipulación dinámica de elementos HTML y la escucha de eventos para crear una interfaz de usuario responsiva y funcional.",
				"**Resolución de Casos Extremos:** La necesidad de manejar situaciones como la división por cero, la entrada de múltiples decimales o secuencias de operaciones no estándar me enseñó sobre la importancia de la validación y el manejo de errores.",
			],
			futureImprovements: [
				"**Historial de Operaciones:** Podrías añadir un registro visual de las operaciones completadas, similar a cómo algunas calculadoras muestran las últimas ecuaciones.",
				"**Manejo de Errores:** Implementar manejo para divisiones por cero o entradas inválidas, mostrando mensajes de error amigables en el `displayResult`.",
				"**Teclado Numérico:** Permitir la interacción con la calculadora a través del teclado físico del usuario para los números y operadores.",
				"**Más Funciones Científicas:** Si te interesa, podrías expandirla para incluir funciones trigonométricas, logaritmos, etc.",
				"**Diseño Responsivo:** Asegurarse de que la calculadora se vea y funcione bien en diferentes tamaños de pantalla (aunque esto sería más de CSS, complementaría el proyecto).",
				"**Accesibilidad:** Mejorar la accesibilidad para usuarios con discapacidades, por ejemplo, añadiendo atributos ARIA.",
			],
		},
	},
	{
		id: 2,
		name: "PaintBoard",
		description:
			"Lienzo interactivo tipo Paint para dibujar libremente con selección de colores y control de grosor de trazo.",
		tags: [
			"canvas",
			"drawing",
			"events",
			"paint",
			"UI/UX",
			"DOM Manipulation",
			"graphics",
			"frontend",
		],
		category: "utility",
		difficulty: "intermediate",
		date: "2023-01-14",
		featured: true,
		image:
			"https://raw.githubusercontent.com/AletzMan/ImagesStorage/refs/heads/main/vanillacollection/paint_board.webp",
		imageBrowser:
			"https://raw.githubusercontent.com/AletzMan/ImagesStorage/refs/heads/main/vanillacollection/paint_board.webp",
		language: "javascript",
		urlRepo: "https://github.com/AletzMan/PaintBoard",
		urlDemo: "https://aletzman.github.io/PaintBoard/",
		projectDetails: {
			description:
				"PaintBoard es un lienzo de dibujo interactivo basado en la web, inspirado en las clásicas aplicaciones de pintura digital. Ofrece a los usuarios la libertad de crear con una variedad de herramientas de dibujo como lápiz, formas geométricas (cuadrados, círculos, elipses, triángulos, rectángulos redondeados y líneas), y un borrador. La aplicación proporciona un control intuitivo sobre el color de la línea y el relleno, así como el grosor del trazo. Incorpora guías visuales y un cursor preciso para mejorar la experiencia de dibujo, haciendo de PaintBoard una herramienta sencilla pero efectiva para la expresión artística digital.",
			keyFeatures: [
				"**Herramientas de Dibujo Variadas:** Incluye lápiz (trazado libre), cuadrado, círculo, elipse, triángulo, rectángulo redondeado y líneas, así como una herramienta de borrador.",
				"**Control de Color:** Permite seleccionar colores de línea y de relleno a través de una paleta predefinida o un selector de color (color picker).",
				"**Opciones de Borde y Relleno:** Posibilidad de desactivar el borde o el relleno de las formas, ofreciendo mayor flexibilidad creativa.",
				"**Ajuste de Grosor:** Control de grosor para las líneas de dibujo y el tamaño del borrador.",
				"**Guías Visuales:** Muestra reglas interactivas en los ejes X e Y, junto con un sistema de coordenadas y un cursor que sigue el puntero, ayudando a la precisión del dibujo.",
				"**Retroalimentación del Cursor:** Cambia el icono del cursor según la herramienta seleccionada (lápiz, borrador, etc.).",
				"**Interfaz Intuitiva:** Botones visuales para seleccionar herramientas y colores, facilitando su uso.",
			],
			codeHighlights: [
				{
					description:
						"**API de Canvas 2D:** Uso extensivo de `HTMLCanvasElement.getContext('2d')` y sus métodos (`beginPath`, `moveTo`, `lineTo`, `arc`, `ellipse`, `rect`, `roundRect`, `stroke`, `fill`, `clearRect`) para dibujar dinámicamente en el lienzo.",
					code: "// Este fragmento muestra cómo se definen las rutas y se dibujan las formas en el canvas.\n// Por ejemplo, para dibujar una línea:\nconst LineDrawing = (cursorX, cursorY) => {\n    ctxCanvas.beginPath();\n    ctxCanvas.moveTo(initX, initY);\n    ctxCanvas.lineTo(cursorX, cursorY);\n    ctxCanvas.stroke();\n}",
					lang: "javascript",
				},
				{
					description:
						"**Manejo Avanzado de Eventos de Mouse:** Implementación de `mousedown`, `mousemove`, y `mouseup` para capturar la interacción del usuario y dibujar en tiempo real, incluyendo el cálculo de posiciones y tamaños de formas.",
					code: 'const MouseDown = (e) => {\n    initX = e.offsetX;\n    initY = e.offsetY;\n    ctxCanvas.lineWidth = lineTickness;\n    ctxCanvas.strokeStyle = lineColor;\n    ctxCanvas.fillStyle = fillColor;\n    ctxCanvas.lineCap = "round";\n    ctxCanvas.lineJoin = "round";\n    // ... lógica para el tipo de dibujo ...\n    canvas.addEventListener("mousemove", MouseMove);\n}',
					lang: "javascript",
				},
				{
					description:
						"**Manipulación Dinámica del DOM:** Creación y modificación de elementos HTML (como las reglas y las guías de dibujo) en función de las interacciones del usuario y el tamaño de la ventana.",
					code: 'function CreateRuleX() {\n    let numberOfPixels = ruleXContainer.getBoundingClientRect().width / 5;\n    let coorXRule = 0;\n    for (let index = 0; index < numberOfPixels / 2; index++) {\n        const drawingGuide = document.createElement(\'div\');\n        ruleXContainer.appendChild(drawingGuide);\n        if (index == 0) {\n            drawingGuide.style.width = "11px";\n        }\n        if (index % 10 == 0) {\n            drawingGuide.style.height = "10px";\n            const newChildMeasX = document.createElement(\'p\');\n            drawingGuide.appendChild(newChildMeasX);\n            const newChildTextX = document.createTextNode(coorXRule);\n            newChildMeasX.appendChild(newChildTextX);\n            coorXRule += 100;\n        }\n    }\n    sizeCanvas = ruleXContainer.getBoundingClientRect().width + "px";\n}',
					lang: "javascript",
				},
				{
					description:
						"**Gestión de Herramientas y Estados:** Lógica para cambiar entre herramientas de dibujo, gestionar los colores activos (línea y relleno), y actualizar el grosor del trazo/borrador.",
					code: 'for (let index = 0; index < buttonsTools.length; index++) {\n    buttonsTools.item(index).addEventListener("mousedown", function (e) {\n        drawingType = index + 1;\n        initX = null;\n        initY = null;\n        for (const button of buttonsTools) {\n            button.classList.remove("selectedButtonTools");\n        }\n        e.target.classList.add("selectedButtonTools");\n        // ... lógica para cursor y habilitar/deshabilitar sliders ...\n    });\n}',
					lang: "javascript",
				},
				{
					description:
						"**Guías de Dibujo en Tiempo Real:** Implementación de un `div` flotante (`drawingGuide`) que visualiza la forma que se está creando antes de dibujarla permanentemente en el canvas.",
					code: 'function CreateDrawingGuide(positionMove) {\n    drawingGuide = document.createElement(\'div\');\n    containerCanvas.appendChild(drawingGuide);\n    if (positionMove) {\n        drawingGuide.style.left = initX + "px";\n        drawingGuide.style.top = initY + "px";\n    } else {\n        drawingGuide.style.left = (initX - eraserSize.value / 2) + "px";\n        drawingGuide.style.top = (initY - eraserSize.value / 2) + "px";\n    }\n}',
					lang: "javascript",
				},
			],
			technicalChallenges: [
				"**Rendimiento en el Dibujo en Tiempo Real:** Asegurar que el dibujo y la visualización de formas sean fluidos y sin latencia, especialmente con el lápiz (trazado libre), que requiere una actualización constante del Canvas.",
				"**Precisión de Coordenadas:** Calcular correctamente las coordenadas y dimensiones para cada tipo de forma (cuadrados, círculos, triángulos, etc.) a medida que el usuario arrastra el mouse, y que estas se dibujen en la posición y tamaño esperados.",
				"**Gestión del Estado de las Herramientas:** Mantener un seguimiento de la herramienta activa, el color seleccionado, el grosor del trazo, y si el relleno o el borde están activados, y aplicar estos estados correctamente a cada acción de dibujo.",
				"**Interacción Compleja de Eventos:** Diferenciar entre los eventos `mousedown`, `mousemove` y `mouseup` para controlar el inicio, el proceso y la finalización de cada acción de dibujo (por ejemplo, arrastrar para dibujar una forma vs. un solo clic).",
			],
			lessonsLearned: [
				"**Dominio del API de Canvas 2D:** Profundicé en el uso de las diversas funciones del Canvas para dibujar formas complejas, gestionar rutas, y aplicar estilos.",
				"**Sincronización de Eventos:** Aprendí a coordinar múltiples eventos del mouse para crear interacciones de dibujo más elaboradas, entendiendo el ciclo de vida de una acción de usuario (inicio, arrastre, fin).",
				"**Programación Gráfica:** Adquirí experiencia en la lógica matemática necesaria para representar visualmente formas y líneas basadas en la entrada del usuario.",
				"**Desarrollo de UI Dinámicas:** Mejoré mi capacidad para construir interfaces que reaccionan de manera instantánea y visual a las acciones del usuario, usando JavaScript para manipular tanto el Canvas como elementos HTML adicionales (reglas, guías).",
			],
			futureImprovements: [
				"**Función Deshacer/Rehacer:** Añadir un historial de acciones para permitir a los usuarios revertir o rehacer cambios.",
				"**Guardar/Cargar Dibujos:** Implementar la capacidad de guardar el dibujo como una imagen (ej. PNG) y cargar dibujos existentes.",
				"**Herramienta de Selección/Mover:** Permitir seleccionar formas u objetos dibujados para moverlos, redimensionarlos o eliminarlos.",
				"**Herramienta de Texto:** Añadir la capacidad de insertar texto en el lienzo con opciones de fuente y tamaño.",
				"**Más Pinceles:** Explorar diferentes tipos de pinceles o texturas para el lápiz.",
				"**Relleno con Bote de Pintura:** Una herramienta para rellenar áreas cerradas con un color sólido.",
				"**Zoom y Panorámica:** Funcionalidad para acercar/alejar y desplazarse por el lienzo.",
				"**Capas:** Implementar un sistema básico de capas para organizar elementos del dibujo.",
				"**Paleta de Colores Personalizable:** Permitir a los usuarios guardar sus colores favoritos.",
			],
		},
	},
	{
		id: 3,
		name: "Reloj Analógico",
		description:
			"Reloj clásico de agujas animadas con diseño responsivo y actualización en tiempo real vía CSS.",
		tags: [
			"clock",
			"animation",
			"real time",
			"canvas",
			"DOM Manipulation",
			"frontend",
			"UI/UX",
			"time",
			"date",
		],
		category: "component",
		difficulty: "easy", // Keeping it as 'easy' as per our previous discussion.
		date: "2022-12-24",
		featured: false,
		image:
			"https://raw.githubusercontent.com/AletzMan/ImagesStorage/refs/heads/main/vanillacollection/analog-clock.webp",
		imageBrowser:
			"https://raw.githubusercontent.com/AletzMan/ImagesStorage/refs/heads/main/vanillacollection/analog-clock.webp",
		language: "javascript",
		urlRepo: "https://github.com/AletzMan/analog_clock",
		urlDemo: "https://aletzman.github.io/analog_clock/",
		projectDetails: {
			description:
				"Este proyecto es una representación digital de un reloj analógico clásico, construido utilizando JavaScript, HTML y CSS. No solo muestra la hora en tiempo real con agujas animadas suavemente, sino que también incluye un indicador completo de la fecha (día de la semana, día del mes, mes y año). La carátula del reloj, con sus marcas de hora y minuto, se dibuja dinámicamente utilizando el API de Canvas 2D, lo que permite un diseño flexible y adaptable. Las animaciones fluidas de las agujas se logran mediante transformaciones CSS, proporcionando una una experiencia visual elegante y precisa.",
			keyFeatures: [
				"**Visualización Analógica en Tiempo Real:** Muestra la hora exacta con agujas de hora, minuto y segundo que se actualizan cada segundo.",
				"**Diseño de Carátula Dinámico:** La carátula del reloj, incluyendo las marcas de hora y minuto, se dibuja programáticamente usando el API de Canvas 2D.",
				"**Indicador de Fecha Completo:** Muestra el día de la semana, el día del mes, el mes y el año, proporcionando información de fecha completa.",
				"**Animación Fluida de Agujas:** Las agujas se mueven de forma suave y precisa gracias a las transformaciones CSS (`rotate`).",
				"**Responsive:** La generación de la carátula se adapta al tamaño del canvas.",
			],
			codeHighlights: [
				{
					description:
						"**API de Canvas 2D para Gráficos:** Utiliza `canvas.getContext('2d')` para dibujar las marcas de las horas y minutos del reloj, permitiendo un control preciso sobre la estética de la carátula.",
					code: 'function DrawLinesClock() {\n    for (let index = 0; index < numberOfLines; index++) {\n        ctxClock.strokeStyle = index % 5 == 0 ? "#2c2c2c" : "#656565";\n        ctxClock.lineWidth = index % 5 == 0 ? 40 : 20;\n        circleDiameter = index % 5 == 0 ? 242 : 250;\n        ctxClock.beginPath();\n        ctxClock.arc(275, 275, circleDiameter, positionAngle * (index * 2) - 0.008, positionAngle * ((index * 2) + 0.1));\n        ctxClock.stroke();\n    }\n}',
					lang: "javascript",
				},
				{
					description:
						"**`setInterval` para Actualización Continua:** Emplea un temporizador para refrescar la posición de las agujas y la fecha cada segundo, asegurando la precisión del reloj.",
					code: "setInterval(() => {\n    const date = new Date();\n    let seconds = (360 / 120) * (date.getSeconds() * 2);\n    let minutes = (360 / 60) * date.getMinutes();\n    let hours = (360 / 12) * date.getHours();\n    handSecond.style.transform = `rotate(${seconds}deg)`;\n    handMinute.style.transform = `rotate(${minutes}deg)`;\n    handHour.style.transform = `rotate(${hours}deg)`;\n    GetDate(); // Actualiza la visualización de la fecha\n}, 1000);",
					lang: "javascript",
				},
				{
					description:
						"**CSS Transformations para Animación:** Aplica `style.transform = 'rotate(Xdeg)'` directamente a los elementos DOM que representan las agujas, creando una animación de rotación eficiente y fluida.",
					code: "    handSecond.style.transform = `rotate(${seconds}deg)`;\n    handMinute.style.transform = `rotate(${minutes}deg)`;\n    handHour.style.transform = `rotate(${hours}deg)`;",
					lang: "javascript",
				},
				{
					description:
						"**Objeto `Date` para Sincronización:** Utiliza el objeto `Date` de JavaScript para obtener la hora y fecha actuales del sistema, calculando las rotaciones necesarias para cada aguja y extrayendo la información de la fecha.",
					code: 'function GetDate() {\n    const date = new Date();\n    let weekdate = date.getDay();\n    let daysName = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];\n    let daysMonth = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]\n\n    weekDay.textContent = daysName[weekdate];\n    day.textContent = date.getDate();\n    month.textContent = daysMonth[date.getMonth()];\n    year.textContent = date.getFullYear();\n}',
					lang: "javascript",
				},
				{
					description:
						"**Manipulación Directa del DOM:** Accede y actualiza el contenido de los elementos HTML (`textContent`) para mostrar la fecha y el día de la semana.",
					code: "    weekDay.textContent = daysName[weekdate];\n    day.textContent = date.getDate();\n    month.textContent = daysMonth[date.getMonth()];\n    year.textContent = date.getFullYear();",
					lang: "javascript",
				},
				{
					description:
						"**Re-renderizado en Resize:** Adapta el dibujo de la carátula si la ventana cambia de tamaño, manteniendo la proporción y la calidad visual.",
					code: 'window.addEventListener("resize", function () {\n    // Lógica para borrar y redibujar la carátula al cambiar el tamaño de la ventana\n    while (ruleXContainer.children[1]) { // Asumiendo que ruleXContainer se refiere a una parte de la carátula que se reconstruye\n        ruleXContainer.removeChild(ruleXContainer.children[1])\n    }\n    CreateRuleX(); // O la función específica para redibujar las marcas del reloj\n});',
					lang: "javascript",
				},
			],
			technicalChallenges: [
				"**Cálculo Preciso de Rotaciones:** Convertir la hora del sistema (horas, minutos, segundos) en los ángulos de rotación exactos para cada aguja del reloj, asegurando su movimiento fluido y coordinado.",
				"**Sincronización Visual:** Mantener las agujas del reloj perfectamente sincronizadas con el tiempo real del sistema sin saltos ni desfases perceptibles, lo que requiere un uso cuidadoso de `setInterval` y las propiedades `transform` de CSS.",
				"**Dibujo de Carátula con Canvas:** Diseñar y dibujar las marcas de hora y minuto en la carátula del reloj de forma programática utilizando el API de Canvas 2D, asegurando que sean proporcionales y estéticamente agradables.",
			],
			lessonsLearned: [
				"**Combinación de Canvas y CSS:** Aprendí a integrar eficazmente el dibujo con Canvas para elementos estáticos (la carátula) y las transformaciones CSS para animaciones dinámicas (las agujas), aprovechando las fortalezas de cada tecnología.",
				"**Manejo de Fechas y Tiempo en JavaScript:** Profundicé en el objeto `Date` de JavaScript y sus métodos para extraer y manipular información de tiempo y fecha con precisión.",
				"**Programación Basada en Intervalos:** Reforcé mi comprensión del uso de `setInterval` para ejecutar funciones periódicamente y mantener la interfaz de usuario actualizada en tiempo real.",
				"**Conceptos de Rotación y Ángulos:** Practiqué la aplicación de trigonometría básica para calcular ángulos de rotación basados en datos numéricos, un concepto fundamental en la animación de elementos gráficos.",
			],
			futureImprovements: [
				"**Personalización Visual:** Añadir opciones para cambiar los colores de las agujas, el fondo del reloj o el estilo de las marcas.",
				"**Múltiples Zonas Horarias:** Permitir la adición de relojes que muestren la hora en diferentes zonas horarias.",
				"**Alarmas y Temporizadores:** Integrar funciones de alarma o un temporizador de cuenta regresiva.",
				"**Modo Nocturno/Día:** Alternar entre diferentes temas visuales según la hora del día.",
				"**Sonido de Tictac Opcional:** Añadir un efecto de sonido de tictac que se pueda activar/desactivar.",
			],
		},
	},
	{
		id: 4,
		name: "Reloj Digital",
		description:
			"Reloj digital con visualización en tiempo real, cronómetro y cuenta regresiva personalizable.",
		tags: [
			"clock",
			"timer",
			"countdown",
			"setInterval",
			"UI",
			"canvas",
			"DOM Manipulation",
			"frontend",
			"time",
		],
		category: "component",
		difficulty: "intermediate",
		date: "2022-11-30",
		featured: false,
		image:
			"https://raw.githubusercontent.com/AletzMan/ImagesStorage/refs/heads/main/vanillacollection/digital-clock.webp",
		imageBrowser:
			"https://raw.githubusercontent.com/AletzMan/ImagesStorage/refs/heads/main/vanillacollection/digital-clock.webp",
		language: "javascript",
		urlRepo: "https://github.com/AletzMan/digital-clock-vanilla",
		urlDemo: "https://aletzman.github.io/digital-clock-vanilla/",
		projectDetails: {
			description:
				"Este proyecto es un versátil reloj digital que ofrece tres modos de operación fundamentales: un reloj en tiempo real, un cronómetro preciso y un temporizador de cuenta regresiva totalmente personalizable. La singularidad de este reloj radica en la forma en que sus dígitos son renderizados utilizando el API de Canvas 2D, lo que permite una visualización segmentada y personalizable del color. Su interfaz dinámica permite alternar entre modos y controlar las funciones de temporización con facilidad, presentando una solución robusta para diversas necesidades de cronometraje digital.",
			keyFeatures: [
				"**Múltiples Modos:** Soporta tres modos principales: reloj digital en tiempo real, cronómetro y temporizador de cuenta regresiva.",
				"**Dígitos Personalizables:** Los dígitos se dibujan usando el API de Canvas 2D, permitiendo cambiar el color de la pantalla.",
				"**Cronómetro:** Funcionalidad de cronómetro con inicio, pausa/continuación y reinicio.",
				"**Temporizador de Cuenta Regresiva:** Permite ajustar horas, minutos y segundos, con controles para añadir/restar tiempo y un indicador visual de finalización (animación de los dígitos).",
				"**Control de Visibilidad:** Los controles de los temporizadores (botones de añadir/restar tiempo) aparecen y desaparecen dinámicamente según el modo seleccionado.",
				"**Formatos de Hora:** Los números se muestran siempre con dos dígitos (ej. '05' en lugar de '5').",
			],
			codeHighlights: [
				{
					description:
						"**API de Canvas 2D para Dibujo de Dígitos:** Funciones modulares (`createSegmentOne` a `createSegmentSeven`) que utilizan `ctx.beginPath()`, `ctx.lineTo()`, `ctx.fill()`, y `ctx.stroke()` para construir cada segmento de los números de 7-segmentos, permitiendo un control granular sobre su apariencia.",
					code: "function createSegmentOne(context) {\n    context.beginPath();\n    context.moveTo(15, 15);\n    context.lineTo(30, 0);\n    context.lineTo(110, 0);\n    context.lineTo(125, 15);\n    context.lineTo(110, 30);\n    context.lineTo(30, 30);\n    context.lineTo(15, 15);\n    context.fill();\n    context.stroke();\n}",
					lang: "javascript",
				},
				{
					description:
						"**Lógica de Renderizado de Números:** La función `createNumber` toma un dígito y un contexto de canvas para dibujar el número correspondiente, seleccionando y activando los segmentos necesarios, y limpiando el canvas antes de redibujar.",
					code: 'function createNumber(number, context) {\n    context.clearRect(0, 0, 250, 460);\n    createBase(context);\n    context.fillStyle = digitColor;\n    context.lineWidth = 5;\n    context.strokeStyle = "rgb(24, 24, 24)";\n    switch (number) {\n        case 0:\n            createSegmentOne(context);\n            // ... (other segments for 0)\n            break;\n        case 1:\n            createSegmentTwo(context);\n            createSegmentThree(context);\n            break;\n        // ... cases for other numbers\n    }\n}',
					lang: "javascript",
				},
				{
					description:
						"**Gestión de Modos y Visibilidad de UI:** La función `changeOptionSelect` controla qué elementos de la interfaz (botones de control, sliders de ajuste) son visibles u ocultos, adaptando la UI según si se selecciona el reloj, cronómetro o temporizador.",
					code: 'function changeOptionSelect() {\n    optionSelected = selectOption.value;\n    // ... logic to hide/show buttons and titles based on optionSelected\n    if (optionSelected == 3) { // Timer mode\n        buttonStart.style.visibility = "visible";\n        // ... show other timer controls\n    } if (optionSelected == 2) { // Chronometer mode\n        buttonStart.style.visibility = "visible";\n        // ... hide timer-specific controls\n    }\n    AnimationNormal();\n}',
					lang: "javascript",
				},
				{
					description:
						"**Actualización en Tiempo Real con `setInterval`:** Múltiples `setInterval` se utilizan para gestionar la lógica de actualización: uno para el reloj digital (`countSeconds`) y otro para las operaciones del cronómetro (`Chronometer`) y temporizador (`Timer`), asegurando una sincronización precisa cada segundo.",
					code: "setInterval(() => {\n    if (optionSelected == 1) {\n        countSeconds();\n    }\n}, 1000);\n\nsetInterval(() => {\n    if (optionSelected == 3 && start) {\n        Timer();\n    }\n    if (optionSelected == 2 && start) {\n        Chronometer();\n    }\n}, 1000);",
					lang: "javascript",
				},
				{
					description:
						"**Lógica de Cronómetro (Stopwatch):** La función `Chronometer` incrementa los segundos, minutos y horas, manejando los desbordamientos para un conteo continuo, y actualiza los dígitos en el Canvas.",
					code: "function Chronometer() {\n    secondsChronometer++;\n    if (secondsChronometer == 60) {\n        secondsChronometer = 0;\n        minutesChronometer++;\n    }\n    if (minutesChronometer == 60) {\n        minutesChronometer = 0;\n        hoursChronometer++;\n    }\n\n    createNumber(addZero(hoursChronometer)[0], ctxDigitHour_1);\n    createNumber(addZero(hoursChronometer)[1], ctxDigitHour_2);\n    // ... update other digits\n}",
					lang: "javascript",
				},
				{
					description:
						"**Lógica de Temporizador (Countdown):** La función `Timer` decrementa el tiempo, gestiona la lógica de 'préstamo' entre segundos, minutos y horas, y detiene el temporizador cuando llega a cero, activando una animación de finalización.",
					code: "function Timer() {\n    if (secondsTimer == 0 || secondsTimer == -1) {\n        secondsTimer = 60;\n        if (minutesTimer == 0 && hoursTimer == 0) {\n            start = false;\n            // ... reset button state, call TimerFinishied, and return\n            return;\n        }\n    }\n    secondsTimer--;\n    // ... logic for minutes and hours decrement\n    createNumber(addZero(hoursTimer)[0], ctxDigitHour_1);\n    createNumber(addZero(hoursTimer)[1], ctxDigitHour_2);\n    // ... update other digits\n}",
					lang: "javascript",
				},
				{
					description:
						"**Control de Inicio/Pausa/Reseteo:** La función `TimerStart` gestiona el estado de reproducción (inicio/pausa/continuar) de las funciones de cronómetro y temporizador, incluyendo la actualización del texto y estilo del botón, y la función `Reset` devuelve todos los contadores a cero y restablece la UI.",
					code: 'function TimerStart() {\n    if (((hoursTimer != 0 || minutesTimer != 0 || secondsTimer != 0) && optionSelected == 3) || optionSelected == 2) {\n        if (!start) {\n            start = true;\n            buttonStart.style.background = \'#8ad4cd\';\n            buttonStart.textContent = "PAUSE";\n        } else {\n            start = false;\n            buttonStart.style.background = \'#e0e0e0\';\n            buttonStart.textContent = "CONTINUE";\n        }\n    } else {\n        alert("Favor de elegir el tiempo!");\n        buttonStart.style.background = \'#e0e0e0\';\n        buttonStart.textContent = "START";\n    }\n}',
					lang: "javascript",
				},
				{
					description:
						"**Animación de Finalización del Temporizador:** `TimerFinishied` aplica animaciones CSS a los elementos del Canvas que muestran los dígitos, creando un efecto visual llamativo para indicar que el temporizador ha terminado, mientras `AnimationNormal` revierte estos estilos.",
					code: 'function TimerFinishied() {\n    digitSecond_2.style.animation = "aumentar 1s infinite alternate ease-in-out";\n    digitSecond_1.style.animation = "aumentar 1s infinite alternate ease-in-out ";\n    // ... apply animation to other digit canvases\n}\n\nfunction AnimationNormal() {\n    digitSecond_2.style.animation = "normal";\n    // ... remove animation from other digit canvases\n}',
					lang: "javascript",
				},
			],
			technicalChallenges: [
				"**Gestión de Múltiples Modos:** Implementar y alternar entre las tres funcionalidades (reloj, cronómetro, temporizador) de forma fluida, asegurando que los contadores y la UI se comporten correctamente en cada modo.",
				"**Sincronización Precisa del Tiempo:** Mantener el reloj, cronómetro y temporizador actualizados cada segundo sin errores de desfase, lo que implica un manejo cuidadoso de `setInterval` y las operaciones de tiempo.",
				"**Renderizado Eficiente de Dígitos en Canvas:** Dibujar y redibujar múltiples dígitos de 7-segmentos en Canvas en tiempo real, optimizando el rendimiento para evitar parpadeos o lentitud.",
				"**Lógica de Temporizador Compleja:** Desarrollar la lógica de cuenta regresiva del temporizador, incluyendo el manejo de minutos y horas cuando los segundos llegan a cero, y la detección del final del conteo.",
				"**Manipulación Dinámica del DOM y UI Reactiva:** Mostrar u ocultar elementos de la interfaz de usuario de forma condicional y actualizar sus propiedades (como el color o el texto de los botones) en respuesta a las acciones del usuario y los cambios de estado.",
			],
			lessonsLearned: [
				"**Diseño de Componentes Modulares:** Aprendí a descomponer la interfaz digital en segmentos y dígitos individuales, facilitando su dibujo y reutilización a través del Canvas API.",
				"**Gestión Avanzada de Estados en JavaScript:** Reforcé mi capacidad para manejar estados complejos (reloj, cronómetro, temporizador, inicio/pausa) y cómo estos influyen en la lógica y la interfaz de usuario.",
				"**Aplicaciones del Objeto `Date` y `setInterval`:** Profundicé en la aplicación práctica de `Date` para obtener y manipular el tiempo, y `setInterval` para ejecutar tareas recurrentes en tiempo real.",
				"**Técnicas de Renderizado de Gráficos con Canvas:** Mejoré mis habilidades en el dibujo programático de formas y la gestión de contextos de Canvas para crear interfaces visuales personalizadas.",
				"**Mejora de UI/UX:** Entendí la importancia de la retroalimentación visual (como la animación de finalización del temporizador) y la adaptación de la UI para una experiencia de usuario intuitiva.",
			],
			futureImprovements: [
				"**Sonidos de Alarma/Tictac:** Añadir efectos de sonido para el final del temporizador o un tictac opcional para el reloj/cronómetro.",
				"**Personalización de Digitos:** Permitir al usuario elegir entre diferentes estilos de fuente o colores para cada par de dígitos.",
				"**Funcionalidad de Vueltas (Laps) en Cronómetro:** Agregar la capacidad de registrar tiempos de vuelta en el modo cronómetro.",
				"**Preajustes de Temporizador:** Permitir guardar y cargar configuraciones de temporizador predefinidas.",
				"**Soporte de Zonas Horarias:** Opción para mostrar la hora en diferentes zonas horarias.",
				"**Modo de Pantalla Completa:** Opción para expandir el reloj a pantalla completa.",
			],
		},
	},
	{
		id: 5,
		name: "Bubble Shooter Game",
		description:
			"Juego arcade de disparos donde apuntas y lanzas burbujas para alcanzar la mayor puntuación posible.",
		tags: [
			"game",
			"canvas",
			"bubble shooter",
			"color match",
			"arcade",
			"animation",
			"event handling",
			"scoring",
			"sound",
			"UI/UX",
			"frontend",
		],
		category: "game",
		difficulty: "advanced",
		date: "2023-04-04",
		featured: true,
		image:
			"https://raw.githubusercontent.com/AletzMan/ImagesStorage/refs/heads/main/vanillacollection/bubble_shooter_game.webp",
		imageBrowser:
			"https://raw.githubusercontent.com/AletzMan/ImagesStorage/refs/heads/main/vanillacollection/bubble_shooter_game.webp",
		language: "javascript",
		urlRepo: "https://github.com/AletzMan/bubble_shooter_game",
		urlDemo: "https://aletzman.github.io/bubble_shooter_game/",
		projectDetails: {
			description:
				"Bubble Shooter Game es un dinámico juego arcade de disparos que desafía a los jugadores a apuntar y lanzar proyectiles para golpear burbujas objetivo y lograr la mayor puntuación. El juego presenta elementos que se mueven constantemente por la pantalla, algunos siendo objetivos y otros obstáculos. Incluye un sistema de puntuación que rastrea aciertos y fallos, ofrece recompensas por rachas de golpes y culmina en una condición de 'Game Over'. Con efectos de sonido inmersivos y una interfaz de usuario clara que muestra las estadísticas del juego, este proyecto ofrece una experiencia de juego atractiva y de ritmo rápido.",
			keyFeatures: [
				"**Mecánica de Disparo Interactiva:** Los jugadores hacen clic para 'disparar' proyectiles que dejan una marca visual en el lugar del impacto.",
				"**Objetivos Dinámicos:** Las 'burbujas' (representadas por cuadrados con imágenes) se mueven constantemente por la pantalla, con algunas designadas como objetivos a disparar y otras como obstáculos.",
				"**Sistema de Puntuación:** Lleva un registro de los disparos totales, aciertos (hits) y fallos (misses).",
				"**Recompensa por Aciertos Consecutivos:** Los jugadores reciben tiros adicionales por una racha de 5 aciertos.",
				"**Manejo de Juego (Game Over):** El juego termina al quedarse sin disparos o al alcanzar un límite de fallos.",
				"**Efectos de Sonido:** Incluye sonidos para los disparos y explosiones al impactar, mejorando la inmersión.",
				"**Controles de Audio:** Botón para silenciar/activar los sonidos del juego.",
				"**Interfaz de Usuario:** Muestra el tiempo transcurrido, los disparos restantes, los aciertos y los fallos en un tablero de puntuación.",
				"**Guía de Juego:** Un botón 'How to Play' que muestra/oculta una ventana con instrucciones.",
			],
			codeHighlights: [
				{
					description:
						"**Generación Dinámica de Elementos del Juego:** La función `CreateSquares` crea y añade un número determinado de `div` elementos al DOM (`containerAnimation`), que representan los objetivos y obstáculos en movimiento. Esto permite que el juego genere una cantidad controlada de elementos visuales.",
					code: 'function CreateSquares(numberSquares) {\n    let html = "<div></div>";\n    for (let index = 0; index < numberSquares; index++) {\n        containerAnimation.insertAdjacentHTML("afterbegin", html);\n    }\n    AddSizeAndStylesToSquares();\n}',
					lang: "javascript",
				},
				{
					description:
						"**Estilos y Animaciones CSS para Movimiento:** La función `AddSizeAndStylesToSquares` asigna tamaños, posiciones iniciales, imágenes de fondo y múltiples propiedades de animación CSS (`animationName`, `animationDuration`, `animationDelay`, `animationIterationCount`, `animationTimingFunction`) a cada cuadrado, creando su movimiento continuo desde abajo hacia arriba y reaparición.",
					code: "function AddSizeAndStylesToSquares() {\n    for (let index = 0; index < containerAnimation.childElementCount; index++) {\n        let sizeSquare = GetRandomNumber(3, 7);\n        let leftSquare = GetRandomNumber(10, 85);\n        // ... otras variables aleatorias ...\n        containerAnimation.children[index].style.width = `${sizeSquare}vw`;\n        containerAnimation.children[index].style.height = `${sizeSquare}vw`;\n        containerAnimation.children[index].style.animationName = `animateSquares${animationnumber}`;\n        // ... otras propiedades de estilo y animación ...\n    }\n}",
					lang: "javascript",
				},
				{
					description:
						"**Manejo de Clics y Generación de Marcas de Disparo:** Un `addEventListener` global para `mousedown` detecta los clics del usuario en la pantalla. Si es un disparo válido, crea dinámicamente un nuevo elemento `div` (`bulletMark`) que representa la marca del disparo, lo posiciona según las coordenadas del clic y le aplica estilos aleatorios antes de eliminarlo después de un tiempo.",
					code: 'const bullet = document.addEventListener(\'mousedown\', function (e) {\n    if (e.clientY > 115 && totalShots && !gameOver) {\n        const newChild = document.createElement("div");\n        newChild.className = "bulletMark";\n        // ... lógica de posicionamiento, estilos aleatorios y remoción ...\n        totalShots--;\n        UpdateStats();\n    }\n    if (e.clientY > 115) {\n        soundPainballShoot.currentTime = 0;\n        soundPainballShoot.play();\n    }\n    if (!totalShots) {\n        GameOver();\n    }\n});',
					lang: "javascript",
				},
				{
					description:
						"**Lógica de Aciertos, Fallos y Puntuación:** La función `ComponentChange` se activa cuando se hace clic en un cuadrado. Determina si el cuadrado clicado es el objetivo correcto comparando sus imágenes de fondo. Si es un acierto, incrementa `totalhits` y llama a `ParticlesExplosion`. Si es un fallo (o un no-objetivo), incrementa `totalmisses` y verifica la condición de 'Game Over'. También gestiona la transparencia y desaparición del cuadrado impactado.",
					code: "function ComponentChange(e) {\n    if (!gameOver) {\n        // ... posicionamiento de la explosión ...\n        if (e.target.style.backgroundImage.replace(/^url\\(|\\)$|\"/g, '').replace('.', '') == targetImg.src.substring(targetImg.src.indexOf('/images')).replace(' ', '') && e.target.style.backgroundColor != \"transparent\") {\n            totalhits++;\n            ParticlesExplosion();\n            CountHits(true); // Recompensa por aciertos consecutivos\n        } else {\n            totalmisses++;\n            if (totalmisses == maxMisses) GameOver();\n            ParticlesExplosion();\n            CountHits(false);\n        }\n        // ... lógica de ocultamiento del cuadrado impactado ...\n    }\n}",
					lang: "javascript",
				},
				{
					description:
						"**Detección de Colisiones para Fallos por Paso:** La función `checkCollision` utiliza `requestAnimationFrame` para un bucle de juego continuo. Compara las posiciones de los cuadrados móviles con la del marcador (`scoreboard`). Si un cuadrado objetivo (`targetImg.src`) colisiona con el marcador sin haber sido disparado, se registra como un fallo (`totalmisses`), simulando que el enemigo ha 'escapado'.",
					code: "function checkCollision() {\n    for (let i = 0; i < containerAnimation.childElementCount; i++) {\n        const childElement = containerAnimation.children[i];\n        if (elementStates[i].hasCollided) { continue; }\n        const childElementPosition = childElement.getBoundingClientRect();\n        const scoreboardPosition = scoreboard.getBoundingClientRect();\n        if (childElementPosition.left < scoreboardPosition.right &&\n            childElementPosition.right > scoreboardPosition.left &&\n            childElementPosition.top + childElementPosition.height < scoreboardPosition.bottom &&\n            childElementPosition.bottom > scoreboardPosition.top) {\n            if (containerAnimation.children[i].style.backgroundImage.replace(/^url\\(|\\)$|\"/g, '').replace('.', '') === targetImg.src.substring(targetImg.src.indexOf('/images')).replace(' ', '')) {\n                totalmisses++;\n                if (totalmisses == maxMisses) GameOver();\n                UpdateStats();\n            }\n            elementStates[i].hasCollided = true;\n        }\n    }\n    requestAnimationFrame(checkCollision);\n}\nrequestAnimationFrame(checkCollision);",
					lang: "javascript",
				},
				{
					description:
						"**Gestión del Estado del Juego y 'Game Over':** La función `GameOver` se activa cuando se cumplen las condiciones de fin de juego (munición agotada o demasiados fallos). Detiene las animaciones de todos los cuadrados, los oculta de la pantalla con un efecto visual y muestra la tarjeta de 'Game Over' al jugador.",
					code: 'async function GameOver() {\n    if (!gameOver) {\n        soundExplosion.currentTime = 0;\n        for (let index = 0; index < containerAnimation.childElementCount; index++) {\n            containerAnimation.children[index].style.animationPlayState = "paused";\n        }\n        for (let index = 0; index < containerAnimation.childElementCount; index++) {\n            containerAnimation.children[index].style.top = "1000px"; // Mueve los elementos fuera de vista\n            containerAnimation.children[index].style.boxShadow = "none";\n            containerAnimation.children[index].style.backgroundColor = "transparent";\n            soundExplosion.play();\n            await sleep(50);\n        }\n    }\n    gameOverCard.style.transform = "translateX(0%)"; // Muestra la tarjeta de Game Over\n    gameOver = true;\n}',
					lang: "javascript",
				},
				{
					description:
						"**Control de Audio:** El botón de silencio (`mutedButton`) permite al usuario activar o desactivar los efectos de sonido del juego (`soundPainballShoot`, `soundExplosion`). La lógica cambia la propiedad `muted` de los elementos de audio y actualiza visualmente el estado del botón.",
					code: 'mutedButton.children[0].addEventListener(\'mousedown\', function () {\n    const styleElement = getComputedStyle(mutedButton.children[0], null);\n    let translateElement = styleElement.getPropertyValue("transform");\n    if (translateElement == "none" || translateElement == "matrix(1, 0, 0, 1, 0, 0)") {\n        mutedButton.children[0].style.transform = "translateX(35px)";\n        // ... actualizar estilos para \'muteado\' ...\n        soundPainballShoot.muted = true;\n        soundExplosion.muted = true;\n    } else {\n        mutedButton.children[0].style.transform = "translateX(0px)";\n        // ... actualizar estilos para \'no muteado\' ...\n        soundPainballShoot.muted = false;\n        soundExplosion.muted = false;\n    }\n})',
					lang: "javascript",
				},
				{
					description:
						"**Lógica de Reaparición de Objetivos y Aleatoriedad:** Un evento `animationiteration` en los cuadrados permite que, al finalizar cada ciclo de animación (cuando desaparecen por la parte superior de la pantalla), reaparezcan desde abajo con nuevas posiciones, tamaños y, crucialmente, una nueva imagen de fondo (pueden ser objetivos o no) de forma aleatoria, manteniendo el juego dinámico.",
					code: "for (let index = 0; index < containerAnimation.children.length; index++) {\n    containerAnimation.children[index].addEventListener(\"animationiteration\", function () {\n        let leftSquare = GetRandomNumber(10, 80);\n        let backgroundSquare = GetRandomNumber(1, 41);\n        let sizeSquare = GetRandomNumber(3, 7);\n        // ... resetear opacidad, posición, tamaño y estilos ...\n        if (index > 5 && index < 13) { // Asignar ciertos índices como objetivos\n            containerAnimation.children[index].style.backgroundImage = `url('./images/comp_${imageTargetID}.svg')`;\n        } else if (index > 25 && index < 33) {\n            containerAnimation.children[index].style.backgroundImage = `url('./images/comp_${imageTargetID}.svg')`;\n        } else { // El resto son objetivos aleatorios\n            containerAnimation.children[index].style.backgroundImage = `url('./images/comp_${backgroundSquare}.svg')`;\n        }\n        containerAnimation.children[index].style.scale = 1;\n        elementStates[index].hasCollided = false;\n    });\n}",
					lang: "javascript",
				},
			],
			technicalChallenges: [
				"**Gestión de Animaciones DOM a Gran Escala:** Mantener animaciones CSS fluidas y sincronizadas para múltiples elementos moviéndose concurrentemente por la pantalla, lo que exige una consideración cuidadosa del rendimiento del navegador para evitar lag.",
				"**Detección de Colisiones Bidireccional:** Implementar una lógica precisa para detectar cuándo los clics del usuario impactan un objetivo (hit detection) y, por otro lado, cuándo los objetivos no impactados 'escapan' al alcanzar un área específica de la pantalla (miss detection).",
				"**Sincronización de Eventos de Juego Complejos:** Coordinar los disparos, impactos, explosiones, sonidos, actualizaciones del marcador y la lógica de reaparición de objetivos de manera que todos los componentes del juego se sientan cohesivos y responsivos.",
				"**Manejo Eficiente de Recursos Multimedia:** Cargar y reproducir efectos de sonido instantáneamente (`soundExplosion`, `soundPainballShoot`) al ocurrir los eventos del juego sin introducción de latencia o fallos.",
				"**Lógica de Flujo de Juego y Estado:** Implementar un sistema robusto para gestionar el estado del juego (activo, pausado, game over), las condiciones de victoria/derrota, y las recompensas por racha de aciertos de manera lógica y sin errores.",
				"**Generación Aleatoria Controlada:** Asegurar que los objetivos aparezcan de forma aleatoria pero con una probabilidad adecuada para mantener el juego desafiante y justo, y que los elementos no objetivo actúen como distracciones efectivas.",
			],
			lessonsLearned: [
				"**Diseño de Bucle de Juego en el Navegador:** Aprendí a estructurar la lógica de un juego arcade web, utilizando `setInterval` para el temporizador principal y `requestAnimationFrame` para la gestión de animaciones y colisiones, creando un bucle de juego eficiente.",
				"**Optimización del Rendimiento en Animaciones DOM:** Gane experiencia en cómo manipular un gran número de elementos DOM y sus estilos CSS para crear animaciones complejas y fluidas sin sacrificar el rendimiento, lo cual es crítico en juegos.",
				"**Implementación de Sistemas de Puntuación:** Comprendí cómo diseñar y mantener un sistema de puntuación que no solo registre aciertos y fallos, sino que también incorpore mecánicas de recompensa (disparos adicionales por racha) para mejorar la jugabilidad.",
				"**Manejo Avanzado de Eventos y Estados:** Reforcé mis habilidades en la programación reactiva a eventos, manejando múltiples tipos de interacciones del usuario y cambios de estado del juego para actualizar la interfaz y la lógica de forma dinámica.",
				"**Integración Efectiva de Audio:** Adquirí práctica en cómo añadir y controlar efectos de sonido en una aplicación web, mejorando la inmersión del usuario y la retroalimentación del juego.",
				"**Desarrollo de Experiencias de Usuario Intuitivas:** Entendí la importancia de proveer instrucciones claras (`buttonHowToPlay`) y retroalimentación visual y auditiva para una experiencia de usuario atractiva y fácil de entender.",
			],
			futureImprovements: [
				"**Múltiples Niveles de Dificultad:** Implementar niveles que aumenten la velocidad de los objetivos, reduzcan la munición inicial o modifiquen el límite de fallos.",
				"**Diferentes Tipos de Objetivos:** Introducir objetivos con diferentes valores de puntuación, tamaños o patrones de movimiento.",
				"**Poderes (Power-ups):** Añadir elementos especiales que, al ser disparados, otorguen ventajas temporales (ej., cámara lenta, disparos infinitos, bonificación de puntos).",
				"**Pantallas de Inicio y Fin de Juego:** Desarrollar pantallas más elaboradas para el inicio del juego (con opciones de configuración) y el final (mostrando la puntuación final y opción para reiniciar).",
				"**Almacenamiento de Puntuaciones Altas:** Implementar `localStorage` para guardar las mejores puntuaciones de los jugadores localmente.",
				"**Optimización Adicional de Rendimiento:** Investigar el uso de Web Workers o Canvas para el renderizado de un número mucho mayor de elementos, si el juego escalara en complejidad.",
				"**Controles Adaptados a Dispositivos Táctiles:** Optimizar la experiencia de juego para dispositivos móviles con eventos táctiles.",
			],
		},
	},
];
