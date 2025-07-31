
// This somehow works for now...
export default function NoteMaker(props) {
  return (
    <div className="note-create" style={props.noteCreateStyle}>
      <input
        type="text"
        placeholder="Title..."
        value={props.newTitle}
        maxLength={props.TitleLimit}
        onChange={(e) => props.setNewTitle(e.target.value)}
      />
      <textarea
        placeholder="Type your note content here..."
        value={props.newNote}
        rows={3}
        maxLength={props.CharLimit}
        onChange={(e) => props.setNewNote(e.target.value)}
      />
      <p>Characters left: {props.CharLimit - props.newNote.length}</p>
      <button onClick={props.addNote} style={props.addButtonStyle}>
        Add Note
      </button>
    </div>
  );
}