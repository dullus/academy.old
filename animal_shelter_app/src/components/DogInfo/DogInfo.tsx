import React from 'react'
import styles from '../DogInfo/DogInfo.module.css'

interface IProps {
    adult: boolean;
    id: number;
    name: string;
    age: number;
    img: string;
    breed: string;
    sex: string;
    weight: number;
    height: number;
    color: string;
}

const DogInfo: React.FC<IProps> = ({id, name, img, sex, age, adult, breed, weight, height, color}) => {


    return (
        <div className={styles.dogInfo}>
            <div className={styles.row}>
                <p className={styles.key}>Name: </p>
                <p className={styles.value}>{name}</p>
            </div>
            <div className={styles.row}>
                <p className={styles.key}>Age: </p>
                <p className={styles.value}>{age} years</p>
            </div>
            <div className={styles.row}>
                <p className={styles.key}>Breed: </p>
                <p className={styles.value}>{breed}</p>
            </div>
            <div className={styles.row}>
                <p className={styles.key}>Sex: </p>
                <p className={styles.value}>{sex}</p>
            </div>
            <div className={styles.row}>
                <p className={styles.key}>Weight: </p>
                <p className={styles.value}>{weight} kg</p>
            </div>
            <div className={styles.row}>
                <p className={styles.key}>Height: </p>
                <p className={styles.value}>{height} cm</p>
            </div>
            <div className={styles.row}>
                <p className={styles.key}>Color: </p>
                <p className={styles.value}>{color}</p>
            </div>
        </div>
    );
}

export default DogInfo;