import React, { Component } from "react";
import styles from "./news.css";
import axios from "axios";

class NewsContainer extends Component {
  state = {
    news: []
  };
  componentDidMount() {
    console.log("news");
    axios.get("/news").then(res => {
      console.log(res.data);
      this.setState({
        news: res.data.news
      });
    });
  }

  render() {
    return (
      <div className={styles.news_container}>
        <pre> Reserved for News</pre>
        <ul>
          {this.state.news &&
            this.state.news.map(ele => {
              return <li>{ele}</li>;
            })}
        </ul>
      </div>
    );
  }
}

export default NewsContainer;
