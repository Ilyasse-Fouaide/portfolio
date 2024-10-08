import React from "react";
import Description from "./Description";
import bg_pattern from "../assets/images/geometric-pattern.webp";

function Background() {
	return (
		<section className="mt-3 overflow-hidden relative border rounded-lg shadow-2xl border-[#6d7bff] bg-[#3b34c8] shadow-neutral-600/10">
			<div className="flex">
				{/* Mon profile */}
				<div className="w-1/2">
					<h2 className="px-8 py-4 text-lg tracking-wider font-playfair">
						MON PROFILE
					</h2>
					<div className="px-8 pb-4">
						<p className="max-w-lg mt-2 text-sm text-justify text-indigo-100">
							Développeur web avec des compétences solides en résolution de
							problèmes et une expérience reconnue dans la création et la
							conception de sites web dynamiques. Ma formation académique en
							informatique combinée à mes années d'expérience pratique m'ont
							permis de maîtriser un large éventail de technologies et de
							langages de programmation.
						</p>
					</div>
				</div>
				{/* Background */}
				<div
					rel="preload"
					className={`w-1/2 bg-cover bg-no-repeat bg-center rounded-s-2xl`}
					style={{ backgroundImage: `url('${bg_pattern}')` }}
				></div>
			</div>
		</section>
	);
}

export default Background;
