import React from "react";
import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  return (
    <Link to={`/edit-notes/${note.id}`} className="note">
      <h4 className="note_head">
        {note.title.length > 15 ? note.title.substr(0, 15) + "..." : note.title}
      </h4>
      <p className="note_details">{note.details.length > 25 ? note.details.substr(0, 25) + "..." : note.details}</p>
      <p className="note_date">{note.date}</p>
    </Link>
  );
};

export default NoteItem;
