function Button({ text, estilo, type, onClick}) {
  return (
    <button className={estilo ?? "btn"} type={type ?? "button"} onClick={onClick}>
      {text ?? "text default"}
    </button>
  );
}

export default Button;
