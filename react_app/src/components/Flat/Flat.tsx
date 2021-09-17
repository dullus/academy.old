import Room from "../Room/Room"
import styles from './Flat.module.css'
import roomStyles from '../Room/Room.module.css'

interface Props {
    owner: string;
    id?: number;
    
}

const Flat: React.FC<Props> = ({owner}) => {

    const rooms = [
        {id: 1, name: 'Kitchen', hasSofa: false, hasAirConditioning: false},
        {id: 2, name: 'Livingroom', hasSofa: true, hasAirConditioning: true},
        {id: 3, name: 'Bedroom', hasSofa: false, hasAirConditioning: true},
        {id: 4, name: 'Bathroom', hasSofa: false, hasAirConditioning: false},
        {id: 5, name: 'Hall', hasSofa: false, hasAirConditioning: false}
        ]
    

    return (
    <div className={styles.flat}>
        <h1>This is {owner}'s flat</h1>
        
        <div className={roomStyles.rooms}>
        {rooms.map((room => (
        <Room name={room.name} hasSofa={room.hasSofa} hasAirConditioning={room.hasAirConditioning}/>
        )))}
    </div>
    </div>);
};


export default Flat;