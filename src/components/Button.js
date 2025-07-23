// src/components/Button.js
function Button({ text, onClick}) {
    return (
        <button onClick={onClick} className="btn-reserva">
            {text}
        </button>
    )
}
export default Button;