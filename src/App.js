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

			<div className="page-column" id="left-column">
				<h2 className="category-title" id="lifestyle">
					Lifestyle
				</h2>

				<Advice
					short="Surround yourself with people who inspire you to grow."
					long="[filler] inside content"
					id=""
				></Advice>
				<Advice
					short="Make time for reflection."
					long="[filler] inside content"
					id=""
				></Advice>
				<Advice
					short="If you don’t write it down, you’re gonna forget it."
					long="[filler] inside content"
					id=""
				></Advice>
				<Advice
					short="If you're feeling bad, HALT. Check if you're hungry, angry, lonely, or tired."
					long="[filler] inside content"
					id=""
				></Advice>
				<Advice
					short="If you’re gonna not do something, commit to the break."
					long="[filler] inside content"
					id=""
				></Advice>
				<Advice
					short="You can grow out of things."
					long="[filler] inside content"
					id=""
				></Advice>
			</div>

			<div className="page-column" id="right-column">
				<h2 className="category-title" id="school">
					School
				</h2>
				<Advice
					short="School is not just for studies."
					long="[filler] inside content"
					id=""
				></Advice>
				<Advice
					short="Spend time getting to know the teachers and professors you like."
					long="[filler] inside content"
					id=""
				></Advice>
				<h2 className="category-title" id="work">
					Work
				</h2>

				<Advice
					short="Be a friendly, approachable, and helpful coworker."
					long="[filler] inside content"
					id=""
				></Advice>
				<Advice
					short="Ask to jump in on projects you want to work on."
					long="[filler] inside content"
					id=""
				></Advice>
				<Advice
					short="Make time for documentation."
					long="[filler] inside content"
					id=""
				></Advice>
			</div>
		</div>
	);
}

export default App;
