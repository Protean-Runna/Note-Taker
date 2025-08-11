// This somehow works for now...
export function NoteMaker(props) {
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

// Inputs for editing the note within the note card
export function NoteEditor(props) {
  return (
    <div>
      <input
        type="text"
        value={props.editingNote.title}
        onChange={(e) =>
          props.setEditingNote((prev) => ({ ...prev, title: e.target.value }))
        }
        maxLength={props.EditTitleLimit}
        placeholder="Edit title..."
      />
      <textarea
        value={props.editingNote.text}
        onChange={(e) =>
          props.setEditingNote((prev) => ({ ...prev, text: e.target.value }))
        }
        maxLength={props.EditCharLimit}
        placeholder="Edit your content..."
      />
      <p>
        Characters left: {props.EditCharLimit - props.editingNote.text.length}
      </p>
    </div>
  );
}
