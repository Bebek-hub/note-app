import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import NoteItem from "../components/NoteItem"; 
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    setFilteredNotes(
      // eslint-disable-next-line array-callback-return
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };

  useEffect(handleSearch, [notes, text]);

  return (
    <section>
      <header className="notes_header">
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && (
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
            autoFocus
            placeholder="Keyword..."
          />
        )}
        <button type="submit"
          onClick={() => {
            setShowSearch((prevState) => !prevState);
          }}
          className="btn"
        >
          {showSearch ? <MdClose /> : <CiSearch />}
        </button>
      </header>

      <div className="notes_container">
        {filteredNotes.length === 0 && (
          <p className="empty_note">No notes found</p>
        )}
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>

      <Link to={"/create-notes/"} className="btn btn__add">
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;
