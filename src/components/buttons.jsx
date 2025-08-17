import React from "react";
import {
  MdDelete,
  MdOutlineEdit,
  MdOutlineEditOff,
  MdOutlineSaveAlt,
} from "react-icons/md";

export function EditButtons(props) {
  return (
    <div className="note-button">
      <button
        className="iconButton"
        onClick={() => props.onClickSave(props.id)}
      >
        <MdOutlineSaveAlt />
      </button>
      <button className="iconButton" onClick={props.onClickCancel}>
        <MdOutlineEditOff />
      </button>
    </div>
  );
}

export function ButtonsOriginalState(props) {
  return (
    <div className="note-button">
      <button
        className="iconButton"
        onClick={() => props.onClickEdit(props.note)}
      >
        <MdOutlineEdit />
      </button>
      <button
        className="iconButton"
        onClick={() => props.onClickDelete(props.note.id)}
      >
        <MdDelete />
      </button>
    </div>
  );
}
