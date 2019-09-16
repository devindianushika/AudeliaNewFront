import React from 'react';
import Logo from '../../assets/Logo/Logo.png';
import styles from './NavigationBarLogin.css';

const NavigationBarLogin = () => {
    return (
        <div>
            <header className={styles.header}>
               <div className={styles.header_items}>
                    <div className={styles.logo_container}>
                      <img src={Logo} alt="logo" className={styles.logo}/>
                      <h2 className={styles.logo_name}>Audelia</h2>  
                    </div>
                    <h4 className={styles.not_loggedIn_head}>Your are not logged in</h4>
               </div>
            </header>
        </div>
    )
}

export default NavigationBarLogin;