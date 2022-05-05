import Advice from "./components/Advice.jsx";
import "./App.css";

function App() {
	return (
		<div>
			<h1>Grains of Salt</h1>
			<Advice short="hello" long="goodbye"></Advice>
		</div>
	);
}

export default App;
