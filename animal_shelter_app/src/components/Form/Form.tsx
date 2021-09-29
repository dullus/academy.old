import React, {useState} from "react";
import styles from '../Form/Form.module.css'

interface IProps {
    addDog: any
}


const Form: React.FC<IProps> = ({addDog}) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [img, setImg] = useState('')
    const [breed, setBreed] = useState('')
    const [sex, setSex] = useState('Male')

    // const [maleIsChecked, setMaleIsChecked] = useState(true)
    // const [femaleIsChecked, setFemaleIsChecked] = useState(Boolean)

    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [color, setColor] = useState('')

  
    function handleSubmit(e) {
         e.preventDefault();
        addDog(name, age, img, breed, sex, weight, height, color)
        setName('')
        setAge('')
        setImg('')
        setBreed('')
        setWeight('')
        setHeight('')
        setColor('')        
    }

    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleChangeAge(e) {
        setAge(e.target.value)
    }

    function handleChangeImg(e) {
        setImg(e.target.value)
    }
  
    function handleChangeBreed(e) {
        setBreed(e.target.value)
    }

    function handleChangeSex(e) {
        setSex(e.target.value)  
    }

    function handleChangeWeight(e) {
        setWeight(e.target.value)
    }

    function handleChangeHeight(e) {
        setHeight(e.target.value)
    }

    function handleChangeColor(e) {
        setColor(e.target.value)
    }

    return(
        <form onSubmit={handleSubmit} id="addDogForm" className={styles.addDogForm}>
            <h2 className={styles.heading}>
                <label htmlFor="addDogForm" >
                    Add new dog
                </label>
            </h2>
            <div className={styles.form}>
                <div className={styles.column}>

               
                    <div className={styles.forminfo}>
                        <label className={styles.label} htmlFor="name">Name: </label>
                        <input
                        className={styles.box}
                        type="text"
                        autoComplete="off"
                        value={name}
                        onChange={handleChangeName}
                        />
                    </div>

                    <div className={styles.forminfo}>
                        <label className={styles.label} htmlFor="age">Age: </label>
                        <input
                        className={styles.box}
                        type="text"
                        autoComplete="off"
                        value={age}
                        onChange={handleChangeAge}
                        />
                    </div>
               
              
                    <div className={styles.forminfo}>
                        <label className={styles.label} htmlFor="img">Photo: </label>
                        <input
                        className={styles.box}
                        type="text"
                        autoComplete="off"
                        value={img}
                        onChange={handleChangeImg}
                        />
                    </div>
                
                    <div className={styles.forminfo}>
                        <label className={styles.label} htmlFor="breed">Breed: </label>
                        <input
                        className={styles.box}
                        type="text"
                        autoComplete="off"
                        value={breed}
                        onChange={handleChangeBreed}
                        />
                    </div>
                    </div>

                <div className={styles.column}>
                    <div className={styles.forminfoRButtons}>
                        
                        <label className={styles.label} htmlFor="sex">Sex: </label>
                           <div className={styles.radioWrapper}>
                                <div className={styles.labelInputWrapper}>
                                    <label className={styles.sexLabel} htmlFor="male">Male: </label>
                                    <input
                                    className={styles.rButton}
                                    type="radio"
                                    id="male"
                                    value="Male"
                                    name="sex"
                                    // checked={maleIsChecked}
                                    onChange={handleChangeSex}
                                    />
                                </div>

                                <div className={styles.labelInputWrapper}>
                                    <label className={styles.sexLabel} htmlFor="female">Female: </label>
                                    <input
                                    className={styles.rButton}
                                    type="radio"
                                    id="female"
                                    name="sex"
                                    value="Female"
                                    // checked={femaleIsChecked}
                                    onChange={handleChangeSex}
                                    />
                                </div>
                            </div>
                    </div>

                    <div className={styles.forminfo}>
                        <label className={styles.label} htmlFor="weight">Weight: </label>
                        <input
                        className={styles.box}
                        type="text"
                        autoComplete="off"
                        value={weight}
                        onChange={handleChangeWeight}
                        />
                    </div>
            
                
                    <div className={styles.forminfo}>
                        <label className={styles.label} htmlFor="height">Height: </label>
                        <input
                        className={styles.box}
                        type="text"
                        autoComplete="off"
                        value={height}
                        onChange={handleChangeHeight}
                        />
                    </div>

                    <div className={styles.forminfo}>
                        <label className={styles.label} htmlFor="color">Color: </label>
                        <input
                        className={styles.box}
                        type="text"
                        autoComplete="off"
                        value={color}
                        onChange={handleChangeColor}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.submitButton}>
            Add
            </button>
            </div>
      </form>
      

    );
}

export default Form;