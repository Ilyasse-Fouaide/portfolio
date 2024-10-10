import React from "react";
import Github from "../components/icons/Github";
import Linkedin from "../components/icons/Linkedin";
import ReactGA from "react-ga4";

function SocialNavBarItems() {
	const handleGithubButtonClick = () => {
		ReactGA.event({
			category: "User",
			action: "Clicked Github Button",
			label: "Github",
		});
	};

	const handlLinkedinButtonClick = () => {
		ReactGA.event({
			category: "User",
			action: "Linkedin Github Button",
			label: "Linkedin",
		});
	};

	return (
		<nav className="sticky z-10 mt-3 top-3 w-fit left-1/2">
			<ul className="flex items-center justify-center w-full p-2 border rounded-full bg-neutral-900/70 border-neutral-600/70 backdrop-blur-sm">
				<li className="pr-3 border-r border-neutral-600/70">
					<a
						href="https://github.com/Ilyasse-Fouaide"
						target="_blank"
						onClick={handleGithubButtonClick}
						aria-label="Cliquez ici pour visiter ma page GitHub."
					>
						<Github />
					</a>
				</li>
				<li className="pl-3 mr-1">
					<a
						href="https://www.linkedin.com/in/ilyasse-fouaide/"
						target="_blank"
						onClick={handlLinkedinButtonClick}
						aria-label="Cliquez ici pour visiter ma page Linkedin."
					>
						<Linkedin />
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default SocialNavBarItems;
