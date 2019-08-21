import React, { Component } from 'react';
import styles from '../../../assets/css/Admin/AdminMainControllers/AdminMainControllers.css';

class AdminMainControllers extends Component {

    handleSwapeComponents = (event) => {
        this.props.history.push(`${this.props.match.url}/${event.currentTarget.id}`);
    }

    render() {
        return(
            <div className={styles.container}>
                <div className={styles.admin_controller_card}>
                    <button
                        id="administration"
                        onClick={this.handleSwapeComponents}
                    >
                    Administration
                    </button>
                    <div className={styles.control_fetures_container}>
                        <span>Registration</span>
                        <span>New class</span>
                        <span>Assign classes</span>
                    </div>
                </div>
                <div className={styles.admin_controller_card}>
                    <button>Upload News</button>
                    <div className={styles.control_fetures_container}>
                        <span>Important news for you</span>
                    </div>
                </div>
                <div className={styles.admin_controller_card}>
                    <button>Articles</button>
                    <div className={styles.control_fetures_container}>
                        <span>Creative works done by Students</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminMainControllers;