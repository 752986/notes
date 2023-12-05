export default function Cell(props: {
	text: string,
	onContentEdit: (newContent: string) => void
}) {
	return <div 
		contentEditable={true} 
		style="
			border: 1px solid black; 
			border-radius: 3px; 
			margin: 8px 0px; 
			padding: 8px;
		"
		onInput={(e) => props.onContentEdit(e.currentTarget.innerText!)}
	>
		{props.text}
	</div>
}