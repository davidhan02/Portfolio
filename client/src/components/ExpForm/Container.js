import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ExpForm from './Component';
import { submitExp, updateExp } from '../../actions/exp';
import { getFirstProfile } from '../../actions/profile';

class ExpFormContainer extends Component {
  state = { editMode: false };

  componentDidMount = async () => {
    await this.props.getFirstProfile();
    const { profile, match } = this.props;
    if (match.params.expId) {
      const lyst = profile.experience.filter(exp => exp.id === match.params.expId);
      if (lyst.length === 1) {
        this.setState({ editMode: true });
        const exp = lyst[0];
        await this.props.initialize({
          ...exp,
          current: exp.current.toString(),
          from: exp.from.split('T')[0],
          to: exp.to ? exp.to.split('T')[0] : ''
        });
      }
    }
  };

  componentWillUnmount() {
    this.props.getFirstProfile();
  }

  onSubmit = formValues => {
    const { match, profile, submitExp, updateExp } = this.props;
    if (this.state.editMode) {
      return updateExp(formValues, profile.id, match.params.expId);
    }
    submitExp(formValues, profile.id);
  };

  render() {
    const { handleSubmit, loading, form } = this.props;
    return (
      <ExpForm
        form={form}
        loading={loading}
        handleSubmit={handleSubmit(this.onSubmit)}
      />
    );
  }
}

const mapStateToProps = ({ profile, form }) => ({
  form: form.exp,
  profile: profile.single,
  loading: profile.loading
});

const mapDispatchToProps = {
  getFirstProfile,
  submitExp,
  updateExp
};

const enhance = compose(
  reduxForm({ form: 'exp', initialValues: { current: 'false' } }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(ExpFormContainer);
