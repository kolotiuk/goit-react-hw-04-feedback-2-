import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    { total } && (
      <div>
        <p>Good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>Total: {total()}</p>
        <p>Positive feedback: {positivePercentage()}%</p>
      </div>
    )
  );
};

export default Statistics;
