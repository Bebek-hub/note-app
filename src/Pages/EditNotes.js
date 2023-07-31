import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import setDate from "../components/SetDate";

const EditNotes = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = setDate();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    if (title && details) {
      const newNote = { ...note, title, details, date };

      const newNotes = notes.map((item) => {
        if (item.id === id) {
          item = newNote;
        }
        return item;
      });
      setNotes(newNotes);
    }

    // redirect to home page
    navigate("/");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      const noteDelete = notes.filter((item) => item.id !== id);

      setNotes(noteDelete);
    }
    navigate("/");
  };

  return (
    <section>
      <header className="create-notes__header">
        <Link to={"/"} className="btn">
          <IoIosArrowBack />
        </Link>

        <button onClick={handleForm} className="btn btn_save">
          Save
        </button>

        <button onClick={handleDelete} className="btn btn_delete">
          <RiDeleteBin6Line />
        </button>
      </header>

      <form className="create-note__form" onSubmit={handleForm}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
          placeholder="Title"
        />

        <textarea
          rows="25"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Note details..."
        ></textarea>
      </form>
    </section>
  );
};

export default EditNotes;
