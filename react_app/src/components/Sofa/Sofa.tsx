import styles from './Sofa.module.css'

interface IProps {
    brand: string;
    color: string;
    width: number;
    height: number;
    depth: number;
    material: string;
    shape: string;
}

const Sofa: React.FC<IProps> = ({brand, color, width, height, depth, material, shape}) => {

    return (
    <div> 
    <p>{color} sofa</p>
    </div>);
};

export default Sofa;