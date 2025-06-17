/* eslint-disable no-unused-vars */
import { useState, useCallback } from 'react';


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if(numberAllowed) str += "/[]{}@!#$%&";

    for(let i=1; i<= array.length; i++){
      let char = Math.floor(Math.random() * str.length + 1)

      pass = str.charAt(char);
    }
    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-4 text-orange-500 bg-gray-800 text-orange-500'>
        <h1 className="text-white text-centre my-3 ">Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outlin-none w-full py-1 px-3'
          placeholder='password'
          readOnly
            />
        </div>
      </div>
    </>
  )
}

export default App
