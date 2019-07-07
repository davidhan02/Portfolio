import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import CertForm from './Component';
import { submitCert, updateCert } from '../../actions/cert';
import { getFirstProfile } from '../../actions/profile';

class CertFormContainer extends Component {
  state = { editMode: false };

  componentDidMount = async () => {
    await this.props.getFirstProfile();
    const { profile, match } = this.props;
    if (match.params.certId) {
      const lyst = profile.certificates.filter(
        cert => cert.id === match.params.certId
      );
      if (lyst.length === 1) {
        this.setState({ editMode: true });
        const cert = lyst[0];
        await this.props.initialize({
          ...cert,
          issued: cert.issued.split('T')[0]
        });
      }
    }
  };

  componentWillUnmount() {
    this.props.getFirstProfile();
  }

  onSubmit = formValues => {
    const { match, profile, submitCert, updateCert } = this.props;
    if (this.state.editMode) {
      return updateCert(formValues, profile.id, match.params.certId);
    }
    submitCert(formValues, profile.id);
  };

  render() {
    const { handleSubmit, loading, form } = this.props;
    return (
      <CertForm
        form={form}
        loading={loading}
        handleSubmit={handleSubmit(this.onSubmit)}
      />
    );
  }
}

const mapStateToProps = ({ profile }) => ({
  profile: profile.single,
  loading: profile.loading
});

const mapDispatchToProps = {
  getFirstProfile,
  submitCert,
  updateCert
};

const enhance = compose(
  reduxForm({ form: 'cert' }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(CertFormContainer);
