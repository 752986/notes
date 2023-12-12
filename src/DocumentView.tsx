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
		setCells(idx, "text", newText);
		// console.log(`[${idx}] ${newText}`);
	}

	const removeCell = (idx: number) => {
		setCells(cells.filter((_, i) => i != idx));
	}

	return <>
		<h1>{title()}</h1>
		<For each={cells}>{(cellText, i) => 
			<Cell text={cellText.text} idx={i()} onContentEdit={updateText} removeCell={removeCell} />
		}</For>
		<button onClick={(e) => setCells(cells.concat({ text: "" }))}>Add Cell</button>
	</>
}