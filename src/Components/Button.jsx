import PropTypes from 'prop-types';

const Button = ({ value, className }) => <button type="button" className={className}>{value}</button>;

Button.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  value: '',
  className: '',
};

export default Button;
