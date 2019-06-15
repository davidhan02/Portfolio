import { connect } from 'react-redux';
import App from './Component';

const mapStateToProps = ({ theme: { dark } }) => ({ dark });

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
