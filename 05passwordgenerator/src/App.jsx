import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (characterAllowed) str += "~!@#$%^&*()_+=";
    if (numberAllowed) str += "0123456789";

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  useEffect(() => passwordGenerator(), [length, numberAllowed, characterAllowed]);

  const passwordFieldRef = useRef(null);
  const copyPasswordToClipBoard = useCallback(() => {
    passwordFieldRef.current?.select();
    passwordFieldRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700' >
        <h1 className='text-3xl text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" className='outline-none w-full py-1 px-3'
            ref={passwordFieldRef} placeholder='password' value={password} readOnly />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipBoard}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label>Length:{length}</label>
          </div>
          <div className="flex text-sm gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} onChange={() => setNumberAllowed((prev) => !prev)} />
            <label>Numbers</label>
          </div>
          <div className="flex text-sm gap-x-1">
            <input type="checkbox" defaultChecked={characterAllowed} onChange={() => setCharacterAllowed((prev) => !prev)} />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
