import React, { Component } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import styles from '../../../assets/css/Admin/RouterComponent/RouterComponent.css';

class RouterComponent extends Component {
    state = {
        url: []
    }
    componentDidUpdate() {
        console.log(this.props.path);
        this.setState(preveState => {
            return {
                url: preveState.url.concat(this.props.path)
            }
        })
            
        console.log("Path: " + this.state.url)
    }
    render() {
        return(
            <div className={styles.container}>
                <button className={styles.router_button}>
                    <span>Home</span>
                    <div><IoIosArrowForward size="1.5em"/></div>
                </button>
                <button className={styles.router_button}>
                    <span>Admin</span>
                    <div><IoIosArrowForward size="1.5em"/></div>
                </button>
            
            </div>
        )
    }
}

export default RouterComponent;