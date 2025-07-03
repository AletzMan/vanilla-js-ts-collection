import type { Project } from "../../../data/types";
import { ChevronLeft, Copy, Share2 } from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";
import { Logo } from "../../../components/Logo/Logo";
import { WhatsAppIcon, TwitterIcon } from "../../../icons";

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
				<ChevronLeft />
				<span className={styles["back-button-text"]}>Regresar a Proyectos</span>
			</a>
			<Logo />
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
						<WhatsAppIcon />
						Compartir en WhatsApp
					</button>
					<button className={styles["share-option"]} onClick={shareProjectTw}>
						<TwitterIcon />
						Compartir en Twitter
					</button>
					<button className={styles["share-option"]} onClick={copyUrl}>
						<Copy />
						Copiar URL
					</button>
				</div>
			</div>
		</header>
	);
}
