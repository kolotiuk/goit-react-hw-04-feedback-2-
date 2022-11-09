import React from 'react';
import Notification from './Notification';
import { useState } from 'react';

import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addStat = ({ target }) => {
    const { name } = target;

    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return Number(good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () => {
    return Number(Math.round((good / countTotalFeedback()) * 100));
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={{ good, neutral, bad }}
        onLeaveFeedback={addStat}
      />

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
};

export default App;
