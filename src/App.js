import Advice from "./components/Advice.jsx";
import "./App.css";

function App() {
	return (
		<div>
			<h1 id="title">Grains of Salt</h1>
			<p id="subtitle">
				A compilation of advice I have received from good-natured
				people.
			</p>

			<div className="page-column" id="left-column">
				<h2 className="category-title" id="lifestyle">
					Lifestyle
				</h2>
				<Advice
					short="If you're feeling bad, HALT. Check if you're hungry, angry, lonely, or tired."
					long="goodbye"
				></Advice>
			</div>

			<div className="page-column" id="right-column">
				<h2 className="category-title" id="school">
					School
				</h2>
				<Advice short="hello" long="goodbye"></Advice>
			</div>
		</div>
	);
}

export default App;
