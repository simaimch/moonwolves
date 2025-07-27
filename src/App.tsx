import render from "src";
import "./main.css";

function App(){
	const name = "Secret Moonwolves";
	return (
		<div>
			<h1 onClick={()=>{render(<h2>Clicked</h2>)}}>{name}</h1>
		</div>
	)
};

export default App;
 