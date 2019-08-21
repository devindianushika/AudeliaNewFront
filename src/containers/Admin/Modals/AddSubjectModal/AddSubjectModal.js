import React, { Component } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import modalStyles from '../../../../assets/css/Admin/Modals/AddSubjectModal/AddSubjectModal.css';

class AddSubjectModal extends Component {
    render() {
        return(
            <div className={modalStyles.modal}>
                <div className={modalStyles.modal_container}>
                    <form className={modalStyles.form_container}>
                        <h2>Add Subject</h2>
                        <div className={modalStyles.input_container}>
                            <span>SubjectID: </span>
                            <input type="text" name="subjectId" className={modalStyles.input}/>
                        </div>
                        <div className={modalStyles.input_container}>
                            <span>Name: </span>
                            <input type="text" name="name" className={modalStyles.input}/>
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

export default AddSubjectModal;