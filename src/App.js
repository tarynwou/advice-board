import Advice from "./components/Advice.jsx";
import Taryn from "./images/taryn.png";
import "./App.css";

function App() {
	return (
		<div className="main">
			<div className="page-top">
				<div className="page-column" id="left-top-column">
					<img
						src={Taryn}
						alt="cartoon character"
						className="taryn"
					></img>
				</div>
				<div className="page-column" id="right-top-column">
					<h1 id="title">Grains of Salt</h1>
					<p id="subtitle">
						A compilation of advice I have received from
						good-natured people.
					</p>
				</div>
			</div>
			<br></br>

			<div className="page-column" id="left-column">
				<h2 className="category-title" id="lifestyle">
					Lifestyle
				</h2>
				<Advice
					short="If you're feeling bad, HALT. Check if you're hungry, angry, lonely, or tired."
					long="[filler] inside content"
					id=""
				></Advice>
				<Advice
					short="Advice #"
					long="[filler] inside content"
					id=""
				></Advice>
				<Advice
					short="Advice #"
					long="[filler] inside content"
					id=""
				></Advice>
				<Advice
					short="Advice #"
					long="[filler] inside content"
					id=""
				></Advice>
				<Advice
					short="Advice #"
					long="[filler] inside content"
					id=""
				></Advice>
				<Advice
					short="Advice #"
					long="[filler] inside content"
					id=""
				></Advice>
				<Advice
					short="Advice #"
					long="[filler] inside content"
					id=""
				></Advice>
			</div>

			<div className="page-column" id="right-column">
				<h2 className="category-title" id="school">
					School
				</h2>
				<Advice
					short="Advice #"
					long="[filler] inside content"
					id=""
				></Advice>
				<Advice
					short="Advice #"
					long="[filler] inside content"
					id=""
				></Advice>
				<Advice
					short="Advice #"
					long="[filler] inside content"
					id=""
				></Advice>
				<h2 className="category-title" id="work">
					Work
				</h2>
				<Advice
					short="Make time for documentation."
					long="[filler] inside content"
					id=""
				></Advice>
				<Advice
					short="Be a friendly, approachable, and helpful coworker."
					long="[filler] inside content"
					id=""
				></Advice>
				<Advice
					short="Advice #"
					long="[filler] inside content"
					id=""
				></Advice>
			</div>
		</div>
	);
}

export default App;
