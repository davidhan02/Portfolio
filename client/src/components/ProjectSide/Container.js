import { connect } from 'react-redux';
import ProjectSide from './Component';

const mapStateToProps = ({ auth: { token } }) => ({ token });

const ProjectSideContainer = connect(mapStateToProps)(ProjectSide);

export default ProjectSideContainer;
