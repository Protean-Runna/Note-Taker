export default function NoteMaker(props) {
  return (
    <div className="note-create" style={props.noteCreateStyle}>
      <input
        type="text"
        placeholder="Title..."
        value={props.newTitle}
        maxLength={props.NoteTitleLimit}
        onChange={(e) => props.setNewTitle(e.target.value)}
      />
      <textarea
        placeholder="Type your note content here..."
        value={props.newNote}
        rows={3}
        maxLength={props.NoteCharLimit}
        onChange={(e) => props.setNewNote(e.target.value)}
      />
      <p>Characters left: {props.NoteCharLimit - props.newNote.length}</p>
      <button onClick={props.addNote} style={props.addButtonStyle}>
        Add Note
      </button>
    </div>
  );
}