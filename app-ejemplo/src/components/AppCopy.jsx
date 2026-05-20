import { useState, useRef } from "react";

function AppCopy() {
  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const inputRef = useRef();

  const handleCopy = () => {
    const input = inputRef.current;
    input.select();
    document.execCommand("copy");
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <div className='py-5 flex gap-3 items-center'>
      <input
        className='input'
        ref={inputRef}
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className='btn btn-info' onClick={handleCopy}>
        {isCopied ? "Copiado" : "Copiar"}
      </button>
    </div>
  );
}

export default AppCopy;
