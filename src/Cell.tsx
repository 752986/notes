import "./cell.css"

export default function Cell(props: {
	text: string,
	onContentEdit: (newContent: string) => void
}) {
	return <input 
		class="cell"
		value={props.text}
		onInput={(e) => props.onContentEdit(e.currentTarget.value!)}
	></input>
}