import React from 'react'
import styles from '../Dog/Dog.module.css'

interface IProps {
    name: string;
    id: number;
    img: string;
}


const Dog: React.FC<IProps> = ({ name, img }) => {

    return(
        <div>
            <p className={styles.dogName}>{name}</p>
            <div className={styles.imageWrapper}>
                <img className={styles.image} src={img} alt={name} />
            </div>
        </div>
    );
}

export default Dog;