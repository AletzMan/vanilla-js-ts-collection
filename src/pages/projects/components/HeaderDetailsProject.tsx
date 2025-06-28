import type { Project } from "../../../data/types";
import { ChevronLeft, Share2 } from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";

export function HeaderDetailsProject({ project }: { project: Project }) {
	const shareOptionsRef = useRef<HTMLDivElement>(null);
	const [showShareOptions, setShowShareOptions] = useState(false);
	const currentUrl = window.location.href;
	const title = `Mira este proyecto: ${project.name} realizado con Vanilla JS/TS`;

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (shareOptionsRef.current && !shareOptionsRef.current.contains(event.target as Node)) {
				setShowShareOptions(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	function viewShareOptions() {
		setShowShareOptions(!showShareOptions);
	}

	function shareProjectWa() {
		window.open(`https://wa.me/?text=${title}&url=${currentUrl}`, "_blank");
	}

	function shareProjectTw() {
		window.open(`https://twitter.com/intent/tweet?text=${title}&url=${currentUrl}`, "_blank");
	}

	function copyUrl() {
		navigator.clipboard.writeText(currentUrl);
	}

	return (
		<header className={styles.header}>
			<a href="/projects" className={styles["back-button"]} title="Regresar a Proyectos">
				<ChevronLeft /> Regresar a Proyectos
			</a>
			<div className={styles["share-container"]}>
				<button className={styles["share-button"]} onClick={viewShareOptions}>
					<Share2 />
				</button>
				<div
					className={`${styles["share-options"]} ${
						showShareOptions ? styles["share-options-active"] : ""
					}`}
					ref={shareOptionsRef}
				>
					<button className={styles["share-option"]} onClick={shareProjectWa}>
						Compartir en WhatsApp
					</button>
					<button className={styles["share-option"]} onClick={shareProjectTw}>
						Compartir en Twitter
					</button>
					<button className={styles["share-option"]} onClick={copyUrl}>
						Copiar URL
					</button>
				</div>
			</div>
		</header>
	);
}
