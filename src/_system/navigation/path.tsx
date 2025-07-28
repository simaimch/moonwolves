import App from "src/App";
import render from "src/_system/ui/render";
import ENavigation from "./ENavigation";
import { JSX } from "react";
import NewGame from "src/pages/NewGame";

const pathKey = "path";

const navigationConfig:Record<ENavigation,JSX.Element> = {
	[ENavigation.INDEX]: <App />,
	[ENavigation.NEWGAME]: <NewGame/>,
};

export function refresh(){
	renderPath();
}


export function renderPath() {

	const path: string[] = JSON.parse(localStorage.getItem(pathKey) ?? "[]");
	const path0 = path[0] as ENavigation;

	if(navigationConfig[path0])
		render(navigationConfig[path0]);
	else
		render(navigationConfig[ENavigation.INDEX]);

}

export function updatePath(path: string[] | string) {
	if (!Array.isArray(path))
		path = [path];
	localStorage.setItem(pathKey, JSON.stringify(path));
	renderPath();
}