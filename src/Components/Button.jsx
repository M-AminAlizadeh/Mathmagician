import PropTypes from 'prop-types';

const Button = ({ value, className, onClick }) => <button type="button" className={className} onClick={onClick}>{value}</button>;

Button.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  value: '',
  className: '',
  onClick: '',
};

export default Button;
