import Advice from "./components/Advice.jsx";
import "./App.css";

function App() {
	return (
		<div>
			<h1>Grains of Salt</h1>

			<div className="page-column" id="left-column">
				<Advice short="hi" long="goodbye"></Advice>
			</div>

			<div className="page-column" id="right-column">
				<Advice short="hello" long="goodbye"></Advice>
			</div>
		</div>
	);
}

export default App;
