import "./cell.css"

export default function Cell(props: {
	text: string,
	idx: number,
	onContentEdit: (idx: number, newContent: string) => void
	removeCell: (idx: number) => void
}) {
	return <>
		<button onClick={props.removeCell.bind(null, props.idx)}>X</button>
		<input 
			class="cell"
			value={props.text}
			onInput={(e) => props.onContentEdit(props.idx, e.currentTarget.value!)}
		></input>
	</>
}