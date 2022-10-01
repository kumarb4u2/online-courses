import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AllActions from '../redux/actions/actions';
import { ListOfCourcesFC } from './listofcourses.functional';

function mapStateToPros(store: any) {
  return {
    allCourses: store.courses,
    allTrainers: store.trainers,
  };
}

function mapDispatchToProps(dispatcher: any) {
  return bindActionCreators(AllActions, dispatcher);
}

export default connect(mapStateToPros, mapDispatchToProps)(ListOfCourcesFC);
