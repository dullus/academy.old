import Sofa from './Sofa'
import Light from './Light'
import styles from './App.module.css'
import Heater from './Heater';

interface Props {
    name: string;
    id?: number;
    
}

const Room: React.FC<Props> = ({name, id}) => {

    const sofa = 
        {
        brand: 'MSJ',
        color: 'Turquoise',
        width: 0.9,
        height: 0.9,
        depth: 1,
        material: 'leather',
        shape: 'L'
    }

    const light = {power: 60}
    const heater = {power: 1500, heatingCapacity: 1000}

    return (
    <div className={styles.room}>
        {name}
        {id}
        <Sofa brand={sofa.brand} color={sofa.color} width={sofa.width} height={sofa.height} depth={sofa.depth} material={sofa.material} shape={sofa.shape}/>
        <Light power={light.power}/>
        <Heater power={heater.power} heatingCapacity={heater.heatingCapacity}/>
    </div>);


};


export default Room;