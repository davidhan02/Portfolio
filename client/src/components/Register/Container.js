import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { submitRegister, clearError } from '../../actions/auth';
import Register from './Component';
import validate from './validate';

const mapStateToProps = ({ error, auth }) => ({
  error,
  loading: auth.loading,
  isAuthenticated: auth.isAuthenticated
});

const mapDispatchToProps = { submitRegister, clearError };

const enhance = compose(
  reduxForm({ form: 'register', validate }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

const RegisterContainer = enhance(Register);

export default RegisterContainer;
