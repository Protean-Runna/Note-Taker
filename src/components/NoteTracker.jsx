import React, { useState, useEffect } from "react";
import {
  MdDelete,
  MdOutlineEdit,
  MdOutlineEditOff,
  MdOutlineSaveAlt,
} from "react-icons/md";
import { NoteMaker, NoteEditor } from "./NoteMaker";
import NoteCard from "./NoteCard";

export default function NoteTracker() {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("react-notes-app-data");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  const [newTitle, setNewTitle] = useState("");
  const [newNote, setNewNote] = useState("");
  const [editingNote, setEditingNote] = useState(null);
  const NoteCharLimit = 260;
  const NoteTitleLimit = 60;

  // Persist notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  // Style objects
  const containerStyle = {
    paddingRight: "20px",
    paddingLeft: "20px",
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: "1400px",
  };
  const noteCreateStyle = { marginBottom: "2rem" };
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(350px,100%), 1fr)) ",
    gap: "1rem",
  };
  const addButtonStyle = {
    marginLeft: "10px",
    marginTop: "10px",
    padding: "15px",
    fontSize: "20px",
  };

  // Adds a new note if there's content
  const addNote = () => {
    if (newNote.trim()) {
      const note = {
        id: notes.length ? notes[notes.length - 1].id + 1 : 1,
        title: newTitle,
        text: newNote,
      };
      setNotes((prevNotes) => [...prevNotes, note]);
      setNewTitle("");
      setNewNote("");
    }
  };

  // Deletes a note by filtering it out of the notes list
  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  // Starts editing by storing the selected note data
  const startEditing = (note) => {
    setEditingNote(note);
  };

  // Saves the updated note
  const updateNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? editingNote : note))
    );
    setEditingNote(null);
  };

  // Cancels editing mode
  const cancelEditing = () => setEditingNote(null);

  return (
    <div style={containerStyle}>
      <NoteMaker
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newNote={newNote}
        setNewNote={setNewNote}
        CharLimit={NoteCharLimit}
        TitleLimit={NoteTitleLimit}
        noteCreateStyle={noteCreateStyle}
        addButtonStyle={addButtonStyle}
        addNote={addNote}
      />

      {notes.length > 0 ? (
        <div style={gridStyle}>
          {notes.map((note) => (
            <div className="noteCardStyle" key={note.id}>
              {editingNote && editingNote.id === note.id ? (
                <NoteEditor
                  editingNote={editingNote}
                  setEditingNote={setEditingNote}
                  EditCharLimit={NoteCharLimit}
                  EditTitleLimit={NoteTitleLimit}
                />
              ) : (
                <NoteCard title={note.title} content={note.text} />
              )}

              {editingNote && editingNote.id === note.id ? (
                <>
                  <div className="note-button">
                    <button
                      className="iconButton"
                      onClick={() => updateNote(note.id)}
                    >
                      <MdOutlineSaveAlt />
                    </button>
                    <button className="iconButton" onClick={cancelEditing}>
                      <MdOutlineEditOff />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="note-button">
                    <button
                      className="iconButton"
                      onClick={() => startEditing(note)}
                    >
                      <MdOutlineEdit />
                    </button>
                    <button
                      className="iconButton"
                      onClick={() => deleteNote(note.id)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p style={{ fontWeight: "bold", fontSize: "2rem" }}>
          Hey there's no notes yet! Give it a shot!
        </p>
      )}
    </div>
  );
}
