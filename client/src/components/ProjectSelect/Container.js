import { connect } from 'react-redux';
import ProjectSelect from './Component';

const mapStateToProps = ({ auth: { token } }) => ({ token });

const ProjectSelectContainer = connect(mapStateToProps)(ProjectSelect);

export default ProjectSelectContainer;
