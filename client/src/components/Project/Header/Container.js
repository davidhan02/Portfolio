import { connect } from 'react-redux';
import ProjectHeader from './Component';
import { deleteProject } from '../../../actions/project';

const mapStateToProps = ({ auth }) => ({ token: auth.token });

const mapDispatchToProps = { deleteProject };

const ProjectHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectHeader);

export default ProjectHeaderContainer;
