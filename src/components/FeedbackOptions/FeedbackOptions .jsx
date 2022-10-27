import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const state = Object.keys(options);

  return (
    <div>
      {state.map(el => (
        <button key={el} onClick={onLeaveFeedback} name={el}>
          {el}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
