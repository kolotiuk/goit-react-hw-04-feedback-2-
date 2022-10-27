import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addStat = ({ target }) => {
    const { name } = target;
    this.setState(prev => ({
      [name]: prev[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Number(
      Math.round((this.state.good / this.countTotalFeedback()) * 100)
    );
  };

  render() {
    const { state } = this;
    const { good, neutral, bad } = this.state;
    const { addStat, countTotalFeedback, countPositiveFeedbackPercentage } =
      this;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={state} onLeaveFeedback={addStat} />

        <h2>Statistics</h2>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}

export default App;
