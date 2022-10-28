import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div>
      {{ title } && <h1>Please leave feedback</h1>} {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
