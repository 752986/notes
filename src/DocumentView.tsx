import { For, Index, createSignal } from "solid-js"
import { createStore } from "solid-js/store"
import Cell from "./Cell";

interface CellData {
	text: string
}

export default function DocumentView() {
	const [title, setTitle] = createSignal("Untitled");
	const [cells, setCells] = createStore([{ text: "hello" }, { text: "world"}]);

	const updateText = (idx: number, newText: string) => {
		setCells(cells.with(idx, { text: newText }));
		// console.log(newText);
	}

	return <>
		<h1>{title()}</h1>
		<For each={cells}>{(cellText, i) => 
			<Cell text={cellText.text} onContentEdit={updateText.bind(null, i())} />
		}</For>
	</>
}