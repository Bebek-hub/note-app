import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import {RiDeleteBin6Line} from "react-icons/ri"

const EditNotes = ({notes, setNotes}) => {
    const {id} = useParams()
    console.log(id)
     
  return (
    <section>
      <header className="create-notes__header">
        <Link to={"/"} className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn btn_save">Save</button>
        <button className="btn btn_delete"><RiDeleteBin6Line /></button>
      </header>

      <form className="create-note__form">
        <input type="text" autoFocus placeholder="Title"/>
        <textarea rows="25" placeholder="Note details..."></textarea>
      </form>
    </section>
  );
};

export default EditNotes;
