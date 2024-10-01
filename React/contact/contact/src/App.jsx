import { useState } from "react";

function App() {
  const [newcontact, setnewcontact] = useState({ name: "", phone: "" });
  const [eindex, seteindex] = useState(-1);
  const [list, setlist] = useState([]);

  const handleadd = () => {
    if ((eindex === -1)) {
      setlist([...list, newcontact]);
    } else{
      const updatedContacts = list.map((contact, index) =>
        index === eindex ? newcontact : contact
      );
      setlist(updatedContacts);
      seteindex(-1)
    }
    setnewcontact({ name: "", phone: "" })
  };

  const handleedit=(i)=>{

    setnewcontact(list[i])
    seteindex(i)

  }

  const handeldel=(ii)=>{

    const update=list.filter((_,i)=>i!==ii)
 setlist(update)



  }
  return (
    <div>
      <div>
        <h1>MANAGE CONTACTS</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="name"
          value={newcontact.name}
          onChange={(e) =>
            setnewcontact({ ...newcontact, name: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="phone number"
          value={newcontact.phone}
          onChange={(e) =>
            setnewcontact({ ...newcontact, phone: e.target.value })
          }
        />

        <button onClick={handleadd}>{eindex === -1 ? "ADD" : "update"}</button>
      </div>

      <div>
        {list.map((l, i) => (
          <div>
            {l.name}
            {l.phone}
            <button onClick={()=>handleedit(i)}>edit</button>
            <button onClick={()=>handeldel(i)}>del</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
