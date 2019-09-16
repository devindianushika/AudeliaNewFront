import React, { Component } from "react";
import {
  IoIosCloseCircleOutline,
  IoMdArrowDropdown,
  IoMdArrowDropup
} from "react-icons/io";
import modalStyles from "../../../../assets/css/Admin/Modals/AssignClassModal/AssignClassModal.css";

import Select from "react-select";

const optionsTeachernamelist = [
  { value: "devindi", label: "Devindi" },
  { value: "hiruni", label: "hiruni" },
  { value: "kalani", label: "kalani" }
];

const optionsstsudents = [
  { value: "devindi", label: "Devindi" },
  { value: "hiruni", label: "hiruni" },
  { value: "kalani", label: "kalani" },
  { value: "lassna sanduni", label: "lassna sanduni" },
  { value: "manorika", label: "manorika" },
  { value: "maheshika", label: "maheshika" },
  { value: "elanaaz", label: "elanaaz" },
  { value: "jamila", label: "jamila" },
  { value: "dua lipa", label: "dua lipa" }
];

const customStyles1 = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    padding: 20
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  }
};

const customStyles = {
  control: () => ({
    width: 200
  })
};

class AssignClassModal extends Component {
  state = {
    isOpenDropDown: false,
    selectedId: "ID",
    subjectID: "subjectID",
    isOpenDropDownSubjectID: false,
    isOpenSelectNumber: false,
    selectedNumber: "Number",
    isOpenDropDownClass: false,
    selectedClass: "Class",
    calss: "",
    year: "",
    classid: ""
  };

  handleOpenDropDown = () => {
    this.setState({ isOpenDropDown: !this.state.isOpenDropDown });
  };

  handleSelectedId = event => {
    this.setState({
      selectedId: event.currentTarget.id,
      isOpenDropDown: false
    });
  };

  handleOpenDropDownSubjectId = () => {
    this.setState({
      isOpenDropDownSubjectID: !this.state.isOpenDropDownSubjectID
    });
  };

  handleSubjectId = event => {
    this.setState({
      subjectID: event.currentTarget.id,
      isOpenDropDownSubjectID: false
    });
  };

  handleOpenDropDownSelectNumber = () => {
    this.setState({ isOpenSelectNumber: !this.state.isOpenSelectNumber });
  };

  handleSelectNumber = event => {
    this.setState({
      selectedNumber: event.currentTarget.id,
      isOpenSelectNumber: false
    });
  };

  handleOpenDropDownClass = () => {
    this.setState({ isOpenDropDownClass: !this.state.isOpenDropDownClass });
  };

  handleClass = event => {
    this.setState({
      selectedClass: event.currentTarget.id,
      isOpenDropDownClass: false
    });
  };

  render() {
    return (
      <div className={modalStyles.modal}>
        <div className={modalStyles.modal_container}>
          <div className={modalStyles.form_container}>
            <h2>Assign Class For Student</h2>
            <div className={modalStyles.input_container}>
              <span>class</span>
              <select onChange={e => this.setState({ calss: e.target.value })}>
                <option value="12" selected disabled>
                  select class
                </option>
                <option value="12">12</option>
                <option value="11">11</option>
              </select>
            </div>
            <div className={modalStyles.input_container}>
              <span>Year:</span>

              <select onChange={e => this.setState({ year: e.target.value })}>
                <option value="12" selected disabled>
                  Select year
                </option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
              </select>
            </div>

            <div className={modalStyles.input_container}>
              <span>class id:</span>

              <select
                onChange={e => this.setState({ classid: e.target.value })}
              >
                <option value="12" selected disabled>
                  Select class id
                </option>
                <option value="A">A</option>
                <option value="B">B</option>
              </select>
            </div>

            {this.state.calss && this.state.year && this.state.classid && (
              <p>
                class id :{" "}
                {`${this.state.year +
                  "/" +
                  this.state.calss +
                  "/" +
                  this.state.classid}`}
              </p>
            )}

            <div className={modalStyles.regiNum_container}>
              <h3>Select teacher</h3>
              <div>
                <div className="assignteacherdiv">
                  <Select
                    //   defaultValue={[colourOptions[2], colourOptions[3]]}
                    // styles={customStyles}

                    style={{ width: "80000px" }}
                    isMulti
                    name="colors"
                    options={optionsTeachernamelist}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </div>
              <div>
                <h3>Select students</h3>
                <div>
                  <div className="">
                    <Select
                      //   defaultValue={[colourOptions[2], colourOptions[3]]}
                      styles={customStyles}
                      isMulti
                      name="colors"
                      options={optionsstsudents}
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  </div>
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
            <IoIosCloseCircleOutline size="2em" color="black" />
          </button>
        </div>
      </div>
    );
  }
}

export default AssignClassModal;
