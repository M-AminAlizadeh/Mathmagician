import PropTypes from 'prop-types';

const Result = ({ value }) => (
  <>
    <div className="result">
      <span className="result__value">{value}</span>
    </div>
  </>
);

Result.propTypes = {
  value: PropTypes.string,
};

Result.defaultProps = {
  value: '',
};

export default Result;
