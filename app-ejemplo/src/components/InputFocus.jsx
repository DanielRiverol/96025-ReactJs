import { useState, useRef } from "react";

function InputFocus() {
  const [text, setText] = useState("");
  const inputRef = useRef();

  const handleClick = () => {
    const input = inputRef.current;
    input.focus()
  };
  return (
    <div className='py-5'>
      <input
        // id='input'
        ref={inputRef}
        className='input'
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className='btn btn-success' onClick={handleClick}>
        FOCUS
      </button>
    </div>
  );
}

export default InputFocus;
