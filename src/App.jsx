import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid items-center h-screen">
        <div className="bg-slate-200 flex justify-center flex-row space-x-2">
          <button className="border-2 p-2 rounded-md border-black m-2 bg-white hover:bg-green-300">
            Home
          </button>
          <button className="border-2 p-2 rounded-md border-black m-2 bg-white hover:bg-green-300">
            My Network ()
          </button>
          <button className="border-2 p-2 rounded-md border-black m-2 bg-white hover:bg-green-300">
            Jobs ()
          </button>
          <button className="border-2 p-2 rounded-md border-black m-2 bg-white hover:bg-green-300">
            Messaging ()
          </button>
          <button className="border-2 p-2 rounded-md border-black m-2 bg-white hover:bg-green-300">
            Networking ()
          </button>
          <button className="border-2 p-2 rounded-md border-black m-2 bg-white hover:bg-green-300">
            Me
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
