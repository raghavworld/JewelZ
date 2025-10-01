import { useMemo, useState } from "react";
import { Button, Text, TextField } from "@radix-ui/themes";
const MemoDemo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(1);

  //! IT IS USED FR VALUES/NUMBERS => useMemo() only runs when there is achange in dependecy and also save a additonal re-render which useEffect does'nt save
  const calculateSum = useMemo(() => {
    let sum = 0;
    for (let i = 1; i <= input; i++) {
      sum += i;
    }
    return sum;
  }, [input]);

  return (
    <div>
      
      <input
        className="border-2 "
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <h3 className="border-teal-100 text-lg ">{calculateSum}</h3>

      {/* <Button className="m-5" onClick={() => setSum(0)}>
        Reset Sum
      </Button> */}

      <div className="gap-5">
        <Button onClick={() => setCount((prev) => prev + 1)}>{count}</Button>
      </div>
    </div>
  );
};

export default MemoDemo;
