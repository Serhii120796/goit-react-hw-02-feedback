import { Component } from "react";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
     good: 1,
     neutral: 0,
     bad: 0,
  }

  countTotalFeedback = (good, neutral, bad) => {
    // Не знаю чи метод повинен отримувати дані з компонентів, які його викликають, чи з state
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    // Не знаю чи метод повинен отримувати дані з компонентів, які його викликають, чи з state
    return Math.round(good / (good + neutral + bad) * 100);
  }

  changeStatistic = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
    
  };

  render()
  {
    const { good, neutral, bad } = this.state
    return (<>
      <Section title="Please leave feedback"/>
      <FeedbackOptions options={this.state} onLeaveFeedback={this.changeStatistic}/>
      <h3>Statistics</h3>
      <Notification message="There is no feedback"/>
      <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}></Statistics>
    </>)
  }
   }
