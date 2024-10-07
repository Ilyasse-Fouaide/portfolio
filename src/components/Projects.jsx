import React from "react";
import Item from "./Item";
import SectionTitle from "./SectionTitle";
import Title from "./Title";
import SubTitle from "./SubTitle";
import Description from "./Description";
import ButtonInfo from "./ButtonInfo";

const toolsProject1 = [
	{ name: "Node.js" },
	{ name: "Express.js" },
	{ name: "MongoDB" },
	{ name: "React" },
];

const toolsProject2 = [
	{ name: "Laravel" },
	{ name: "Tailwind Css" },
	{ name: "React" },
	{ name: "MySQL" },
];

function Projects() {
	return (
		<Item className="mt-3">
			<SectionTitle>PROJECTS</SectionTitle>
			<div className="flex px-8 pb-4 border-b border-neutral-50/10">
				<div className="w-[70%]">
					<Title>
						Stage en Développement digital à <u>MARSA MAROC</u> de Casablanca
					</Title>
					<SubTitle date>Avril 2023 {`(durée :1 mois)`}</SubTitle>
					<Description>
						Mise en place d’un système de gestion de repos (Node.js, Express.js,
						MongoDB, React.js) pour les collaborateurs de l’entreprise MARSA
						Maroc.
					</Description>
				</div>
				<div className="w-[30%]">
					<h5 className="mb-1 text-sm text-neutral-300">Tools:</h5>
					<div className="flex flex-wrap items-center gap-1 text-[10px]">
						{toolsProject1.map((tool, key) => (
							<ButtonInfo key={key}>{tool.name}</ButtonInfo>
						))}
					</div>
				</div>
			</div>

			<div className="flex px-8 py-4">
				<div className="w-[70%]">
					<Title>Projet de synthèse</Title>
					{/* <SubTitle date>Avril 2023 {`(durée :1 mois)`}</SubTitle> */}
					<Description>
						Conception et développement du site web QuickAnnonce, permettant la
						gestion d’annonces en ligne avec système d’authentification et
						gestion de profils, avec les outils de développement Laravel/MySQL
						et React
					</Description>
				</div>
				<div className="w-[30%]">
					<h5 className="mb-1 text-sm text-neutral-300">Tools:</h5>
					<div className="flex flex-wrap items-center gap-1 text-[10px]">
						{toolsProject2.map((tool, key) => (
							<ButtonInfo key={key}>{tool.name}</ButtonInfo>
						))}
					</div>
				</div>
			</div>
		</Item>
	);
}

export default Projects;
