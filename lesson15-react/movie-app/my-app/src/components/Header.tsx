
import Button from './Button';

interface IMyProps {
    title: string
    buttonTogle: React.MouseEventHandler<HTMLButtonElement>
    showInputs: boolean
}

const Header = ({ title, buttonTogle, showInputs }: IMyProps) => {

    return (
        <div>
            <header className='header'>
                <h1>{title}</h1>
                <Button color={showInputs ? 'red' : 'green'} text={showInputs ? 'Close' : 'Add'} onClick={buttonTogle}></Button>
            </header>
        </div>
    )
}


export default Header
