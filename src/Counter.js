import { useState } from "react";


function Counter()
{
    const [counter,setCount] = useState(0)
    const IncrementFunction = (prev)=>{
        setCount((prev)=> prev + 1)
    }
    const DecrementFunction = (prev)=>{
        setCount((prev)=> prev - 1)
    }
    return (
        <div className="flex items-center gap-10 text-center">
          <div><button data-testid="decre" onClick={DecrementFunction}>-</button></div>
          <div><h1 data-testid="count">{counter}</h1></div>
          <div><button data-testid="incre" onClick={IncrementFunction}>+</button></div>
        </div>
      );
      
}

export default Counter;