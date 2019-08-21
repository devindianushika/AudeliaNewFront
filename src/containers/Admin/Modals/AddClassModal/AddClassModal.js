import React, { Component } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import modalStyles from '../../../../assets/css/Admin/Modals/AddClassModal/AddClassModal.css';

class AddClassModal extends Component {
    render() {
        return(
            <div className={modalStyles.modal}>
                <div className={modalStyles.modal_container}>
                    <form className={modalStyles.form_container}>
                        <h2>Add Class</h2>
                        <div className={modalStyles.input_container}>
                            <span>Class/Id/Year: </span>
                            <input type="text" name="class" className={modalStyles.input}/>
                        </div>
                        <div className={modalStyles.input_container}>
                            <span>Location: </span>
                            <input type="text" name="location" className={modalStyles.input}/>
                        </div>
                        <div className={modalStyles.input_container}>
                            <span>Medium: </span>
                            <input type="text" name="medium"className={modalStyles.input} />
                        </div>
                        <div className={modalStyles.input_container}>
                            <span>Stream</span>
                            <input type="text" name="stream" className={modalStyles.input} />
                        </div>
                    </form>
                    <div className={modalStyles.button_container}>
                        <button>Add</button>
                        <button>Reset</button>
                    </div>
                    <button 
                        className={modalStyles.modal_closeButton}
                        onClick={this.props.closeModal}
                    >
                    <IoIosCloseCircleOutline size="2em" color="black"/>
                    </button>
                </div>
                
            </div>
        )
    }
}

export default AddClassModal;