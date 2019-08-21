import React, { Component } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import styles from '../../../assets/css/Admin/AdministratorPage/AdministratorPage.css';
import AddClassModal from '../Modals/AddClassModal/AddClassModal';
import AddSubjectModal from '../Modals/AddSubjectModal/AddSubjectModal';
import AssignClassModal from '../Modals/AssignClassModal/AssignClassModal';

class AdministratorPage extends Component {
    state = {
        isOpenDropDown: false,
        selectedPerson: "Student",
        isOpenAddNewDropDown: false,
        selectedAddNew: "Class",
        isOpenAddClassModal: false,
        isOpenAddSubjectModal: false,
        isOpenAssignClassModal: false
    }

    handleOpenDropDown = () => {
        this.setState({ isOpenDropDown: !this.state.isOpenDropDown});
    }

    handleSelectedPerson = (event) => {
        this.setState({
            selectedPerson: event.currentTarget.id,
            isOpenDropDown: false
        });
    }

    handleOpenAddNewDropDown = () => {
        this.setState({ isOpenAddNewDropDown: !this.state.isOpenAddNewDropDown});
    }

    handleSelectedAddNew = (event) => {
        this.setState({
            selectedAddNew: event.currentTarget.id,
            isOpenAddNewDropDown: false
        });
    }

    handleOpenAddNewModal = () => {
        switch(this.state.selectedAddNew) {
            case "Class":
                this.setState({ 
                    isOpenAddClassModal: true,
                    isOpenAddSubjectModal: false
                });
                break;
            case "Subject":
                this.setState({ 
                    isOpenAddClassModal: false,
                    isOpenAddSubjectModal: true
                });
                break;
            default :
                break;
        }
    }

    handleOpenAssignClassModal = () => {
        this.setState({ isOpenAssignClassModal: true });
    }

    handleCloseAssignClassModal = () => {
        this.setState({ isOpenAssignClassModal: false });
    }

    handleCloseAddClassModal = () => {
        this.setState({ isOpenAddClassModal: false });
    }

    handleCloseAddSubjectModal = () => {
        this.setState({ isOpenAddSubjectModal: false });
    }

    render() {
        return (
            <div className={styles.container} >
                <div className={styles.admin_controller_card}>
                    <button
                        className={styles.admin_controller_card_button}
                    >
                    Registration
                    </button>
                    <button className={styles.dropDown_button} onClick={this.handleOpenDropDown}>
                        <span>{this.state.selectedPerson}</span>
                        <div>{this.state.isOpenDropDown ? <IoMdArrowDropup size="1.5em"/> :<IoMdArrowDropdown size="1.5em"/>}</div>
                    </button>
                    <div className={this.state.isOpenDropDown ? styles.dropDown_container : styles.dropDown_container_hide}>
                        <button
                            id="Student"
                            onClick={this.handleSelectedPerson}
                        >Student
                        </button>
                        <button
                            id="Teacher"
                            onClick={this.handleSelectedPerson}
                        >Teacher
                        </button>
                        <button
                            id="Admin"
                            onClick={this.handleSelectedPerson}
                        >
                        Admin
                        </button>
                    </div>
                   
                </div>
                <div className={styles.admin_controller_card}>
                    <button
                        className={styles.admin_controller_card_button}
                        id={this.state.selectedAddNew}
                        onClick={this.handleOpenAddNewModal}
                    >
                    Add New
                    </button>
                    <button className={styles.dropDown_button} onClick={this.handleOpenAddNewDropDown}>
                        <span>{this.state.selectedAddNew}</span>
                        <div>{this.state.isOpenAddNewDropDown ? <IoMdArrowDropup size="1.5em"/> :<IoMdArrowDropdown size="1.5em"/>}</div>
                    </button>
                    <div className={this.state.isOpenAddNewDropDown ? styles.dropDown_container : styles.dropDown_container_hide}>
                    <button
                        id="Class"
                        onClick={this.handleSelectedAddNew}
                    >Class
                    </button>
                    <button
                        id="Subject"
                        onClick={this.handleSelectedAddNew}
                    >Subject
                    </button>
                </div>
                </div>
                <div className={styles.admin_controller_card}>
                    <button
                        className={styles.admin_controller_card_button}
                        onClick={this.handleOpenAssignClassModal}
                    >
                    Assign
                    </button>
                </div>
                {this.state.isOpenAddClassModal && <AddClassModal closeModal={this.handleCloseAddClassModal}/>}
                {this.state.isOpenAddSubjectModal && <AddSubjectModal closeModal={this.handleCloseAddSubjectModal}/>}
                {this.state.isOpenAssignClassModal && <AssignClassModal closeModal={this.handleCloseAssignClassModal}/>}
            </div>
        )
    }
}

export default AdministratorPage;