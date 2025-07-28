import { updatePath } from "src/_system/navigation/path";
import "./Link.css";

export default function Link(
	{
		label,
		path,
	}
	:
	{
		label: string,
		path: string|string[],
	}
) {
	return (
		<a className="Link" onClick={() => updatePath(path)}>{label}</a>
	);
}