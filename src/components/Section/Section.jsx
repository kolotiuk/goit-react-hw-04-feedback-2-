import React from 'react';

const Section = ({ title, children }) => {
  return (
    <div>
      {{ title } && <h1>Please leave feedback</h1>} {children}
    </div>
  );
};

export default Section;
