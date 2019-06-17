import { connect } from 'react-redux';
import ErrorDisplay from './Component';

const mapStateToProps = ({ error }) => ({ error });

const ErrorDisplayContainer = connect(mapStateToProps)(ErrorDisplay);

export default ErrorDisplayContainer;
