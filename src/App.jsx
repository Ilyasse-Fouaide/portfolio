import React from "react";
import Background from "./components/Background";
import Formation from "./components/Formation";
import Info from "./components/Info";
import Projects from "./components/Projects";
import ReactGA from "react-ga4";
import SocialNavBarItems from "./components/SocialNavBarItems";

function App() {
	React.useEffect(() => {
		ReactGA.initialize("G-GDMS00V7HH");
		ReactGA.send({
			hitType: "pageview",
			page: window.location.pathname + window.location.search,
			title: "Ilyasse FOUAIDE - Développeur web",
		});
	}, []);

	return (
		<main>
			<div class="fixed top-0 z-[-2] w-full h-full bg-neutral-950 bg-[radial-gradient(#262626_1px,#0a0a0a_1px)] bg-[size:20px_20px]"></div>
			<SocialNavBarItems />
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
