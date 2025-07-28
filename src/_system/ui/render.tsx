import { JSX, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.querySelector('#root');
if (!rootElement) throw new Error("Failed to find the root element");

const root = createRoot(rootElement);

function render(element: JSX.Element) {
	root.render(
		<StrictMode>
		{ element }
		</StrictMode>
	);
}
export default render;