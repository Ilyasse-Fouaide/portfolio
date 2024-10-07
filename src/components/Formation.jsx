import React from "react";
import Item from "./Item";
import SectionTitle from "./SectionTitle";
import Description from "./Description";
import Title from "./Title";
import SubTitle from "./SubTitle";

function Formation() {
	return (
		<Item className="mt-3">
			<SectionTitle>FORMATION</SectionTitle>
			<div className="px-8 pb-4 border-b border-neutral-50/10">
				<Title>OFPPT, Institut Spécialisé de Gestion et d'informatique</Title>
				<SubTitle date={true}>2022-2023</SubTitle>
				<Description>
					Diplôme de Technicien spécialisé en développement digital — Khouribga
				</Description>
			</div>
			<div className="px-8 py-4">
				<Title>Lycée IBN ABDOUN</Title>
				<SubTitle date={true}>2020-2021</SubTitle>
				<Description>Baccalauréat science physique — Khouribga</Description>
			</div>
		</Item>
	);
}

export default Formation;
