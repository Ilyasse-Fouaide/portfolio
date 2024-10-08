import React from "react";
import Background from "./components/Background";
import Formation from "./components/Formation";
import Github from "./components/icons/Github";
import Linkedin from "./components/icons/Linkedin";
import Info from "./components/Info";
import Projects from "./components/Projects";
import ReactGA from "react-ga";

function App() {
	React.useEffect(() => {
		ReactGA.initialize("G-GDMS00V7HH");
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<main>
			<div class="fixed top-0 z-[-2] w-full h-full bg-neutral-950 bg-[radial-gradient(#262626_1px,#0a0a0a_1px)] bg-[size:20px_20px]"></div>

			<div className="z-50 mt-3 sticky top-3 w-fit left-1/2">
				<div className="p-2 bg-neutral-900/70 border rounded-full w-full border-neutral-600/70 flex items-center justify-center backdrop-blur-sm">
					<a
						href="https://github.com/Ilyasse-Fouaide"
						target="_blank"
						className="pr-3 border-r border-neutral-600/70"
					>
						<Github />
					</a>
					<a
						href="https://www.linkedin.com/in/ilyasse-fouaide/"
						target="_blank"
						className="pl-3 mr-1"
					>
						<Linkedin />
					</a>
				</div>
			</div>

			<div className="max-w-5xl m-auto">
				<Info />
				<Background />
				<Formation />
				<Projects />
			</div>
			{/* <div className="fixed p-2 bg-neutral-600 w-40 aspect-square rounded-full top-1/2 -translate-y-1/2 -left-12 blur-3xl -translate-x-1/2"></div> */}
		</main>
	);
}

export default App;
