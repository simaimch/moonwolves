import ENavigation from "src/_system/navigation/ENavigation";
import Link from "./Link";
import "./Navigation.css";

export default function Navigation(){
	return (
		<ul id="Navigation">
			<li><Link label={"Index"} path={ENavigation.INDEX}/></li>
			<li><Link label={"New Game"} path={ENavigation.NEWGAME} /></li>
		</ul>
	);
}