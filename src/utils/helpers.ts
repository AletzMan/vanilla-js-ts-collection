export function formatTextToHTML(text: string): string {
	// Procesar bloques de código primero
	text = text.replace(/`([^`]+)`/g, "<i>$1</i>");

	// Negritas: **texto**
	text = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

	// Fórmulas inline tipo $x^2$
	text = text.replace(/\$(.+?)\$/g, '<span class="math">$1</span>');

	// Opcional: dividir por doble salto para párrafos
	text = text
		.split(/\n{2,}/)
		.map((paragraph) => `<li>${paragraph.trim()}</li>`)
		.join("\n");

	return text;
}
