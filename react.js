import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>

      <h1>you click {count} times </h1>
      <button onClick={()=>setCount(count+1)} >CLick  </button>
    </div>
  );
}

export default Counter