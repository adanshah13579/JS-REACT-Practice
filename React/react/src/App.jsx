import React, { useEffect, useState } from 'react';

function Counter() {
  const [text, settext] = useState("");
  const[list,setlist]=useState([])

  const handleadd=()=>{

    if(text.trim()!=""){

      setlist([...list,{text:text, completed:true}])
      
      settext("")
    }

  }

  const handlecom=(index)=>{

    const newset=[...list]
    newset[index].completed= !newset[index].completed
    setlist(newset);
  }

  const handledel=(index)=>{
    const del=[...list]
    del.splice(index,1)

    setlist(del)

  }
 
  useEffect(()=>{list},[list])


  return (
    <div>
      <div> <h1>TODO APP</h1></div>

      <div><input type='text'  placeholder="Enter a task" value={text} onChange={(e)=>settext(e.target.value)}></input>
      
      <button onClick={handleadd}>ADD</button>
       </div>

       <div>
        <ul>
          {list.map((list,index)=>(<li key={index}>

             
            {list.text}
            <button onClick={()=>handlecom(index)}>{list.completed?'notcompleted':'completed'}</button>
            <button onClick={()=>handledel(index)}>
              DELETE
            </button>
          </li>))}
        </ul>
       </div>
      
      
    </div>
  );
}

export default Counter