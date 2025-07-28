
import "./main.css";
import Navigation from "./navigation/Navigation";

function App(){
	const name = "Secret Moonwolves";
	return (
		<div>
			<Navigation/>
			<h1>{name}</h1>
		</div>
	)
};

export default App;
 