import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul className="Statistics">
        {total() ? (
          <>
            <li>
              good: <span>{good}</span>
            </li>

            <li>
              Neutral: <span>{neutral}</span>
            </li>
            <li>
              Bad: <span>{bad}</span>
            </li>
            <li>
              total: <span>{total()}</span>
            </li>
          </>
        ) : (
          <li>No feedback given</li>
        )}

        {positivePercentage() >= 1 && (
          <li>
            Positive Feedback: <span>{positivePercentage() + '%'}</span>
          </li>
        )}
      </ul>
    </>
  );
};

export default Statistics;
