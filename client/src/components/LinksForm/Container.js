import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { submitSocial, updateSocial } from '../../actions/social';
import { getFirstProfile } from '../../actions/profile';
import LinksForm from './Component';
import validate from './validate';

class LinksFormContainer extends Component {
  state = { editMode: false };

  componentDidMount = async () => {
    await this.props.getFirstProfile();
    const { profile } = this.props;
    if (profile.social) {
      this.setState({ editMode: true });
      await this.props.initialize({
        ...profile.social
      });
    }
  };

  componentWillUnmount() {
    this.props.getFirstProfile();
  }

  onSubmit = formValues => {
    const { profile, submitSocial, updateSocial } = this.props;
    if (this.state.editMode) {
      return updateSocial(formValues, profile.id);
    }
    submitSocial(formValues, profile.id);
  };

  render() {
    const { handleSubmit, loading, form } = this.props;
    return (
      <LinksForm
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
  submitSocial,
  updateSocial
};

const enhance = compose(
  reduxForm({ form: 'social', validate }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(LinksFormContainer);
