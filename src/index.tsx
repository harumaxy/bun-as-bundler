import * as React from "react";
import { createRoot } from "react-dom/client";

function App() {
	const [spin, setSpin] = React.useState(false);
	return (
		<div>
			<h1 className={`${spin ? "animate-spin" : ""} text-rose-400`}>Hello from React</h1>
      <button className="bg-indigo-400 text-white rounded-md p-2" onClick={() => setSpin(!spin)}>Toggle Spin</button>
		</div>
	);
}

createRoot(document.getElementById("app")!).render(<App />);