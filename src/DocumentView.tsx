import { For, createSignal } from "solid-js"
import Cell from "./Cell";

export default function DocumentView() {
	let [title, setTitle] = createSignal("Untitled");
	let [cells, setCells] = createSignal(["hello", "world"]);

	let updateText = (idx: number, newText: string) => {
		setCells(cells().with(idx, newText));
		console.log(newText);
	}

	return <>
		<h1>{title()}</h1>
		<For each={cells()}>{(cellText, i) => 
			<Cell text={cellText} onContentEdit={updateText.bind(null, i())} />
		}</For>
	</>
}