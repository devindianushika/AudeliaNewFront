import React, { Component } from 'react';
import Calendar from 'react-calendar';
import styles from '../../../assets/css/Admin/Calender/Calendar.css';
 
class ReactCalender extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div className={styles.calendar_container}>
        <Calendar
        />
      </div>
    );
  }
}

export default ReactCalender;

