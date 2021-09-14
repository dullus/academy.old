import Room from "./Room"
import styles from './App.module.css'

interface Props {
    owner: string;
    id?: number;
    
}

const Flat: React.FC<Props> = ({owner}) => {

    const rooms = [
        {id: 1, name: 'Kitchen'},
        {id: 2, name: 'Livingroom'},
        {id: 3, name: 'Bedroom'},
        {id: 4, name: 'Bathroom'},
        {id: 5, name: 'Hall'}
        ]
    

    return (
    <div className={styles.flat}>
        This is {owner}'s flat
        
        <div className={styles.rooms}>
        {rooms.map((room => (
        <Room name={room.name}/>
        )))}
    </div>
    </div>);
};


export default Flat;