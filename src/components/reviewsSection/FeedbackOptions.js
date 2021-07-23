import React from 'react';
const FeedbackOptions = props => {
  const { onLeaveFeedback } = props;
  return (
    <>
      <button onClick={() => onLeaveFeedback(['good'])}>Good</button>
      <button onClick={() => onLeaveFeedback(['neutral'])}>Neutral</button>
      <button onClick={() => onLeaveFeedback(['bad'])}>Bad</button>
    </>
  );
};

export default FeedbackOptions;
