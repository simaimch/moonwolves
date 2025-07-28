import { refresh } from "src/_system/navigation/path";
import Game from "src/game/Game";
import Navigation from "src/navigation/Navigation"

export default function NewGame(){

	var pageContent = <></>;

	const gameData = localStorage.getItem("game");
	if(!gameData){
		function createNewGame(){
			const game = new Game(null);
			localStorage.setItem("game", JSON.stringify(game));
		}
		pageContent = <button onClick={()=>{createNewGame(); refresh();}}>Start new game</button>;
	}
	else{
		const game:Game = new Game(gameData);
		console.log(game);
	}

	return(
		<div id="NewGame">
			<Navigation/>
			<h2>New Game</h2>
			{pageContent}
		</div>
	);
}