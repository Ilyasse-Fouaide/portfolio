import Background from "./components/Background";
import Formation from "./components/Formation";
import Github from "./components/icons/Github";
import Linkedin from "./components/icons/Linkedin";
import Info from "./components/Info";
import Projects from "./components/Projects";

function App() {
	return (
		<main className="relative">
			<div class="fixed top-0 z-[-2] w-full h-full bg-neutral-950 bg-[radial-gradient(#262626_1px,#0a0a0a_1px)] bg-[size:20px_20px]"></div>
			<div className="max-w-5xl m-auto">
				<Info />
				<Background />
				<Formation />
				<Projects />
			</div>
			<div className="fixed p-2 bg-neutral-600 w-40 aspect-square rounded-full top-1/2 -translate-y-1/2 -left-12 blur-3xl -translate-x-1/2"></div>
			<div className="fixed p-2 bg-neutral-900 rounded-full border border-neutral-600/30 top-1/2 -translate-y-1/2 left-5">
				<a
					href="https://github.com/Ilyasse-Fouaide"
					target="_blank"
					className="pb-3 block border-b border-neutral-600 "
				>
					<Github />
				</a>
				<a
					href="https://www.linkedin.com/in/ilyasse-fouaide/"
					target="_blank"
					className="pt-3 pb-[3px] block"
				>
					<Linkedin />
				</a>
			</div>
		</main>
	);
}

export default App;
