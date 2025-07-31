
// These components are stacked....
export default function NoteEditor(props) {

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