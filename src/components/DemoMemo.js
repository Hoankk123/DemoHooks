import React, { useMemo, useState } from "react";

function DemoMemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  // gia su thuc hien 1 phep tinh lon
  const expensiveResult = useMemo(() => {
    console.log("Dang tinh lai...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result + count;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p> Result : {expensiveResult}</p>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}

export default DemoMemo;
