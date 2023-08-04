import { BrowserRouter, Routes, Route } from "react-router-dom"
import Notes from "./Pages/Notes"
import EditNotes from "./Pages/EditNotes"
import CreateNotes from "./Pages/CreateNotes"
// import DummyNotes from "./DummyNotes";

import './App.css'

import { useState, useEffect } from "react";

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []) 
  // get the notes from local storage

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
  // set the notes to local storage

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes}/>} /> 
          <Route path="create-notes" element={<CreateNotes setNotes={setNotes} />} />
          <Route path="edit-notes/:id" element={<EditNotes notes={notes} setNotes={setNotes} />} />
        </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App