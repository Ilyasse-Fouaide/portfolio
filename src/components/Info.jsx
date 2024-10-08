import React from "react";
import Location from "./icons/Location";
import pfp from "../assets/images/Ilyasse_Fouaide.png";
import Item from "./Item";
import ButtonInfo from "./ButtonInfo";
import Download from "./icons/Download";
import ReactGA from "react-ga4";

const info = [
	{ name: "Téléphone", value: "06 70 22 85 67" },
	{ name: "Courriel", value: "ilyasse.fouaide@gmail.com" },
];

const languages = [
	{ name: "Anglais", level: "Intermédiaire" },
	{ name: "Francais", level: "Basic" },
];

const skills = [
	{ name: "HTML" },
	{ name: "CSS" },
	{ name: "JavaScript" },
	{ name: "PHP" },
	{ name: "MySQL" },
	{ name: "GIT" },
	{ name: "Github" },
	{ name: "Node.js" },
	{ name: "MongoDB" },
	{ name: "Laravel" },
	{ name: "React" },
	{ name: "Express.js" },
	{ name: "Tailwind Css" },
];

function Info() {
	const handleCVButtonClick = () => {
		ReactGA.event({
			category: "User",
			action: "Clicked CV Button",
			label: "CV",
		});
	};

	return (
		<Item className={`mt-3`}>
			<div className="relative z-10 w-full h-36">
				{/* <Banner /> */}
				<div className="pointer-events-none z-0 absolute inset-0 rotate-180 bg-[linear-gradient(to_right,#404040_1px,transparent_1px),linear-gradient(to_bottom,#404040_1px,transparent_1px)] bg-[size:18px_28px] [mask-image:radial-gradient(ellipse_80%_80%_at_60%_0%,#000_50%,transparent_100%)]"></div>
				<div className="absolute bottom-0 translate-y-1/2 w-[140px] aspect-square left-8 bg-neutral-600 rounded-full ring-4 ring-neutral-900 border-none overflow-hidden">
					<img
						src={pfp}
						alt="ilyasse fouaide profile picture w-full h-full pointer-events-none"
						className="transition-all duration-300 hover:scale-110"
					/>
				</div>
			</div>
			{/* Name - Location - Role */}
			<div className="relative p-8">
				<div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl bg-indigo-400/20 w-52 aspect-square"></div>

				<div className="absolute inset-0 flex flex-col justify-between w-1/2 h-full pt-8 pb-8 pr-8 translate-x-full">
					<div className="grid gap-1">
						{info.map((info, key) => (
							<div className="text-xs font-medium" key={key}>
								<span className="font-normal text-neutral-400">
									{info.name}:
								</span>
								&nbsp; {info.value}
							</div>
						))}
					</div>

					<div>
						<div className="mb-1 text-xs font-normal text-neutral-400">
							Languages:
						</div>
						<div className="flex items-center gap-1 text-[10px]">
							{languages.map((language, key) => (
								<ButtonInfo key={key}>
									{language.name}:&nbsp;
									<span className="font-light text-neutral-300">
										{language.level}
									</span>
								</ButtonInfo>
							))}
						</div>
					</div>

					<div>
						<div className="mb-1 text-xs font-normal text-neutral-400">
							Compétences:
						</div>
						<div className="flex flex-wrap items-center gap-1 text-[10px]">
							{skills.map((skill, key) => (
								<ButtonInfo key={key}>{skill.name}</ButtonInfo>
							))}
							<button className="px-2 py-[3px] rounded-[4px] bg-neutral-200 text-neutral-800">
								Plus de compétences dans le CV +
							</button>
						</div>
					</div>
				</div>

				<div className="relative z-10 w-1/2 mt-16">
					<h1 className="text-2xl font-playfair text-neutral-50">
						Ilyasse FOUAIDE
					</h1>
					<div className="inline-flex items-center justify-center gap-2 mt-1 text-xs text-neutral-400">
						<span>
							<Location />
						</span>
						Khouribga, MAROC
					</div>
					<div className="mt-1 font-medium leading-none text-neutral-200">
						Développeur web
					</div>
					{/* <button className="px-4 py-1 mt-5 text-xs transition-colors rounded-md bg-sky-600 hover:bg-sky-700">
						Mon Portfolio
					</button> */}
					<button
						class="relative group px-4 py-1 mt-5 text-xs"
						onClick={handleCVButtonClick}
					>
						<a
							href="https://drive.google.com/file/d/1qIEz0dyzDoJkz6Qn-9PbryH0WmATqFNM/view?usp=sharing"
							target="_blank"
							aria-label="Cliquez ici pour télécharger mon CV."
						>
							<span class="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-indigo-200 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
							<span class="absolute inset-0 w-full h-full bg-[#3b34c8] border border-indigo-300 group-hover:bg-indigo-600"></span>
							<div className="inline-flex items-center">
								<span class="relative text-indigo-50">Mon CV</span>
								<span className="relative ml-1">
									<Download />
								</span>
							</div>
						</a>
					</button>
				</div>
			</div>
		</Item>
	);
}

export default Info;
