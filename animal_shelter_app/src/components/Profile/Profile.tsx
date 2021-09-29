import styles from './Profile.module.css'
import React, { useContext, useState } from 'react'
import Dog from '../Dog/Dog'
import DogInfoButton from '../DogInfoButton/DogInfoButton'
import DogInfo from '../DogInfo/DogInfo'
import {MyContext} from "../../App"

interface IProps {
     id: number;
}

interface IState {
    clicked: boolean;
    handleOnClick: () => void
    filteredData?: []
}

const Profile: React.FC<IProps> = ({ id }) => {

    const [clicked, handleOnClick] = useState(false);

    const dog = useContext(MyContext).find(item => item.id === id)

    const showDogInfo = () => {clicked ? handleOnClick(false) : handleOnClick(true)}

    let a:any;
    if (dog?.sex === "Male") {
        a = styles.maleProfile
    } else if (dog?.sex === "Female") {
        a = styles.femaleProfile
    } 

    return(
<>
     {dog && <div className={a}> 
    <p className={styles.dogId}>Dog ID: {id}</p>
            <Dog key={id} id={id} name={dog.name} img={dog.img}/>
            <DogInfoButton showDogInfo={showDogInfo} />
            {clicked && <DogInfo age={dog.age} id={id} name={dog.name} img={dog.img} sex={dog.sex} breed={dog.breed} weight={dog.weight} height={dog.height} color={dog.color}/>}
    </div>}
</>
    );
};

export default Profile;