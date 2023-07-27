import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import {v4 as uuid} from 'uuid'
import SetDate from "../components/SetDate"

const CreateNotes = ({setNotes}) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = SetDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && details) {
        const note = {id: uuid(), title, details, date}

        // add to note array
        setNotes(prevNotes => [note, ...prevNotes])

        // Redirect to home page
        navigate('/')
    }
  };

  return (
    <section>
      <header className="create-notes__header">
        <Link to={"/"} className="btn">
          <IoIosArrowBack />
        </Link>
        <button onClick={handleSubmit} className="btn btn_save">Save</button>
      </header>

      <form className="create-note__form" onSubmit={handleSubmit}>
        <input
          type="text"
          autoFocus
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="25"
          placeholder="Note details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNotes;
