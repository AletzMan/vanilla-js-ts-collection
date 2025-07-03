export function formatTextToHTML(text: string): string {
	// Extraer la parte en negrita como título
	const boldMatch = text.match(/\*\*(.+?)\*\*/);
	const title = boldMatch ? `<strong>${boldMatch[1]}</strong>` : "";

	// Eliminar el texto en negrita del contenido
	let content = text.replace(/\*\*(.+?)\*\*/, "").trim();

	// Reemplazar código inline: `...`
	content = content.replace(/`([^`]+)`/g, "<i>$1</i>");

	// Reemplazar fórmulas: $...$
	content = content.replace(/\$(.+?)\$/g, '<span class="math">$1</span>');

	// Devolver HTML con estructura <li><strong></strong><p>...</p></li>
	return `<li>${title}${content ? `<p>${content}</p>` : ""}</li>`;
}
