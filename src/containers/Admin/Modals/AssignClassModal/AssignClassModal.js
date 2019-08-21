import React, { Component } from 'react';
import { IoIosCloseCircleOutline ,IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import modalStyles from '../../../../assets/css/Admin/Modals/AssignClassModal/AssignClassModal.css';

class AssignClassModal extends Component {
    state = {
        isOpenDropDown:false,
        selectedId: "ID",
        subjectID: "subjectID",
        isOpenDropDownSubjectID: false,
        isOpenSelectNumber: false,
        selectedNumber: "Number",
        isOpenDropDownClass: false,
        selectedClass: "Class"

    }

    handleOpenDropDown = () => {
        this.setState({isOpenDropDown: !this.state.isOpenDropDown});
    }

    handleSelectedId = (event) => {
        this.setState({
            selectedId: event.currentTarget.id,
            isOpenDropDown: false
        });
    }

    handleOpenDropDownSubjectId = () => {
        this.setState({isOpenDropDownSubjectID: !this.state.isOpenDropDownSubjectID});
    }

    handleSubjectId = (event) => {
        this.setState({
            subjectID: event.currentTarget.id,
            isOpenDropDownSubjectID: false
        });
    }

    handleOpenDropDownSelectNumber = () => {
        this.setState({isOpenSelectNumber: !this.state.isOpenSelectNumber });
    }

    handleSelectNumber = (event) => {
        this.setState({
            selectedNumber: event.currentTarget.id,
            isOpenSelectNumber: false
        });
    }

    handleOpenDropDownClass = () => {
        this.setState({ isOpenDropDownClass: !this.state.isOpenDropDownClass});
    }

    handleClass = (event) => {
        this.setState({
            selectedClass: event.currentTarget.id,
            isOpenDropDownClass: false
        });
    }

    render() {
        return(
            <div className={modalStyles.modal}>
                <div className={modalStyles.modal_container}>
                <div className={modalStyles.form_container}>
                    <h2>Assign Class For Student</h2>
                    <div className={modalStyles.input_container}>
                        <span>Class/Id/Year:</span>
                        <button className={modalStyles.dropDown_button} onClick={this.handleOpenDropDown}>
                            <span>{this.state.selectedId}</span>
                            <div>{this.state.isOpenDropDown ? <IoMdArrowDropup size="1.5em"/> :<IoMdArrowDropdown size="1.5em"/>}</div>
                        </button>
                        <div className={this.state.isOpenDropDown ? modalStyles.dropDown_container : modalStyles.dropDown_container_hide}>
                            <button
                                id="12A2019"
                                onClick={this.handleSelectedId}
                            >12A2019
                            </button>
                            <button
                                id="12B2019"
                                onClick={this.handleSelectedId}
                            >12B2019
                            </button>
                            <button
                                id="12C2019"
                                onClick={this.handleSelectedId}
                            >
                            12C2019
                            </button>
                        </div>
                    </div>
                    <div className={modalStyles.input_container}>
                        <span>SubjectID:</span>
                        <button className={modalStyles.dropDown_button} onClick={this.handleOpenDropDownSubjectId}>
                            <span>{this.state.subjectID}</span>
                            <div>{this.state.isOpenDropDownSubjectID ? <IoMdArrowDropup size="1.5em"/> :<IoMdArrowDropdown size="1.5em"/>}</div>
                        </button>
                        <div className={this.state.isOpenDropDownSubjectID ? modalStyles.dropDown_container : modalStyles.dropDown_container_hide}>
                            <button
                                id="12001"
                                onClick={this.handleSubjectId}
                            >12001
                            </button>
                            <button
                                id="12002"
                                onClick={this.handleSubjectId}
                            >12002
                            </button>
                            <button
                                id="12003"
                                onClick={this.handleSubjectId}
                            >
                            12003
                            </button>
                        </div>
                        </div>

                        <div className={modalStyles.assign_container}>
                            <span>Assign:</span>
                            <div className={modalStyles.radio_container}>
                                <input type="radio" />
                                <span>Student</span>
                            </div>
                            <div className={modalStyles.radio_container}>
                                <input type="radio" />
                                <span>Teacher</span>
                            </div>
                        </div>

                        <div className={modalStyles.regiNum_container}>
                            <h3>Select Registration Numbers</h3>
                            <div className={modalStyles.regiNum_selection_container}>
                                <input type="radio" />
                                <span>Assign by selecting:</span>
                                <button className={modalStyles.dropDown_button} onClick={this.handleOpenDropDownSelectNumber}>
                                    <span>{this.state.selectedNumber}</span>
                                    <div>{this.state.isOpenSelectNumber ? <IoMdArrowDropup size="1.5em"/> :<IoMdArrowDropdown size="1.5em"/>}</div>
                                </button>
                                <div className={this.state.isOpenSelectNumber ? modalStyles.dropDown_container : modalStyles.dropDown_container_hide}>
                                    <button
                                        id="12345"
                                        onClick={this.handleSelectNumber}
                                    >12345
                                    </button>
                                    <button
                                        id="24561"
                                        onClick={this.handleSelectNumber}
                                    >24561
                                    </button>
                                    <button
                                        id="24531"
                                        onClick={this.handleSelectNumber}
                                    >
                                    24531
                                    </button>
                                </div>
                            </div>
                            <div className={modalStyles.regiNum_selection_container}>
                                <input type="radio" />
                                <span>Assign from previous classes:</span>
                                <button className={modalStyles.dropDown_button} onClick={this.handleOpenDropDownClass}>
                                    <span>{this.state.selectedClass}</span>
                                    <div>{this.state.isOpenDropDownClass ? <IoMdArrowDropup size="1.5em"/> :<IoMdArrowDropdown size="1.5em"/>}</div>
                                </button>
                                <div className={this.state.isOpenDropDownClass ? modalStyles.dropDown_container : modalStyles.dropDown_container_hide}>
                                    <button
                                        id="10A2018"
                                        onClick={this.handleClass}
                                    >10A2018
                                    </button>
                                    <button
                                        id="10B2018"
                                        onClick={this.handleClass}
                                    >10B2018
                                    </button>
                                    <button
                                        id="10C2018"
                                        onClick={this.handleClass}
                                    >
                                    10C2018
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={modalStyles.button_container}>
                            <button>Add</button>
                            <button>Reset</button>
                        </div>
                   
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

export default AssignClassModal;


