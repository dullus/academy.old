import React from 'react'

import styles from '../DogInfoButton/DogInfoButton.module.css'

interface IProps {
    showDogInfo: () => void
}

// interface IState {
  
// }

const DogInfoButton: React.FC<IProps> = ({showDogInfo}) => {





    return (
        <div>
        <button className={styles.moreInfoButton} onClick={showDogInfo}>
            See more information
        </button>
        </div>
    );
}

export default DogInfoButton;