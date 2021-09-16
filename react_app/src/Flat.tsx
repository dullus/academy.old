import Room from "./Room"
import styles from './App.module.css'

interface Props {
    owner: string;
    id?: number;
    
}

const Flat: React.FC<Props> = ({owner}) => {

    const rooms = [
        {id: 1, name: 'Kitchen', hasSofa: false},
        {id: 2, name: 'Livingroom', hasSofa: true},
        {id: 3, name: 'Bedroom', hasSofa: false},
        {id: 4, name: 'Bathroom', hasSofa: false},
        {id: 5, name: 'Hall', hasSofa: false}
        ]
    

    return (
    <div className={styles.flat}>
        This is {owner}'s flat
        
        <div className={styles.rooms}>
        {rooms.map((room => (
        <Room name={room.name} hasSofa={room.hasSofa}/>
        )))}
    </div>
    </div>);
};


export default Flat;