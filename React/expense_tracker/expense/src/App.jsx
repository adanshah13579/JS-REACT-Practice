import { useState } from "react";

function App() {
  const [des, setdes] = useState("");
  const [uamount, setuamount] = useState("");
  const [type, settype] = useState("");
  const [trans, settrans] = useState([]);

  // Calculate income and expense using correct type checking
  const income = trans
    .filter((t) => t.type === "income") // Change 'income' to string "income"
    .reduce((acc, cur) => acc + parseFloat(cur.amount || 0), 0); // Handle undefined amounts

  const expense = trans
    .filter((t) => t.type === "expense") // Change 'expense' to string "expense"
    .reduce((acc, cur) => acc + parseFloat(cur.amount || 0), 0); // Handle undefined amounts

  const balance = income - expense;

  const handleadd = () => {
    if (des && uamount && type) { // Check that all fields are filled out
      const ntran = { des, amount: parseFloat(uamount), type };
      settrans([...trans, ntran]);
      setdes("");
      settype("");
      setuamount("");
    }
  };

  return (
    <div>
      <div>
        <h1>EXPENSE TRACKER</h1>

        <input
          type="text"
          placeholder="description"
          value={des}
          onChange={(e) => setdes(e.target.value)}
        />
        <input
          type="number"
          placeholder="enter used amount"
          value={uamount}
          onChange={(e) => setuamount(e.target.value)}
        />
        <select value={type} onChange={(e) => settype(e.target.value)}>
          <option value="">Select type</option>
          <option value="expense">expense</option>
          <option value="income">income</option>
        </select>
        <button onClick={handleadd}>ADD</button>
      </div>

      <div>
        {trans.map((t, index) => (
          <div key={index}>
            {t.des} {t.amount} {t.type}
          </div>
        ))}
      </div>

      <div>
        <div>
          <h1>EXPENSE TRACK</h1>
        </div>
        <div>
          <h1>Balance: {balance}</h1>
        </div>
        <div>
          <h1>Income: {income}</h1>
          <h1>Expense: {expense}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
