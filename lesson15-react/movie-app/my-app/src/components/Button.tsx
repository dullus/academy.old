
interface IMyProps {
    color: string
    text: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
}
const Button = ({ color, text, onClick }: IMyProps) => {
    return (
        <button style={{ backgroundColor: color }} className='btn' onClick={onClick} >{text}  </button>
    )
}

export default Button
