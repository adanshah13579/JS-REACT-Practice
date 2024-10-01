import { useState } from "react";

function App() {
  const [note, setnote] = useState("");
  const [notes, setnotes] = useState([]);

  const handlenote = () => {
    if (note.trim() != "") {
      setnotes([...notes, note]);
      setnote("");
    }
  };

  const handeldel=(ii)=>{

    
    setnotes(notes.filter((_,i)=>i!=ii))

  }

  return (
    <div>
      <div>
        <h1>NOTES APP</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="add note"
          value={note}
          onChange={(e) => setnote(e.target.value)}
        />
        <button onClick={handlenote}>ADD</button>
      </div>
      <div>
        {notes.length === 0 && <p>ADD note </p>}
        {notes.map((n,i)=><ul key={i}>
          <li>{n}</li>
          <button onClick={()=>handeldel(i)}>DEL</button>
        </ul>)}
      </div>
    </div>
  );
}
export default App;
