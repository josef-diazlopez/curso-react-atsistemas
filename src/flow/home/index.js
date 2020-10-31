import Home from '../../pages/home';
import withSearch from '../../components/HOC/withSearch'
import { INIT_HOME } from '../../actions/flow';
// import {} from '../../selectors/home';

export default {
  component: withSearch(Home),
  selectors: (state) => ({
  }),
  actions: {
  },
  init: INIT_HOME,
};